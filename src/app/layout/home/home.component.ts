import { Component } from '@angular/core';
import { HerosectionComponent } from '../../components/herosection/herosection.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductlistComponent } from '../../components/productlist/productlist.component';

@Component({
  selector: 'app-home',
  imports: [HerosectionComponent, ProductlistComponent,NavComponent, FooterComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export default class HomeComponent {

}
