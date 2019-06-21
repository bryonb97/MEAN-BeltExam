import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

// Nested Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NewComponent,
    HomeComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // added this line
    FormsModule, // added this line
  ],
  providers: [HttpService], // added this line
  bootstrap: [AppComponent]
})
export class AppModule { }
