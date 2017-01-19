"use strict";

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.method === 'showAlert') {
        alert('showAlert');
    }
});