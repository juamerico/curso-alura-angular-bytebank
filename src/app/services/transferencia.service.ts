import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private _listaTransferencias: any[]

  constructor() {
    this._listaTransferencias = []
  }

  get transferencias(): any[] {
    return this._listaTransferencias
  }

  public adicionar(transferencia: any) {
    this.hidratar(transferencia)
    this._listaTransferencias.push(transferencia)
  }

  private hidratar(transferencia: any) {
     transferencia.data = new Date()
  }

}
