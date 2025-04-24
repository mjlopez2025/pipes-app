import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './Card.component.html',
})
export class CardComponent {
  title = input.required();
}
