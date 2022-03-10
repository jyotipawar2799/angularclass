import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-outputmd',
  templateUrl: './outputmd.component.html',
  styleUrls: ['./outputmd.component.scss']
})
export class OutputmdComponent 
{
@Output() parent:EventEmitter<any>=new EventEmitter();
 send_to_parent(name:any)
 {
   this.parent.emit(name);
 }
  

}
