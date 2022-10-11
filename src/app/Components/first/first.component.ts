import { Component } from "@angular/core";

@Component({
    selector:"app-first",
    templateUrl:"./first.component.html",
    styleUrls:["./first.component.css"]
})
export class FirstComponent{
  text = "";

  getData(e:any){
    this.text = e.target.value;
  } // end get data method

  resetInput() {
    this.text = "";

  } // end reset input value method

 }// end class
