import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowmoreComponent } from './showmore/showmore.component';
import { CatPipePipe } from './cat-pipe.pipe';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FavoriteComponent,
    ContactComponent,
    HomeComponent,
    ShowmoreComponent,
    CatPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
