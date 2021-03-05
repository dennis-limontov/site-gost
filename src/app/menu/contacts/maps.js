/// <reference path="./ymaps.d.ts" />

import ymaps from "ymaps";

const coordinates = new Map([
  ["gost", [52.450245, 30.995150]], // вверх, вправо
  ["jsk", [52.450245, 30.995150]],
  ["pmk-4", [52.306500, 28.791000]],
  ["pmk-5", [52.394600, 31.327825]],
  ["pmk-16", [52.458650, 30.921450]],
  ["pmk-43", [52.131950, 29.301975]],
  ["pmk-76", [52.222250, 27.840700]],
]);

export default function () {
  try {
    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then((maps) => {
      maps.ready(() => {
        coordinates.forEach((value, key) => {
          const placemark = new maps.Placemark(value);
          const map = new maps.Map(`yMap-${key}`, {
            center: value,
            zoom: 17,
          });
          map.geoObjects.add(placemark);
        });
      });
    });
  } catch (error) {
    console.error("ymaps: Something went wrong", error);
  }
}
