import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMonSi]'
})
export class MonSiDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appMonSi(condition: boolean) {
    this.viewContainer.clear();
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
