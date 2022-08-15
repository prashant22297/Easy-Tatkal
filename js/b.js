var _BROWSER = "chrome";
var _tme = chrome || {};
Chrome = _tme;
var deb = true;
var hdallsto = false;
var XX = "00";
var YY = "00";
var extension = _tme["extension"];
var runtime = _tme["runtime"];
var reload_bg = true;
var blc = "blocking";
var rqh = "requestHeaders";
var mn_fr = "main_frame";
var xmhtp = "xmlhttprequest";
var res_h = "responseHeaders";
var essy = "*://*.easytatkal.com/*";
var allirc = "*://*.irctc.co.in/*";
var tempinitial_form = "easytatkal_forms_";
var easytatkal_custom_js = "easytatkal_custom_js_";
var incognito_message = "Easytatkal doesnt works in incognito mode.Uncheck the incognitio check box in chrome://extension, to use this website. If you want to use the website on multiple chrome windows then Goto chrome://settings/ and Add New Users.";
function log(f) {}
function L(f) {}
function console_warn(f) {}
function console_error(f) {}
jQuery.extend(jQuery.expr[':'], {
    inv: function (el) {
        return $(el).is(":visible");
    }
});
function sperator_9(e) {}
if (typeof storage == "undefined") {
    var storage = {};
    storage = chrome.storage.local;
}
var reload_bg = true;
if (reload_bg) {
    reload_bg = false;
    Chrome.tabs.query({
        url: essy
    }, function (y) {
        for (var ykey in y) {
            if (y.hasOwnProperty(ykey)) {
                Chrome.tabs.reload(y[ykey].id);
            }
        }
    });
    Chrome.tabs.query({
        url: "https://*.irctc.co.in/*"
    }, function (y) {
        for (var ykey in y) {
            if (y.hasOwnProperty(ykey)) {
                Chrome.tabs.remove(y[ykey].id);
            }
        }
    });
}
Chrome.browserAction.onClicked.addListener(function () {
    Chrome.tabs.create({
        "url": "http://easytatkal.com"
    });
});
Chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.load == ".review") {
        var newUrl = "https://easytatkal.com/review/?review=yes&browser=" + _BROWSER;
        chrome.tabs.create({
            url: newUrl
        });
        sendResponse({});
        return true;
    } else if (request.load == ".as") {
        console.log(sender);
        sendResponse({
            "done": "done"
        });
        return true;
    } else if (request.x == "T") {
        tri(request.data.toString(), function (p) {
            sendResponse({
                fuc: p
            });
        });
        return true;
    } else if (request.x == "F") {
        triF(request.data.toString(), function (p) {
            sendResponse({
                fuc: p
            });
        });
        return true;
    } else if (request.ool == "ool") {
        if (request.domain.indexOf("irctc.co.in") != -1 || request.domain.indexOf("easytatkal") != -1) {
            if (deb) {
                setInterval(function () {
                    console.clear();
                    console.clear();
                    console.clear();
                }, 1000);
            }
        }
    } else if (request.ool == "pT") {
        tPT(request.data.toString(), function (p) {
            sendResponse({
                fuc: p
            });
        });
        return true;
    } else if (request.ool == "dA") {
        chrome.storage.local.remove(["active_id", "findtrain", "makepay", "train_no", "loginbtn", "paymentSelection"], function () {
            Chrome.tabs.query({
                url: essy
            }, function (y) {
                for (var ykey in y) {
                    if (y.hasOwnProperty(ykey)) {
                        Chrome.tabs.reload(y[ykey].id);
                    }
                }
            });
        });
        sendResponse({
            dA: true
        });
        return true;
    } else if (request.ool == "eAcI") {
        storage.get("active_id", function (e) {
            if (e.active_id != null)
                sendResponse({
                    dA: true
                });
            else
                sendResponse({
                    dA: false
                });
        });
        return true;
    } else if (request.ool == "open") {
        Chrome.tabs.create({
            "url": "http://easytatkal.com"
        });
        sendResponse({
            dA: false
        });
        return true;
    } else if (request.ool == "pmtri") {
        setTimeout(function () {
            Chrome.tabs.query({
                url: "<all_urls>"
            }, function (y) {
                for (var ykey in y) {
                    if (y.hasOwnProperty(ykey)) {
                        if (y[ykey].url.indexOf("h") == 0) {
                            try {
                                Chrome.tabs.executeScript(y[ykey].id, {
                                    file: "/js/ev.js",
                                    allFrames: true
                                }, function (t) {});
                            } catch (e) {}
                        }
                    }
                }
            });
        }, 1500);
        sendResponse({
            obj: request.ob
        });
        return true;
    }
});
function tPT(cb) {
    Chrome.tabs.query({
        url: "<all_urls>"
    }, function (y) {
        for (var ykey in y) {
            if (y.hasOwnProperty(ykey)) {
                if (y[ykey].url.indexOf("h") == 0) {
                    try {
                        chrome.tabs.insertCSS(y[ykey].id, {
                            file: "css/in.css"
                        }, function () {})
                    } catch (er) {}
                }
            }
        }
        cb({});
    });
}
function tri(s, cb) {
    storage.get(s, function (o) {
        Chrome.tabs.query({
            url: "<all_urls>"
        }, function (y) {
            var f = false;
            for (var ykey in y) {
                if (y.hasOwnProperty(ykey)) {
                    if (y[ykey].url.indexOf(o[s].url) != -1) {
                        f = true;
                        Chrome.tabs.update(y[ykey].id, {
                            active: true
                        });
                        Chrome.tabs.executeScript(y[ykey].id, {
                            code: "fil_t(" + s + ")",
                            allFrames: true
                        }, function (et) {});
                    }
                }
            }
            cb({
                "otabs": y,
                "db": o[s],
                "f": f
            });
        });
    });
}
function triF(s, cb) {
    storage.get(s, function (o) {
        Chrome.tabs.query({
            url: "*://*.irctc.co.in/*"
        }, function (y) {
            for (var ykey in y) {
                if (y.hasOwnProperty(ykey)) {
                    var ymp = ' var  f = document.createElement("script");';
                    ymp += 'f.style="application/javascript";';
                    ymp += 'f.textContent ="if(typeof navigator.event === \'undefined\'){window.location.reload();}";';
                    ymp += '(document.head || document.documentElement).appendChild(f);';
                    ymp += 'f.parentNode.removeChild(f);';
                    Chrome.tabs.update(y[ykey].id, {
                        active: true
                    });
                    Chrome.tabs.executeScript(y[ykey].id, {
                        code: ymp + '$("a:contains(\'Book Ticket\')")[0].dispatchEvent(new Event("click"));setTimeout(function(){stationfill(gp);nidfLod(gp);},500);',
                        allFrames: false
                    }, function (t) {});
                }
            }
            cb({
                otabs: y,
                db: o[s]
            });
        });
    });
}
function loaddefV() {
    var dfv = {
        acint: "1",
        gnint: "1",
        slint: "1",
        autosubmitpaymentx: {
            click: true,
            enable: true,
            name: "autosubmitpaymentx"
        },
        bookifavail: true,
        bookifavail_step_another: true,
        eightsharp: "07:59:52",
        elevensharp: "10:59:51",
        tensharp: "09:59:51",
        findtrain: {
            click: true,
            enable: true,
            name: "findtrain"
        },
        makepay: {
            click: true,
            enable: true,
            name: "makepay"
        },
        train_no: {
            coach: "SL",
            enable: true,
            name: "train_no",
            number: ""
        },
        paymentSelection: {
            click: true,
            enable: true,
            name: "paymentSelection"
        }
    };
    storage.get(null, function (d) {
        if (d.acint == null) {
            storage.set(dfv, function (f) {});
        }
    })
}
loaddefV();
var disable_webreq_addlistener = false;
var gds = false;
sHl = function (details) {
    var token = new Object();
    var foun_token = false;
    for (var i = 0; i < details.responseHeaders.length; ++i) {
        if (details.responseHeaders[i].name.toLowerCase() === "x-server-token".toLowerCase()) {
            token["servertoken"] = details.responseHeaders[i].value;
            foun_token = true;
        } else if (details.responseHeaders[i].name.toLowerCase() === "x-server-email".toLowerCase()) {
            token["servertoken_email"] = details.responseHeaders[i].value;
            foun_token = true;
        } else if (details.responseHeaders[i].name.toLowerCase() === "x-date".toLowerCase()) {
            token["date"] = details.responseHeaders[i].value;
        }
    }
    if (foun_token) {
        var t_token = new Object();
        t_token[token.servertoken_email] = token;
        t_token.easytatkalPurchaseDate = token["date"];
        t_token.extension_disable = false;
        gds = true;
        storage.set(t_token, function () {});
    }
};
Hantc = function (details) {
    storage.get(null, function (gp) {
        try {
            if (gp.extension_disable != null) {
                hdallsto = gp.extension_disable;
            }
        } catch (err) {}
        for (var i = 0; i < details.responseHeaders.length; ++i) {
            if (details.responseHeaders[i].name === "Date") {
                try {
                    if (gp.easytatkalPurchaseDate != null) {
                        var easy_pur_date = Date.parse(gp.easytatkalPurchaseDate);
                        var irctc_date = Date.parse(Date.parse(details.responseHeaders[i].value).toString('yyyy-M-d'));
                        if (irctc_date.compareTo(easy_pur_date) == 1) {
                            storage.set({
                                "extension_disable": true
                            }, function () {});
                        } else if (irctc_date.compareTo(easy_pur_date) < 1) {
                            storage.set({
                                "extension_disable": false
                            }, function () {});
                        }
                    }
                    var tim_cons = Date.parse("05:00:06 GMT");
                    var irctclimttime = Date.parse(details.responseHeaders[i].value);
                    if (irctclimttime.compareTo(tim_cons) == 1) {
                        disable_webreq_addlistener = true;
                    }
                    var m1 = Date.parse("02:20:06 GMT");
                    var m2 = Date.parse("03:00:00 GMT");
                    var irctclimttime = Date.parse(details.responseHeaders[i].value);
                    if (irctclimttime.between(m1, m2)) {
                        disable_webreq_addlistener = false;
                    } else {
                        disable_webreq_addlistener = true;
                    }
                    var m1 = Date.parse("04:10:06 GMT");
                    var m2 = Date.parse("04:58:00 GMT");
                    var irctclimttime = Date.parse(details.responseHeaders[i].value);
                    if (disable_webreq_addlistener) {
                        var m1 = Date.parse(YY + ":00:00 GMT");
                        var m2 = Date.parse(XX + ":59:00 GMT");
                        var irctclimttime = Date.parse(details.responseHeaders[i].value);
                        if (irctclimttime.between(m1, m2)) {
                            disable_webreq_addlistener = false;
                        } else {
                            disable_webreq_addlistener = true;
                        }
                    }
                } catch (err) {}
            }
        }
    });
};
xp = "X-plugin";
handler = function (details) {
    details.requestHeaders.push({
        "name": xp,
        "value": _tme.runtime.getManifest().version
    });
    return {
        "requestHeaders": details.requestHeaders
    };
};
_tme.webRequest.onResponseStarted.addListener(Hantc, {
    "urls": [allirc, essy],
    "types": [xmhtp, mn_fr]
}, [res_h]);
_tme.webRequest.onResponseStarted.addListener(sHl, {
    "urls": [essy],
    "types": [xmhtp, mn_fr]
}, [res_h]);
_tme.webRequest.onBeforeSendHeaders.addListener(handler, {
    "urls": [essy],
    "types": [xmhtp, mn_fr]
}, [blc, rqh]);
_tme.storage.onChanged.addListener(function (gp) {
    for (var key in gp) {
        if (gp.hasOwnProperty(key)) {
            var val = gp[key];
            try {
                if (val.newValue.type == "CS_FORM" && val.newValue.saved == false) {
                    _tme.tabs.query({
                        url: "<all_urls>"
                    }, function (y) {
                        for (var ykey in y) {
                            if (y.hasOwnProperty(ykey)) {
                                if (y[ykey].url.indexOf(val.newValue.url) != -1) {
                                    _tme.tabs.executeScript(y[ykey].id, {
                                        code: "c_f_i('" + val.newValue.name + "','" + val.newValue.url + "')",
                                        allFrames: true
                                    }, function (et) {});
                                }
                            }
                        }
                    });
                }
            } catch (e) {}
        }
    }
});
