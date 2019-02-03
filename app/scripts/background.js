chrome.contextMenus.create({
  id: 'show-extension-code',
  title: 'WebExtension X-Ray',
  contexts: ['all']
})

chrome.contextMenus.onClicked.addListener(function (info) {

  const url = info.pageUrl
  if (url.indexOf('https://addons.mozilla.org/') > -1) {
    chrome.tabs.create({
      url: `https://robwu.nl/crxviewer/?crx=${url}`
    });
  }
})
