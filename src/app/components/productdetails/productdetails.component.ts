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
  public btnIsDisabled = signal(false)


  public minusItemNumber(){
    if(this.itemsNumber() === 1){
      this.btnIsDisabled.set(true)
    }else{
      this.itemsNumber.update(val => val - 1)
    }
  }

  public addItemNumber(){
    this.itemsNumber.update(val => val + 1)
    if(this.itemsNumber() !== 1){
      this.btnIsDisabled.set(false)
    }
  }
}
