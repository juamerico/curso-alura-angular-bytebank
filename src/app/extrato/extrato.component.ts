import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  _transferenciasExtrato: any[] = []

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this._transferenciasExtrato = this.service.transferencias
  }

}
