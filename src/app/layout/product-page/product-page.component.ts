import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { ProductdetailsComponent } from '../../components/productdetails/productdetails.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-product-page',
  imports: [NavComponent, ProductdetailsComponent, FooterComponent],
  templateUrl: './product-page.component.html',
  styles: ``
})
export default class ProductPageComponent {

}
