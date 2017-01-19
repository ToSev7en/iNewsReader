var Util = {
    removeAttr: function(el, attrs) {
        for (var i = 0; i < attrs.length; i++) {
            el.removeAttribute(attrs[i]);
        };
    },

    removeElements: function(els) {
        for (var i = els.length - 1; i > -1; i--) {
            var el = els[i];
            el.parentNode.removeChild(el);
        };
    },
    httpRequest: function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                callback(xhr.responseText);
            }
        }
        xhr.send();
    },
    createWordBox: function(data) {
        // 创建 html 结构
        var boxContainer = document.createElement("div");

        var speaker = document.createElement("audio");

        var meaning = document.createElement("p");

        boxContainer.appendChild(speaker);

        boxContainer.appendChild(meaning);
        boxContainer.className = "word-box";

        document.body.appendChild(boxContainer);
    }
}