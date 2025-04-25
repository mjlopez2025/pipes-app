import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/Card/Card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe],
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

  //i18n Plural

  clientsMap = signal({
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  });


  clients = signal([
    'Maria',
    'Carlos',
    'Nadia',
    'Sofia',
    'Luchy',
    'Sole',
    'Benja',
    'Paula',
    'Maxi'
  ]);


  deleteClient() {
    this.clients.update((prev) => prev.slice(1))
    }
 }
