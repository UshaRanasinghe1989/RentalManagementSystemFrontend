import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AddRentalFormComponent } from './components/add-rental-form/add-rental-form.component';
import { AddCustomerFormComponent } from './components/customer/add-customer-form/add-customer-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AddRentalFormComponent, AddCustomerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-app';
}
