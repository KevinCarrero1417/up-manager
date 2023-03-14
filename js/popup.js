document.addEventListener("DOMContentLoaded", function () {
  var bttn = document.getElementById("bttn");
  bttn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { accion: "bttn" });
    });
  });
});
