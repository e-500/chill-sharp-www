import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { TopBarComponent } from "../top-bar/top-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, TopBarComponent, FooterComponent, RouterLink, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
