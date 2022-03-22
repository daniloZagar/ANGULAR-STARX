import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[enterViewport]',
})
export class EnterViewportDirective {
  @Output() visibilityChange: EventEmitter<string> = new EventEmitter<string>();

  private observer?: IntersectionObserver;
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      this.checkForIntersection(entries);
    }, {});
    this.observer.observe(<Element>this.elementRef.nativeElement);
  }

  private checkForIntersection = (
    entries: Array<IntersectionObserverEntry>
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const isIntersecting =
        (<any>entry).isIntersecting &&
        entry.target === this.elementRef.nativeElement;
      if (isIntersecting) {
        this.visibilityChange.emit(entry.isIntersecting ? 'Visible' : 'Hidden');
      }
    });
  };
}
