import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-nova-transferencia", //"tag html" onde será renderizada
    templateUrl: "./nova-transferencia.component.html", //o que será renderizado
    styleUrls: ["./nova-transferencia.component.scss"] //array porque suporta múltiplos arquivos
})
export class NovaTransferenciaComponent {
  valor: number = 0
  destino: number = 0

  @Output() aoTransferir = new EventEmitter<any>()

  transferirNovaTransferencia(): void {
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir)

    this.limparCampos()
  }

  limparCampos(): void {
    this.valor = 0
    this.destino = 0
  }
}
