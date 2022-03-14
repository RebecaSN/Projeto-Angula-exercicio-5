import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent{

 @Output()
 btnClickEvent: EventEmitter<string> = new EventEmitter<any>()

 emitirEvento(evento:any):void{
 this.btnClickEvent.emit('$event')
 }


}
