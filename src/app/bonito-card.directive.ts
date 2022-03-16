import { Directive,Input,ElementRef, Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[btn]'
})
export class BonitoCardDirective implements OnInit {

  @Input()
  bt:string='rgb(102,227,204)'

  constructor(
    private el:ElementRef,
    private renderer:Renderer2,
  ) { console.log(this.el)
  
    this.el.nativeElement.style.backgroundColor= 'rgb(142,74,231)'
    this.el.nativeElement.style.fontWeight= 'bold'
    this.el.nativeElement.style.fontSize= '25px'
    this.el.nativeElement.style.color= 'white'
    this.el.nativeElement.style.border= 'none'
    this.el.nativeElement.style.borderRadius= '3px'
    this.el.nativeElement.style.width= '40px'
    this.el.nativeElement.style.height= '30px'
  }




  
  ngOnInit(){
    console.log(this.bt)
  }
  

}
