import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { loadHighlightJs } from './highlight-loader';
import { HttpClient } from '@angular/common/http';
import { HLJSApi } from 'highlight.js';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input() language?: string;
  @Input() set fileUrl(url: string)
  {
    this.loadFromUrl(url);
  }

  private hljs: HLJSApi | null = null;
  private isReady: boolean = false;

  constructor(private el: ElementRef, 
    private _http: HttpClient) {}

  ngAfterViewInit() {
    
  //   if (!this.hljs)
  //     this.hljs = await loadHighlightJs();

  //   if (this.isReady)
  //     return;

  //   const codeElement = this.el.nativeElement;
  //   if (this.language) {
  //     codeElement.classList.add(this.language);
  //   }
  //   this.hljs.highlightElement(codeElement);

  }

  async loadFromUrl(url: string)
  {
    if (!this.hljs)
      this.hljs = await loadHighlightJs();

    this._http.get(url, { responseType: 'text' }).subscribe(code => 
    {
      if (!this.hljs) return;

      //this.el.nativeElement = code;
      const codeElement = this.el.nativeElement;
      codeElement.textContent = code;
      if (this.language) {
        codeElement.classList.add(this.language);
      }
      this.hljs.highlightElement(codeElement);
    });
  }
}