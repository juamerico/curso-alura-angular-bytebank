import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {}

  transferirApp($event: any): void {
    console.log(JSON.stringify($event, null, 4))
    this.service.adicionar($event)
  }
}
