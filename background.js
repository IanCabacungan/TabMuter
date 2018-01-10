// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

chrome.commands.onCommand.addListener(function (command) {
    if (command === "switch") {

  chrome.windows.getLastFocused(
 // Without this, window.tabs is not populated.
 {populate: true},
 function (window)
 {
  var foundSelected = false;
  var loop = false;
  var active = -1;
  for (var i = 0; i < window.tabs.length; i++)
  {
   // Finding the selected tab.
   if (window.tabs[i].active)
   {
    foundSelected = true;
    active = i;
   }
   // Finding the next tab.
   else if (foundSelected)
   {
     if (window.tabs[i].audible)
     {
       chrome.tabs.update(window.tabs[i].id, {active: true});
       return;
     }
   }
   if (i == window.tabs.length - 1) {
     i = -1;
     loop = true;
   }
   if (loop && active == i) {
     return;
   }
  }
 });


}
else if (command == "mute") {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var currTab = tabs[0];
  if (currTab) { // Sanity check
    /* do stuff */
  }
});
}
});
