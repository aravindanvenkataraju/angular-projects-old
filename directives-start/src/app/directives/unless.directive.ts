import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(param:{givenNumber:number, condition:boolean}){
    if (param.givenNumber%2==0&& !param.condition ){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
