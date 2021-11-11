import {Transferencia} from "./../models/transferencia.model"
import {Component, EventEmitter, Output} from "@angular/core"
import {TransferenciaService} from "../services/transferencia.service"
import {Router} from "@angular/router"

@Component({
	selector: "app-nova-transferencia", //"tag html" onde será renderizada
	templateUrl: "./nova-transferencia.component.html", //o que será renderizado
	styleUrls: ["./nova-transferencia.component.scss"], //array porque suporta múltiplos arquivos
})
export class NovaTransferenciaComponent {
	valor: number = 0
	destino: number = 0

	@Output() aoTransferir = new EventEmitter<any>()

	constructor(
		private service: TransferenciaService,
		private router: Router
	) {}

	transferirNovaTransferencia(): void {
		const valorEmitir: Transferencia = {
			valor: this.valor,
			destino: this.destino,
		}

		this.service.adicionar(valorEmitir).subscribe(
			(resultado) => {
				console.log(resultado)
				this.limparCampos()
				this.router.navigateByUrl("extrato")
			},
			(error) => {
				console.error(error)
			}
		)
	}

	limparCampos(): void {
		this.valor = 0
		this.destino = 0
	}
}
