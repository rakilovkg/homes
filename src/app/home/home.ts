import { Component } from '@angular/core';

import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  imports: [HousingLocation],
  selector: 'app-home',
  styleUrls: ['./home.css'],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location />
  </section>
`,
})
export class Home {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationInfo: HousingLocationInfo = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
