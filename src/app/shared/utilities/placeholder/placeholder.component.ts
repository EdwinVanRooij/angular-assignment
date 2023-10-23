import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent {
  @Input({ required: true }) message!: string;
  @Input({ required: true }) iconKey!: string;
}
