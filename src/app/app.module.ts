import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GradosComponent } from './practicas/grados/grados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionAxbComponent } from './practicas/multiplicacion-axb/multiplicacion-axb.component';
import { MaterialModule } from './material/material/material.module';
import { CinepolisComponent } from './practicas/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    GradosComponent,
    MultiplicacionAxbComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
