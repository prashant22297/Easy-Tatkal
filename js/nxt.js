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
if (document.domain.indexOf("easytatkal.com") != -1) {
    document.getElementById('x-entry-point').value = _tme.runtime.getManifest().version;
    var docCookies = {
        getItem: function (sKey) {
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        },
        setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false;
            }
            var sExpires = "";
            if (vEnd) {
                switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
                }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
        },
        removeItem: function (sKey, sPath, sDomain) {
            if (!sKey || !this.hasItem(sKey)) {
                return false;
            }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
            return true;
        },
        hasItem: function (sKey) {
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        },
        keys: function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
                aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
            }
            return aKeys;
        }
    };
    docCookies.setItem("browser", _BROWSER, new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate() + 1), "/");
}
if (window.location.hostname.indexOf("easytatkal.com") != -1) {
    var tatkalq = "TQ";
    function savexhoo() {
        try {
            if (document.getElementById("uigtgkj76vvhaaw") != null) {
                var u = document.getElementById("uigtgkj76vvhaaw").value;
                storage.set({
                    "bearer_token": u
                }, function (d) {})
            }
        } catch (e) {}
    }
    function selectFill(id, text) {
        var all = $("#" + id + " option");
        var val = $.map(all, function (e) {
                if ($(e).text().toString().toLowerCase() == text.toLowerCase()) {
                    return $(e).val();
                }
            });
        console.log(val);
        $("#" + id).val(val[0]);
    }
    var extens_disable = false;
    var setIn;
    var isInIFrame = (window.location != window.parent.location);
    if (isInIFrame == true) {}
    else {
        try {
            if (extension.inIncognitoContext) {
                alert(incognito_message);
                window.location.href = extension.getURL("incognito.html");
            } else {
                if (document.domain.indexOf("easytatkal.com") != -1) {
                    savexhoo();
                    easytatkalwebsite();
                }
            }
        } catch (e) {}
    }
    function easytatkalwebsite() {
        if ($("#showdatasaved").length) {
            var email_ = $("#useremail").val();
            if (email_.length > 5) {
                storage.get(email_, function (k) {
                    try {
                        if (k[email_].servertoken) {
                            $("#content-length").val(k[email_]["servertoken"]);
                            $("#useremail").val(k[email_]["servertoken_email"]);
                        }
                    } catch (err) {}
                });
            }
            if (!$("#whattodo").length) {
                setTimeout(function () {
                    $(".btn-success").unbind("click");
                    $('button[class*="btn-success"]').each(function () {
                        $(this).click(function () {
                            if (parseInt($('#x-entry-point').val()) > 0) {
                                $('#ask_for_use').modal();
                            }
                        });
                    });
                }, 1000);
            }
            main();
            $(".quota").change(function () {
                switch (this.value) {
                case tatkalq:
                    $(".senior1,.senior2,.senior3,.senior4,.passenger5,.passenger6,.p_5,.p_6").hide();
                    $(".gn").show();
                    $("#passenger5_name,#passenger6_name,#passenger5_age,#passenger6_age,#passenger5_id_no,#passenger6_id_no,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").val("");
                    $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").parent("div").hide();
                    document.getElementById("senior6").checked = false;
                    document.getElementById("senior5").checked = false;
                    document.getElementById("passenger5_gender").value = "";
                    document.getElementById("passenger6_gender").value = "";
                    document.getElementById("passenger5_berth").value = "";
                    document.getElementById("passenger6_berth").value = "";
                    break;
                case "PT":
                    $(".senior1,.senior2,.senior3,.senior4,.passenger5,.passenger6,.p_5,.p_6").hide();
                    $(".gn").show();
                    $("#passenger5_name,#passenger6_name,#passenger5_age,#passenger6_age,#passenger5_id_no,#passenger6_id_no,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").val("");
                    $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").parent("div").hide();
                    document.getElementById("senior6").checked = false;
                    document.getElementById("senior5").checked = false;
                    document.getElementById("passenger5_gender").value = "";
                    document.getElementById("passenger6_gender").value = "";
                    document.getElementById("passenger5_berth").value = "";
                    document.getElementById("passenger6_berth").value = "";
                    break;
                case "GN":
                    $(".senior1,.senior2,.senior3,.senior4,.passenger5,.passenger6,.p_5,.p_6").show();
                    $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").parent("div").show();
                    $(".gn").hide();
                    break;
                case "LD":
                    $(".senior1,.senior2,.senior3,.senior4,.passenger5,.passenger6,.p_5,.p_6").show();
                    $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").parent("div").show();
                    $(".gn").hide();
                    break;
                default:
                    break;
                }
            });
            $("#submitorrefresh").show();
            $("#submitorrefresh").change(function () {
                var yh = new Object();
                yh["submitorrefresh"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#gnint").change(function () {
                var yh = new Object();
                yh["gnint"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#acint").change(function () {
                var yh = new Object();
                yh["acint"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#slint").change(function () {
                var yh = new Object();
                yh["slint"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#elevensharp").change(function () {
                var yh = new Object();
                yh["elevensharp"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#tensharp").change(function () {
                var yh = new Object();
                yh["tensharp"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#eightsharp").change(function () {
                var yh = new Object();
                yh["eightsharp"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#tensess").change(function () {
                var yh = new Object();
                yh["tensess"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#ninesess").change(function () {
                var yh = new Object();
                yh["ninesess"] = $(this).val();
                storage.set(yh, function () {});
            });
            $("#eightsess").change(function () {
                var yh = new Object();
                yh["eightsess"] = $(this).val();
                storage.set(yh, function () {});
            });
        } else {
            ADD_C();
        }
        Booknowchkbx();
        $(".cpv").show();
        $(".flexi").show();
        $(".vikalp").show();
        $(".nextbtn").show();
        $(".insurance").show();
        $(".gds").show();
        $("#flexi-id").change(function () {
            if ($(this).is(":checked")) {
                storage.set({
                    "flexi-id": true
                }, function () {});
            } else {
                storage.set({
                    "flexi-id": false
                }, function () {});
            }
        });
        $("#vikalp-id").change(function () {
            if ($(this).is(":checked")) {
                storage.set({
                    "vikalp-id": true
                }, function () {});
            } else {
                storage.set({
                    "vikalp-id": false
                }, function () {});
            }
        });
        $("#cpv-id").change(function () {
            if ($(this).is(":checked")) {
                storage.set({
                    "cpv-id": true
                }, function () {});
            } else {
                storage.set({
                    "cpv-id": false
                }, function () {});
            }
        });
        $("#nextbtn-id").change(function () {
            if ($(this).is(":checked")) {
                storage.set({
                    "nextbtn-id": true
                }, function () {});
            } else {
                storage.set({
                    "nextbtn-id": false
                }, function () {});
            }
        });
        $("#gds-id").change(function () {
            if ($(this).is(":checked")) {
                storage.set({
                    "gds-id": true
                }, function () {});
            } else {
                storage.set({
                    "gds-id": false
                }, function () {});
            }
        });
        $("#insurance-id").change(function () {
            if ($(this).is(":checked")) {
                storage.set({
                    "insurance-id": true
                }, function () {});
            } else {
                storage.set({
                    "insurance-id": false
                }, function () {});
            }
        });
    }
    function main() {
        getform();
    }
    function ldjs(t) {
        try {
            f = document.createElement("sc" + "ri" + "pt"),
            f.textContent = t,
            (document.head || document.documentElement).appendChild(f),
            f.parentNode.removeChild(f);
        } catch (h) {}
    }
    function onclickhandler() {
        $("#save_form").off("click").on("click", function () {
            if (saveForm()) {
                $(".click-on-nav>li").removeClass("active");
                $("#pg1,#pg2,#pg3").hide();
                $("#pg2").show();
                $("a[pageid='pg2']").parent().attr("class", "active");
                resetForm();
            }
        });
        $(".deleteAll").off("click").on("click", function () {
            if (confirm("Do you want to delete all saved form? ")) {
                deleteAllForms("forms");
                getform();
            }
        });
        $(".justdelete").off("click").on("click", function () {
            if (confirm("Do you want to delete selected forms? ")) {
                justdelete();
                getform();
            }
        });
        $(".exportall").off("click").on("click", function () {
            exportall();
        });
        $(".justexport").off("click").on("click", function () {
            justexport();
        });
        $(".allimport").off("click").on("click", function () {
            ldjs('$("#import_form").modal("show");');
        });
        $("#import_form_btn").off("click").on("click", function () {
            if (allimport()) {
                getform();
                $("#textarea_import_form").val("");
                ldjs('$("#import_form").modal("toggle");');
            }
        });
        $("#edit_form").off("click").on("click", function () {
            edit_form();
        });
    }
    function resetForm() {
        $("#boarding,#source,#destination,#dateselector,#form_name,#mobile_no,#irctc_Username,#irctc_Password,.train_no_form_fill").val("");
        $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").val("");
        $("#gstin,#gstfloorno,#gstarea,#gstname,#gststreet,#gstpin").val("");
        try {
            $("#dAddress1").val("");
            $("#dAddress2").val("");
            $("#dAddress3").val("");
            $("#dpincode").val("");
            $("#dstate").val("");
            $("#dcity").val("");
            $("#dpo").val("");
        } catch (e) {}
        for (var i = 1; i < 7; i++) {
            $("#passenger" + i + "_name").val("");
            $("#passenger" + i + "_age").val("");
            $("#passenger" + i + "_id_no").val("");
            $("#passenger" + i + "_id").val("0");
            $("#passenger" + i + "_berth").val("");
            $("#passenger" + i + "_gender").val("");
            $("#senior" + i).attr("checked", false);
        }
        $("#Upgradation").attr("checked", false);
        $("#bookonlyconfirm").attr("checked", false);
        $("#preferredCoachID").attr("checked", false);
        $("#coachoptext").hide().val("");
        for (var i = 1; i < 7; i++) {
            $("#bedroll" + i).attr("checked", false);
        }
        $("#Child1_name,#Child1_age,#Child1_gender,#Child2_name,#Child2_age,#Child2_gender").val("");
        $(".p1,.p2,.p3,.p4,.p5,.p6").val("");
        try {
            var script = document.createElement('script');
            script.textContent = "if(typeof(resetfm)!='undefined'){resetfm();}";
            (document.head || document.documentElement).appendChild(script);
            script.parentNode.removeChild(script);
        } catch (err) {}
    }
    function correctSeniorChkbox() {
        for (var seq = 1; seq < 7; seq++) {
            if (document.getElementById("passenger" + seq + "_gender").value == "m") {
                if (document.getElementById("passenger" + seq + "_age").value < 60) {
                    document.getElementById("senior" + seq).checked = false;
                }
            } else if (document.getElementById("passenger" + seq + "_gender").value == "f") {
                if (document.getElementById("passenger" + seq + "_age").value < 58) {
                    document.getElementById("senior" + seq).checked = false;
                }
            }
        }
    }
    function edit_form() {
        var edit_obj = $("input:checked[type='checkbox'][oneasytatkal='onfocustrue']");
        var count = edit_obj.length;
        if (count == 1) {
            var t = edit_obj.attr("id");
            storage.get(t, function (form_detail) {
                fillForm_easytatkal(form_detail[t]);
                $(".click-on-nav>li").removeClass("active");
                $("#pg1,#pg2,#pg3").hide();
                $("#pg1").show();
                $("a[pageid='pg1']").parent().attr("class", "active");
            });
        } else if (count == 0) {
            $("#alert_settingpage_text").text(" Please select one checkbox").show();
            $(".alert_settingpage").show();
            return false;
        } else {
            $("#alert_settingpage_text").text(" Only  one checkbox is allowed at a time").show();
            $(".alert_settingpage").show();
            return false;
        }
        setTimeout(function () {
            $(".alert_settingpage").hide();
        }, 3000);
        return true;
    }
    function justdelete() {
        var delArray_temp = new Array();
        $("input:checked[type='checkbox'][oneasytatkal='onfocustrue']").each(function () {
            delArray_temp.push($(this).attr("id"));
        });
        storage.remove(delArray_temp, function (del_ed_items) {
            log(del_ed_items);
        });
        storage.get(null, function (gp) {
            for (var key in gp) {
                if (gp.hasOwnProperty(key)) {
                    if (delArray_temp.indexOf(gp.active_id) != -1) {
                        storage.remove("active_id", function (del_ed_items) {
                            log(del_ed_items);
                        });
                    }
                }
            }
        });
    }
    function exportall() {
        var getArray_temp = new Array();
        $("input[type='checkbox'][oneasytatkal='onfocustrue']").each(function () {
            getArray_temp.push($(this).attr("id"));
        });
        storage.get(getArray_temp, function (got_items) {
            log(got_items);
            $("#textarea_export_form").val(JSON.stringify(got_items));
            $("#textarea_export_form").mousedown(function () {
                SelectAll("textarea_export_form");
            });
            ldjs('$("#export_form").modal("show");');
        });
    }
    function SelectAll(id) {
        document.getElementById(id).focus();
        document.getElementById(id).select();
    }
    function justexport() {
        var getArray_temp = new Array();
        $("input:checked[type='checkbox'][oneasytatkal='onfocustrue']").each(function () {
            getArray_temp.push($(this).attr("id"));
        });
        storage.get(getArray_temp, function (got_items) {
            log(got_items);
            $("#textarea_export_form").val(JSON.stringify(got_items));
            $("#textarea_export_form").mousedown(function () {
                SelectAll("textarea_export_form");
            });
            ldjs('$("#export_form").modal("show");');
        });
    }
    function allimport() {
        var validJson = $("#textarea_import_form").val();
        try {
            $(".jsonerror").hide();
            var gp = JSON.parse(validJson);
            var matchit = ["Child1_age", "Child1_gender", "Child1_name", "Child2_age", "Child2_gender", "Child2_name", "Upgradation", "berth_pref", "boarding", "dateselector", "destination", "form_name", "irctc_Password", "irctc_Username", "mobile_no", "p1", "p2", "p3", "p4", "p5", "p6", "passenger1_age", "passenger1_berth", "passenger1_gender", "passenger1_id", "passenger1_id_no", "passenger1_name", "passenger2_age", "passenger2_berth", "passenger2_gender", "passenger2_id", "passenger2_id_no", "passenger2_name", "passenger3_age", "passenger3_berth", "passenger3_gender", "passenger3_id", "passenger3_id_no", "passenger3_name", "passenger4_age", "passenger4_berth", "passenger4_gender", "passenger4_id", "passenger4_id_no", "passenger4_name", "passenger5_age", "passenger5_berth", "passenger5_gender", "passenger5_id", "passenger5_id_no", "passenger5_name", "passenger6_age", "passenger6_berth", "passenger6_gender", "passenger6_id", "passenger6_id_no", "passenger6_name", "quota", "senior1", "senior2", "senior3", "senior4", "senior5", "senior6", "source", "ticket_type", "user_form_name"];
            for (var key in gp) {
                if (gp.hasOwnProperty(key)) {
                    var val = gp[key];
                    if (val.form_name.indexOf(tempinitial_form) != -1) {
                        var forms = new Object();
                        forms[val.form_name] = val;
                        storage.set(forms, function () {});
                    }
                }
            }
            return true;
        } catch (e) {
            $("#jsonerror_text").text("Error: Invalid Easytatkal Form");
            $(".jsonerror").show();
            return false;
        }
    }
    function jsonValidator(r, y) {
        if (r == "error") {
            alert("json error");
            return;
        }
        for (var key in y) {
            if (y.hasOwnProperty(key)) {
                var val = y[key];
                for (var ke in val) {
                    if (val.hasOwnProperty(ke)) {
                        log(val[ke]);
                    }
                }
            }
        }
    }
    var active_name_btn = "Active";
    var activate_name_btn = "Activate";
    function gentQutCh(q, k) {
        var tqsel = "selected";
        var ptsel = "selected";
        if (q == "TQ" || q == "PT") {
            if (q == "TQ") {
                ptsel = "";
            } else {
                tqsel = "";
            }
            var ht = '<select class="qtqpt" formname="' + k + '" style="border: white 0px;">';
            ht += '<option title="Tatkal" value="TQ" ' + tqsel + '>TQ</option>';
            ht += '<option  title="Premium Tatkal"  value="PT" ' + ptsel + '>PT</option>';
            ht += '</select>';
            return ht;
        } else {
            return q;
        }
    }
    function attachQtchange() {
        $(".qtqpt").change(function () {
            var fn = $(this).attr("formname");
            var val = $(this).val();
            storage.get(fn, function (d) {
                console.log(d[fn]);
                var ob = {};
                ob = d[fn];
                ob.quota = val;
                var f = {};
                f[fn] = ob;
                storage.set(f, function () {});
            });
        });
    }
    function getform() {
        $("#sample_row_form").remove();
        $("#form_history").empty();
        storage.get(null, function (gp) {
            if (gp.extension_disable == false) {
                extens_disable = true;
            }
            var table_array = new Array();
            for (var key in gp) {
                if (gp.hasOwnProperty(key)) {
                    var val = gp[key];
                    if (key.indexOf(tempinitial_form) != -1) {
                        if (key == gp.active_id) {
                            var styl = "btn-success active_btn";
                            var butn_name = active_name_btn;
                        } else {
                            var styl = "btn-primary";
                            var butn_name = activate_name_btn;
                        }
                        var row = "<tr class='showhide'><td><input type=checkbox oneasytatkal='onfocustrue' trainno='" + val.train_no_form_fill + "' coachtype='" + val.train_coach_type_form_fill + "' id='" + key + "'></td><td>" + val.user_form_name + "</td>" + "<td>" + val.source + "</td>" + "<td>" + val.destination + "</td>" + "<td>" + val.dateselector + "</td>" + "<td>" + gentQutCh(val.quota, key) + "</td><td><span class='showhide'><button type='button' class='btn " + styl + "'>" + butn_name + "</button><span></td><td><span class='triggerform'><button type='button' class='btn  btn-default trigger_easy_form'>Trigger</button><span></td></tr>";
                        table_array.push(row);
                    }
                }
            }
            $("#form_history").html(table_array.join(""));
            attachQtchange();
            $("input[type='checkbox'][oneasytatkal='onfocustrue']").each(function () {
                $(this).bind("click", function () {
                    var count = $("input:checked[type='checkbox'][oneasytatkal='onfocustrue']").length;
                    if (count > 0) {
                        log("checkbox " + count);
                        $("#export_one_by_one,#del_one_by_one").show();
                        $(".deleteAll,.exportall").hide();
                    } else {
                        log("checkbox " + count);
                        $("#export_one_by_one,#del_one_by_one").hide();
                        $(".deleteAll,.exportall").show();
                    }
                });
            });
            if ($("#getCredit").length == 0 && $("#loginM").length == 0) {
                $(".triggerform>button").unbind("click").bind("click", function () {
                    var trg = $(this).parents("tr").find("input[type='checkbox']").attr("id");
                    var torf = $(this).parents("td").prev().children(".showhide").children("button").hasClass("btn-success")
                        var r = false;
                    if (!torf) {
                        alert("This form is not active. please make this form Active.");
                    } else {
                        r = true;
                    }
                    if (r) {
                        try {
                            _tme.runtime.sendMessage({
                                x: "F",
                                data: trg
                            }, function (response) {
                                if (!response.fuc.otabs.length) {
                                    alert("https://irctc.co.in is not open in another tab. Please open https://irctc.co.in in another tab.");
                                }
                            });
                        } catch (e) {}
                    } else {}
                });
            }
            if ($("#getCredit").length == 0 && $("#loginM").length == 0) {
                $(".showhide>button").click(function () {
                    var u = $(this);
                    if (u.hasClass("btn-success")) {
                        var u = $(this);
                        u.removeClass("btn-success").addClass("btn-primary");
                        u.text(activate_name_btn);
                        var form_id = u.parents("tr").find("input[type='checkbox']").attr("id");
                        if (form_id.indexOf("easytatkal_forms") != -1) {
                            storage.remove("active_id", function () {});
                        }
                    } else {
                        var form_id = u.parents("tr").find("input[type='checkbox']").attr("id");
                        if (form_id.indexOf("easytatkal_forms") != -1) {
                            var obj = {
                                "active_id": form_id
                            };
                            storage.set(obj, function () {});
                            $("#homenotification").css("visibility", "visible");
                            setTimeout(function () {
                                $("#homenotification").css("visibility", "hidden");
                            }, 4000);
                            try {
                                storage.get("train_no", function (o) {
                                    try {
                                        o["train_no"].coach = u.parents("tr").find("input[type='checkbox']").attr("coachtype");
                                        o["train_no"].number = u.parents("tr").find("input[type='checkbox']").attr("trainno");
                                        var traindet = new Object();
                                        traindet["train_no"] = o;
                                        storage.set(o, function () {
                                            $(".train_coach_type").val(o["train_no"].coach);
                                            $(".train_no").val(o["train_no"].number);
                                        });
                                    } catch (err) {
                                        var train_no = new Object();
                                        var save = new Object();
                                        train_no.number = u.parents("tr").find("input[type='checkbox']").attr("trainno");
                                        train_no.coach = u.parents("tr").find("input[type='checkbox']").attr("coachtype");
                                        train_no.enable = false;
                                        train_no.name = "train_no";
                                        save[train_no.name] = train_no;
                                        storage.set(save, function () {
                                            $(".train_coach_type").val(train_no.coach);
                                            $(".train_no").val(train_no.number);
                                        });
                                    }
                                });
                            } catch (err) {}
                        }
                        $(".showhide button[type='button'][class*='btn-success']").each(function () {
                            $(this).removeClass("btn-success").addClass("btn-primary");
                            $(this).text(activate_name_btn);
                        });
                        u.removeClass("btn-primary").addClass("btn-success active_btn");
                        u.text(active_name_btn);
                    }
                });
            }
            if ($("#getCredit").length == 0 && $("#loginM").length == 0) {
                onclickhandler();
            }
            Train_makepay();
            ADD_C();
        });
        $("#export_one_by_one,#del_one_by_one").hide();
        $(".deleteAll,.exportall").show();
    }
    function deleteAllForms(forms) {
        var delArray_temp = new Array();
        $("input[type='checkbox'][oneasytatkal='onfocustrue']").each(function () {
            delArray_temp.push($(this).attr("id"));
        });
        storage.remove(delArray_temp, function (del_ed_items) {
            log(del_ed_items);
        });
        storage.get(null, function (gp) {
            for (var key in gp) {
                if (gp.hasOwnProperty(key)) {
                    if (delArray_temp.indexOf(gp.active_id) != -1) {
                        storage.remove("active_id", function (del_ed_items) {
                            log(del_ed_items);
                        });
                    }
                }
            }
        });
    }
    function Booknowchkbx() {
        $('#bookifavail').change(function () {
            if ($(this).is(":checked")) {
                $("#bookifavail_step_another").removeAttr("disabled");
                var t = $("#bookifavail_step_another").is(":checked:visible");
                storage.set({
                    "bookifavail": true,
                    "bookifavail_step_another": t
                }, function () {});
            } else {
                storage.set({
                    "bookifavail": false,
                    "bookifavail_step_another": false
                }, function () {});
                try {
                    $("#bookifavail_step_another").attr("disabled", "disabled");
                    document.getElementById("bookifavail_step_another").checked = false;
                } catch (err) {}
            }
            $("#bookifavail_notifi").fadeIn().fadeOut(3000); ;
        });
        $('#bookifavail_step_another').change(function () {
            if ($(this).is(":checked")) {
                $("#bookifavail_step_another").removeAttr("disabled");
                var t = $("#bookifavail").is(":checked:visible");
                storage.set({
                    "bookifavail": t,
                    "bookifavail_step_another": true
                }, function () {});
            } else {
                var t = $("#bookifavail").is(":checked:visible");
                storage.set({
                    "bookifavail": t,
                    "bookifavail_step_another": false
                }, function () {});
            }
            $("#bookifavail_notifi").fadeIn().fadeOut(5000); ;
        });
    }
    function scrollto(e) {
        try {
            var element = document.querySelector("#" + e);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'end'
            });
            setTimeout(function () {
                element.focus();
            }, 100);
        } catch (e) {}
    }
    function saveForm() {
        if ($("#form_name").val().length < 1) {
            var user_form_name = new Date().getTime();
            var form_name = tempinitial_form + user_form_name;
        } else {
            var user_form_name = $("#form_name").val()
                var form_name = tempinitial_form + user_form_name;
        }
        correctSeniorChkbox();
        var forms = new Object();
        var k = new Object();
        k.user_form_name = user_form_name;
        k.source = $("#source").val();
        if ($("#source").val().length < 1 || $("#source").val().indexOf("-") == -1) {
            alert("Enter Proper Source Station. Type station code again and select station code.");
            scrollto("source");
            return false;
        }
        if ($("#boarding").val().length > 0 && $("#boarding").val().indexOf("-") == -1) {
            alert("Enter Proper boarding Station. Type station code again and select station code.");
            scrollto("boarding");
            return false;
        }
        k.boarding = $("#boarding").val();
        k.destination = $("#destination").val();
        if ($("#destination").val().length < 1 || $("#destination").val().indexOf("-") == -1) {
            alert("Enter Proper destination Station. Type station code again and select station code.");
            scrollto("destination");
            return false;
        }
        k.dateselector = $("#dateselector").val();
        if ($("#dateselector").val().length < 5) {
            alert("Select Proper Date.");
            scrollto("dateselector");
            return false;
        }
        k.quota = $(".quota").val();
        k.gstin = $("#gstin").val();
        k.gstarea = $("#gstarea").val();
        k.gstfloorno = $("#gstfloorno").val();
        k.gstname = $("#gstname").val();
        k.gststreet = $("#gststreet").val();
        k.gstpin = $("#gstpin").val();
        var destAdd = DestAddress(k);
        if (destAdd.status) {
            k = destAdd.k;
        } else {
            return;
        }
        try {
            if ($("#dcity:visible").val() == "") {
                var c_dcity = confirm("Final Destination City is not selected, Do you want to ignore it?");
                if (!c_dcity) {
                    scrollto("dcity");
                    return;
                }
            } else if ($("#dpo:visible").val() == "") {
                var c_dcity = confirm("Final Destination Post Office is not selected, Do you want to ignore it?");
                if (!c_dcity) {
                    scrollto("dpo");
                    return;
                }
            }
        } catch (e) {}
        k.ticket_type = $(".ticket-type").val();
        k.passenger1_name = $("#passenger1_name").val();
        k.passenger1_age = $("#passenger1_age").val();
        k.passenger1_gender = $("#passenger1_gender").val();
        k.passenger1_berth = $("#passenger1_berth").val();
        k.passenger1nationality = $("#nationality_1").val();
        k.passenger1_id = $("#passenger1_id").val();
        k.passenger1_id_no = $("#passenger1_id_no").val();
        k.passenger2_name = $("#passenger2_name").val();
        k.passenger2_age = $("#passenger2_age").val();
        k.passenger2_gender = $("#passenger2_gender").val();
        k.passenger2_berth = $("#passenger2_berth").val();
        k.passenger2nationality = $("#nationality_2").val();
        k.passenger2_id = $("#passenger2_id").val();
        k.passenger2_id_no = $("#passenger2_id_no").val();
        k.passenger3_name = $("#passenger3_name").val();
        k.passenger3_age = $("#passenger3_age").val();
        k.passenger3_gender = $("#passenger3_gender").val();
        k.passenger3_berth = $("#passenger3_berth").val();
        k.passenger3nationality = $("#nationality_3").val();
        k.passenger3_id = $("#passenger3_id").val();
        k.passenger3_id_no = $("#passenger3_id_no").val();
        k.passenger4_name = $("#passenger4_name").val();
        k.passenger4_age = $("#passenger4_age").val();
        k.passenger4_gender = $("#passenger4_gender").val();
        k.passenger4_berth = $("#passenger4_berth").val();
        k.passenger4nationality = $("#nationality_4").val();
        k.passenger4_id = $("#passenger4_id").val();
        k.passenger4_id_no = $("#passenger4_id_no").val();
        if ($(".quota").val() != tatkalq) {
            k.passenger5_name = $("#passenger5_name").val();
            k.passenger5_age = $("#passenger5_age").val();
            k.passenger5_gender = $("#passenger5_gender").val();
            k.passenger5_berth = $("#passenger5_berth").val();
            k.passenger5nationality = $("#nationality_5").val();
            k.passenger5_id = $("#passenger5_id").val();
            k.passenger5_id_no = $("#passenger5_id_no").val();
            k.passenger6_name = $("#passenger6_name").val();
            k.passenger6_age = $("#passenger6_age").val();
            k.passenger6_gender = $("#passenger6_gender").val();
            k.passenger6_berth = $("#passenger6_berth").val();
            k.passenger6nationality = $("#nationality_6").val();
            k.passenger6_id = $("#passenger6_id").val();
            k.passenger6_id_no = $("#passenger6_id_no").val();
        }
        k.passenger0_AADHAAR_No = $("#passenger1_AADHAAR_No").val();
        k.passenger1_AADHAAR_No = $("#passenger2_AADHAAR_No").val();
        k.passenger2_AADHAAR_No = $("#passenger3_AADHAAR_No").val();
        k.passenger3_AADHAAR_No = $("#passenger4_AADHAAR_No").val();
        k.passenger4_AADHAAR_No = $("#passenger5_AADHAAR_No").val();
        k.passenger5_AADHAAR_No = $("#passenger6_AADHAAR_No").val();
        if ($("#mobile_no").val().length != 10) {
            alert("Please type 10 digit Mobile No");
            scrollto("mobile_no");
            return;
        }
        k.mobile_no = $("#mobile_no").val();
        k.irctc_Username = $("#irctc_Username").val();
        k.irctc_Password = $("#irctc_Password").val();
        k.berth_pref = $("#berth_pref").val();
        k.upgrade = $("#Upgradation").is(':checked');
        k.bookonlyconfirm = $("#bookonlyconfirm").is(':checked');
        k.preferredCoachID = $("#preferredCoachID").is(':checked');
        k.coachoptext = $("#coachoptext").val();
        try {
            k.train_no_form_fill = $(".train_no_form_fill").val();
            k.train_coach_type_form_fill = $(".train_coach_type_form_fill").val();
            k.bedroll1 = $("#bedroll1").is(':checked');
            k.bedroll2 = $("#bedroll2").is(':checked');
            k.bedroll3 = $("#bedroll3").is(':checked');
            k.bedroll4 = $("#bedroll4").is(':checked');
            k.bedroll5 = $("#bedroll5").is(':checked');
            k.bedroll6 = $("#bedroll6").is(':checked');
        } catch (err) {}
        k.Child1_name = $("#Child1_name").val();
        k.Child1_age = $("#Child1_age").val();
        k.Child1_gender = $("#Child1_gender").val();
        k.Child2_name = $("#Child2_name").val();
        k.Child2_age = $("#Child2_age").val();
        k.Child2_gender = $("#Child2_gender").val();
        try {
            for (var zx = 1; zx < 7; zx++) {
                k["optberth" + zx] = $("#optberth" + zx).prop("checked");
            }
        } catch (err) {}
        k.p1 = $(".p1").val();
        k.p2 = $(".p2").val();
        k.p3 = $(".p3").val();
        k.p4 = $(".p4").val();
        if ($(".quota").val() != tatkalq) {
            k.p5 = $(".p5").val();
            k.p6 = $(".p6").val();
            k.senior1 = $("#senior1").is(':checked');
            k.senior2 = $("#senior2").is(':checked');
            k.senior3 = $("#senior3").is(':checked');
            k.senior4 = $("#senior4").is(':checked');
            k.senior5 = $("#senior5").is(':checked');
            k.senior6 = $("#senior6").is(':checked');
        }
        k.form_name = form_name;
        var active_id_set = false;
        var activeidholder = "";
        storage.get(null, function (gp) {
            for (var key in gp) {
                if (gp.hasOwnProperty(key)) {
                    if (gp.active_id) {
                        active_id_set = true;
                        activeidholder = gp.active_id;
                    }
                }
            }
            if (!active_id_set) {
                forms[form_name] = k;
                forms["active_id"] = form_name;
                storage.set(forms, function () {
                    getform();
                });
                storage.get("train_no", function (o) {
                    try {
                        o["train_no"].coach = k.train_coach_type_form_fill;
                        o["train_no"].number = k.train_no_form_fill;
                        var traindet = new Object();
                        traindet["train_no"] = o;
                        storage.set(o, function () {
                            $(".train_coach_type").val(o["train_no"].coach);
                            $(".train_no").val(o["train_no"].number);
                        });
                    } catch (err) {
                        var train_no = new Object();
                        var save = new Object();
                        train_no.number = k.train_no_form_fill;
                        train_no.coach = k.train_coach_type_form_fill;
                        train_no.enable = false;
                        train_no.name = "train_no";
                        save[train_no.name] = train_no;
                        storage.set(save, function () {});
                    }
                });
            } else {
                forms[form_name] = k;
                if (activeidholder == form_name) {
                    storage.get("train_no", function (o) {
                        try {
                            o["train_no"].coach = k.train_coach_type_form_fill;
                            o["train_no"].number = k.train_no_form_fill;
                            var traindet = new Object();
                            traindet["train_no"] = o;
                            storage.set(o, function () {
                                $(".train_coach_type").val(o["train_no"].coach);
                                $(".train_no").val(o["train_no"].number);
                            });
                        } catch (err) {
                            var train_no = new Object();
                            var save = new Object();
                            train_no.number = k.train_no_form_fill;
                            train_no.coach = k.train_coach_type_form_fill;
                            train_no.enable = false;
                            train_no.name = "train_no";
                            save[train_no.name] = train_no;
                            storage.set(save, function () {});
                        }
                    });
                }
                storage.set(forms, function () {
                    getform();
                });
            }
        });
        return true;
    }
    function DestAddress(g) {
        if ($("#dAddress1:visible").length > 0) {
            g.add1 = $("#dAddress1").val();
            g.add2 = $("#dAddress2").val();
            g.add3 = $("#dAddress3").val();
            g.adpin = $("#dpincode").val();
            g.adst = $("#dstate").val();
            g.adct = $("#dcity").val();
            g.adpo = $("#dpo").val();
            if (g.add1.length < 2 || g.adpin.length != 6) {
                alert("Please enter Destination Address 1 * and Pincode");
                if (g.add1 == "") {
                    scrollto("dAddress1");
                } else if (g.adpin == "") {
                    scrollto("dpincode");
                }
                return {
                    status: false,
                    k: g
                };
            };
        }
        return {
            status: true,
            k: g
        };
    }
    function validchilage(a) {
        if (null == a || "" == a || isNaN(a))
            return !1;
        var b = 11;
        return a >= 5 && a <= b ? !0 : !1
    }
    function fillForm_easytatkal(k) {
        var allberth = '<option value="" selected="">Choose Berth</option><option value="SU">Side upper</option><option value="SL">Side lower</option><option value="L">Lower</option><option value="M">Middle</option><option value="U">Upper</option><option value="CB">Cabin</option><option value="CP">Coupe</option><option value="WS">Window Seat</option><option value="NC">No Choice</option>';
        if (document.getElementById("passenger1_berth") != null) {
            $("select[id='passenger1_berth']").html(allberth);
        }
        if (document.getElementById("passenger2_berth") != null) {
            $("select[id='passenger2_berth']").html(allberth);
        }
        if (document.getElementById("passenger3_berth") != null) {
            $("select[id='passenger3_berth']").html(allberth);
        }
        if (document.getElementById("passenger4_berth") != null) {
            $("select[id='passenger4_berth']").html(allberth);
        }
        if (document.getElementById("passenger5_berth") != null) {
            $("select[id='passenger5_berth']").html(allberth);
        }
        if (document.getElementById("passenger6_berth") != null) {
            $("select[id='passenger6_berth']").html(allberth);
        }
        $("#form_name").val(k.user_form_name);
        $("#source").val(k.source);
        $("#boarding").val(k.boarding);
        $("#destination").val(k.destination);
        $("#dateselector").val(k.dateselector);
        $(".quota").val(k.quota);
        $(".ticket-type").val(k.ticket_type);
        $("#gstin").val(k.gstin);
        $("#gstarea").val(k.gstarea);
        $("#gstfloorno").val(k.gstfloorno);
        $("#gstname").val(k.gstname);
        $("#gststreet").val(k.gststreet);
        $("#gstpin").val(k.gstpin);
        try {
            $("#dAddress1").val(k.add1);
            $("#dAddress2").val(k.add2);
            $("#dAddress3").val(k.add3);
            $("#dpincode").val(k.adpin);
            $("#dpincode")[0].dispatchEvent(new Event("keyup"));
            setTimeout(function () {
                $("#dstate").val(k.adst);
            }, 2000);
            setTimeout(function () {
                $("#dcity").val(k.adct);
                $("#dcity")[0].dispatchEvent(new Event("change"));
            }, 3000);
            setTimeout(function () {
                $("#dpo").val(k.adpo);
            }, 3500);
        } catch (err) {}
        $("#passenger1_name").val(k.passenger1_name);
        $("#passenger1_age").val(k.passenger1_age);
        $("#passenger1_gender").val(k.passenger1_gender);
        $("#passenger1_berth").val(k.passenger1_berth);
        $("#passenger1_id").val(k.passenger1_id);
        $("#passenger1_id_no").val(k.passenger1_id_no);
        if (k.passenger1nationality != null)
            $("#nationality_1").val(k.passenger1nationality);
        document.getElementById('senior1').checked = k.senior1;
        $("#passenger2_name").val(k.passenger2_name);
        $("#passenger2_age").val(k.passenger2_age);
        $("#passenger2_gender").val(k.passenger2_gender);
        $("#passenger2_berth").val(k.passenger2_berth);
        $("#passenger2_id").val(k.passenger2_id);
        $("#passenger2_id_no").val(k.passenger2_id_no);
        if (k.passenger2nationality != null)
            $("#nationality_2").val(k.passenger2nationality);
        document.getElementById('senior2').checked = k.senior2;
        $("#passenger3_name").val(k.passenger3_name);
        $("#passenger3_age").val(k.passenger3_age);
        $("#passenger3_gender").val(k.passenger3_gender);
        $("#passenger3_berth").val(k.passenger3_berth);
        $("#passenger3_id").val(k.passenger3_id);
        $("#passenger3_id_no").val(k.passenger3_id_no);
        if (k.passenger3nationality != null)
            $("#nationality_3").val(k.passenger3nationality);
        document.getElementById('senior3').checked = k.senior3;
        $("#passenger4_name").val(k.passenger4_name);
        $("#passenger4_age").val(k.passenger4_age);
        $("#passenger4_gender").val(k.passenger4_gender);
        $("#passenger4_berth").val(k.passenger4_berth);
        $("#passenger4_id").val(k.passenger4_id);
        $("#passenger4_id_no").val(k.passenger4_id_no);
        if (k.passenger4nationality != null)
            $("#nationality_4").val(k.passenger4nationality);
        document.getElementById('senior4').checked = k.senior4;
        $("#passenger5_name").val(k.passenger5_name);
        $("#passenger5_age").val(k.passenger5_age);
        $("#passenger5_gender").val(k.passenger5_gender);
        $("#passenger5_berth").val(k.passenger5_berth);
        $("#passenger5_id").val(k.passenger5_id);
        $("#passenger5_id_no").val(k.passenger5_id_no);
        if (k.passenger5nationality != null)
            $("#nationality_5").val(k.passenger5nationality);
        document.getElementById('senior5').checked = k.senior5;
        $("#passenger6_name").val(k.passenger6_name);
        $("#passenger6_age").val(k.passenger6_age);
        $("#passenger6_gender").val(k.passenger6_gender);
        $("#passenger6_berth").val(k.passenger6_berth);
        $("#passenger6_id").val(k.passenger6_id);
        $("#passenger6_id_no").val(k.passenger6_id_no);
        if (k.passenger6nationality != null)
            $("#nationality_6").val(k.passenger6nationality);
        document.getElementById('senior6').checked = k.senior6;
        $("#mobile_no").val(k.mobile_no);
        $("#irctc_Username").val(k.irctc_Username);
        $("#irctc_Password").val(k.irctc_Password);
        $("#berth_pref").val(k.berth_pref);
        try {
            for (var zx = 1; zx < 7; zx++) {
                $("#optberth" + zx).prop("checked", k["optberth" + zx]);
                if (validchilage(k["passenger" + zx + "_age"])) {
                    $("#optberth" + zx).prop("disabled", false);
                } else {
                    $("#optberth" + zx).prop("disabled", true);
                    $("#optberth" + zx).prop("checked", true);
                }
            }
        } catch (err) {
            for (var zx = 1; zx < 7; zx++) {
                $("#optberth" + zx).prop("disabled", true);
                $("#optberth" + zx).prop("checked", true);
            }
        }
        try {
            $("#passenger1_AADHAAR_No").val(k.passenger0_AADHAAR_No);
            $("#passenger2_AADHAAR_No").val(k.passenger1_AADHAAR_No);
            $("#passenger3_AADHAAR_No").val(k.passenger2_AADHAAR_No);
            $("#passenger4_AADHAAR_No").val(k.passenger3_AADHAAR_No);
            $("#passenger5_AADHAAR_No").val(k.passenger4_AADHAAR_No);
            $("#passenger6_AADHAAR_No").val(k.passenger5_AADHAAR_No);
        } catch (err) {}
        try {
            document.getElementById('Upgradation').checked = k.upgrade;
            if (k.bookonlyconfirm == null) {
                document.getElementById('bookonlyconfirm').checked = false;
                document.getElementById('preferredCoachID').checked = false;
                document.getElementById('coachoptext').value = "";
                $("#coachoptext").hide();
            } else {
                document.getElementById('bookonlyconfirm').checked = k.bookonlyconfirm;
                if (k.preferredCoachID) {
                    document.getElementById('preferredCoachID').checked = k.preferredCoachID;
                    $("#coachoptext").show();
                    document.getElementById('coachoptext').value = k.coachoptext;
                } else {
                    document.getElementById('preferredCoachID').checked = false;
                    $("#coachoptext").hide();
                    document.getElementById('coachoptext').value = "";
                }
            }
        } catch (err) {
            document.getElementById('bookonlyconfirm').checked = false;
            document.getElementById('preferredCoachID').checked = false;
            document.getElementById('coachoptext').value = "";
            $("#coachoptext").hide();
        }
        try {
            if (k.train_no_form_fill != null) {
                $(".train_no_form_fill").val(k.train_no_form_fill);
            }
            if (k.train_coach_type_form_fill != null) {
                $(".train_coach_type_form_fill").val(k.train_coach_type_form_fill);
            }
            document.getElementById('bedroll1').checked = k.bedroll1;
            document.getElementById('bedroll2').checked = k.bedroll2;
            document.getElementById('bedroll3').checked = k.bedroll3;
            document.getElementById('bedroll4').checked = k.bedroll4;
            document.getElementById('bedroll5').checked = k.bedroll5;
            document.getElementById('bedroll6').checked = k.bedroll6;
        } catch (err) {}
        $("#Child1_name").val(k.Child1_name);
        $("#Child1_age").val(k.Child1_age);
        $("#Child1_gender").val(k.Child1_gender);
        $("#Child2_name").val(k.Child2_name);
        $("#Child2_age").val(k.Child2_age);
        $("#Child2_gender").val(k.Child2_gender);
        $(".p1").val(k.p1);
        $(".p2").val(k.p2);
        $(".p3").val(k.p3);
        $(".p4").val(k.p4);
        $(".p5").val(k.p5);
        $(".p6").val(k.p6);
        switch (k.quota) {
        case "PT":
            $(".senior1,.senior2,.senior3,.senior4,.passenger5,.passenger6,.p_5,.p_6").hide();
            $(".gn").show();
            $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").parent("div").hide();
            $("#passenger5_name,#passenger6_name,#passenger5_age,#passenger6_age,#passenger5_id_no,#passenger6_id_no").val("");
            break;
        case tatkalq:
            $(".senior1,.senior2,.senior3,.senior4,.passenger5,.passenger6,.p_5,.p_6").hide();
            $(".gn").show();
            $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").parent("div").hide();
            $("#passenger5_name,#passenger6_name,#passenger5_age,#passenger6_age,#passenger5_id_no,#passenger6_id_no").val("");
            break;
        case "GN":
            $(".senior1,.senior2,.senior3,.senior4,.passenger5,.passenger6,.p_5,.p_6").show();
            $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").parent("div").show();
            $(".gn").hide();
            break;
        case "LD":
            $(".senior1,.senior2,.senior3,.senior4,.passenger5,.passenger6,.p_5,.p_6").show();
            $("#passenger1_AADHAAR_No,#passenger2_AADHAAR_No,#passenger3_AADHAAR_No,#passenger4_AADHAAR_No,#passenger5_AADHAAR_No,#passenger6_AADHAAR_No").parent("div").show();
            $(".gn").hide();
            break;
        default:
            break;
        }
        try {
            var script = document.createElement('script');
            script.textContent = "if(typeof(checknationality)!='undefined'){checknationality();}";
            (document.head || document.documentElement).appendChild(script);
            script.parentNode.removeChild(script);
        } catch (err) {}
    }
    function ADD_C() {
        if ($("#showdatasaved").length) {
            if ($("#getCredit").length == 0 && $("#loginM").length == 0) {
                var add_btn = $(".add_btn");
                var add_url = $(".add_url_txt");
                add_btn.off("click").on("click", function () {
                    this.disabled = true;
                    if (add_url.val().length > 4) {
                        if (add_url.val().toLowerCase().indexOf("easytatkal.com") != -1) {
                            add_url.val("");
                            alert("Error: Sorry you cannot add easytatkal web address. Try with other web address.");
                            this.disabled = false;
                            add_url.focus();
                            return;
                        }
                        $("#notifiadd_url").hide();
                        var data = new Object();
                        var key = new Object();
                        var uri = new URI(add_url.val());
                        var url_uri = uri.scheme() + "://" + uri.hostname() + uri.pathname();
                        if (url_uri.indexOf("(") != -1) {
                            key.url = url_uri.split("(")[0];
                        } else if (url_uri.indexOf(";") != -1) {
                            key.url = url_uri.split(";")[0];
                        } else if (url_uri.indexOf("%") != -1) {
                            key.url = url_uri.split("%")[0];
                        } else {
                            key.url = uri.scheme() + "://" + uri.hostname() + uri.pathname();
                        }
                        var name = new Date().getTime();
                        key.saved = false;
                        key.data = {};
                        key.type = "CS_FORM";
                        key.name = name;
                        key.enable = false;
                        data[name] = key;
                        storage.set(data, function (gp) {});
                    } else {
                        $("#notifiadd_url").show();
                    }
                    load_CS_FORM_table();
                    this.disabled = false;
                    add_url.val("");
                });
            }
            try {
                clearInterval(setInt);
            } catch (err) {}
            try {
                load_CS_FORM_table();
                setIn = setInterval(function () {
                        load_CS_FORM_table();
                    }, 90000);
            } catch (err) {}
        } else {
            storage.get(null, function (gp) {
                if (gp.extension_disable != null && gp.extension_disable == false) {
                    var table = new Array();
                    var fillbox = true;
                    for (var key in gp) {
                        if (gp.hasOwnProperty(key)) {
                            var val = gp[key];
                            try {
                                if (val.type == "CS_FORM" && val.saved == false && (document.location.href.indexOf(val.url) != -1)) {
                                    if (val.url.indexOf("(") != -1) {
                                        C_f_i(val.name, val.url.split("(")[0]);
                                    } else {
                                        C_f_i(val.name, val.url);
                                    }
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
                                            if (val.data.hasOwnProperty(keydata)) {}
                                        }
                                    }
                                } catch (e) {}
                            }
                        }
                    }
                }
            });
        }
    };
    function load_CS_FORM_table() {
        storage.get(null, function (gp) {
            try {
                if (gp.submitorrefresh == null) {
                    var yh = new Object();
                    yh["submitorrefresh"] = "refresh";
                    storage.set(yh, function () {});
                }
            } catch (err) {}
            try {
                if (gp.submitorrefresh != null) {
                    $("#submitorrefresh").val(gp.submitorrefresh);
                }
            } catch (err) {}
            try {
                if (gp.gnint != null) {
                    $("#gnint").val(gp.gnint);
                }
            } catch (err) {}
            try {
                if (gp.acint != null) {
                    $("#acint").val(gp.acint);
                } else {
                    $("#acint").val("5");
                }
            } catch (err) {}
            try {
                if (gp.slint != null) {
                    $("#slint").val(gp.slint);
                }
            } catch (err) {}
            try {
                if (gp.payselvalue != null) {
                    loadPayment(gp.payselvalue);
                }
            } catch (err) {}
            try {
                if (gp.elevensharp != null) {
                    $("#elevensharp").val(gp.elevensharp);
                }
            } catch (err) {}
            try {
                if (gp.tensess != null) {
                    $("#tensess").val(gp.tensess);
                }
            } catch (err) {}
            try {
                if (gp.ninesess != null) {
                    $("#ninesess").val(gp.ninesess);
                }
            } catch (err) {}
            try {
                if (gp.tensharp != null) {
                    $("#tensharp").val(gp.tensharp);
                }
            } catch (err) {}
            try {
                if (gp.eightsess != null) {
                    $("#eightsess").val(gp.eightsess);
                }
            } catch (err) {}
            try {
                if (gp.eightsharp != null) {
                    $("#eightsharp").val(gp.eightsharp);
                }
            } catch (err) {}
            try {
                if (gp.bookifavail) {
                    document.getElementById("bookifavail").checked = true;
                } else {
                    document.getElementById("bookifavail_step_another").checked = false;
                    $("#bookifavail_step_another").attr("disabled", "disabled");
                }
            } catch (err) {}
            try {
                if (gp.bookifavail_step_another && gp.bookifavail) {
                    document.getElementById("bookifavail_step_another").checked = true;
                }
            } catch (err) {}
            var table = new Array();
            for (var key in gp) {
                if (gp.hasOwnProperty(key)) {
                    var val = gp[key];
                    if (val != null && val.type == "CS_FORM") {
                        var dataArray = new Array();
                        for (var keydata in val.data) {
                            if (val.data.hasOwnProperty(keydata)) {
                                try {
                                    if (val.data[keydata].recognize == null) {
                                        dataArray.push(val.data[keydata].value);
                                    } else
                                        if (val.data[keydata].recognize.toLowerCase() != "password") {
                                            dataArray.push(val.data[keydata].value);
                                        } else if (val.data[keydata].recognize.toLowerCase() == "password") {
                                            dataArray.push("****");
                                        }
                                } catch (e) {}
                            }
                        }
                        if (val != null && val.type == "CS_FORM") {
                            if (val.enable) {
                                var status_cs_form = "<button type='button' for='" + val.name + "' class='btn btn-success status_cs_form'>Active</button>";
                            } else {
                                if (dataArray.length > 0)
                                    var status_cs_form = "<button type='button' for='" + val.name + "' class='btn btn-danger status_cs_form'>Activate</button>";
                                else
                                    var status_cs_form = "<button type='button' for='" + val.name + "' class='btn btn-danger status_cs_form'>Activate</button>&nbsp;&nbsp;<span for='" + val.name + "' class='reload_cs_form glyphicon glyphicon-repeat'></span>";
                            }
                            table.push("<tr><td>" + val.url + "</td><td width='190px'>" + dataArray.join(" - ") + "</td><td>" + status_cs_form + "</td><td><button type='button'  for='" + val.name + "' title='manually trigger autofill' class='btn btn-primary trigger_cs_form'>Trigger</button><button type='button'  for='" + val.name + "' class='btn btn-primary clone_cs_form'>Clone</button><button type='button'  for='" + val.name + "' class='btn btn-primary edit_cs_form'>Edit</button><button type='button'  for='" + val.name + "' class='btn btn-primary delete_cs_form'>Delete</button></td></tr>");
                        }
                    }
                }
            }
            $("#showdatasaved").empty().html(table.join(""));
            if ($("#getCredit").length == 0 && $("#loginM").length == 0) {
                status_cs_form_click();
                reload_cs_form();
                delete_cs_form();
                edit_cs_form();
                clone_cs_form();
                trigger_cs_form();
                loadTrainno(gp);
            } else {
                $('#showdatasaved button').each(function () {
                    $(this).click(function () {
                        if (parseInt($('#x-entry-point').val()) > 0) {
                            $('#ask_for_use').modal();
                        } else {
                            $('#install_permssion').modal();
                        }
                    });
                });
                $('#form_history button').each(function () {
                    $(this).click(function () {
                        if (parseInt($('#x-entry-point').val()) > 0) {
                            $('#ask_for_use').modal();
                        } else {
                            $('#install_permssion').modal();
                        }
                    });
                });
            }
        });
    }
    function trigger_cs_form() {
        $(".trigger_cs_form").each(function () {
            $(this).off("click").on("click", function () {
                var btn_click = $(this);
                btn_click.disable = true;
                var y = $(this).parent('td').prev().eq(0);
                var torf = y.find('button').hasClass('btn-success');
                if (torf) {
                    var r = confirm("Do you want to fill this form?");
                    if (r == true) {
                        btn_click.disable = false;
                        var key_rt = btn_click.attr("for");
                        try {
                            _tme.runtime.sendMessage({
                                x: "T",
                                data: key_rt
                            }, function (response) {
                                if (!response.fuc.f) {
                                    alert(response.fuc.db.url + " ->> This form is not open in another tab.\n Or \n You should remove folders path from long website address eg: http://easytatkal.com/v/long/example to http://easytatkal.com/  ");
                                }
                            });
                        } catch (e) {}
                    }
                } else {
                    alert("!! This form is not Active, Click Activate button !!");
                }
            });
        });
    }
    function clone_cs_form() {
        $(".clone_cs_form").each(function () {
            $(this).off("click").on("click", function () {
                var btn_click = $(this);
                btn_click.disable = true;
                var r = confirm("Do you want to make the duplicate of this form ?");
                if (r == true) {
                    btn_click.disable = false;
                    storage.get(btn_click.attr("for"), function (o) {
                        var clonename = new Date().getTime();
                        o[btn_click.attr("for")].name = clonename;
                        var data = new Object();
                        data[clonename] = o[btn_click.attr("for")];
                        storage.set(data, function () {
                            load_CS_FORM_table();
                        });
                    });
                }
            });
        });
    }
    function delete_cs_form() {
        $(".delete_cs_form").each(function () {
            $(this).off("click").on("click", function () {
                var btn_click = $(this);
                btn_click.disable = true;
                var r = confirm("Do you want to delete this form ?");
                if (r == true) {
                    btn_click.disable = false;
                    storage.remove(btn_click.attr("for"), function () {
                        load_CS_FORM_table();
                    });
                }
            });
        });
    }
    function edit_cs_form() {
        $("#saveeditedcsform").off("click").on("click", function () {
            var formid = $("#saveeditedcsform").attr("for");
            storage.get(formid, function (o) {
                var val = o[formid];
                for (var keydata in val.data) {
                    if (val.data.hasOwnProperty(keydata)) {
                        if ($(".editcsModal_text").find("[id='" + keydata + "']") != null && $(".editcsModal_text").find("[id='" + keydata + "']").length != 0) {
                            if ($(".editcsModal_text").find("[id='" + keydata + "']").parents(".row").hasClass("has-error")) {
                                delete o[formid].data[keydata];
                            } else {
                                o[formid].data[keydata].value = $(".editcsModal_text").find("[id='" + keydata + "']").val();
                            }
                        }
                    }
                }
                o[formid].url = $("#editcsModal_url_").val();
                var edit_form = new Object();
                edit_form[formid] = o[formid];
                storage.set(edit_form, function () {
                    load_CS_FORM_table();
                });
            });
        });
        $(".edit_cs_form").each(function () {
            $(this).off("click").on("click", function () {
                var btn_click = $(this);
                btn_click.disable = true;
                var holderformdata = new Array();
                btn_click.disable = false;
                storage.get(btn_click.attr("for"), function (o) {
                    var selectSelect = new Object();
                    var val = o[btn_click.attr("for")];
                    if (val.type == "CS_FORM" && val.saved == true) {
                        for (var keydata in val.data) {
                            if (val.data.hasOwnProperty(keydata)) {
                                if (val.data[keydata].tagname == null) {
                                    holderformdata.push('<div class="row">');
                                    holderformdata.push('<div class="col-sm-10">');
                                    holderformdata.push("<input type=\"" + val.data[keydata].recognize + "\" class=\"form-control\" id=\"" + keydata + "\" value=\"" + val.data[keydata].value + "\" >");
                                    holderformdata.push("</div>");
                                    holderformdata.push('<div class="col-sm-1">');
                                    holderformdata.push('<span class=\"glyphicon glyphicon-remove\" ></span>');
                                    holderformdata.push('</div></div>');
                                } else if (val.data[keydata].tagname.toLowerCase() == "select") {
                                    holderformdata.push('<div class="row">');
                                    holderformdata.push('<div class="col-sm-10">');
                                    if (val.data[keydata].html == null) {
                                        holderformdata.push("<small>Please delete and save new form. In this version you can edit this value. </small><strong>" + val.data[keydata].value + "</strong>");
                                    } else {
                                        holderformdata.push("<select  class=\"form-control\" id=\"" + keydata + "\" value=\"" + val.data[keydata].value + "\" >" + val.data[keydata].html + "</select>");
                                    }
                                    holderformdata.push("</div>");
                                    holderformdata.push('<div class="col-sm-1">');
                                    holderformdata.push('<span class=\"glyphicon glyphicon-remove\" ></span>');
                                    holderformdata.push('</div></div>');
                                    selectSelect[keydata] = val.data[keydata].value;
                                } else if (val.data[keydata].tagname == "textarea") {
                                    holderformdata.push('<div class="row">');
                                    holderformdata.push('<div class="col-sm-10">');
                                    holderformdata.push("<textarea class=\"form-control\" id=\"" + keydata + "\"  >" + val.data[keydata].value + "</textarea>");
                                    holderformdata.push("</div>");
                                    holderformdata.push('<div class="col-sm-1">');
                                    holderformdata.push('<span class=\"glyphicon glyphicon-remove\"></span>');
                                    holderformdata.push('</div></div>');
                                } else
                                    if (val.data[keydata].tagname == "input" && val.data[keydata].recognize == "submit") {
                                        holderformdata.push('<div class="row">');
                                        holderformdata.push('<div class="col-sm-10">');
                                        holderformdata.push("<input disabled type=\"" + val.data[keydata].recognize + "\" class=\"form-control\" id=\"" + keydata + "\" value=\"" + val.data[keydata].value + "\" >");
                                        holderformdata.push("</div>");
                                        holderformdata.push('<div class="col-sm-1">');
                                        holderformdata.push('<span class=\"glyphicon glyphicon-remove\"></span>');
                                        holderformdata.push('</div></div>');
                                    } else if (val.data[keydata].tagname == "input" && val.data[keydata].recognize != "submit") {
                                        holderformdata.push('<div class="row">');
                                        holderformdata.push('<div class="col-sm-10">');
                                        holderformdata.push("<input  type=\"" + val.data[keydata].recognize + "\" class=\"form-control\" id=\"" + keydata + "\" value=\"" + val.data[keydata].value + "\" >");
                                        holderformdata.push("</div>");
                                        holderformdata.push('<div class="col-sm-1">');
                                        holderformdata.push('<span class=\"glyphicon glyphicon-remove\"></span>');
                                        holderformdata.push('</div></div>');
                                    }
                            }
                        }
                        $(".editcsModal_text").html("<label>Form data</label>" + holderformdata.join(""));
                        $("#saveeditedcsform").attr("for", btn_click.attr("for"));
                        $("#editcsModal_url_").val(val.url);
                        $("#editcsModal").modal();
                        $(".glyphicon-remove").each(function () {
                            $(this).click(function () {
                                $(this).parents(".row").addClass("has-error");
                            });
                        })
                        try {
                            for (var eachselect in selectSelect) {
                                if (selectSelect.hasOwnProperty(eachselect)) {
                                    $(".editcsModal_text").find("[id='" + eachselect + "']").val(selectSelect[eachselect]);
                                }
                            }
                        } catch (err) {}
                    } else {
                        alert("There are no data to edit for this form.");
                    }
                });
            });
        });
    }
    function reload_cs_form() {
        $(".reload_cs_form").each(function () {
            $(this).off("click").on("click", function () {
                load_CS_FORM_table();
            });
        });
    }
    function loadTrainno(gp) {
        try {
            $(".train_no").val(gp["train_no"].number);
            $(".train_coach_type").val(gp["train_no"].coach);
            if (gp["train_no"].enable) {
                $("div[class*='onoff_trainno'][link='onoff']").find("button:first-child").removeClass("btn-default").addClass("btn-success");
                $("div[class*='onoff_trainno'][link='onoff']").find("button:nth-child(2)").removeClass("btn-danger").addClass("btn-default");
            }
        } catch (err) {}
        try {
            if (gp["makepay"].enable) {
                $("div[class*='makepay'][link='onoff']").find("button:first-child").removeClass("btn-default").addClass("btn-success");
                $("div[class*='makepay'][link='onoff']").find("button:nth-child(2)").removeClass("btn-danger").addClass("btn-default");
            }
        } catch (err) {}
        try {
            if (gp["findtrain"].enable) {
                $("div[class*='findtrain'][link='onoff']").find("button:first-child").removeClass("btn-default").addClass("btn-success");
                $("div[class*='findtrain'][link='onoff']").find("button:nth-child(2)").removeClass("btn-danger").addClass("btn-default");
            }
        } catch (err) {}
        try {
            if (gp["loginbtn"].enable) {
                $("div[class*='loginbtn'][link='onoff']").find("button:first-child").removeClass("btn-default").addClass("btn-success");
                $("div[class*='loginbtn'][link='onoff']").find("button:nth-child(2)").removeClass("btn-danger").addClass("btn-default");
            }
        } catch (err) {}
        try {
            if (gp["paymentSelection"].enable) {
                $("div[class*='paymentSelection'][link='onoff']").find("button:first-child").removeClass("btn-default").addClass("btn-success");
                $("div[class*='paymentSelection'][link='onoff']").find("button:nth-child(2)").removeClass("btn-danger").addClass("btn-default");
            }
        } catch (err) {}
        try {
            if (gp["autosubmitpaymentx"].enable) {
                var btn = ".payautosub";
                $(btn).find("button").eq(0).removeClass("btn-default").addClass("btn-success");
                $(btn).find("button").eq(1).removeClass("btn-danger").addClass("btn-default");
            }
        } catch (err) {}
        try {
            $("#vikalp-id").prop("checked", gp["vikalp-id"]);
        } catch (err) {}
        try {
            $("#cpv-id").prop("checked", gp["cpv-id"]);
        } catch (err) {}
        try {
            $("#nextbtn-id").prop("checked", gp["nextbtn-id"]);
        } catch (err) {}
        try {
            $("#insurance-id").prop("checked", gp["insurance-id"]);
        } catch (err) {}
        try {
            $("#gds-id").prop("checked", gp["gds-id"]);
        } catch (err) {}
        try {
            $("#flexi-id").prop("checked", gp["flexi-id"]);
        } catch (err) {}
    }
    function status_cs_form_click() {
        $(".status_cs_form[for]").each(function () {
            $(this).off("click").on("click", function () {
                var btn_click = $(this);
                btn_click.disable = true;
                if (btn_click.text().indexOf('Active') != -1) {
                    storage.get(btn_click.attr("for"), function (gp) {
                        gp[btn_click.attr("for")].enable = false;
                        storage.set(gp, function () {
                            btn_click.disable = false;
                            btn_click.removeClass("btn-success").addClass("btn-danger").text("Activate");
                        });
                    });
                } else if (btn_click.text().indexOf('Activate') != -1) {
                    storage.get(btn_click.attr("for"), function (gp) {
                        var count = false;
                        for (var key in gp[btn_click.attr("for")].data) {
                            if (gp[btn_click.attr("for")].data.hasOwnProperty(key)) {
                                count = true;
                            }
                        }
                        if (count) {
                            gp[btn_click.attr("for")].enable = true;
                            storage.set(gp, function () {
                                btn_click.disable = false;
                                btn_click.removeClass("btn-danger").addClass("btn-success").text("Active");
                            });
                        } else {
                            alert("Info Easytatkal: There are no saved data for this form.\n To save form open the web address and start typing in textbox.\n The textbox border will go green on saving. If textbox border doesnot go green then open the form webpage again(or reload webpage but in somecase reloading doesnt work like HDFC) and please try again.Once the form is filled you can edit it in easytatkal.");
                        }
                    });
                }
            });
        });
    }
    function Train_makepay() {
        if ($("#showdatasaved").length) {
            if ($("#getCredit").length == 0 && $("#loginM").length == 0) {
                $("div[link='onoff']").unbind("click").bind("click", function (event) {
                    if ($(this).find("button:first-child").attr("class").indexOf("btn-default") != -1) {
                        if ($(this).hasClass("onoff_trainno")) {
                            var train_no = new Object();
                            var save = new Object();
                            train_no.number = $(".train_no").val();
                            train_no.coach = $(".train_coach_type").val();
                            train_no.enable = true;
                            train_no.name = "train_no";
                            save["train_no"] = train_no;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("makepay")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = true;
                            makepay.enable = true;
                            makepay.name = "makepay";
                            save["makepay"] = makepay;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("findtrain")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = true;
                            makepay.enable = true;
                            makepay.name = "findtrain";
                            save["findtrain"] = makepay;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("loginbtn")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = true;
                            makepay.enable = true;
                            makepay.name = "loginbtn";
                            save["loginbtn"] = makepay;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("paymentSelection")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = true;
                            makepay.enable = true;
                            makepay.bank = $("#payGatewaySel").val();
                            makepay.name = "paymentSelection";
                            save["paymentSelection"] = makepay;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("payautosub")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = true;
                            makepay.enable = true;
                            makepay.name = "autosubmitpaymentx";
                            save["autosubmitpaymentx"] = makepay;
                            storage.set(save, function () {});
                        }
                        $(this).find("button:first-child").removeClass("btn-default").addClass("btn-success");
                        $(this).find("button:nth-child(2)").removeClass("btn-danger").addClass("btn-default");
                    } else {
                        $(this).find("button:first-child").removeClass("btn-success").addClass("btn-default");
                        $(this).find("button:nth-child(2)").removeClass("btn-default").addClass("btn-danger");
                        if ($(this).hasClass("onoff_trainno")) {
                            var train_no = new Object();
                            var save = new Object();
                            train_no.number = $(".train_no").val();
                            train_no.coach = $(".train_coach_type").val();
                            train_no.enable = false;
                            train_no.name = "train_no";
                            save["train_no"] = train_no;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("makepay")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = false;
                            makepay.enable = false;
                            makepay.name = "makepay";
                            save["makepay"] = makepay;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("findtrain")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = false;
                            makepay.enable = false;
                            makepay.name = "findtrain";
                            save["findtrain"] = makepay;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("loginbtn")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = false;
                            makepay.enable = false;
                            makepay.name = "loginbtn";
                            save["loginbtn"] = makepay;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("paymentSelection")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = false;
                            makepay.enable = false;
                            makepay.bank = $("#payGatewaySel").val();
                            makepay.name = "paymentSelection";
                            save["paymentSelection"] = makepay;
                            storage.set(save, function () {});
                        } else if ($(this).hasClass("payautosub")) {
                            var makepay = new Object();
                            var save = new Object();
                            makepay.click = false;
                            makepay.enable = false;
                            makepay.name = "autosubmitpaymentx";
                            save["autosubmitpaymentx"] = makepay;
                            storage.set(save, function () {});
                        }
                    }
                });
                $(".train_no").keyup(function () {
                    if ($.isNumeric($(this).val()) && $(this).val().length > 4) {
                        if ($("div[class*='onoff_trainno'][link='onoff']").find("button:first-child").attr("class").indexOf("btn-default") != -1) {
                            var enable = false;
                        } else {
                            var enable = true;
                        }
                        var train_no = new Object();
                        var save = new Object();
                        train_no.number = $(this).val();
                        train_no.coach = $(".train_coach_type").val();
                        train_no.enable = enable;
                        train_no.name = "train_no";
                        save[train_no.name] = train_no;
                        storage.set(save, function () {});
                    }
                });
                $("#payGatewaySel").change(function () {
                    if ($(".paymentSelection button").attr("class").indexOf("btn-default") != -1) {
                        var enable = false;
                    } else {
                        var enable = true;
                    }
                    var paymentSelection = new Object();
                    var save = new Object();
                    paymentSelection.bank = $(this).val();
                    paymentSelection.enable = enable;
                    paymentSelection.name = "paymentSelection";
                    save["paymentSelection"] = paymentSelection;
                    storage.set(save, function () {});
                });
                $(".train_coach_type").change(function () {
                    if ($.isNumeric($(".train_no").val()) && $(".train_no").val().length > 4) {
                        if ($("div[class*='onoff_trainno'][link='onoff']").find("button:first-child").attr("class").indexOf("btn-default") != -1) {
                            var enable = false;
                        } else {
                            var enable = true;
                        }
                        var train_no = new Object();
                        var save = new Object();
                        train_no.number = $(".train_no").val();
                        train_no.coach = $(this).val();
                        train_no.enable = enable;
                        train_no.name = "train_no";
                        save[train_no.name] = train_no;
                        storage.set(save, function () {});
                    }
                });
            }
        }
    };
    $(".waitloading").hide();
    function loadPayment(v) {
        return;
        $(".list-gp-menu-xsd").find("a[class*='active']").removeClass("active");
        $(".list-gp-tab-xsd").find("div[class*='active']").removeClass("active");
        var y = $("#newpaymentgateway").find("[value='" + v + "']").parents(".bhoechie-tab-content").attr("class")
            y = y.replace("active", "")
            var aggregator = y.replace("bhoechie-tab-content", "").trim();
        $(".list-gp-menu-xsd").find("a[page='" + aggregator + "']").addClass("active");
        $(".list-gp-menu-xsd").find("a[page='" + aggregator + "']").addClass("active");
        $("." + aggregator).addClass("active");
        $("#newpaymentgateway").find("[value='" + v + "']").click();
        $("#newpaymentgateway").find("[value='" + v + "']").parents("select").val(v);
        var id = $("#newpaymentgateway").find("[value='" + v + "']").parents("select").attr("id");
        if (id == null) {
            id = $("#newpaymentgateway").find("[value='" + v + "']");
            var event = new Event('click');
            id.dispatchEvent(event);
        } else {
            var event = new Event('change');
            document.getElementById(id).dispatchEvent(event);
        }
    }
    function clearpy() {
        $(".bhoechie-tab-content.AGGREGATOR").find(".tabspayment").empty();
        $(".bhoechie-tab-content.UPI_VPA").find(".tabspayment").empty();
        $(".bhoechie-tab-content.DEBIT_CARD").find(".tabspayment").empty();
        $(".bhoechie-tab-content.NETBANKING").find(".tabspayment").empty();
        $(".bhoechie-tab-content.SCAN_AND_PAY").find(".tabspayment").empty(); ;
        $(".bhoechie-tab-content.CASH_CARD").find(".tabspayment").empty();
        $(".bhoechie-tab-content.IRCTC_PREPAID").find(".tabspayment").empty();
        $(".bhoechie-tab-content.E_WALLET").find(".tabspayment").empty();
        $(".bhoechie-tab-content.CREDIT_CARD").find(".tabspayment").empty();
        $(".bhoechie-tab-content.COD").find(".tabspayment").empty();
        $(".bhoechie-tab-content.IRCTC_PREPAID").find(".tabspayment").empty();
    }
    $("#oneclickdePass").click(function () {
        var tf = confirm("Do you want to delete all saved details of payment?");
        if (tf) {
            storage.get(null, function (f) {
                var arr = $.map(f, function (v, k) {
                        if (k.indexOf("payment_") == 0) {
                            return k;
                        }
                    })
                    storage.remove(arr, function () {
                        clearpy();
                    })
            })
        }
    });
}
if (window.location.hostname.indexOf("easytatkal.com") != -1) {
    function loadLocalStorage() {
        try {
            var _sa = localStorage.getItem('cooki');
            var zsx = atob(_sa.substring(13, _sa.length - 22));
            var MuP = [JSON.parse(zsx)];
            window.Multiple_Payment_Service = MuP[0];
        } catch (e) {}
    }
    loadLocalStorage();
    var targetNodes = $(".list-gp-tab-xsd");
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var myObserver = new MutationObserver(mutationHandler);
    var obsConfig = {
        childList: true,
        subtree: true
    };
    targetNodes.each(function () {
        myObserver.observe(this, obsConfig);
    });
    function mutationHandler(mutationRecords) {
        console.info("mutationHandler:");
        console.log(mutationRecords);
        mutationRecords.forEach(function (mutation) {
            var t = $(mutation.target).is("div.tabspayment");
            var addednodes = mutation.addedNodes.length;
            if (t && (addednodes > 0)) {
                var valueofcompany;
                if ($("#" + mutation.target.id).parent().find("input[onclick*='showform']:checked").length == 1) {
                    valueofcompany = $("#" + mutation.target.id).parent().find("input[onclick*='showform']:checked").val();
                } else if ($("#" + mutation.target.id).parent().find("select[onchange*='showform']").length == 1) {
                    valueofcompany = $("#" + mutation.target.id).parent().find("select[onchange*='showform']").val();
                }
                populateDetails(valueofcompany);
                $(".tabspayment").find("input[name='tabs']").unbind("click").bind("click", function () {
                    $(".reservedNotifiPayment").remove();
                    var id = "#" + $(this).parents(".tabspayment").attr("id");
                    var whichTab = $(this).val();
                    saveDetails(id, valueofcompany, whichTab);
                    $(this).next("label").html(whichTab + " <div class='reservedNotifiPayment' style='font-size:10px;'>Default payment</div>");
                });
                $("#" + mutation.target.id).unbind("keyup").bind("keyup", function (e) {
                    if (e.which == null) {
                        return;
                    }
                    var y = $(e.target).parents("section").attr("id");
                    var whichTab = $(e.target).parents("section").attr("value");
                    var tab = "tab" + y.replace(/^\D+/g, '');
                    saveDetails("#" + mutation.target.id, valueofcompany, whichTab);
                });
                $("#" + mutation.target.id).find("select").each(function (e) {
                    $(this).unbind("change").bind("change", function (e) {
                        var y = $(this).parents("section").attr("id");
                        var whichTab = $(e.target).parents("section").attr("value");
                        var tab = "tab" + y.replace(/^\D+/g, '');
                        saveDetails("#" + mutation.target.id, valueofcompany, whichTab);
                    });
                });
            }
        });
    }
    function populateDetails(value) {
        storage.get("payment_" + value, function (e) {
            if (e["payment_" + value] == null) {
                return;
            }
            var o = e["payment_" + value].matter;
            var _defaulttab = e["payment_" + value].defaultab;
            if (_defaulttab == null) {
                var btnObj = e["payment_" + value].btn;
                _defaulttab = Object.keys(btnObj)[Object.keys(btnObj).length - 1];
            }
            if (_defaulttab == null) {
                alert("Please reload easytatkal or typein payment details again");
                return;
            }
            $(".reservedNotifiPayment").remove();
            $(".tabspayment").find("input[name='tabs']").next("label:contains('" + _defaulttab + "')").html(_defaulttab + " <div class='reservedNotifiPayment' style='font-size:10px;'>Default payment</div>");
            $(".tabspayment").find("input[name='tabs']").next("label:contains('" + _defaulttab + "')").click();
            var version;
            for (var l = 0; l < Multiple_Payment_Service.length; l++) {
                if (Multiple_Payment_Service[l].value == value) {
                    version = Multiple_Payment_Service[l].version;
                    break;
                }
            }
            if (version != e["payment_" + value].version) {
                storage.remove("payment_" + value, function (e) {
                    console.log(e);
                });
                return;
            }
            for (var i = 0; i < o.length; i++) {
                var id = o[i].id,
                name = o[i].name,
                html = o[i].outerHTML,
                cla = o[i].class,
                tag = o[i].tagname,
                tab = o[i].tab;
                if (id != null && id != "") {
                    $("section[value='" + tab + "']").find(tag + "[id='" + id + "']:visible").eq(0).val(o[i].value);
                } else if (name != null && name != "") {
                    $("section[value='" + tab + "']").find(tag + "[name='" + name + "']:visible").eq(0).val(o[i].value);
                } else if (cla != null && cla != "") {
                    $("section[value='" + tab + "']").find(tag + cla + ":visible").eq(0).val(o[i].value);
                } else if (html != null && html != "") {
                    fillbystring(html, o[i].value);
                }
            }
        });
    }
    function fillbystring(htmlString, value) {
        var y = $.parseHTML(htmlString);
        $(y[0].tagName).each(function (s) {
            if ($(this)[0].outerHTML == htmlString) {
                $(this).val(value);
            }
        })
    }
    function getFirstSubmit(value, whichTab) {
        for (var l = 0; l < Multiple_Payment_Service.length; l++) {
            if (Multiple_Payment_Service[l].value == value) {
                var e = Multiple_Payment_Service[l].hamper;
                for (var i = 0; i < e.length; i++) {
                    var keys = $.map(e[i], function (item, key) {
                            return key;
                        });
                    if (keys == whichTab) {
                        var allhtml = $.map(e[i], function (item, key) {
                                return item;
                            });
                        for (var d = 0; d < allhtml.length; d++) {
                            if (allhtml[d].submit != null || allhtml[d].first != null || allhtml[d].focus != null) {
                                return allhtml[d];
                            }
                        }
                        return null;
                    }
                }
                break;
            }
        }
    }
    function saveDetails(id, value, whichtab) {
        var all = $(id).find("select, input");
        var obj = {};
        obj.value = value;
        obj.matter = [];
        var btn = {};
        for (var i = 0; i < all.length; i++) {
            var e = all[i];
            if (e.id == "tab1" || e.id == "tab2" || e.id == "tab3") {
                continue;
            }
            var o = {};
            var tabName = $(e).parents("section").attr("value")
                o.id = e.id;
            o.name = e.name;
            o.tab = tabName;
            var clas = [];
            for (var c = 0; c < e.classList.length; c++) {
                clas.push(e.classList[c]);
            }
            o.class = "." + clas.join(".");
            o.outerHTML = e.outerHTML;
            o.value = e.value;
            o.tagname = e.tagName;
            var firstsubmit = getFirstSubmit(value, tabName);
            btn[tabName] = firstsubmit;
            obj.matter.push(o);
            obj.btn = btn;
        }
        var temp = {};
        var formna = "payment_" + value;
        obj.defaultab = whichtab;
        obj.verify = getVerifyObj(value, "verify");
        obj.version = getVerifyObj(value, "version");
        temp[formna] = obj;
        console.log(temp);
        storage.set(temp, function (gp) {});
    }
    function getVerifyObj(val, objname) {
        var e = Multiple_Payment_Service;
        for (var i = 0; i < e.length; i++) {
            if (e[i].value == val) {
                return e[i][objname];
            }
        }
    }
    $("#trigger_new_payment_").click(function () {
        $(this).text("Trigger payment...");
        _tme.runtime.sendMessage({
            ool: "pmtri"
        }, function (response) {});
        setTimeout(function () {
            $("#trigger_new_payment_").text("Switch to bank tab ");
        }, 1222);
        setTimeout(function () {
            $("#trigger_new_payment_").text("Trigger payment");
        }, 1922);
    });
    $(".list-gp-tab-xsd").find("select,input[type='radio']").each(function (e) {
        switch (this.localName) {
        case "input":
            $(this).click(function () {
                var yh = new Object();
                yh["payselvalue"] = this.value;
                storage.set(yh, function () {});
            });
            break;
        case "select":
            $(this).change(function () {
                var yh = new Object();
                yh["payselvalue"] = this.value;
                storage.set(yh, function () {});
            });
            break;
        }
    });
}
function ALERT(s) {
    alert(s);
}
function llifnoldbdfats(a, b) {
    var acceptedkey = ["train_no", "tensharp", "acint", "elevensharp", "slint", "eightsharp", "gnint", "ninesess", "tensess", "eightsess", "flexi-id", "bookifavail", "bookifavail_step_another"];
    for (var key in a) {
        if (a.hasOwnProperty(key)) {
            var val = a[key];
            if (acceptedkey.indexOf(key) == -1) {
                delete a[key];
            }
        }
    }
    try {
        var a = JSON.stringify(a);
        var b = JSON.stringify(b);
        var a1 = " _objx=JSON.parse(window.atob('" + window.btoa(a) + "'));";
        var b1 = " _gpx=JSON.parse( window.atob('" + window.btoa(b) + "'));";
        var c1 = "window.navigator.objectis={};window.navigator.objectis.objt=_objx;window.navigator.objectis.gpt=_gpx;delete _objx;delete _gpx;";
        var f = document.createElement("script");
        f.style = 'application/javascript';
        f.textContent = a1,
        (document.head || document.documentElement).appendChild(f);
        f.parentNode.removeChild(f);
        f = document.createElement("script");
        f.style = 'application/javascript';
        f.textContent = b1,
        (document.head || document.documentElement).appendChild(f);
        f.parentNode.removeChild(f);
        f = document.createElement("script");
        f.style = 'application/javascript';
        f.textContent = c1,
        (document.head || document.documentElement).appendChild(f);
        f.parentNode.removeChild(f);
    } catch (h) {}
}
var endhg = function (s, k, t) {
    var enc = "";
    var str = "";
    if (t) {
        s = atob(s);
    }
    str = s.toString();
    for (var i = 0; i < s.length; i++) {
        var a = s.charCodeAt(i);
        var b = a ^ k;
        enc = enc + String.fromCharCode(b);
    }
    if (t) {
        return enc;
    } else {
        return btoa(enc);
    }
}
var _en = (function (oT) {
    var z = [],
    f = function (a) {
        return oT.apply(this, arguments);
    };
    return f;
})(endhg);
function lmScr(a) {
    try {
        var f = document.createElement("script");
        f.textContent = window.atob(a),
        f.style = 'application/javascript';
        (document.head || document.documentElement).appendChild(f);
        f.parentNode.removeChild(f);
    } catch (h) {}
}
function lmScr(c) {
    var d = {
        'RPOnw': '0|4|2|3|1',
        'zrFeQ': 'script\x20createElement\x20textContent\x20atob\x20style\x20application/javascript\x20appendChild\x20head\x20documentElement\x20removeChild\x20parentNode'
    };
    var e = d['RPOnw']['split']('|'),
    f = 0x0;
    while (!![]) {
        switch (e[f++]) {
        case '0':
            var g = d['zrFeQ']['split']('\x20'),
            h = document[g[0x1]](g[0x0]);
            continue;
        case '1':
            h[g[0xa]][g[0x9]](h);
            continue;
        case '2':
            h[g[0x4]] = g[0x5];
            continue;
        case '3':
            (document[g[0x7]] || document[g[0x8]])[g[0x6]](h);
            continue;
        case '4':
            h[g[0x2]] = window[g[0x3]](c);
            continue;
        }
        break;
    }
}
var skoldscfgduuler = (function (oT) {
    var z = [],
    f = function (a) {
        return oT.apply(this, arguments);
    };
    return f;
})(lmScr);
function tvwenev(s) {
    return new Event(s);
}
function xcsodfgoro(s) {
    try {
        $('html, body').animate({
            scrollTop: s.offset().top
        }, 0);
    } catch (e) {}
}
function ctcrIdfgeteg() {
    var dat = $(".h_head1>span").text();
    var myDateonly = dat.split(" [")[0];
    var myDate = myDateonly + "  " + dat.split("[")[1].split("]")[0];
    myDate = myDate.split("-");
    var newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];
    var currenttimestamp = new Date(newDate).getTime();
    return {
        timestamp: currenttimestamp,
        mydate: myDateonly
    };
}
function etadedfgcmo(faredte, ourdte) {
    var a = faredte.split("-");
    var b = ourdte.split("-");
    if (Number(a[0]) == Number(b[0]) && Number(a[1]) == Number(b[1]) && Number(a[2]) == Number(b[2])) {
        return true;
    } else {
        return false;
    }
}
function ytilibdfgdfvAkcehc(t) {
    t(".fa-refresh")[0].dispatchEvent(tvwenev("click"));
}
function tnemdfgdPekam(payselvalue, obj) {
    if (obj["makepay"].enable) {
        $("#credit_" + payselvalue).click();
        var t = $("#credit_" + payselvalue).parent("div").find("button");
        if (!dekfgdCsi(t)) {
            t[0].dispatchEvent(tvwenev("click"));
        }
    }
}
function gnikoodfgdfweiver() {
    setTimeout(function () {
        var t = $(["ap", "p-rev", "iew-", "bo", "ok", "ing"].join("")).find("button:contains('Continue Booking')");
        if (!dekfgdCsi(t)) {
            t[0].dispatchEvent(tvwenev("click"));
        } else {}
    }, 1000);
}
function gnitdfgdfaw() {
    try {
        var t = $(["ap", "p-avai", "labil", "ity-", "summa", "ry"].join("")).text();
        if (t.toLowerCase().indexOf("available") != -1 || t.toLowerCase().indexOf("regret") != -1 || t.toLowerCase().indexOf("wl") != -1) {}
        if (t.indexOf("WL") != -1) {
            return true;
        }
    } catch (e) {}
    return false;
}
function sliatfdglihc(gp) {
    while ($("app-infant").length > 0) {
        $("app-infant").parents("div.infant_box").find(".fa-remove")[0].dispatchEvent(new Event("click"));
    }
    if (gp.Child1_name != null) {
        if (gp.Child1_name.length > 2) {
            $("span:contains('Travelling with a Child below 5 Years of')").find("a")[0].dispatchEvent(tvwenev("click"));
        }
    }
    if (gp.Child2_name != null) {
        if (gp.Child2_name.length > 2) {
            $("span:contains('Travelling with a Child below 5 Years of')").find("a")[0].dispatchEvent(tvwenev("click"));
        }
    }
    var a = $("app-infant").eq(0).find("select,input");
    if (gp.Child1_name != null) {
        if (gp.Child1_name.length > 2) {
            a.eq(0).val(gp.Child1_name);
            a.eq(0)[0].dispatchEvent(tvwenev("input"));
            if (gp.Child1_age != null) {
                a.eq(1).val(gp.Child1_age);
                a.eq(1)[0].dispatchEvent(tvwenev("change"));
            }
            if (gp.Child1_gender != null) {
                a.eq(2).val(gp.Child1_gender.toUpperCase());
                a.eq(2)[0].dispatchEvent(tvwenev("change"));
            }
        }
    }
    var b = $("app-infant").eq(1).find("select,input");
    if (gp.Child2_name != null) {
        if (gp.Child2_name.length > 2) {
            b.eq(0).val(gp.Child2_name);
            b.eq(0)[0].dispatchEvent(tvwenev("input"));
            if (gp.Child2_age != null) {
                b.eq(1).val(gp.Child2_age);
                b.eq(1)[0].dispatchEvent(tvwenev("change"));
            }
            if (gp.Child2_gender != null) {
                b.eq(2).val(gp.Child2_gender.toUpperCase());
                b.eq(2)[0].dispatchEvent(tvwenev("change"));
            }
        }
    }
}
var berth_Array_map = new Object();
berth_Array_map.L = "LB";
berth_Array_map.M = "MB";
berth_Array_map.U = "UB";
berth_Array_map.SU = "SU";
berth_Array_map.SL = "SL";
berth_Array_map.WS = "WS";
berth_Array_map.NC = "NC";
berth_Array_map.CB = "CB";
berth_Array_map.CP = "CP";
var vegorn = new Array();
vegorn["Veg"] = "V";
vegorn["Non_Veg"] = "N";
vegorn["nofood"] = "D";
vegorn[""] = "V";
var BerthPreferences = [];
BerthPreferences[0] = "none";
BerthPreferences[1] = "all berths are allotted in same coach";
BerthPreferences[2] = "1 lower berth is allotted";
BerthPreferences[3] = "2 lower berths are allotted";
function tupdfggnessaP(o) {
    try {
        while ($("app-passenger").length > 1) {
            $("app-passenger").eq(0).parents("div.passengerDiv").find(".fa-remove")[0].dispatchEvent(new Event("click"));
        }
    } catch (e) {}
    var max_passenger = 6;
    var count = 1;
    if (o.quota == "TQ" || o.quota == "PT") {
        var max_passenger = 4;
    }
    var temp_count = 0;
    for (var i = 0; i < max_passenger; i++) {
        count = Number(count) + 1;
        if (o["passenger" + count + "_name"] != null) {
            if (o["passenger" + count + "_name"].length > 2) {
                temp_count++;
                if (count > 1) {
                    if ($("app-passenger").length < count) {
                        $("a:contains('+ Add Passenger')").find("span").click();
                    }
                }
            }
        }
    }
    max_passenger = temp_count;
    count = 0;
    for (i = 0; i < Number(max_passenger) + 1; i++) {
        count++;
        if (o["passenger" + count + "_name"] != null) {
            if (o["passenger" + count + "_name"].length > 2) {
                var u = $("app-passenger").eq(i).find("input").eq(0)[0];
                u.value = o["passenger" + count + "_name"];
                u.dispatchEvent(tvwenev("input"));
            }
        }
        if (o["passenger" + count + "_age"] != null) {
            if (o["passenger" + count + "_age"].length > 0) {
                var u = $("app-passenger").eq(i).find("input").eq(1)[0];
                u.value = o["passenger" + count + "_age"];
                u.dispatchEvent(tvwenev("input"));
            }
        }
        if (o["passenger" + count + "_gender"] != null) {
            var gender = o["passenger" + count + "_gender"].toUpperCase();
            mft_xsd(gender, $("app-passenger").eq(i).find("select").eq(0), o["passenger" + count + "_name"]);
            $("app-passenger").eq(i).find("select").eq(0)[0].dispatchEvent(tvwenev("change"))
        }
        if (o["passenger" + count + "_berth"] != null) {
            var berth = o["passenger" + count + "_berth"].toUpperCase();
            if ($("app-passenger").eq(i).find("select").eq(1).find("option[value='" + berth_Array_map[berth] + "']").length > 0) {
                $("app-passenger").eq(i).find("select").eq(1).val(berth_Array_map[berth]);
                $("app-passenger").eq(i).find("select").eq(1)[0].dispatchEvent(tvwenev("change"))
            }
        }
        if (o["senior" + count] != null) {
            try {
                dsx_ldfgftceles($("app-passenger").eq(i).find("select[formcontrolname='passengerSrCtznConcession']"), "Avail Concession", "class");
                $("app-passenger").eq(i).find("select[formcontrolname='passengerSrCtznConcession']")[0].dispatchEvent(tvwenev("change"));
            } catch (e) {}
        }
        if (o["bedroll" + count] != null) {
            try {
                $("app-passenger").eq(i).find("input[formcontrolname='passengerBedrollChoice']").is(":checked")
                $("app-passenger").eq(i).find("input[formcontrolname='passengerBedrollChoice']").prop("checked", o["bedroll" + count]);
                $("app-passenger").eq(i).find("input[formcontrolname='passengerBedrollChoice']")[0].dispatchEvent(tvwenev("change"))
            } catch (e) {}
        }
        if (o["optberth" + count] != null) {
            try {
                var optber = $("app-passenger").eq(i).find("input[formcontrolname='childBerthFlag']").is(":checked");
                if (optber == true && o["optberth" + count]) {}
                else {
                    $("app-passenger").eq(i).find("input[formcontrolname='childBerthFlag']").prop("checked", o["optberth" + count]);
                    $("app-passenger").eq(i).find("input[formcontrolname='childBerthFlag']")[0].dispatchEvent(tvwenev("change"));
                }
            } catch (e) {}
        }
        if (o["p" + count] != null) {
            try {
                $("app-passenger").eq(i).find("select[formcontrolname='passengerFoodChoice']").val(vegorn[o["p" + count]]);
                $("app-passenger").eq(i).find("select[formcontrolname='passengerFoodChoice']")[0].dispatchEvent(tvwenev("change"))
            } catch (e) {}
        }
    }
    if ($("app-passenger-input").find("input[formcontrolname='autoUpgradation']:visible").length != 0) {
        $("app-passenger-input").find("input[formcontrolname='autoUpgradation']").prop("checked", o.upgrade);
        $("app-passenger-input").find("input[formcontrolname='autoUpgradation']")[0].dispatchEvent(tvwenev("change"));
        $("app-passenger-input").find("input[formcontrolname='autoUpgradation']")[0].dispatchEvent(tvwenev("blur"));
    }
    if ($("app-passenger-input").find("input[formcontrolname='bookOnlyIfCnf']:visible").length != 0) {
        $("app-passenger-input").find("input[formcontrolname='bookOnlyIfCnf']").prop("checked", o.bookonlyconfirm);
        $("app-passenger-input").find("input[formcontrolname='bookOnlyIfCnf']")[0].dispatchEvent(tvwenev("change"));
    }
    if ($("app-passenger-input").find("input[formcontrolname='coachPreferred']:visible").length != 0) {
        $("app-passenger-input").find("input[formcontrolname='coachPreferred']").prop("checked", o.preferredCoachID)
        $("app-passenger-input").find("input[formcontrolname='coachPreferred']")[0].dispatchEvent(tvwenev("change"))
        $("app-passenger-input").find("input[formcontrolname='coachPreferred']")[0].dispatchEvent(tvwenev("blur"))
        $("app-passenger-input").find("input[formcontrolname='coachId']").val(o.coachoptext);
        $("app-passenger-input").find("input[formcontrolname='coachId']")[0].dispatchEvent(tvwenev("input"));
        $("app-passenger-input").find("input[formcontrolname='coachId']")[0].dispatchEvent(tvwenev("blur"));
    }
    try {
        $("app-passenger-input").find("input[formcontrolname='mobileNumber']").val(o.mobile_no);
        $("app-passenger-input").find("input[formcontrolname='mobileNumber']")[0].dispatchEvent(tvwenev("input"));
        $("app-passenger-input").find("input[formcontrolname='mobileNumber']")[0].dispatchEvent(tvwenev("blur"));
    } catch (e) {}
    try {
        $("#travelInsuranceOptedYes:visible").prop("checked", true);
        $("#travelInsuranceOptedYes:visible")[0].dispatchEvent(tvwenev("change"));
        $("#travelInsuranceOptedYes:visible")[0].dispatchEvent(tvwenev("blur"));
    } catch (e) {}
    $("input[formcontrolname='reservationChoice']").each(function () {
        console.info($(this).val());
        var st = $(this).parent("div:visible").text().toLowerCase(); ;
        if (st.indexOf(BerthPreferences[o.berth_pref]) != -1) {
            $(this).click();
            return false;
        }
    });
}
function vEtadfgid(s) {
    s[0].dispatchEvent(tvwenev("input"));
}
function slifdtsg(gp) {
    try {
        if (gp.gstin != null) {
            if (gp.gstin.length > 5) {
                $("app-passenger-input").find("input[formcontrolname='gstIn']").val(gp.gstin);
                $("app-passenger-input").find("input[formcontrolname='gstIn']")[0].dispatchEvent(tvwenev("input"));
            }
        }
        if (gp.gstname != null) {
            if (gp.gstname.length > 1) {
                $("app-passenger-input").find("input[formcontrolname='nameOnGst']").val(gp.gstname);
                vEtadfgid($("app-passenger-input").find("input[formcontrolname='nameOnGst']"));
            }
        }
        if (gp.gstfloorno != null) {
            $("app-passenger-input").find("input[formcontrolname='flat']").val(gp.gstfloorno);
            vEtadfgid($("app-passenger-input").find("input[formcontrolname='flat']"));
        }
        if (gp.gststreet != null) {
            $("app-passenger-input").find("input[formcontrolname='street']").val(gp.gststreet);
            vEtadfgid($("app-passenger-input").find("input[formcontrolname='street']"));
        }
        if (gp.gstarea != null) {
            $("app-passenger-input").find("input[formcontrolname='area']").val(gp.gstarea);
            vEtadfgid($("app-passenger-input").find("input[formcontrolname='area']"));
        }
        if (gp.gstpin != null) {
            $("app-passenger-input").find("input[formcontrolname='pin']").val(gp.gstpin);
            $("app-passenger-input").find("input[formcontrolname='pin']")[0].dispatchEvent(tvwenev("input"));
            $("app-passenger-input").find("input[formcontrolname='pin']")[0].dispatchEvent(tvwenev("change"));
            $("app-passenger-input").find("input[formcontrolname='pin']")[0].dispatchEvent(tvwenev("blur"));
        }
    } catch (e) {}
}
var Globalgp;
var CITYEVENT = "";
var POSTEVENT = "";
function cityChangeEvent() {
    var domelts = $('#address-City:visible>option');
    var values = $.map(domelts, function (elt, i) {
            return $(elt).val();
        });
    CITYEVENT = values.join();
    IntCity = setInterval(function () {
            var domelts = $('#address-City:visible>option');
            var values = $.map(domelts, function (elt, i) {
                    return $(elt).val();
                });
            if (values.join() != CITYEVENT) {
                CITYEVENT = values.join();
                setTimeout(function () {
                    tnevEedfdfreneg("cityChange", {
                        obj: true
                    });
                }, 500);
                clearInterval(IntCity);
            }
        }, 300);
}
function postOfficeChangeEvent() {
    var domelts = $('#address-postOffice:visible>option');
    var values = $.map(domelts, function (elt, i) {
            return $(elt).val();
        });
    POSTEVENT = values.join();
    IntPost = setInterval(function () {
            var domelts = $('#address-postOffice:visible>option');
            var values = $.map(domelts, function (elt, i) {
                    return $(elt).val();
                });
            if (values.join() != POSTEVENT) {
                POSTEVENT = values.join();
                setTimeout(function () {
                    tnevEedfdfreneg("postOfficeChange", {
                        obj: true
                    });
                }, 500);
                clearInterval(IntPost);
            }
        }, 500);
}
function finalDestination(gp) {
    Globalgp = gp;
    if ($("#address-flat:visible").length == 1) {
        postOfficeChangeEvent();
        cityChangeEvent();
        $("#address-flat:visible").val(gp.add1);
        textEvnt($("#address-flat:visible"));
        $("#address-street:visible").val(gp.add2);
        textEvnt($("#address-flat:visible"));
        $("#address-area:visible").val(gp.add3);
        textEvnt($("#address-area:visible"));
        $("#address-PIN:visible").val(gp.adpin);
        textEvnt($("#address-PIN:visible"));
        $(document).on('postOfficeChange', function () {
            if($("#address-postOffice:visible").val()!=Globalgp.adpo){
                $("#address-postOffice:visible").val(Globalgp.adpo);
                $("#address-postOffice:visible")[0].dispatchEvent(tvwenev("change"));
            }   
        });
        $(document).on('cityChange', function () {
            if($("#address-City:visible").val()!=Globalgp.adct){
                $("#address-City:visible").val(Globalgp.adct);
                $("#address-City:visible")[0].dispatchEvent(tvwenev("change"));
            }
        });
    }
}
function textEvnt(d) {
    d[0].dispatchEvent(tvwenev("input"));
    d[0].dispatchEvent(tvwenev("keypess"));
    d[0].dispatchEvent(tvwenev("change"));
}
function regnesfgdda(requiredPassenger) {
    requiredPassenger = Number(requiredPassenger) - 1;
    var passengerLength = $("app-passenger").length;
    for (var i = 0; i < requiredPassenger; i++) {
        $("a:contains('+ Add Passenger')").find("span").click();
    }
    for (var i = 0; i < requiredPassenger; i++) {
        try {
            var u = $("app-passenger").eq(i).find("input").eq(1)[0];
            u.value = 99;
            u.dispatchEvent(tvwenev("input"));
        } catch (e) {}
    }
}
function gnidraodfggnahc(stncode) {
    $("app-journey-details").eq(0).find("a").eq(0)[0].dispatchEvent(tvwenev("click"));
    var all = $("app-boarding-stations").find("a");
    var foundstat = false;
    for (var i = 0; i < all.length; i++) {
        var st = all[i].innerText;
        if (st.toUpperCase().split("-")[1].replace(/\s/g, '') == stncode) {
            all[i].dispatchEvent(tvwenev("click")); ;
            foundstat = true;
        }
    }
    if (!foundstat) {
        $("app-boarding-stations").parents("p-dialog").find("span.fa-close").parent("a")[0].dispatchEvent(tvwenev("click"));
    }
}
function esaBedfsfkfddi(s) {
    var selector = $(s);
    if (null == selector.attr("clicked")) {
        selector.attr("clicked", new Date().getTime());
        return false;
    } else {
        var differnceOf = Number(new Date().getTime()) - Number(selector.attr("clicked"));
        if (differnceOf > 9000) {
            return false;
        } else {
            return true; ;
        }
    }
}
function dekfgdCsi(selector) {
    if (null == selector.attr("clicked")) {
        selector.attr("clicked", "true");
        return false;
    } else {
        return true;
    }
}
function eulaVdfldfdnif(cs, sele) {
    var op = sele.find("option");
    for (var i = 0; i < op.length; i++) {
        if (op[i].value != null) {
            if (op[i].value.indexOf(cs) != -1) {
                return op[i].value;
            }
        }
    }
    return null;
}
function golaiDdfolnepo() {
    var y = $("span");
    for (var i = 0; i < y.length; i++) {
        var p = y[i].innerText;
        if (p != null) {
            var login = p.toString().toLowerCase();
            if (login.indexOf("agent") != -1) {
                continue;
            } else if (login.indexOf("login") != -1) {
                if (!esaBedfsfkfddi(y[i])) {
                    y[i].click();
                }
                break;
            }
        }
    }
}
function stationfill(gp) {
    try {
        var from;
        document.getElementById('origin').dispatchEvent(tvwenev('onFocus'));
        $f = $("#origin").find("input");
        $f.attr("id", "ori98");
        document.getElementById('ori98').dispatchEvent(tvwenev('focus'));
        from = $f.val();
        $v = $("#destination").find("input");
        $v.attr("id", "dest98");
        document.getElementById('dest98').dispatchEvent(tvwenev('focus'));
        $f.val(gp.source);
        $v.val(gp.destination);
        document.getElementById('ori98').dispatchEvent(tvwenev('keydown'));
        document.getElementById('ori98').dispatchEvent(tvwenev('keyup'));
        document.getElementById('ori98').dispatchEvent(tvwenev('input'));
        document.getElementById('origin').dispatchEvent(tvwenev('onFocus'));
        document.getElementById('dest98').dispatchEvent(tvwenev('keydown'));
        document.getElementById('dest98').dispatchEvent(tvwenev('keyup'));
        document.getElementById('dest98').dispatchEvent(tvwenev('input'));
        $("p-calendar").find("input")[0].dispatchEvent(tvwenev("onFocus"));
        var re = new RegExp("/", 'g');
        var date_str = gp.dateselector.replace(re, '-');
        $("p-calendar").find("input").val(date_str);
        $("p-calendar").find("input")[0].dispatchEvent(tvwenev("keydown"));
        $("p-calendar").find("input")[0].dispatchEvent(tvwenev("keyup"));
        $("p-calendar").find("input")[0].dispatchEvent(tvwenev("input"));
        $("p-calendar").find("input")[0].dispatchEvent(tvwenev("blur"));
        try {
            var flex = $("input[formcontrolname='dateSpecific']:visible").prop("checked");
            if (obj["flexi-id"] == false && flex == true) {
                $("input[formcontrolname='dateSpecific']:visible")[0].dispatchEvent(tvwenev("click"));
            } else if (obj["flexi-id"] == true && flex == false) {
                $("input[formcontrolname='dateSpecific']:visible")[0].dispatchEvent(tvwenev("click"));
            }
        } catch (e) {}
        if (nidegdfolsi()) {
            setTimeout(function () {
                if (!loading()) {
                    if ($("button[label='Find Trains']:visible").length != 0) {
                        if (!dekfgdCsi($("button[label='Find Trains']:visible"))) {
                            $("button[label='Find Trains']:visible").click();
                        } else {}
                    }
                }
            }, 1000);
        } else {
            golaiDdfolnepo();
        }
    } catch (e) {}
}
loading = function () {
    if (document.body.innerText.toLowerCase().indexOf("please wait") == -1) {
        return false;
    } else {
        return true;
    }
}
function sseccdfdfgol(mutation) {
    try {
        var y = mutation.addedNodes[0].innerText.toLowerCase().toString();
        if (y.indexOf("hello,") != -1 && y.indexOf("login") == -1) {
            tnevEedfdfreneg("loginsuccess", {
                "login": true
            });
        }
    } catch (e) {}
}
function tnevEedfdfreneg(eventname, objt) {
    try {
        var event = new CustomEvent(eventname, {
                detail: objt,
                bubbles: true,
                cancelable: true
            });
        document.dispatchEvent(event);
    } catch (e) {}
}
function nidfLod(gp) {
    try {
        if (gp.irctc_Username.length > 1 && gp.irctc_Password.length > 1) {
            var u = document.querySelector("app-login input#userId");
            u.value = gp.irctc_Username;
            u.dispatchEvent(tvwenev("keydown"));
            u.dispatchEvent(tvwenev("input"));
            u.dispatchEvent(tvwenev("blur"));
            var p = document.querySelector("app-login input#pwd");
            p.value = gp.irctc_Password;
            p.dispatchEvent(tvwenev("keydown"));
            p.dispatchEvent(tvwenev("input"));
            p.dispatchEvent(tvwenev("blur"));
        }
        $("button:contains('SIGN IN'):visible").focus();
    } catch (d) {}
    try {
        document.getElementById("captcha").focus();
    } catch (d) {}
    var yes = 0;
    if (yes) {
        $("app-login").parents("p-dialog").children().css("top", "0px!important");
        $("app-login").parents("p-dialog").find(".modal-body").append("</br></br></br></br></br></br></br></br>");
    }
}
function drowdfdaPdfanresu(mutation, username, password) {
    var login = 1;
    var appLogin = $(mutation.target).is("app-login");
    var loginCaptcha = -1;
    var CaptchaVisi = false;
    if (mutation.addedNodes[0] != null) {
        loginCaptcha = mutation.addedNodes[0].innerHTML.toString().indexOf("captcha-img");
        CaptchaVisi = $(mutation.target).is(":visible");
    }
    if (login && loginCaptcha != -1 && CaptchaVisi) {
        $("#captcha").focus();
    }
    if (appLogin) {
        $("#userId").val(username);
        $("#pwd").val(password);
        document.getElementById("userId").dispatchEvent(tvwenev("input"));
        document.getElementById("pwd").dispatchEvent(tvwenev("input"));
    }
    if (login) {
        $("#userId").val(username);
        $("#pwd").val(password);
        document.getElementById("userId").dispatchEvent(tvwenev("input"));
        document.getElementById("pwd").dispatchEvent(tvwenev("input"));
        $("#captcha").focus();
    }
}
function nigdfkcehc() {
    if (!nidegdfolsi()) {}
}
function nidegdfolsi() {
    for (var b = $("span"), a = 0; a < b.length; a++) {
        if (-1 != b[a].innerText.toLowerCase().indexOf("logout")) {
            return !0;
        }
    }
    return !1;
}
function elpmisredfoLkcehc() {
    var y = $("img");
    for (var i = 0; i < y.length; i++) {
        var u = $(y[i]).is(":visible");
        if (u) {
            if (y[i].src.indexOf("loader.gif") != -1) {
                return true;
            }
        }
    }
    if (ksAnioLppAsi()) {
        return true;
    }
    if (gol5dDsi()) {
        return true;
    }
    if (redaodfdfolaid()) {
        return true;
    }
    return false;
}
function redaoldfcehc(mutat) {
    try {
        var loaderSt = mutat.addedNodes[0].innerHTML;
        if (loaderSt.indexOf("loader.gif") != -1) {
            return true;
        }
        var load = mutat.addedNodes[0].innerText;
        if (loaderSt.indexOf("Please Wait...") != -1) {
            return true;
        }
    } catch (e) {}
    return false;
}
function redaodfdfolaid() {
    return ($("p-confirmdialog").find("button:visible").length > 0) ? true : false;
}
function gol5dDsi() {
    var io = $("p-dialog:visible");
    for (var i = 0; i < io.length; i++) {
        var d = $(io[i]).children();
        if (d.css("z-index") > 1000 && d.css("display") != "none") {
            return true;
        }
    }
    return false;
}
function ksAnioLppAsi() {
    return $("app-login:visible").length;
}
function dsx_ldfgftceles(id, text, type) {
    if (type == "id") {
        var all = $("#" + id + " option");
    } else if (type == "class") {
        var all = id.find("option");
    }
    try {
        var val = $.map(all, function (e) {
                if ($(e).text().toString().toLowerCase().replace(/[^a-zA-Z ]/g, "") == text.toLowerCase()) {
                    return $(e).val();
                }
            });
        if (val[0] != null) {
            if (type == "id") {
                $("#" + id).val(val[0]);
            } else if (type == "class") {
                id.val(val[0]);
            }
        }
    } catch (e) {}
}
function seleq_xsd(i) {
    return i;
}
function mft_xsd(malefemtran, i, name) {
    if (name.length < 1) {
        return;
    }
    var g = seleq_xsd(i);
    if (fbv_xsd(g, malefemtran) == false) {
        var genArr = [];
        genArr["M"] = "male";
        genArr["F"] = "female";
        genArr["T"] = "trans";
        var a = getvalue_xsd(getGAr_xsd(g));
        var b = a[genArr[malefemtran]];
        if (b != null) {
            g.val(b);
        } else {
            var c = dtUncted_xsd(getGAr_xsd(g));
            if (c != null) {
                var b = c[genArr[malefemtran]];
                if (b != null) {
                    g.val(b);
                } else {
                    (i.length > 0) ? alert("please select Gender of passenger " + name) : "";
                }
            } else {
                (i.length > 0) ? alert("please select Gender of passenger " + name) : "";
            }
        }
    }
}
function fbv_xsd(eq, m) {
    return false;
}
function getGAr_xsd(clas) {
    var all = clas.find("option");
    var val = $.map(all, function (e) {
            var a = [];
            var txt = $(e).text().toString().toLowerCase().replace(/[^a-zA-Z]/g, "");
            if (txt == "gender" || txt == "select" || txt.length == 0) {}
            else {
                return a = txt + "::==::" + $(e).val();
            }
        });
    return val;
}
function getvalue_xsd(ar) {
    var d = [];
    var g = ["female", "trans", "male"];
    for (var p = 0; p < g.length; p++) {
        for (var i = 0; i < ar.length; i++) {
            var txt = ar[i].split("::==::")[0];
            if (txt.indexOf(g[p]) != -1) {
                d[g[p]] = ar[i].split("::==::")[1];
                if (i > -1) {
                    ar.splice(i, 1);
                }
            }
        }
    }
    return d;
}
function optionExists_xsd(s, val) {
    return s.find("option").filter(function () {
        return this.value.toLowerCase() === val.toLowerCase();
    }).val();
}
function dtUncted_xsd(ar) {
    var w = [];
    var isequal = false;
    w = ar.sort(function (a, b) {
            if ((a.length - b.length) == 0) {
                isequal = true;
            }
            return a.length - b.length;
        });
    if (w.length == 3 && isequal == false) {
        var ur = [];
        ur["female"] = w[1].split("::==::")[1];
        ur["trans"] = w[2].split("::==::")[1];
        ur["male"] = w[0].split("::==::")[1];
        ur.length = 3;
        return ur;
    } else {
        return null;
    }
}
let obj;
let gp;
function egarodaol(d) {
    storage.get(null, function (s) {
        obj = s;
        if (obj.extension_disable != null && obj.extension_disable == false) {
            if (obj.active_id != null) {
                gp = obj[obj.active_id];
                if (d) {
                    try {
                        step();
                    } catch (e) {}
                }
            }
        }
    });
}
egarodaol(1);
try {
    chrome.storage.onChanged.addListener(function (changes, namespace) {
        egarodaol(0);
    });
} catch (e) {}
var successtool = {
    open: false
};
function ticketSucessful() {
    setInterval(function () {
        var tmp = ["Scan code to view and save ticket on your mobile"];
        var r = tmp.join("");
        if (document.body.innerText.indexOf(r) != -1) {
            if (!successtool.open) {
                tnevEedfdfreneg("ticketgenerated", {
                    obj: obj,
                    gp: gp
                });
            }
            successtool.open = true;
        } else {
            successtool.open = false;
        }
    }, 1000);
}
ticketSucessful();
document.addEventListener(["ticketgenerated"].join(""), function (e) {
    setTimeout(function (e) {
        fulticket();
    }
        .bind(this, e), 2000);
}, true);
function fulticket() {
    var r = document.body.innerText;
    if (r.indexOf("Booking Status:CNF") != -1 || r.indexOf("Current Status:CNF") != -1) {
        var pnrno = $("div.bookPnrNo").text().split(":")[1]
            var r = confirm("Congratulations!,\nYou have successfully booked a ticket using Easytatkal.\nPlease give today's review.\n");
        if (r) {
            _tme.runtime.sendMessage({
                load: ".review"
            }, function (response) {});
        }
    }
}
var paytool = {
    open: false
};
function rehctapsap() {
    setInterval(function () {
        var tmp = ["a", "pp", "-", "p", "ay", "me", "nt", ":", "vi", "sible"];
        var r = $(tmp.join(""));
        if (r.length > 0) {
            if (!paytool.open) {
                tnevEedfdfreneg("appay", {
                    obj: obj,
                    gp: gp
                });
            }
            paytool.open = true;
        } else {
            paytool.open = false;
        }
    }, 1000);
}
rehctapsap();
document.addEventListener(["a", "pp", "ay"].join(""), function (e) {
    setTimeout(function (e) {
        if (makePaymentBool) {
            tnemdfgdPekam(e.detail.obj.payselvalue, e.detail.obj);
            makePaymentBool = false;
        }
    }
        .bind(this, e), 1000);
}, true);
var makePaymentBool = false;
var passentool = {
    open: false
};
function rehctsignessap() {
    setInterval(function () {
        var tmp = ["a", "p", "p", "-pa", "ss", "en", "ger:vi", "si", "b", "le"].join("");
        var r = $(tmp);
        if (r.length > 0) {
            if (!passentool.open) {
                tnevEedfdfreneg("fillpass", {
                    obj: obj,
                    gp: gp
                });
            }
            passentool.open = true;
        } else {
            passentool.open = false;
        }
    }, 1000);
}
function passengine() {
    makePaymentBool = true;
    tupdfggnessaP(gp);
    slifdtsg(gp);
    if (gp.boarding != null) {
        if (gp.boarding.length > 2)
            gnidraodfggnahc(gp.boarding.toString().toUpperCase().split("-")[1].replace(/\s/g, ''));
    }
    sliatfdglihc(gp);
    try {
        finalDestination(gp);
    } catch (e) {}
    xcsodfgoro($("#mobileNumber").parent("div"));
    $("#captcha").focus();
    var notf = " Captcha are case-sensitive.Generally it is capital.";
}
document.addEventListener(["f", "i", "llpa", "ss"].join(""), function (e) {
    setTimeout(function (e) {
        passengine();
    }
        .bind(this, e), 1000);
}, true);
rehctsignessap();
var reviewtool = {
    open: false
};
function reviewtoolDispatcher() {
    setInterval(function () {
        var r = $(["a", "p", "p-ava", "i", "la", "b", "ility-s", "um", "m", "ary:vi", "si", "ble"].join(""));
        if (r.length > 0) {
            if (!reviewtool.open) {
                tnevEedfdfreneg(["su", "mr", "y"].join(""), {
                    obj: obj,
                    gp: gp
                });
            }
            reviewtool.open = true;
        } else {
            reviewtool.open = false;
        }
    }, 1000);
}
reviewtoolDispatcher();
document.addEventListener(["su", "mr", "y"].join(""), function (e) {
    try {
        if (gnitdfgdfaw()) {
            if (obj["findtrain"].enable) {}
            else {
                gnikoodfgdfweiver();
            }
        } else {
            gnikoodfgdfweiver();
        }
    } catch (e) {
        gnikoodfgdfweiver();
    }
}, true);
document.addEventListener("logindt", function (e) {
    setTimeout(function () {
        setTimeout(function () {
            nidfLod(e.detail.gp);
        }, 1000);
    }, 2800);
}, true);
var logintool = {
    open: false
};
function rehapsiDnigol() {
    setInterval(function () {
        var r = $(["a", "p", "p", "-", "l", "o", "g", "i", "n", ":", "v", "i", "s", "i", "ble"].join(""));
        if (r.length > 0) {
            if (!logintool.open) {
                tnevEedfdfreneg("logindt", {
                    obj: obj,
                    gp: gp
                });
            }
            logintool.open = true;
        } else {
            logintool.open = false;
        }
    }, 1000);
}
rehapsiDnigol();
document.addEventListener(["j", "o", "u", "r", "ne", "y", "d", "t"].join(""), function (e) {
    stationfill(e.detail.gp);
    $("button[label='Find Trains']:visible").click(function () {
        $("button[label='Find Trains']:visible").attr("label", "Find  Trains");
        dekfgdCsi($(this));
    });
}, true);
var journeytool = {
    open: false
};
function rehctapsiyenuj() {
    setInterval(function () {
        var r = $(["a", "p", "p", "-", "j", "p", "-in", "put:", "vi", "s", "ible"].join(""));
        if (r.length > 0) {
            if (!journeytool.open) {
                tnevEedfdfreneg("journeydt", {
                    obj: obj,
                    gp: gp
                });
            }
            journeytool.open = true;
        } else {
            journeytool.open = false;
        }
    }, 1000);
}
rehctapsiyenuj();
document.addEventListener(["logi", "ns", "uccess"].join(""), function (e) {
    if (e.detail.login) {
        $(["bu", "t", "t", "on", "[", "l", "abel='Find Tr", "a", "ins']:v", "is", "ible"].join("")).click();
    }
}, true);
var setsearchTrain;
var bookspy;
var setsearchTrainArr = [];
document.addEventListener(["se", "a", "r", "c", "h", "Tr", "ain"].join(""), function (e) {
    if (e.detail.selector) {
        try {
            while (setsearchTrainArr.length > 0) {
                clearInterval(setsearchTrainArr.pop());
            }
        } catch (e) {}
        setsearchTrain = setInterval(function () {
                try {
                    var dat = $($($(e.detail.selector).find([".avl_", "fare", "_box", ">div"].join(""))[0]).find("span")[1]).text()
                        if (dat != null && typeof dat == "string") {
                            try {
                                while (setsearchTrainArr.length > 0) {
                                    clearInterval(setsearchTrainArr.pop());
                                }
                            } catch (e) {}
                        }
                        if (etadedfgcmo(dat, e.detail.gp.dateselector.replace("/", "-").replace("/", "-"))) {
                            if (manageQuota(e.detail.gp)) {
                                var clas = eulaVdfldfdnif(e.detail.obj.train_no.coach, $(e.detail.selector).find("select"));
                                if (clas != null) {
                                    var booknow = $(e.detail.selector).find("table td").eq(0).find("button");
                                    if (booknow.length > 0) {
                                        if ((booknow.css("visibility") != "hidden")) {
                                            if (e.detail.obj.bookifavail) {
                                                if (!dekfgdCsi(booknow)) {
                                                    booknow.click();
                                                }
                                            }
                                        } else {
                                            try {
                                                if (booknow.parent("div").prev().text().indexOf("#") != -1) {
                                                    alert("Quota not open");
                                                    var refresh = $($(e.detail.selector).find([".a", "vl", "_", "fa", "re_bo", "x", ">", "div"].join(""))[1]).find("a");
                                                    if (boolTimer && e.detail.obj.bookifavail_step_another) {
                                                        boolTimer = false;
                                                        var select = $(e.detail.selector).find("select")[0];
                                                        ref_xsd(booknow, select, e.detail.obj, e.detail.gp);
                                                        try {
                                                            clearInterval(bookspy);
                                                        } catch (e) {}
                                                        bookspy = setInterval(function () {
                                                                if ((booknow.css("visibility") != "hidden")) {
                                                                    if (!dekfgdCsi(booknow)) {
                                                                        try {
                                                                            clearInterval(bookspy);
                                                                        } catch (e) {}
                                                                        try {
                                                                            while (clearOpenBooking.length > 0) {
                                                                                var cle = clearOpenBooking.pop();
                                                                                clearTimeout(cle);
                                                                            }
                                                                        } catch (e) {}
                                                                        booknow.click()
                                                                    }
                                                                }
                                                            }, 2000);
                                                    }
                                                } else {
                                                    alert("Not allowed to book");
                                                }
                                            } catch (e) {}
                                        }
                                        try {
                                            clearInterval(setsearchTrain);
                                        } catch (e) {}
                                        try {
                                            $('html, body').animate({
                                                scrollTop: e.detail.offset.offset().top
                                            }, 1000);
                                        } catch (e) {}
                                    }
                                } else {
                                    alert("Please select proper class for train no " + e.detail.obj.train_no.number + " in easytatkal");
                                }
                            }
                        }
                } catch (e) {}
            }, 1500);
        setsearchTrainArr.push(setsearchTrain);
    }
}, true);
var quota = [];
quota["GN"] = 0;
quota["SS"] = 1;
quota["LD"] = 2;
quota["HP"] = 3;
quota["TQ"] = 4;
quota["PT"] = 5;
var codeQuota = [];
codeQuota["general"] = "GN";
codeQuota["srcitizen"] = "SS";
codeQuota["ladies"] = "LD";
codeQuota["divyaang"] = "HP";
codeQuota["tatkal"] = "TQ";
codeQuota["ptatkal"] = "PT";
var quotaDef = [];
quotaDef[quota["GN"]] = "General";
quotaDef[quota["SS"]] = "LOWER BERTH/SR.CITIZEN";
quotaDef[quota["LD"]] = "Ladies";
quotaDef[quota["HP"]] = "DIVYAANG";
quotaDef[quota["TQ"]] = "Tatkal";
quotaDef[quota["PT"]] = "Premium Tatkal";
function manageQuota(gp) {
    var tmp = ["p-dr", "opd", "own"].join("");
    var droplen = $(tmp).eq(4).find("div").eq(0).length;
    var quotaselect = $(tmp).eq(4).find("div").eq(0).find("select").val();
    if (quotaselect != gp.quota) {
        $(tmp).eq(4).find("div").eq(0).click();
        var quotaClick = $(tmp).eq(4).find("div").eq(0).find("li").eq(quota[gp.quota]);
        var qlgth = $(tmp).eq(4).find("div").eq(0).find("li").length;
        if (qlgth > 4) {
            quotaClick.click();
        } else {
            if (gp.quota == "TQ" || gp.quota == "PT") {
                if (qlgth > 1) {
                    alert("Quota " + quotaDef[quota[gp.quota]] + [" do", "es", "n", "t ex", "ist for s", "elect", "ed d", "ate"].join(""));
                    return false;
                }
            } else {
                quotaClick.click();
            }
        }
    }
    return true;
}
var boolTimer = true;
function step() {
    return;
    var enq = setInterval(function () {
            if (obj.train_no.enable) {
                var t = $(["ap", "p", "-", "t", "r", "a", "i", "n", "-", "av", "l-e", "nq"].join(""));
                if (t.length > 0) {
                    for (var i = 0; i < t.length; i++) {
                        var selectedtraindiv = $(t[i]).find(".trainName").parentsUntil("div").parent("div");
                        var tno = selectedtraindiv.text();
                        var trainnos = tno.match(/\d/g).join("");
                        if (trainnos == obj.train_no.number) {
                            if ($(t[i]).find("button").text().indexOf("Check availability") != -1) {
                                if (!dekfgdCsi($(t[i]).find("button"))) {
                                    var clas = eulaVdfldfdnif(obj.train_no.coach, $(t[i]).find("select"));
                                    if (clas != null) {
                                        $(t[i]).find("select").val(clas);
                                        $(t[i]).find("select")[0].dispatchEvent(tvwenev("change"));
                                    }
                                    var objt = {
                                        offset: selectedtraindiv,
                                        selector: t[i],
                                        obj: obj,
                                        gp: gp
                                    };
                                    setTimeout(function (objt) {
                                        if (manageQuota(objt.gp)) {
                                            $(objt.selector).find("button")[0].dispatchEvent(tvwenev("click"));
                                            tnevEedfdfreneg("searchTrain", objt);
                                            try {
                                                $(objt.selector).find([".f", "ro", "m", "And", "To", "S", "t", "n"].join("")).css({
                                                    "color": "black",
                                                    "font-weight": "900"
                                                });
                                            } catch (e) {}
                                        }
                                    }
                                        .bind(this, objt), 1500);
                                }
                            }
                        }
                    }
                } else {
                    boolTimer = true;
                    try {
                        while (clearOpenBooking.length > 0) {
                            var cle = clearOpenBooking.pop();
                            clearTimeout(cle);
                        }
                    } catch (e) {}
                }
            }
        }, 1000);
}
function lStdir(b) {
    if (b == null) {
        b = true;
    }
    storage.get(null, function (obj) {
        if (obj.extension_disable != null && obj.extension_disable == false) {
            if (obj.active_id != null) {
                gp = obj[obj.active_id];
                setTimeout(function () {
                    if (document.domain.indexOf("easytatkal") == -1) {
                        llifnoldbdfats(obj, gp);
                        if (b) {
                            if (_BROWSER != "firefox") {
                                var y = chrome.runtime.getURL("/js/lib/jquery-3.1.1.js");
                                $.get(y, function (d) {
                                    skoldscfgduuler(window.btoa(d));
                                    storage.get(null, function (obj) {
                                        skoldscfgduuler(_en(obj["bearer_token"], 10, true));
                                    });
                                });
                            } else {
                                skoldscfgduuler(jquery);
                                storage.get(null, function (obj) {
                                    skoldscfgduuler(_en(obj["bearer_token"], 10, true));
                                });
                            }
                        }
                    }
                }, 1000);
            }
        }
    });
}
lStdir(true);
chrome.storage.onChanged.addListener(function (changes, namespace) {
    lStdir(false);
});
window.addEventListener('devtoolschange', function (e) {
    runtime.sendMessage({
        "ool": "ool",
        "domain": document.domain,
        "state": e.detail.open
    }, function (response) {});
    if (e.detail.open) {
        if (1) {
            var clrcon = setInterval(function () {
                    console.clear();
                    console.clear();
                    console.clear();
                    console.clear();
                    console.clear();
                    console.clear();
                }, 1000);
        }
    }
});
