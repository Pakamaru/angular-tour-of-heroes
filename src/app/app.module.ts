import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './features/components/heroes/heroes.component';
import { HeroEditorComponent } from './features/components/hero-editor/hero-editor.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeroCardComponent } from './features/components/hero-card/hero-card.component';

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
      { path: 'heroes', component: HeroesComponent },
      { path: '', redirectTo: 'heroes', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
