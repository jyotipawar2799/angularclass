import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.scss']
})
export class BindingDemoComponent implements OnInit {
  formdata:FormGroup;

  constructor(private fb:FormBuilder) {
    this.formdata=this.fb.group({
      name:[null],
      mobile:[null],
      email:[null],
      dob:[null]
    })
   }
  // font_family:string="serif";
  // fmily_change(fam:any)
  // {
  //   this.font_family=fam.target.value;
  // }
  // size:number=10;
  // fsize=this.size+"px";
  // sub()
  // {
  //    this.size--;
  //    this.fsize=this.size+'px';
  // }
  // add()
  // {
  //   this.size++;
  //   this.fsize=this.size+'px';
  // }
  
  // name:string="";
  // number:string="";
  // nn:string="none";
  // bk:string="block";
  // set_name(name1:any)
  // {
  //    this.name=name1.target.value;
  // }
  // set_number(number1:any)
  // {
  //    this.number=number1.target.value;
  // }
  // set_value()
  // {
  //   this.bk="none";
  //   this.nn="block";
  // }
  // get_value()
  // {
  //   this.nn="none";
  //   this.bk="block";
  //   this.name="";
  //   this.number="";

    
  // }

  // name:string="";
  // mobile:number=0;
  // email:string="";
  // dob:number=0;
  // data:any=[];

  

  ngOnInit(): void {
  }
  // onClickSubmit()
  // {
  //   if(this.formdata.value.name){
  //     this.data.push(this.formdata.value);
  //     console.log(this.formdata.value);
  //   }

  //   this.formdata.reset();
  // }

  data:any=[];
  name:string='';
  mobile:string='';
  email:string='';
  dob:string='';

  save_data()
  {
    var b={
      'name':this.name,
      'mobile':this.mobile,
      'email':this.email,
      'dob':this.dob
    };
    this.data.push(b);
    this.name='';
    this.mobile='';
    this.email='';
    this.dob='';
  }
  deleteRow(index:any)
  {
    this.data.splice(index, 1);
  }
  
}
