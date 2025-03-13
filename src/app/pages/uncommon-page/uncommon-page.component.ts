import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nSelectPipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe],
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
}
