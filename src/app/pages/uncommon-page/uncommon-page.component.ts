import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Tito',
  gender: 'male',
  age: 44,
  address: 'Morelos, México'
}

const client2 = {
  name: 'Mirna',
  gender: 'female',
  age: 41,
  address: 'Paris, Francia'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select Pipe
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
    other: 'invitarle'
  };

  changeClient() {
    if (this.client() == client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18nPluralPipe
  clientsNumberMap = signal( {
    '=0': 'no tenemos clientes',
    '=1': 'tenemos un cliente',
    '=2': 'tenemos 2 clientes',
    'other': 'tenemos # clientes'
  });

  clients = signal([
    'María',
    'Pedro',
    'Mirna',
    'Andy',
    'Tito',
    'Juan',
    'Roberto',
    'Josefina'
  ]);

  removeClient() {
    this.clients.update( (previous) => previous.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Dittos',
    age: 25,
    address: 'Ottawa, Canada'
  };

  // Async Pipe
  promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Promesa finalizada ');

    }, 3500);
  });

  promiseValueError: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      reject('Tenemos error en la promesa.');
      console.log('Promesa con error ');

    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map( (value) => value + 1 ),
    tap( (value) => console.log('tap:', value))
  )
}
