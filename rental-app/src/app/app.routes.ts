import { Routes } from '@angular/router';
import { AddCustomerFormComponent } from './components/customer/add-customer-form/add-customer-form.component';
import { AddRentalFormComponent } from './components/add-rental-form/add-rental-form.component';

export const routes: Routes = [
    {
        path: "add-customer",
        component: AddCustomerFormComponent
    },
    {
        path: "add-rental",
        component: AddRentalFormComponent
    }
];
