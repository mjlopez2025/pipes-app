import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.component.html',
})
export default class NumberPageComponent {

  totalSells = signal(2_433_232.5567)
  percent = signal(1.4856)


}
