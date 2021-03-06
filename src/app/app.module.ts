import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AltaComponent } from './alta/alta.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './editar/editar.component';
@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    AltaComponent,
    EditarComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
