/// <reference path="runeappslib.js">
/// <reference path="imagedetect.js">
/// <reference path="https://runeapps.org/apps/alt1/alt1api.html">
"use strict";

var needle = null;
ImageData.fromBase64(function (i) {
  needle = i;
}, "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAABVElEQVQoU42Sz0vCYBjHn3+oILqUp7YRk2koZM6YplugFkuJ3aIEb/kDbRJMIQZlVER06OipjLKM6FbdErvVwb+g2ZdeiOgH9vDy8uz7+bzbnjFShUaYX19TjkrxRkW/THjLtbPOg9PHvuSrbKaukYPCIeYVE+0t47G80JaDmZve27PTx65Mr5iLt8hB4ZAxe4Kuuty10k+quHHQeu05DlvoI5MmclA4lI1elVIdU+/GPXZh9wLGZ6FHghwUDmVj91n1LsSZ3zxWzAaFQ0HOkpU8e+6vhRw0FC4QJsUEf3msQOEQvgvmHajCoerpv+8qjWd88urAd4VDSf/xnHt7YkTP1c9/2kiQg8IhbWon7j+c9+7xo+lcvfnV/vCayEHhUJA3Yx4bB6KS7RpS91svMNhC7xrWFLcFCofEMSPA5yNSDRdoODGJCdg/IAjaDF9EDhrg8+8a5LF4AbL/qAAAAABJRU5ErkJggg==");

if (window.alt1 && alt1.versionint > 1001000) {
  alt1.identifyAppUrl("appconfig.json");
}

//i'm crippled without this function
function elid(id) {
  return document.getElementById(id);
}

function Setup() {
  InventoryReader();
  var bounds = a1lib.bindfullrs();
  InterfaceTracker(bounds, needle);
  console.log("found");
}

function InventoryReader() {
  this.read = function (imgref) {
    var img = a1lib.findsubimg(imgref, needle);
    console.log(img);
  };
}
