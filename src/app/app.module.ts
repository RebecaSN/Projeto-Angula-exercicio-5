import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule}from './material.module';
import { CardComponent } from './card/card.component';
import { BonitoCardDirective } from './bonito-card.directive';
import { BtnComponent } from './btn/btn.component';
import { BotaoBonitoDirective } from './botao-bonito.directive';
import { DeletarbonitoDirective } from './deletarbonito.directive'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BonitoCardDirective,
    BtnComponent,
    BotaoBonitoDirective,
    DeletarbonitoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
