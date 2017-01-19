"use strict";

var ShellBay = {

    init: function() {
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            if (request.method in background) {
                background[request.method](request, sender, sendResponse);
                // chrome.tts.speak('Hello, world.');
            }
        });
    },
    searchingSelectedText: function() {
        var text = window.getSelection().toString().trim().match(/^[a-zA-Z\s']+$/);
        console.info("selected " + text);
        if (undefined != text && null != text && 0 < text.length && ls()["click2s"] != 'no') {
            console.log("searching " + text);
            chrome.runtime.sendMessage({
                method: 'lookup',
                data: text[0]
            });
            // popover({
            //     shanbay: {
            //         loading: true,
            //         msg: "查询中....（请确保已登录扇贝网）"
            //     }
            // })
        }
    },

    showWordBox: function() {

    }
}

ShellBay.init();