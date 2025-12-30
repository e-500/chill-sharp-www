import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input() language?: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const codeElement = this.el.nativeElement;

    if (this.language) {
      codeElement.classList.add(this.language);
    }

    hljs.highlightElement(codeElement);
  }
}