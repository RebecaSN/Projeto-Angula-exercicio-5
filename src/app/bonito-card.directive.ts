import { Directive,Input,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btn]'
})
export class BonitoCardDirective {

  @Input()
  bt:string='rgb(102,227,204)'

  constructor(
    private el:ElementRef,
    private renderer:Renderer2,
  ) { 
    this.renderer.setStyle(this.el.nativeElement, 'background-color,', 'rgb(142,74,231)')
    this.renderer.setStyle(this.el.nativeElement, 'font-weight,', 'bold')
    this.renderer.setStyle(this.el.nativeElement, 'font-size,', '20px')
    

  }
  

}
