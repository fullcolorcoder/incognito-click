chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "go_incognito") {
      chrome.windows.create({url: request.url, incognito: true});
    }
  }
);
