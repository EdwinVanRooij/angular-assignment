import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Client} from "../../models/client";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  @Input('client')
  client!: Client

  @Output('selectedClient')
  selectedClient = new EventEmitter<Client>()

}
