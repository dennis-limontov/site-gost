import { Component, OnInit } from '@angular/core';
import toggleElem from "./animation.js";
import buttonUp from "./button-up.js";
import "./rotating-text.js";
// import carousel from "./carousel";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', './nachos.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    toggleElem();
    buttonUp();
    // carousel();
  }

}
