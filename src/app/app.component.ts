import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any

  transferir($event: any): void {
    console.log(`Logando o ${JSON.stringify($event, null, 4)} dentro do app.component`)
    this.transferencia = $event
  }
}
