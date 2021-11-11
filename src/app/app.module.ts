import {AppRoutingModule} from "./app-routing.module"
import {NovaTransferenciaComponent} from "./nova-transferencia/nova-transferencia.component"
import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"

import {AppComponent} from "./app.component"
import {FormsModule} from "@angular/forms"
import {ExtratoComponent} from "./extrato/extrato.component"
import {registerLocaleData} from "@angular/common"
import localePt from "@angular/common/locales/pt"
import {HttpClientModule} from "@angular/common/http"

registerLocaleData(localePt, "pt")

@NgModule({
	//precisa declarar os componentes aqui para renderizar no app.component.html
	declarations: [NovaTransferenciaComponent, AppComponent, ExtratoComponent],
	//precisa importar os módulos para poder utilizar dentro da aplicação
	imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
	providers: [
		{provide: LOCALE_ID, useValue: "pt"},
		{provide: DEFAULT_CURRENCY_CODE, useValue: "BRL"},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
