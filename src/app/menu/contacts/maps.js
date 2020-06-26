/// <reference path="./ymaps.d.ts" />

import ymaps from "ymaps";

const coordinates = new Map([
  ["gost", [52.450039, 30.996345]],
  ["jsk", [52.450039, 30.996345]],
  ["pmk-4", [52.306882, 28.792295]],
  ["pmk-5", [52.394279, 31.329116]],
  ["pmk-16", [52.458154, 30.922983]],
  ["pmk-43", [52.132177, 29.302393]],
  ["pmk-76", [52.221742, 27.841614]],
]);

export default function () {
  try {
    ymaps.load().then((maps) => {
      maps.ready(() => {
        coordinates.forEach((value, key) => {
          new maps.Map(`yMap-${key}`, {
            center: value,
            zoom: 17,
          });
        });
      });
    });
  } catch (error) {
    console.error("ymaps: Something went wrong", error);
  }
}
