chrome.commands.onCommand.addListener(() => {
  chrome.scripting.executeScript({
    code: "window.getSelection().toString();"
  }, function(selection) {
    chrome.tabs.create({
      url: "https://www.google.com/search?q=" + selection[0]
    });
  });
});