import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { TopBarComponent } from "../top-bar/top-bar.component";
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, TopBarComponent, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
