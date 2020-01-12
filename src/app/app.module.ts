import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import { SocialMediaComponent } from './social-media/social-media.component';

const appRoutes: Routes = [
  { path: 'new-game', component: BoardComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MainMenuComponent,
    ScoreboardComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
