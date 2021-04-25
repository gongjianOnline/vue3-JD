! function (t) {
    var c, e, o, i, n, l, s =
        '<svg><symbol id="iconback" viewBox="0 0 1024 1024"><path d="M363.840919 472.978737C336.938714 497.358861 337.301807 537.486138 364.730379 561.486138L673.951902 832.05497C682.818816 839.813519 696.296418 838.915012 704.05497 830.048098 711.813519 821.181184 710.915012 807.703582 702.048098 799.94503L392.826577 529.376198C384.59578 522.174253 384.502227 511.835287 392.492414 504.59418L702.325747 223.807723C711.056111 215.895829 711.719614 202.404616 703.807723 193.674252 695.895829 184.943889 682.404617 184.280386 673.674253 192.192278L363.840919 472.978737Z"></path></symbol></svg>',
        a = (a = document.getElementsByTagName("script"))[a.length - 1].getAttribute("data-injectcss");
    if (a && !t.__iconfont__svg__cssinject__) {
        t.__iconfont__svg__cssinject__ = !0;
        try {
            document.write(
                "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
            )
        } catch (t) {
            console && console.log(t)
        }
    }

    function d() {
        n || (n = !0, o())
    }
    c = function () {
        var t, c, e, o;
        (o = document.createElement("div")).innerHTML = s, s = null, (e = o.getElementsByTagName("svg")[0]) && (e.setAttribute(
                "aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e
            .style.overflow = "hidden", t = e, (c = document.body).firstChild ? (o = t, (e = c.firstChild).parentNode
                .insertBefore(o, e)) : c.appendChild(t))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(
        c, 0) : (e = function () {
        document.removeEventListener("DOMContentLoaded", e, !1), c()
    }, document.addEventListener("DOMContentLoaded", e, !1)) : document.attachEvent && (o = c, i = t.document, n = !
        1, (l = function () {
            try {
                i.documentElement.doScroll("left")
            } catch (t) {
                return void setTimeout(l, 50)
            }
            d()
        })(), i.onreadystatechange = function () {
            "complete" == i.readyState && (i.onreadystatechange = null, d())
        })
}(window);