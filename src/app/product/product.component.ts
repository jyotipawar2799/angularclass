import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data:any;
  constructor() { 
    console.log(this.data);
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  }
