import { Component, OnInit } from '@angular/core';
import toggleElem from "./animation.js";
import buttonUp from "./button-up.js";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    toggleElem();
    buttonUp();
  }

}
