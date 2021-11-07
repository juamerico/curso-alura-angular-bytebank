import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  //precisa declarar os componentes aqui para renderizar no app.component.html
  declarations: [
    NovaTransferenciaComponent,
    AppComponent
  ],
  //precisa importar os módulos para poder utilizar dentro da aplicação
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
