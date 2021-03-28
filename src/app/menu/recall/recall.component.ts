import { Component, OnInit } from '@angular/core';
import submit from "./submit";

@Component({
  selector: 'app-recall',
  templateUrl: './recall.component.html',
  styleUrls: ['./recall.component.css']
})
export class RecallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    submit();
  }
}
