import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  num:any='987654348';
  values:any[]=[];
  
  constructor() { 
    this.values=this.num.split("");
    console.log(this.values);
  }
  // style_obj:any={
  //   'font-size':'20px',
  //   'background-color':'blue',
  //   }
  // change()
  // {
  //   this.style_obj={'font-size':'20px','background-color':'pink','color':'red',};
  // }

  // class 
  // class_obj:any={box:true,radius:false,border:true};
  // makeItCircle()
  // {
  //   this.class_obj['radius']=true;
  // }
  // username:string="google@gmail.com";
  // password:any=undefined;
  // val1="";
  // val2="abcd";
  // val3=0;
  // val4=-1;
  // val5=null;
  // arr:any=[10,20,30,40];

  // data:any=['a','2','s','t','9'];

  // arr1:any=[
  //   {'id':'20','name':'komal','mob':'9287725424'},
  //   {'id':'21','name':'swati','mob':'2978265'},
  //   {'id':'22','name':'priya','mob':'9876543424'},
  //   {'id':'23','name':'aarti','mob':'8765432'}
  // ]


  
  

  ngOnInit(): void {
  }

}
