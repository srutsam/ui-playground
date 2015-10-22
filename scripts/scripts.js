var data = {
    name : "Some Tuts+ Sites",
    sites: ["Nettuts+", "Psdtuts+", "Mobiletuts+"],
    url : function () {
        return function (text, render) {
            text = render(text);
            var url = text.trim().toLowerCase().split(&#39;tuts+&#39;)[0] + &#39;.tutsplus.com&#39;;
            return &#39;<a href="&#39; + url + &#39;">&#39; + text + &#39;</a>&#39;;
        }
    }
};
