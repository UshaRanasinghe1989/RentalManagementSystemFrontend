import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-customer-form.component.html',
  styleUrl: './add-customer-form.component.css'
})
export class AddCustomerFormComponent {
  constructor(private http:HttpClient){}

  customer:any = {
    customerName: undefined,
    city: undefined,
    contactNo: undefined
  }

  public addCustomer(customer:any){
    this.http.post("http://localhost:8080/customer", customer).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
