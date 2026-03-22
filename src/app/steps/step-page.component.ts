import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContainerComponent } from '../container/container.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HighlightDirective } from '../highlight.directive';
import { StepContent } from './step-content';

@Component({
  selector: 'app-step-page',
  imports: [ContainerComponent, TopBarComponent, FooterComponent, HighlightDirective, RouterLink],
  templateUrl: './step-page.component.html',
  styleUrl: './step-page.component.scss'
})
export class StepPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly step = this.route.snapshot.data['step'] as StepContent;
  protected readonly safeVideoUrl: SafeResourceUrl | null = this.step.videoUrl ?
    this.sanitizer.bypassSecurityTrustResourceUrl(this.step.videoUrl) : null;
}
