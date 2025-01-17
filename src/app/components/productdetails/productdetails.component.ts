import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-productdetails',
  imports: [RouterModule],
  templateUrl: './productdetails.component.html',
  styles: ``
})
export class ProductdetailsComponent {

  public itemsNumber = signal(1)


  public minusItemNumber(){
    this.itemsNumber.update(val => val - 1)
  }

  public addItemNumber(){
    this.itemsNumber.update(val => val + 1)
  }
}
