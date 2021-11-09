import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  _transferenciasApp: any[] = []

  transferirApp($event: any): void {
    console.log(JSON.stringify($event, null, 4))

    const transferencia = {...$event, data: new Date()}
    this._transferenciasApp.push(transferencia)
  }
}
