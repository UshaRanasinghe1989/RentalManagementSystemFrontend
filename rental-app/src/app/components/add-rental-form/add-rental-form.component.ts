import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-rental-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgFor],
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

  //LOAD ITEM DETAIL BY NAME
  public loadItemDetail(itemName:any){
    this.http.get("http://localhost:8080/item/itemName").subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
