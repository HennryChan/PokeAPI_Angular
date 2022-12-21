import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { contadorReducer } from './contador/contador.reducer';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { HijoComponent } from './contador/hijo/hijo.component';
//import { NietoComponent } from './contador/nieto/nieto.component';
import { CardComponent } from './pokemon/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //AppComponent,
    CardComponent
    //HijoComponent,
   //NietoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    //AppRoutingModule
    //StoreModule.forRoot({count: contadorReducer}),
   // StoreDevtoolsModule.instrument({
     // maxAge: 25,
     // logOnly: environment.production,
   // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }




