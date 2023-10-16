import { Component, Input } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() client!: Client;
}
