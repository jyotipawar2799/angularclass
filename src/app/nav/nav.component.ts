import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent
{
  @Output() pageEvent:EventEmitter<any>=new EventEmitter();
  send_page(name:any)
  {
    this.pageEvent.emit(name);
  }


  

}
