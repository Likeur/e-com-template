import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartlistComponent } from '../cartlist/cartlist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, CartlistComponent, CommonModule],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {

  public isCartOpen = false

  public togglecart(){
    this.isCartOpen = !this.isCartOpen
  }
}
