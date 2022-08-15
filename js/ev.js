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
function CS_FORM_init(o, urllong) {
    $("body").append("<div id=saenetgta style='position:fixed; right:180px; top:21px; height:30px; width:100px'></div>");
    setTimeout(function () {
        var items = new Object();
        var allframe = document.getElementsByTagName("frame");
        for (var i = 0, max = allframe.length; i < max; i++) {
            var allinp = allframe[i].contentDocument.getElementsByTagName('input');
            for (var j = 0, maxip = allinp.length; j < maxip; j++) {
                allinp[j].addEventListener('blur', function () {
                    var target = "name";
                    if (this.getAttribute("name") == "undefined" || this.getAttribute("name") == null) {
                        if (this.getAttribute("id") == "undefined" || this.getAttribute("id") == null) {
                            return;
                        } else {
                            target = "id";
                        }
                    } else {
                        target = "name";
                    }
                    this.style.borderColor = 'green';
                    var temp = new Object();
                    var data = new Object();
                    items[this.getAttribute(target)] = {
                        "tagname": this.tagName.toLowerCase(),
                        "recognize": this.getAttribute("type"),
                        "active": true,
                        "type": "DATA_CS_FORM",
                        "value": this.value,
                        "target": target,
                        "url": document.location.origin + document.location.pathname
                    };
                    data.data = items;
                    data.saved = true;
                    data.enable = true;
                    data.name = o;
                    data.type = "CS_FORM";
                    data.url = urllong;
                    temp[o] = data;
                    storage.set(temp, function (gp) {});
                    $('#saenetgta').html("<b><font color=green size=10 >Saving...</font></b>").fadeIn(100).fadeOut(1000); ;
                });
            }
        }
        $("textarea,select,input[type!='hidden'][type!='submit']").bind("blur keyup change", function () {
            var target = "name";
            if ($(this).attr('name') == "undefined" || $(this).attr('name') == null) {
                if ($(this).attr('id') == "undefined" || $(this).attr('id') == null) {
                    return;
                } else {
                    target = "id";
                }
            } else {
                target = "name";
            }
            $(this).css('border-color', 'green');
            var temp = new Object();
            var data = new Object();
            if ($(this).is(":checked") && this.getAttribute("type").toLowerCase() == "checkbox") {
                items[$(this).attr(target)] = {
                    "html": $(this).html(),
                    "tagname": this.tagName.toLowerCase(),
                    "recognize": this.getAttribute("type"),
                    "active": true,
                    "type": "DATA_CS_FORM",
                    "value": true,
                    "target": target,
                    "url": document.location.origin + document.location.pathname
                };
            } else {
                items[$(this).attr(target)] = {
                    "html": $(this).html(),
                    "tagname": this.tagName.toLowerCase(),
                    "recognize": this.getAttribute("type"),
                    "active": true,
                    "type": "DATA_CS_FORM",
                    "value": $(this).val(),
                    "target": target,
                    "url": document.location.origin + document.location.pathname
                };
            }
            data.data = items;
            data.saved = true;
            data.enable = true;
            data.name = o;
            data.type = "CS_FORM";
            data.url = urllong;
            temp[o] = data;
            storage.set(temp, function (gp) {});
            $('#saenetgta').html("<b><font color=green size=10 >Saving...</font></b>").fadeIn(100).fadeOut(300); ;
        });
        $("input[type!='hidden'][type='submit']").bind("click", function () {
            var target = "name";
            var idNameValue = "";
            if ($(this).attr('name') == "undefined" || $(this).attr('name') == null) {
                if ($(this).attr('id') == "undefined" || $(this).attr('id') == null) {
                    if ($(this).parents("form").attr("name") != null) {
                        target = "formname";
                        idNameValue = $(this).parents("form").attr("name");
                    }
                } else {
                    target = "id";
                    idNameValue = $(this).attr('id');
                }
            } else {
                target = "name";
                idNameValue = $(this).attr('name');
            }
            $(this).css('border-color', 'green');
            var temp = new Object();
            var data = new Object();
            items[idNameValue] = {
                "enable": false,
                "idNameValue": idNameValue,
                "tagname": this.tagName.toLowerCase(),
                "recognize": this.getAttribute("type"),
                "active": true,
                "type": "DATA_CS_FORM",
                "value": $(this).val(),
                "target": target,
                "url": document.location.origin + document.location.pathname
            };
            data.data = items;
            data.saved = true;
            data.enable = true;
            data.name = o;
            data.type = "CS_FORM";
            data.url = urllong;
            temp[o] = data;
            storage.set(temp, function (gp) {});
            $('#saenetgta').html("<b><font color=green size=10 >Saving...</font></b>").fadeIn(100).fadeOut(300); ;
        });
        $("input[type!='hidden'][type='button']").bind("click", function () {
            var target = "name";
            var idNameValue = "";
            if ($(this).attr('name') == "undefined" || $(this).attr('name') == null) {
                if ($(this).attr('id') == "undefined" || $(this).attr('id') == null) {
                    if ($(this).parents("form").attr("name") != null) {
                        target = "formname";
                        idNameValue = $(this).parents("form").attr("name");
                    }
                } else {
                    target = "id";
                    idNameValue = $(this).attr('id');
                }
            } else {
                target = "name";
                idNameValue = $(this).attr('name');
            }
            $(this).css('border-color', 'green');
            var temp = new Object();
            var data = new Object();
            items[idNameValue] = {
                "enable": false,
                "idNameValue": idNameValue,
                "tagname": this.tagName.toLowerCase(),
                "recognize": this.getAttribute("type"),
                "active": true,
                "type": "DATA_CS_FORM",
                "value": $(this).val(),
                "target": target,
                "url": document.location.origin + document.location.pathname
            };
            data.data = items;
            data.saved = true;
            data.enable = true;
            data.name = o;
            data.type = "CS_FORM";
            data.url = urllong;
            temp[o] = data;
            storage.set(temp, function (gp) {});
            $('#saenetgta').html("<b><font color=green size=10 >Saving...</font></b>").fadeIn(100).fadeOut(300); ;
        });
    }, 1000);
}
var iattmpt = 0;
var formholder;
var myVar = setInterval(function () {
        iattmpt++;
        if (iattmpt == 2) {
            clearInterval(myVar);
        }
        storage.get(null, function (gp) {
            formholder = gp;
            if (gp.extension_disable != null && gp.extension_disable == false) {
                var table = new Array();
                var fillbox = true;
                for (var key in gp) {
                    if (gp.hasOwnProperty(key)) {
                        var val = gp[key];
                        try {
                            if (val.type == "CS_FORM" && val.saved == false && (document.location.href.indexOf(val.url) != -1)) {
                                c_f_i(val.name, val.url);
                                fillbox = false;
                                break;
                            }
                        } catch (e) {}
                    }
                }
                if (fillbox) {
                    for (var key in gp) {
                        if (gp.hasOwnProperty(key)) {
                            var val = gp[key];
                            try {
                                if (val.type == "CS_FORM" && val.enable == true && val.saved == true && (document.location.href.indexOf(val.url) != -1)) {
                                    for (var keydata in val.data) {
                                        if (val.data.hasOwnProperty(keydata)) {
                                            if (document.location.origin + document.location.pathname.indexOf(val.url) != -1) {
                                                if (val.data[keydata].tagname == null) {
                                                    $("[type!='hidden'][" + val.data[keydata].target + "='" + keydata + "']").val(val.data[keydata].value);
                                                } else {
                                                    $(val.data[keydata].tagname + "[type!='hidden'][type!='submit'][" + val.data[keydata].target + "='" + keydata + "']").val(val.data[keydata].value);
                                                }
                                                if (val.data[keydata].recognize != null) {
                                                    if (val.data[keydata].value && val.data[keydata].recognize.toLowerCase() == "checkbox") {
                                                        $(val.data[keydata].tagname + "[type!='hidden'][" + val.data[keydata].target + "='" + keydata + "']").prop('checked', val.data[keydata].value);
                                                    }
                                                }
                                                var allframe = document.getElementsByTagName("frame");
                                                for (var i = 0, max = allframe.length; i < max; i++) {
                                                    var allinp = allframe[i].contentDocument.getElementsByTagName('input');
                                                    for (var j = 0, maxip = allinp.length; j < maxip; j++) {
                                                        if (allinp[j].getAttribute(val.data[keydata].target) == keydata) {
                                                            allinp[j].setAttribute("value", val.data[keydata].value);
                                                            allinp[j].value = val.data[keydata].value;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    }
                }
            }
        });
    }, 1100);
function fA(p) {
    var k = new Array();
    k.push(p);
    storage.get(p.toString(), function (o) {
        var val = o[p];
        try {
            if (val.type == "CS_FORM" && val.enable == true && val.saved == true) {
                for (var keydata in val.data) {
                    if (val.data.hasOwnProperty(keydata)) {
                        if (document.location.origin + document.location.pathname.indexOf(val.url) != -1) {
                            if (val.data[keydata].tagname == null) {
                                $("[type!='hidden'][" + val.data[keydata].target + "='" + keydata + "']").val(val.data[keydata].value);
                            } else {
                                $(val.data[keydata].tagname + "[type!='hidden'][type!='submit'][" + val.data[keydata].target + "='" + keydata + "']").val(val.data[keydata].value);
                            }
                            if (val.data[keydata].recognize != null) {
                                if (val.data[keydata].value && val.data[keydata].recognize.toLowerCase() == "checkbox") {
                                    $(val.data[keydata].tagname + "[type!='hidden'][" + val.data[keydata].target + "='" + keydata + "']").prop('checked', val.data[keydata].value);
                                }
                            }
                            var allframe = document.getElementsByTagName("frame");
                            for (var i = 0, max = allframe.length; i < max; i++) {
                                var allinp = allframe[i].contentDocument.getElementsByTagName('input');
                                for (var j = 0, maxip = allinp.length; j < maxip; j++) {
                                    if (allinp[j].getAttribute(val.data[keydata].target) == keydata) {
                                        allinp[j].setAttribute("value", val.data[keydata].value);
                                        allinp[j].value = val.data[keydata].value;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }
    });
}
fil_t = (function (oT) {
    var z = [],
    f = function (a) {
        return oT.apply(this, arguments);
    };
    return f;
})(fA);
c_f_i = (function (oT) {
    var z = [],
    f = function (a) {
        return oT.apply(this, arguments);
    };
    return f;
})(CS_FORM_init);
function _verifier_(o) {
    var hidden,
    text,
    img,
    subdomain,
    domain; ;
    if (window.location.hostname.indexOf(o.domain) != -1) {
        domain = true;
    } else {
        for (var i = 0; i < o.subdomain.length; i++) {
            if (o.subdomain[i].length > 3) {
                if (window.location.hostname.indexOf(o.subdomain[i]) != -1) {
                    domain = true;
                }
            }
        }
    }
    if (o.img.length == 0) {
        img = true;
    }
    if (o.text.length == 0) {
        text = true;
    }
    if (o.hidden.length == 0) {
        hidden = true;
    } else {
        for (var i = 0; i < o.hidden.length; i++) {
            if ($(o.hidden[i]).length > 0) {
                hidden = true;
            }
        }
    }
    return (hidden && text && img && domain) == true ? true : false;
}
function _pDts_() {
    if (window.location.hostname.indexOf("easytatkal.com") != -1) {
        return;
    }
    storage.get(null, function (e) {
        if (e.extension_disable == false && e.paymentSelection.enable == true) {
            var g = $.map(e, function (val, key) {
                    if (key.indexOf("payment_") != -1) {
                        if (val.verify != null) {
                            if (_verifier_(val.verify)) {
                                var o = val.matter;
                                var _defaultTab = val.defaultab;
                                if (_defaultTab == null) {
                                    var btnObj = val.btn;
                                    _defaultTab = Object.keys(btnObj)[Object.keys(btnObj).length - 1];
                                }
                                var getFirstSubmit = val.btn[_defaultTab];
                                var sec = null;
                                try {
                                    if (getFirstSubmit.first == null || getFirstSubmit.first.timeout == null) {
                                        sec = 400;
                                    } else {
                                        sec = getFirstSubmit.first.timeout;
                                    }
                                } catch (e) {
                                    sec = 400;
                                }
                                var getFirstSubmit = val.btn[_defaultTab];
                                try {
                                    setTimeout(function () {
                                        buttonclick(getFirstSubmit.first);
                                    }, 1500);
                                } catch (e) {}
                                sec = sec + 1500;
                                setTimeout(function () {
                                    var getFirstSubmit = val.btn[_defaultTab];
                                    for (var i = 0; i < o.length; i++) {
                                        var id = o[i].id,
                                        name = o[i].name,
                                        html = o[i].outerHTML,
                                        cla = o[i].class,
                                        tag = o[i].tagname;
                                        if (_defaultTab != o[i].tab) {
                                            continue;
                                        }
                                        if (id != null && id != "") {
                                            try {
                                                if (getFirstSubmit.first != null && getFirstSubmit.first.events != null) {
                                                    var ag = getFirstSubmit.first.events;
                                                    for (var ig = 0; ig < ag.length; ig++) {
                                                        if (ag[ig] == "val") {
                                                            var olk = {};
                                                            olk.tag = tag;
                                                            olk.id = id;
                                                            olk.value = o[i].value;
                                                            setTimeout(function (olk) {
                                                                $(olk.tag + "[id='" + olk.id + "']:visible").val(olk.value);
                                                            }
                                                                .bind(this, olk), 1000);
                                                        } else {
                                                            var olk = {};
                                                            olk.tag = tag;
                                                            olk.id = id;
                                                            olk.value = ag[ig];
                                                            setTimeout(function (olk) {
                                                                var event1 = new KeyboardEvent(olk.value, {
                                                                        bubbles: true,
                                                                        cancelable: true,
                                                                        shiftKey: true,
                                                                        code: 'Escape',
                                                                        key: 'Escape'
                                                                    });
                                                                try {
                                                                    $(olk.tag + "[id='" + olk.id + "']:visible")[0].dispatchEvent(event1);
                                                                } catch (e) {}
                                                            }
                                                                .bind(this, olk), 1000);
                                                        }
                                                    }
                                                } else {
                                                    $(tag + "[id='" + id + "']:visible").val(o[i].value);
                                                    tagTrigger(tag, id);
                                                }
                                            } catch (e) {
                                                $(tag + "[id='" + id + "']:visible").val(o[i].value);
                                                tagTrigger(tag, id);
                                            }
                                        } else if (name != null && name != "") {
                                            var selec_name = $(tag + "[name='" + name + "']:visible");
                                            selec_name.val(o[i].value);
                                            var id = makeid();
                                            selec_name.attr("id", id);
                                            tagTrigger(tag, id);
                                        } else if (cla != null && cla != "") {
                                            $(tag + cla + ":visible").val(o[i].value);
                                            try {
                                                $(tag + cla + ":visible")[0].dispatchEvent(new Event("input"));
                                                $(tag + cla + ":visible")[0].dispatchEvent(new Event("keypress"));
                                                $(tag + cla + ":visible")[0].dispatchEvent(new Event("keyup"));
                                                $(tag + cla + ":visible")[0].dispatchEvent(new Event("keydown"));
                                                $(tag + cla + ":visible")[0].dispatchEvent(new Event("blur"));
                                            } catch (e) {}
                                        } else if (html != null && html != "") {
                                            _fistg_(html, o[i].value);
                                        }
                                    }
                                    try {
                                        var getFirstSubmit = val.btn[_defaultTab];
                                        if (e["autosubmitpaymentx"].enable == true && after10min()) {
                                            elseclick(getFirstSubmit.submit);
                                        }
                                    } catch (e) {}
                                    try {
                                        var getFirstSubmit = val.btn[_defaultTab];
                                        setTimeout(function () {
                                            try {
                                                $(genSelector(getFirstSubmit.focus)).focus();
                                            } catch (e) {
                                                console.log(e);
                                            }
                                        }, 1000);
                                    } catch (e) {}
                                }, sec);
                            }
                        }
                    }
                });
        }
    });
}
function tagTrigger(tag, id) {
    if (tag.toLowerCase() == "select") {
        var event = new Event('change');
        if (document.getElementById(id) != null)
            document.getElementById(id).dispatchEvent(event);
    } else if (tag.toLowerCase() == "input") {
        var event = new Event('input');
        if (document.getElementById(id) != null)
            document.getElementById(id).dispatchEvent(event);
    }
    try {
        document.getElementById(id).dispatchEvent(new Event("input"));
        document.getElementById(id).dispatchEvent(new Event("keypress"));
        document.getElementById(id).dispatchEvent(new Event("keyup"));
        document.getElementById(id).dispatchEvent(new Event("keydown"));
        document.getElementById(id).dispatchEvent(new Event("blur"));
    } catch (e) {}
}
function after10min() {
    if (document.domain.indexOf("irctc.co.in") != -1) {
        return false;
    }
    try {
        if (localStorage["timstp"] == null) {
            localStorage["timstp"] = new Date().getTime();
            return true;
        } else {
            var differnceOf = Number(new Date().getTime()) - Number(localStorage["timstp"]);
            if (differnceOf > 12000) {
                localStorage["timstp"] = new Date().getTime();
                return true;
            }
        }
    } catch (e) {
        return true;
    }
    return false;
}
_pDts_();
function _fistg_(htmlString, value) {
    var y = $.parseHTML(htmlString);
    $(y[0].tagName).each(function (s) {
        if ($(this)[0].outerHTML == htmlString) {
            console.log($(this)[0].outerHTML);
            $(this).val(value);
        }
    })
}
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var len = 5;
    for (var i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        if ($("#" + text).length > 0) {
            len++;
        }
    }
    return text;
}
function elseclick(html) {
    var f = $(html);
    if (f.attr("id") != null) {
        document.getElementById(f.attr("id")).click();
    } else {
        var id = makeid();
        $(genSelector(html)).attr("id", id);
        document.getElementById(id).click();
    }
}
function buttonclick(first) {
    if (first.parent != null) {
        if (first.parent.selector == "parent") {
            $(genSelector(first.html)).parent(first.parent.html).click();
            return;
        } else if (first.parent.selector == "parents") {
            $(genSelector(first.html)).parents(first.parent.html).click();
            return;
        } else if (first.parent.selector == "expression") {
            $(first.parent.expression).click();
            return;
        }
    }
    if ("string" == typeof first) {
        elseclick(first);
    } else {
        elseclick(first.html);
    }
}
function genSelector(html) {
    var iop = $(html.normalize());
    var io = $.map(iop[0].attributes, function (item, key) {
            var validkey = ["ng-model", "placeholder", "id", "class", "name", "maxlength", "value", "href"];
            if (validkey.indexOf(item.name.toLowerCase()) != -1) {
                return "[" + item.name + "='" + item.nodeValue + "']";
            } else {
                return "";
            }
        });
    console.log(io);
    var tag = iop[0].tagName.toLowerCase();
    return tag + io.join("");
}
