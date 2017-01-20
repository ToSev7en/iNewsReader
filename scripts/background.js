"use strict";

var background = {
    init: function() {
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            if (request.method in background) {
                background[request.method](request, sender, sendResponse);
            }
        });
    },

    alertIt: function(request, sender, sendResponse) {
        sendResponse("没有查到");
    },

    speakLouder: function(request, sender, sendResponse) {
        chrome.tts.speak(
            request.data, { 'lang': 'en-US', 'rate': 1.0 });
    }
}

// startup

background.init();

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url: chrome.extensioon.getURL("popup.html")
    });
})

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.method === 'showAlert') {
//         alert('showAlert');
//     }
// });

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(sender.tab ?
//             "来自内容脚本：" + sender.tab.url :
//             "来自扩展程序");
//         if (request.greeting == "您好")
//             sendResponse({ farewell: "再见" });
//     });