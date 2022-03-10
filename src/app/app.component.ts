import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstproclass';
  alerts: Alert[] | any;

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1500/500`);

  model = {
    left: true,
    middle: false,
    right: false
  };


  // my_name:string='A2Z infotechs';
  // addition(a:number,b:number)
  // {
  //   return a+b;
  // }
  // algn:string='center';
  // url:string='https://angular.io/assets/images/logos/angular/angular.svg';
  // isDisabled:boolean=false;
  // col:number=2;
  // color="red";
  // fsize="50";
  // fsize2=50;
  // alert_name()
  // {
  //   alert("Hello");
  // }
  // username:any="";
  // print_value(input:any)
  // {
  //   console.log(input.target.value);
  // }
  // change_value(inp:any)
  // {
  //   this.username=inp.target.value;
  // }
  // color:string="white";
  // change_background(eve:any)
  // {
  //     this.color=eve.target.value;
  // }

  // name:any;
  // email:any;
  // password:any;

  // show(eml:any,pass:any)
  // {
  //   console.log(eml.value);
  //   console.log(pass.value);
  // }

  // page:string='home';

  // input decorator
  // product=[{'pro_name':'Golden Neckless','image':'assets/shopping1.webp','price':'90634/-'},
  //           {'pro_name':'Golden Earring','image':'assets/shopping2.webp','price':'9324/-'}
  //         ];

  // output decorator
//   name_from_child:any="Not Receive";
// receive_data(eve:any)
// {
//     this.name_from_child=eve;
// }


page_name:any="";
change_page(eve:any)
{
  this.page_name=eve;
}
}
