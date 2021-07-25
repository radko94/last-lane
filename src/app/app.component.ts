import { Component } from '@angular/core';

import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public constructor() {
    const sub = webSocket<string>({
      url: 'ws://127.0.0.1:3000',
    });

    sub.subscribe(
      (message) => console.log(message),
      (error) => console.log(error),
      () => console.log('complete')
    );

    setTimeout(
      () =>
        sub.next(
          JSON.stringify({
            eventName: 'kofa_action',
            data: {
              id: 'd53f1992-b63d-439c-b6dc-bc03e6139ee5',
              name: 'Mama Mia',
            },
          })
        ),
      0
    );

    setTimeout(
      () =>
        sub.next(
          JSON.stringify({
            eventName: 'kapitan_fon_kofen_action',
            data: {
              id: 'd53f1992-b63d-439c-b6dc-bc03e6139ee5',
              name: 'Mama Mia',
            },
          })
        ),
      1000
    );

    setTimeout(
      () =>
        sub.next(
          JSON.stringify({
            eventName: 'kapitan_fon_kofen_action',
            data: {
              id: 'd53f1992-b63d-439c-b6dc-bc03e6139ee5',
              name: 'Mama Mia',
            },
          })
        ),
      2000
    );

    setTimeout(
      () =>
        sub.next(
          JSON.stringify({
            _id: 'd1eb0166-265b-4cc2-9d61-a96360821e95',
            index: '21ec1777-2141-4dc3-8de6-ad2a181d6194',
            guid: 'a129a92e-4f1f-4a45-a45f-ef57adfb6255',
            isActive: true,
            balance: '$3451256.223311224',
            picture: 'http://placehold.it/32x32',
            age: '26',
            eyeColor: 'brown',
            name: 'Radko Apostolov',
            gender: 'male',
            company: 'Self Employed',
            email: 'radkoapostolov94@gmail.com',
            phone: '+1 895 111 222',
            address: '351 Jorge Washington, Washington DC, USA',
            about:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            registered: '2021-07-10T19:14:18.165Z',
            latitude: '38.8951',
            longitude: '-77.0364',
            tags: ['Lorem', 'Ipsum'],
            friends: [
              {
                id: 'd53f1992-b63d-439c-b6dc-bc03e6139ee5',
                name: 'Mama Mia',
              },
              {
                id: 'b0c66ba2-38b4-4cfa-b280-f05327bef911',
                name: 'No Name',
              },
              {
                id: '24c6e841-a3ad-447e-bc7c-3ef24af78198',
                name: 'Jurassic Man',
              },
            ],
            greeting: function (tags) {
              return (
                'Hello, ' +
                this.name +
                '! You have ' +
                tags.integer(1, 10) +
                ' unread messages.'
              );
            },
            favoriteFruit: function (tags) {
              var fruits = ['apple', 'banana', 'strawberry'];
              return fruits[tags.integer(0, fruits.length - 1)];
            },
          })
        ),
      3000
    );
  }
}
