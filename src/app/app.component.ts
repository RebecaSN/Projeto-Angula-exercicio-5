import { Component, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula_3.0';
  ValorDei:number = 0
  list: Array<string>=[]
  

  @ViewChild('InputText')
 input!:ElementRef

 
 Somar_um(event:any):number{
  this.ValorDei ++ 
  
 return this.ValorDei
 }


 ngafterViewInit(){
   this.input.nativeElement
  }
  
  add(valor:string):void{
   this.list.push(valor)
   this.input.nativeElement.value=''

 }
 alertar($event:any){
   alert('Seu item for removido com sucesso ;)')
 }

 Remove(valor:any):void{
  this.list.length=0
  this.ValorDei=0
  
 }

}
