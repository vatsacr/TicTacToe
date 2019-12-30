import { Component, OnInit } from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  DIMENSIONS:Array<number> = [];
  mainTable = ['a','b','c','d','e','f','g','h','i'];
  players:Array<Player> = [];
  player1:Player = {'BoxesOwned':[],'Turn':false,Type:'O','Winner':false, Name:'player1'};
  player2:Player = {'BoxesOwned':[],'Turn':false,Type:'X','Winner':false, Name:'player2'};
  winningSequence = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
  constructor() { }
  ngOnInit() {
    this.players.push(this.player1);
    this.players.push(this.player2);
    this.DIMENSIONS = [0,1,2,3,4,5,6,7,8];
    //this.player1.Turn = true;
    this.players.find(player => player.Type === 'O').Turn = true;
  }

  setBorderTop(dimension:number){
    return dimension === 0 || dimension === 1 || dimension === 2?'none':''
  }

  markLocation(dimension:number){
    if(!this.checkIfClicked(dimension)){
      let foundPlayer = this.players.find(player=>player.Turn === true);
      this.mainTable[dimension] = foundPlayer.Type;
      foundPlayer.BoxesOwned.push(dimension);
      foundPlayer.Type === 'O'?this.players.find(player=>player.Type==='X').Turn = true:this.players.find(player=>player.Type==='O').Turn = true;
      foundPlayer.Turn = false;
      this.findTurn(foundPlayer,dimension);
      this.isWinner(foundPlayer);
    }
  }

  findTurn(player:Player,dimension:number){
    return player.BoxesOwned.some(item => item === dimension);
  }
  checkIfClicked(dimension:number){
    let mainArray = [];
    this.players[0].BoxesOwned.forEach(element => {
      mainArray.push(element);      
    }); 
    this.players[1].BoxesOwned.forEach(element => {
      mainArray.push(element);      
    }); 
    let hasBeenClicked = mainArray.some(item => item === dimension);
    return hasBeenClicked;
  }

  getOwnership(dimension:number,type:string) {
    if(type === 'X'){
      let found = this.player1.BoxesOwned.find(item => item === dimension);
      if(found || found === 0){
        return true;
      }
      return false;
    } else {
      let found = this.player2.BoxesOwned.find(item => item === dimension);
      if(found || found === 0){
        return true;
      }
      return false;
    }
  }

  // Check with the winning sequence and announce the winner
  isWinner(player:Player){
    // Get the value of all the horizontals
    if(this.mainTable[0] === this.mainTable[1] && this.mainTable[1] == this.mainTable[2] || this.mainTable[3] === this.mainTable[4] && this.mainTable[4] === this.mainTable[5] || this.mainTable[6] === this.mainTable[7] && this.mainTable[7] === this.mainTable[8]){
      console.log(player.Name + 'is the winner');
      this.resetGame();
    }

    // Get the value of all the verticals
    if(this.mainTable[0] === this.mainTable[3] && this.mainTable[3] == this.mainTable[6] || this.mainTable[1] === this.mainTable[4] && this.mainTable[4] === this.mainTable[7] || this.mainTable[2] === this.mainTable[5] && this.mainTable[5] === this.mainTable[8]){
      console.log(player.Name + 'is the winner');
      this.resetGame();
    }

    // Get the value of all the diagonals
    if(this.mainTable[0] === this.mainTable[4] && this.mainTable[4] == this.mainTable[8] || this.mainTable[2] === this.mainTable[4] && this.mainTable[4] === this.mainTable[6]){
      console.log(player.Name + 'is the winner');
      this.resetGame();
    }
  }

  resetGame(){
    this.players[0].BoxesOwned = [];
    this.players[1].BoxesOwned = [];
    this.player1.BoxesOwned = [];
    this.player2.BoxesOwned = [];
  }


}
