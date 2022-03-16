import { Directive,Input,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[delet]'
})
export class DeletarbonitoDirective {

  @Input()
  bt:string='rgb(102,227,204)'

  constructor(
    private el:ElementRef,
    private renderer:Renderer2,
  ) { console.log(this.el)
  
    this.el.nativeElement.style.backgroundColor= 'rgb(230,79,60)'
    this.el.nativeElement.style.fontSize= '13px'
    this.el.nativeElement.style.color= 'white'
    this.el.nativeElement.style.border= 'none'
    this.el.nativeElement.style.borderRadius= '0px 3px 3px 0px'
    this.el.nativeElement.style.width= '45px'
    this.el.nativeElement.style.height= '30px'
  }

}
