import { Component, OnInit } from "@angular/core";
import sp from "./smartphoto-1";
import "smartphoto";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css", "../../../../node_modules/smartphoto/css/smartphoto.css"],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    sp();
  }
}
