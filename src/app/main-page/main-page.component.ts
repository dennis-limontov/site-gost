import { Component, OnInit } from "@angular/core";

import toggleElem from "./animation.js";
import buttonUp from "./button-up.js";
import rt from "./rotating-text.js";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: [ "./main-page.component.css" ]
})
export class MainPageComponent implements OnInit {
  constructor() {}

  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-001.jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-002.jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-003.jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-004.jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-005.jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-006.jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-007.jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-008.jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-009.jpg'
    },
    {
      title: 'Card Title 10',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-010.jpg'
    },
    {
      title: 'Card Title 11',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/houses/residential/house-res-011.jpg'
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);

    toggleElem();
    buttonUp();
    rt();
  }
}