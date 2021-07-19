let userLink = chrome.storage.sync.get('link', () => {
    console.log(userLink);
});


/*chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({
      code: "window.getSelection().toString(); "
  }, function(selection) {
      chrome.tabs.create({
          url: "http://music.yandex.ru/search?text=" + selection[0]
      });
  });
});*/