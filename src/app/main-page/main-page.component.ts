import { Component, OnInit, HostListener } from '@angular/core';

import toggleElem from './animation.js';
import buttonUp from './button-up.js';
import rt from './rotating-text.js';
import mp from './magnified-pictures.js';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.css' ]
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
      img: '../../../assets/img/houses/residential/house-res-001-min.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Жилой дом, 40 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-002-min.jpg',
      class: 'minimized'
    },
    {
      title: 'Калинковичи',
      description: 'Жилой дом, 45 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-003-min.jpg'
    },
    {
      title: 'Киров',
      description: 'Общежитие',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-004-min.jpg'
    },
    {
      title: 'Петриков',
      description: 'Жилой дом',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-005-min.jpg'
    },
    {
      title: 'Ровковичи',
      description: 'Одноквартирные жилые дома',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-006-min.jpg'
    },
    {
      title: 'Чечерск',
      description: 'Жилой дом, 40 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-007-min.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Жилой дом, 60 квартир, 10-й мкр-н',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-008-min.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Жилой дом, 40 квартир, мкр-н Озёрный',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-009-min.jpg'
    },
    {
      title: 'Ветка',
      description: 'Жилой дом, 60 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-010-min.jpg'
    },
    {
      title: 'Ветка',
      description: 'Жилой дом',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-011-min.jpg'
    },
    {
      title: 'Петриков',
      description: 'Жилой дом',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/residential/house-res-012-min.JPG'
    },

    // agricultural
    {
      title: 'Житковичи',
      description: 'Котельная',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-001-min.jpg'
    },
    {
      title: 'Добрушский р-н',
      description: 'Котельные',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-002-min.jpg'
    },
    {
      title: 'Гомель',
      description: 'Завод "Кристалл"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-003-min.jpg'
    },
    {
      title: 'МТФ',
      description: 'МТФ',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-004-min.jpg'
    },
    {
      title: 'МТФ',
      description: 'МТФ',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-005-min.png'
    },
    {
      title: 'Песочная Буда',
      description: 'Птицефабрика "Рассвет"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-006-min.png'
    },
    {
      title: 'Ровковичи',
      description: 'Свиноводческий комплекс',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-007-min.jpg'
    },
    {
      title: 'Хальч',
      description: 'ОАО "Хальч"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/agricultural/house-agr-008-min.jpg'
    },

    // social
    {
      title: 'Ветка',
      description: 'Бассейн',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-001-min.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Больница',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-002-min.jpg'
    },
    {
      title: 'Житковичи',
      description: 'Гостиница "Четверть Века"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-003-min.jpg'
    },
    {
      title: 'Добруш',
      description: '',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-004-min.jpg'
    },
    {
      title: 'Петриков',
      description: 'Дом культуры',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-005-min.jpg'
    },
    {
      title: 'Радуга',
      description: 'ГУО "Радужский детский сад"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-006-min.jpg'
    },
    {
      title: 'Чечерск',
      description: 'Прокуратура',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-007-min.jpg'
    },
    {
      title: 'Районная ЦРБ',
      description: 'Районная ЦРБ',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-008-min.jpg'
    },
    {
      title: 'Ветка',
      description: 'Детский сад',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-009-min.JPG'
    },
    {
      title: 'Чечерск',
      description: 'СОК "Бриз"',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-010-min.jpg'
    },
    {
      title: 'Петриковский р-н',
      description: 'Средняя школа',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-011-min.jpg'
    },
    {
      title: 'Ветка',
      description: 'ФОК',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-012-min.jpg'
    },
    {
      title: 'Житковичи',
      description: 'ФОК',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-013-min.jpg'
    },
    {
      title: 'Радуга',
      description: 'Средняя школа',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-014-min.jpg'
    },
    {
      title: 'Залесье',
      description: 'Средняя школа',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/social/house-soc-015-min.jpg'
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    const R = [];
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
    setTimeout(rt, 0);
    // rt();
    mp();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.defineCards();
  }
}
