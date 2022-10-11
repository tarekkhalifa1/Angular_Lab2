import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  images = ['html.png', 'css.png', 'javascript.png', 'php.png', 'python.png', 'cpp.png', 'csharp.png'];
  slider_img = "assets/Images/html.png";
  i = 0;
  idInterval: any;


  next() {
    if (this.idInterval) this.stop();
    if (this.i >= this.images.length - 1) return this.stop();
    this.i++;
    return this.chgImg();

  } // end next slider function

  prev() {
    if (this.idInterval) this.stop();
    if (this.i <= 0) return this.stop();
    this.i--;
    return this.chgImg();

  } // end previous slider function


  chgImg() {
    return this.slider_img = "assets/Images/" + this.images[this.i];

  } // end set image function to change src img


  playSlide() {
    return this.idInterval = setInterval(() => {
      this.play();
    }, 1000);

  } // end play slider function

  play() {
    if (this.i >= this.images.length - 1) this.i = -1;
    this.i++;
    return this.chgImg();

  } // end play function

  stop() {
    return clearInterval(this.idInterval);

  } // end stop slider function

} // end class
