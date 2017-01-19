// chrome.runtime.sendMessage({
//     method: "showAlert"
//         // text: "dcfds"
// }, function(response) {
//     // console.log("popup got response");
//     // chrome.tts.speak('Hello, world.', { 'rate': 2.0 });
// });

// chrome.runtime.sendMessage({
//     method: "speakLouder",
//     data: "like"
// }, function(response) {
//     // console.log("popup got response");
//     // chrome.tts.speak('Hello, world.', { 'rate': 2.0 });
// });

// chrome.tts.speak('Hello, world.', { 'rate': 2.0 });

// function httpRequest(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) {
//             callback(xhr.responseText);
//         }
//     }
//     xhr.send();
// }

// httpRequest('https://api.shanbay.com/bdc/search/?word=school', function(data) {
//     document.getElementById('app').innerText = data;
// });