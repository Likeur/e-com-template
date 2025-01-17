import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartlistComponent } from '../cartlist/cartlist.component';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, CartlistComponent],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {

}
