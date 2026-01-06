import { Component } from '@angular/core';
import { ContainerComponent } from "../../container/container.component";
import { TopBarComponent } from "../../top-bar/top-bar.component";
import { FooterComponent } from "../../footer/footer.component";
import { HighlightDirective } from '../../highlight.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogging-api',
  imports: [ContainerComponent, TopBarComponent, FooterComponent, HighlightDirective, RouterLink],
  templateUrl: './blogging-api.component.html',
  styleUrl: './blogging-api.component.scss'
})
export class BloggingApiComponent {

}
