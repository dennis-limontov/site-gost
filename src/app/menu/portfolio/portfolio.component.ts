import { Component, OnInit } from "@angular/core";
import SmartPhoto from "smartphoto";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    new SmartPhoto(".js-smartphoto",{
      arrows: true,
      nav: true,
      //animationSpeed: 250,
      forceInterval: 5
    });
  }
}
