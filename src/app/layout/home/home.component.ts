import { Component } from '@angular/core';
import { HerosectionComponent } from '../../components/herosection/herosection.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HerosectionComponent,NavComponent, FooterComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export default class HomeComponent {

}
