import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  small:string="small Abcd Xyz";
  capital:string="capital Abcd Xyz";
  today=Date.now();
  amt=125000;
  obj:any={'name':'A2Z INFOTECH','mob':'9876543210'}

  constructor() { }

  ngOnInit(): void {
  }

}
