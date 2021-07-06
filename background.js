chrome.commands.onCommand.addListener(() => {
    chrome.tabs.create({ url: "https://www.google.com/" });
  });