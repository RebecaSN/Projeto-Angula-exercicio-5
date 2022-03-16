import { Directive, Input, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[btnb]'
})
export class BotaoBonitoDirective {

  @Input()
  bt:string='rgb(102,227,204)'

  constructor(
    private el:ElementRef,
    private renderer:Renderer2,
  ) { console.log(this.el)
  
    this.el.nativeElement.style.backgroundColor= 'rgb(142,72,235)'
    this.el.nativeElement.style.fontSize= '13px'
    this.el.nativeElement.style.color= 'white'
    this.el.nativeElement.style.border= 'none'
    this.el.nativeElement.style.borderRadius= '3px'
    this.el.nativeElement.style.width= '75px'
    this.el.nativeElement.style.height= '30px'
  }

}
