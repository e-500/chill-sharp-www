import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { TopBarComponent } from "../top-bar/top-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, TopBarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
