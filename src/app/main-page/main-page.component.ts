import { Component, OnInit, HostListener } from "@angular/core";

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

  width;

  cards = [
    // residential
    {
      title: 'Ветка',
      description: 'Жилой дом, 30 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-001.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Жилой дом, 40 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-002.jpg'
    },
    {
      title: 'Калинковичи',
      description: 'Жилой дом, 45 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-003.jpg'
    },
    {
      title: 'Киров',
      description: 'Общежитие',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-004.jpg'
    },
    {
      title: 'Петриков',
      description: 'Жилой дом',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-005.jpg'
    },
    {
      title: 'Ровковичи',
      description: 'Одноквартирные жилые дома',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-006.jpg'
    },
    {
      title: 'Чечерск',
      description: 'Жилой дом, 40 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-007.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Жилой дом, 60 квартир, 10-й мкр-н',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-008.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Жилой дом, 40 квартир, мкр-н Озёрный',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-009.jpg'
    },
    {
      title: 'Ветка',
      description: 'Жилой дом, 60 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-010.jpg'
    },
    {
      title: 'Ветка',
      description: 'Жилой дом',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-011.jpg'
    },
    {
      title: 'Петриков',
      description: 'Жилой дом',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-012.JPG'
    },

    // agricultural
    {
      title: 'Житковичи',
      description: 'Котельная',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-001.jpg'
    },
    {
      title: 'Добрушский р-н',
      description: 'Котельные',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-002.jpg'
    },
    {
      title: 'Гомель',
      description: 'Завод "Кристалл"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-003.jpg'
    },
    {
      title: 'МТФ',
      description: 'МТФ',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-004.jpg'
    },
    {
      title: 'МТФ',
      description: 'МТФ',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-005.png'
    },
    {
      title: 'Песочная Буда',
      description: 'Птицефабрика "Рассвет"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-006.png'
    },
    {
      title: 'Ровковичи',
      description: 'Свиноводческий комплекс',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-007.jpg'
    },
    {
      title: 'Хальч',
      description: 'ОАО "Хальч"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-008.jpg'
    },
    
    // social
    {
      title: 'Ветка',
      description: 'Бассейн',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-001.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Больница',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-002.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Гостиница "Четверть Века"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-003.jpg'
    },
    {
      title: 'Добруш',
      description: '',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-004.jpg'
    },
    {
      title: 'Петриков',
      description: 'Дом культуры',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-005.jpg'
    },
    {
      title: 'Радуга',
      description: 'ГУО "Радужский детский сад"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-006.jpg'
    },
    {
      title: 'Чечерск',
      description: 'Прокуратура',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-007.jpg'
    },
    {
      title: 'Районная ЦРБ',
      description: 'Районная ЦРБ',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-008.jpg'
    },
    {
      title: 'Ветка',
      description: 'Детский сад',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-009.JPG'
    },
    {
      title: 'Чечерск',
      description: 'СОК "Бриз"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-010.jpg'
    },
    {
      title: 'Петриковский р-н',
      description: 'Средняя школа',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-011.jpg'
    },
    {
      title: 'Ветка',
      description: 'ФОК',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-012.jpg'
    },
    {
      title: 'Житковичи',
      description: 'ФОК',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-013.jpg'
    },
    {
      title: 'Радуга',
      description: 'Средняя школа',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-014.jpg'
    },
    {
      title: 'Залесье',
      description: 'Средняя школа',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-015.jpg'
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

  defineCards() {
    this.width = window.innerWidth;
    this.slides = this.chunk(this.cards, 3);
    if (this.width <= 768) {
      this.slides = this.chunk(this.cards, 2);
    }
  }

  ngOnInit() {
    this.defineCards();

    toggleElem();
    buttonUp();
    rt();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.defineCards();
  }
}