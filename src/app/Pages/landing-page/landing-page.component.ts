import { Component } from '@angular/core';
import { AboutComponent } from '../../Components/LandingPage Components/about/about.component';
import { HeroComponent } from '../../Components/LandingPage Components/hero/hero.component';
import { LandDeliverComponent } from '../../Components/LandingPage Components/land-deliver/land-deliver.component';
import { CustomersSayComponent } from '../../Components/LandingPage Components/customers-say/customers-say.component';
import { LandDishCardComponent } from '../../Components/LandingPage Components/land-dish-card/land-dish-card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent,
    AboutComponent,
    LandDeliverComponent,
    CustomersSayComponent,
    LandDishCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}