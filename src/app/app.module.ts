import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeroCardComponent } from './hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroEditorComponent,
    TopBarComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'hero-editor/:heroId', component: HeroEditorComponent },
      { path: 'hero-card/:heroId', component: HeroCardComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: '', redirectTo: 'heroes', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
