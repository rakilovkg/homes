import { Component, inject } from '@angular/core';

import { HousingLocation } from '../housing-location/housing-location';
import { Housing } from '../housing';
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
    @for (housingLocation of this.housingLocationList; track $index) {
      <app-housing-location [housingLocation]="housingLocation" />
    }
  </section>
  `,
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housing: Housing = inject(Housing);

  constructor() {
    this.housingLocationList = this.housing.getAllHousingLocation();
  }
}
