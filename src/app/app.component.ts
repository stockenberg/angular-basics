import {Component, Input, ViewChild} from '@angular/core';
import {UserData} from "./user-data";
import {BlaComponent} from "./bla/bla.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(BlaComponent)
  private blaComp: BlaComponent;

  myCounter: any = 0;

  userdata: UserData = new UserData();

  counter: Number = 1;



  submitUserdata() {
    console.log(this.userdata);
  }

  upToOne(){
    this.myCounter++;
  }

  getFirstname(firstname){
    console.dir(firstname);
  }

}
