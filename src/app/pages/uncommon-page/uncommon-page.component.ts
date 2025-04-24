import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/Card/Card.component";
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Maximiliano',
  gender: 'male',
  age: 39,
  address: 'Avellaneda, Buenos Aires'
}

const client2 = {
  name: 'Nadia',
  gender: 'female',
  age: 37,
  address: 'Solano, Buenos Aires'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2)
      return;
    }

    this.client.set(client1);
  }
 }
