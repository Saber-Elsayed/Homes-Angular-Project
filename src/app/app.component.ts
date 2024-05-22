import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
            style="width: 50px; height: auto;"
          />
          <span class="brand-text" style="color:blue;">Homes</span>
        </header>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </a>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Homes';
}
