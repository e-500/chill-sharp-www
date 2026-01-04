import { Component } from '@angular/core';
import { ContainerComponent } from "../../container/container.component";
import { TopBarComponent } from "../../top-bar/top-bar.component";
import { FooterComponent } from "../../footer/footer.component";
import { HighlightDirective } from '../../highlight.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basic',
  imports: [ContainerComponent, TopBarComponent, FooterComponent, HighlightDirective, RouterLink],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  
}
