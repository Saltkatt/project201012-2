import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title style={{'text-align': 'center' }}>ALE Kommun</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div>
                <main-choice-component></main-choice-component>
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div>
                <p>Goodbye</p>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        {/*<ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>*/}
      </ion-content>,
    ];
  }
}
