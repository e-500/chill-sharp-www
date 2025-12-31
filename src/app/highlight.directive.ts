import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { loadHighlightJs } from './highlight-loader';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input() language?: string;

  constructor(private el: ElementRef) {}

  async ngAfterViewInit(): Promise<void> {
    
    const hljs = await loadHighlightJs();
    const codeElement = this.el.nativeElement;

    if (this.language) {
      codeElement.classList.add(this.language);
    }

    hljs.highlightElement(codeElement);
  }
}