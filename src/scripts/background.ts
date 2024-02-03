import Browser from "webextension-polyfill";

Browser.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    console.log("Extension is Installed!");
  }
});
