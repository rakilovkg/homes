import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrls: ['./home.css'],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  `,
})
export class Home {
}
