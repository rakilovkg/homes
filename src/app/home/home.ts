import { Component, ChangeDetectorRef, inject } from '@angular/core';

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
      <input type="text" placeholder="Filter by city" #filter />
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    @for (housingLocation of this.filteredLocationList; track $index) {
      <app-housing-location [housingLocation]="housingLocation" />
    }
  </section>
  `,
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  housing: Housing = inject(Housing);
  changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    this.housing
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.changeDetectorRef.markForCheck();
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    
    this.filteredLocationList = this.housingLocationList.filter(housingLocation =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
