import Browser from "webextension-polyfill";
import { observe } from "selector-observer";
import { _data } from "../constant/_data";

observe("form#about-me", {
  constructor: HTMLFormElement,
  initialize: () => ({
    add: (formElement) => formObserver(formElement),
  }),
});

const formObserver = (formElement: HTMLFormElement) => {
  const allInputs = formElement.querySelectorAll("input");
  const allSelects = formElement.querySelectorAll("select");

  allInputs.forEach((element) => {
    const inputAttribute: any = element.getAttribute("name");
    if (!inputAttribute) return;

    const data: any = _data.find(
      (item: any) => item[inputAttribute] !== undefined
    );
    if (data) {
      element.value = data[inputAttribute];
    }
  });
  allSelects.forEach((element) => {
    const selectAttribute: any = element.getAttribute("name");
    if (!selectAttribute) return;
    const data: any = _data.find(
      (item: any) => item[selectAttribute] !== undefined
    );
    if (data) {
      element.value = data[selectAttribute];
    }
  });
};
