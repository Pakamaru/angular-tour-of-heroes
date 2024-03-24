import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroEditorComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'hero-editor/:heroId', component: HeroEditorComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: '', redirectTo: 'heroes', pathMatch: 'full' } // Redirect root URL to 'heroes'
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
