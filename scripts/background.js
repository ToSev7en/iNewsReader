"use strict";

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url: chrome.extensioon.getURL("popup.html")
    });
})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.method === 'showAlert') {
        alert('showAlert');
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "来自内容脚本：" + sender.tab.url :
            "来自扩展程序");
        if (request.greeting == "您好")
            sendResponse({ farewell: "再见" });
    });