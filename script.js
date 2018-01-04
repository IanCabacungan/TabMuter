
chrome.browserAction.onClicked.addListener(function(tab) {
//$(document).mousedown(function(){
Console.log("hi");


chrome.windows.getLastFocused(
 // Without this, window.tabs is not populated.
 {populate: true},
 function (window)
 {
  var foundSelected = false;
  for (var i = 0; i < window.tabs.length; i++)
  {
   // Finding the selected tab.
   if (window.tabs[i].active)
   {
    foundSelected = true;
   }
   // Finding the next tab.
   else if (foundSelected)
   {
    // Selecting the next tab.
    chrome.tabs.update(window.tabs[i].id, {active: true});
    return;
   }
  }
 });



});
