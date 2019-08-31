import { Directive, HostListener, HostBinding, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input('appDropdown') element:Element;
  //@HostBinding('class.show') 
  isOpen:boolean = false;
  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  // @HostListener('click') toggleMenu(){
  //   this.isOpen = !this.isOpen;
  //   if(this.isOpen){
  //     this.renderer.addClass(this.element, 'show');
  //   }else{
  //     this.renderer.removeClass(this.element, 'show')
  //   }
  // }

  @HostListener('document:click', ['$event']) toggleMenu(event: Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target)?!this.isOpen:false;
    if(this.isOpen){
      this.renderer.addClass(this.element, 'show');
    }else{
      this.renderer.removeClass(this.element, 'show')
    }
  }

}
