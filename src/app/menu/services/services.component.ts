import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import "./goto.js";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('services_or') serv;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.focus();
  }

  focus() {
    // this.serv.nativeElement.scrollIntoView();
  }

}
