import { Component } from '@angular/core';
import { ContainerComponent } from "../../container/container.component";
import { TopBarComponent } from "../../top-bar/top-bar.component";
import { FooterComponent } from "../../footer/footer.component";
import { HighlightDirective } from '../../highlight.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-install-nuget-package',
  imports: [ContainerComponent, TopBarComponent, FooterComponent, HighlightDirective, RouterLink],
  templateUrl: './install-nuget-package.component.html',
  styleUrl: './install-nuget-package.component.scss'
})
export class InstallNugetPackageComponent {

}
