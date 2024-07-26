import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-rental-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgFor,CommonModule],
  templateUrl: './add-rental-form.component.html',
  styleUrl: './add-rental-form.component.css'
})
export class AddRentalFormComponent implements OnInit {
  public customerList:any;
  public itemList:any;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.loadCustomerList();
    this.loadItemList();
  }

  public loadCustomerList(){
    this.http.get("http://localhost:8080/customer").subscribe(
      res => {
        this.customerList = res;
      }
    );
  }

  public loadItemList(){
    this.http.get("http://localhost:8080/item").subscribe(
      res => {
        this.itemList = res;
      }
    );
  }

  public item:any = {
    itemName: undefined,
    rentalDate: undefined,
    returnedDate: undefined,
    totalRentalCost: undefined,
    fineAmount: undefined
  }

  //LOAD ITEM DETAIL BY NAME
  public loadItemDetail(itemName:any){
    this.http.get("http://localhost:8080/item/"+itemName).subscribe(
      res => {
        this.item = res;
      }
    );
  }

  //ADD NEW RENTAL
  public saveRental(item:any){
    this.http.post("http://localhost:8080/item/", {body: item}).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
