'use strict';

$(document).ready(function() {

    $("html").removeAttr("id class data-page-path");


    if (document.URL == "https://www.theguardian.com/politics/2015/may/28/david-cameron-sets-off-on-mission-to-win-over-european-leaders") {

        if (document.readyState == 'complete') {
            chrome.runtime.sendMessage({
                method: "speakLouder",
                data: "Chrome Extension Enable"
            }, function(response) {

            });
        }

    }

    document.addEventListener("mouseup", function() {
        if (window.getSelection().toString() != null && window.getSelection().toString().trim() != "") {
            // alert(window.getSelection().toString());
            chrome.runtime.sendMessage({
                method: "speakLouder",
                data: window.getSelection().toString().trim()
            }, function(response) {

            });

            Util.httpRequest('https://api.shanbay.com/bdc/search/?word=' + window.getSelection().toString().trim(), function(res) {
                var json;
                if (typeof res === 'object') {
                    json = res;
                } else {
                    json = eval("(" + res + ")");
                }

                var HTML = '<div class="word-box">' +
                    '<audio controls="controls" src="http://dict.youdao.com/dictvoice?audio=voice&type=1"></audio>' +
                    '<div class="word-bar"><a class="wordContent" href="#">' + json.data.content + '</a></div>' +
                    '<div class="pronunciation">' +
                    '<ul>' +
                    '<li>' +
                    '<i class="iconfont icon-iconfontsvg45 speaker-icon"></i>' +
                    '<span>英音[<b>' + json.data.pronunciations.uk + '</b>]</span>' +
                    '</li>' +
                    '<li>' +
                    '<i class="iconfont icon-speaker07 speaker-icon"></i>' +
                    '<span>美音[<b>' + json.data.pronunciations.us + '</b>]</span>' +
                    '</li>' +
                    '</ul>' +
                    '</div>' +
                    '<div class="cn-definition">' +
                    '<p>' + json.data.definition.trim() + '</p>' +
                    '</div>' +
                    '</div>';
                var body = jQuery("body"),
                    wb = jQuery(".word-box");
                if (wb.length === 0) {
                    body.append(HTML);
                }
            });
        } else {
            jQuery(".word-box").remove();
        }
    })

});


// (function() {
// 'use strict';
// document.readyState == 'complete' && 
// if (document.URL == "https://www.theguardian.com/politics/2015/may/28/david-cameron-sets-off-on-mission-to-win-over-european-leaders") {

//     if (document.readyState == 'complete') {
//         chrome.runtime.sendMessage({
//             method: "speakLouder",
//             data: "like"
//         }, function(response) {

//         });
//     }



// Util.removeElements(document.querySelectorAll('html'));

// window.onmouseup
//     document.addEventListener("ondblclick", function() {
//         alert(22);
//     })

// }

// var main = function() {
//     var blockedUserLinks = [];
//     var blockedUserNames = [];

//     var blockUser = function() {
//         $.each(blockedUserLinks, function(index, item) {
//             var links = [item, "http://www.zhihu.com" + item, "http://www.zhihu.com" + item];
//             $.each(links, function(index, link) {
//                 $('div.zm-item-answer:has(a.author-link[href="' + link + '"])').hide();
//             });
//         });

//         $.each(blockedUserNames, function(index, item) {
//             $('div.comment-app-holder div[aria-label="' + item + "的评论" + '"]').hide();
//         });

//     };

//     // load blocked user
//     $.get("/settings/filter").done(function(html) {
//         var page = $(html);
//         $.each(page.find('.blocked-users a.avatar-link'), function(index, item) {
//             blockedUserLinks.push($(item).attr("href"));
//         });

//         $.each(page.find('.blocked-users div.body a'), function(index, item) {
//             blockedUserNames.push($(item).text());
//         });

//         blockUser();
//     });


//     $(document).ajaxComplete(function(event, request, settings) {
//         blockUser();
//     });
// };

// chrome.storage.local.get("disabled", function(data) {
//     if (!data || !data["disabled"]) {
//         var injectedScript = document.createElement('script');
//         injectedScript.type = 'text/javascript';
//         injectedScript.text = '(' + main + ')("");';
//         (document.body || document.head).appendChild(injectedScript);
//     }
// });


// chrome.runtime.sendMessage({ greeting: "您好" }, function(response) {
//     console.log(response.farewell);
// });
// })();