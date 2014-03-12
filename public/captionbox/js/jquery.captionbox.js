var STCONST_FILENAME = "jquery.captionbox.js",
    STCONST_WS_UPDATE_TRANSCRIPT = "/transactions/update_from_editor",
    STCONSTS_WSCREDS_BITLY_LOGIN = "speakertext",
    STCONSTS_WSCREDS_BITLY_APIKEY = "R_2274af29d71349021399a6ee1191ab6b",
    STCONST_CLASS_SHARE_BUTTON = "STxShare",
    STCONST_CLASS_SHARE_FACEBOOK = "STfacebookShare",
    STCONST_CLASS_SHARE_TWITTER = "STtwitterShare",
    STCONST_CLASS_SHARE_URL = "STurlShare",
    STCONST_QUERY_PLAYER_QUOTELINK = "STQL",
    STCONST_TEXT_BAR_SEARCH = "Search this transcript...",
    STCONST_TEXT_BAR_LOGOLINK =
        "http://speakertext.com/?ref=itp",
    STCONST_TEXT_BAR_AUTOSCROLL = "AUTO SCROLL",
    STCONST_TEXT_BAR_SHOWTEXT = "EXPAND TRANSCRIPT",
    STCONST_TEXT_EDIT_SAVE = "Save",
    STCONST_TEXT_EDIT_CANCEL = "Cancel",
    STCONST_TEXT_MESSAGE_EDIT = "<p>Just start typing to edit the transcript.</p>",
    STCONST_TEXT_MESSAGE_SAVING = "<p>Saving Transcript...</p>",
    STCONST_TEXT_MESSAGE_SAVEOK = "<h1>Transcript Received!</h1><p>Your transcript has been queued for processing and should be visible in a few moments. <a href='/library'>Return to library &raquo</a></p>",
    STCONST_TEXT_MESSAGE_SAVEERROR = "<h1>Error</h1><p>Your transcript could not be saved at this time. Please try again in a few moments.</p>",
    STCONST_TEXT_SHARE_UNSELECTED = "<strong>Link to a video quote</strong><br>To start, select some text from the transcript<br>",
    STCONST_TEXT_SHARE_HIGHLIGHTED = "<strong>Share the selected quote</strong><br>The video will start playing at this quote</a><br>",
    STCONST_TEXT_SHARE_SELECTED = "<strong>Share the current quote</strong><br>The video will start playing at this quote</a><br>",
    STCONST_TEXT_SHARE_BUTTONS = "<a class='" + STCONST_CLASS_SHARE_TWITTER + " " + STCONST_CLASS_SHARE_BUTTON + "' onmousedown=\"stjQuery(this).STcaptureQuoteLink()\" onclick=\"if(stjQuery(this).data(STCONST_DATAKEY_QUOTELINK_TEXT) != '') { temp = window.open('','_blank','width=550,height=420'); stjQuery(this).STtwitterShare(temp); }\"></a><a class='" + STCONST_CLASS_SHARE_FACEBOOK + " " + STCONST_CLASS_SHARE_BUTTON + "' onmousedown=\"stjQuery(this).STcaptureQuoteLink()\" onclick=\"if(stjQuery(this).data(STCONST_DATAKEY_QUOTELINK_TEXT) != '') { temp = window.open('','_blank'); stjQuery(this).STfacebookShare(temp); }\"></a><a class='" +
        STCONST_CLASS_SHARE_URL + " " + STCONST_CLASS_SHARE_BUTTON + '\' onmousedown="stjQuery(this).STcaptureQuoteLink()" onclick="if(stjQuery(this).data(STCONST_DATAKEY_QUOTELINK_TEXT) != \'\') { stjQuery(this).STurlShare(); }"></a><br>',
    STCONST_TEXT_MESSAGE_SHAREURL_BEGIN = "<h1>",
    STCONST_TEXT_MESSAGE_SHAREURL_END = "</h1><p>Copy and share this URL to link back to this moment of the video.</p>",
    STCONST_TEXT_MESSAGE_COPY = "<strong>QuoteLink Created!</strong><p>When you paste this text, it will link back to this moment in the video. <a href='http://speakertext.com/what' target='_blank'>More&nbsp;&raquo;</a></p>",
    STCONST_TEXT_TRANSCRIPT_LOADING = "<div>The transcript for this video is loading.</div>",
    STCONST_TEXT_TRANSCRIPT_UNAVAILABLE = "<div>The transcript for this video is unavailable.</div>",
    STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX = "STtranscriptContent",
    STCONST_PLAYER_TRANSCRIPTEMBED_PREFIX = "STtranscriptEmbed",
    STCONST_PLAYER_IGNORE_THRESHOLD = 3E3,
    STCONST_CLASS_PLAYER = "STplayer",
    STCONST_CLASS_UNINITIALIZED = "STplayerUninitialized",
    STCONST_CLASS_EMBEDDED = "STplayerEmbedded",
    STCONST_CLASS_NICEBUTTON = "nicebutton",
    STCONST_CLASS_EDITOR = "STeditor",
    STCONST_CLASS_VIDEOPLAYER = "STvideoPlayer",
    STCONST_CLASS_PLAYER_DISPLAYWITHTRANSCRIPT = "STdisplayWithTranscript",
    STCONST_CLASS_PLAYER_TRANSCRIPTPANE = "STtranscriptPane",
    STCONST_CLASS_PLAYER_TRANSCRIPTWRAPPER = "STtranscriptWrapper",
    STCONST_CLASS_PLAYER_BAREBONES = "STplayerBarebones",
    STCONST_CLASS_PLAYER_SHAREPANE = "STsharePane",
    STCONST_CLASS_PLAYER_SHAREPANE_ACTIVE = "STsharePaneActive",
    STCONST_CLASS_PLAYER_SHAREPANE_HIGHLIGHT = "STsharePaneHighlight",
    STCONST_CLASS_PLAYER_SHAREPANE_TEXT =
        "STsharePaneText",
    STCONST_CLASS_PLAYER_COPYFEEDBACK = "STsharePaneCopyFeedback",
    STCONST_CLASS_PLAYER_TRANSCRIPTDISPLAY = "STtranscriptDisplay",
    STCONST_CLASS_PLAYER_TRANSCRIPTSTATUS = "STtranscriptStatus",
    STCONST_CLASS_PLAYER_TRANSCRIPT_CONTENT = "STtranscriptContent",
    STCONST_CLASS_PLAYER_SEARCH = "STsearch",
    STCONST_CLASS_PLAYER_SEARCHFIELD = "STsearchField",
    STCONST_CLASS_PLAYER_SEARCHPREVBUTTON = "STsearchPrevButton",
    STCONST_CLASS_PLAYER_SEARCHNEXTBUTTON = "STsearchNextButton",
    STCONST_CLASS_PLAYER_AUTOSCROLL = "STautoScroll",
    STCONST_CLASS_PLAYER_SHOWTEXT = "STshowText",
    STCONST_CLASS_PLAYER_LOGO = "STlogo",
    STCONST_CLASS_PLAYER_CURRENTCONTENT = "STcurrentContent",
    STCONST_CLASS_PLAYER_SEARCHMATCH = "STsearchMatch",
    STCONST_CLASS_PLAYER_BASE = "STplayerBase",
    STCONST_CLASS_PLAYER_BASELEFT = "STplayerBaseLeft",
    STCONST_CLASS_PLAYER_BASERIGHT = "STplayerBaseRight",
    STCONST_CLASS_PLAYER_HANDLE = "demo123",

    //STCONST_CLASS_PLAYER_HANDLE = "STplayerHandle",

    STCONST_CLASS_PLAYER_SCROLLBAR = "STscrollBar",
    STCONST_CLASS_PLAYER_SCROLLUP = "STscrollUp",
    STCONST_CLASS_PLAYER_SCROLLDOWN = "STscrollDown",
    STCONST_CLASS_PLAYER_SCROLLVISIBLE = "STscrollVisible",
    STCONST_CLASS_PLAYER_SCROLLTOP = "STscrollTop",
    STCONST_CLASS_PLAYER_SCROLLBOTTOM = "STscrollBottom",
    STCONST_CLASS_PLAYER_BAR = "STbar",
    STCONST_CLASS_MESSAGEPANE = "STmessagePane",
    STCONST_CLASS_COPY_FEEDBACK = "STcopyFeedback",
    STCONST_CLASS_PLAYER_FONTSIZEBUTTON = "STfontSizeButton",
    STCONST_CLASS_EDIT_SAVE = "STsaveButton",
    STCONST_CLASS_EDIT_CANCEL = "STcancelButton",
    STCONST_CLASS_EDIT_EMPTY = "STemptyContentEdit",
    STCONST_CLASS_PLAYER_EMBEDOVERLAY = "SToverlay",
    STCONST_CLASS_PLAYER_EMBEDWRAPPER =
        "STembedWrapper",
    STCONST_CLASS_PLAYER_AUTOSCROLL_ON = "on",
    STCONST_CLASS_PLAYER_AUTOSCROLL_OFF = "off",
    STCONST_CLASS_PLAYER_TRANSCRIPT_LOADING = "STtranscriptLoading",
    STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE = "visibleTranscript",
    STCONST_CLASS_PLAYER_SEARCHEMPTY = "empty",
    STCONST_CLASS_PLAYER_SMALLFONT = "smallFont",
    STCONST_CLASS_PLAYER_MEDIUMFONT = "mediumFont",
    STCONST_CLASS_PLAYER_LARGEFONT = "largeFont",
    STCONST_EVENT_TRANSCRIPT_LOADED = "transcriptLoaded",
    STCONST_EVENT_PLAYER_SHOW = "showPlayer",
    STCONST_EVENT_PLAYER_HIDE =
        "hidePlayer",
    STCONST_EVENT_PLAYER_SEARCH = "search",
    STCONST_EVENT_PLAYER_SEARCHNEXT = "searchNext",
    STCONST_EVENT_PLAYER_SEARCHPREV = "searchPrev",
    STCONST_EVENT_CONTENT_CLICKED = "contentClicked",
    STCONST_EVENT_CONTENT_SELECT = "contentSelect",
    STCONST_EVENT_CONTENT_COPY = "contentCopy",
    STCONST_EVENT_CONTENT_DESELECT = "contentDeselect",
    STCONST_DATAKEY_VIDEOPLAYERID = "STvideoplayerID",
    STCONST_DATAKEY_VIDEOPLAYER = "STvideoPlayer",
    STCONST_DATAKEY_TRANSCRIPTID = "STtranscriptID",
    STCONST_DATAKEY_PLAYERQUEUE = "STplayerQueue",
    STCONST_DATAKEY_PLAYER_DISABLED = "STplayerDisabled",
    STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL = "STautoScroll",
    STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID = "STcurrentContentID",
    STCONST_DATAKEY_TRANSCRIPT_SEARCHMATCHES = "STsearchMatches",
    STCONST_DATAKEY_TRANSCRIPT_SEARCHTERMS = "STsearchTerms",
    STCONST_DATAKEY_TRANSCRIPT_IGNOREPROGRESS = "STtranscriptIgnoreProgress",
    STCONST_DATAKEY_CONFIG = "STconfig",
    STCONST_DATAKEY_QUOTELINK_TEXT = "STquoteLinkText",
    STCONST_DATAKEY_QUOTELINK_CONTENTID = "STquoteLinkContentID",
    STCONST_DATAKEY_SHAREURL_TIMEOUT =
        "STshareUrlTimeout",
    STCONST_DATAKEY_EDITMESSAGE_SHOWN = "STeditMessageShown",
    STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_OFF = 0,
    STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_ON = 1,
    STCONST_CONFIG_INITIALSTATE_OPEN = "open",
    STCONST_CONFIG_INITIALSTATE_CLOSED = "closed",
    STCONST_CONFIG_EDITENABLED_OFF = "off",
    STCONST_CONFIG_EDITENABLED_ON = "on",
    STCONST_CONFIG_EMBEDSTYLE_OVERLAY = "overlay",
    STCONST_CONFIG_EMBEDSTYLE_EMBED = "embed";
if (typeof window.jQuery != "undefined") {
    var versionString = window.jQuery().jquery;
    versionString.indexOf("1.3") == 0 || versionString.indexOf("1.4") == 0 || versionString.indexOf("1.5") == 0 || versionString.indexOf("1.6") == 0 ? window.stjQuery = window.jQuery : console && console.error && console.error("CAPTIONBOX: Must load jQuery 1.3+ before loading CaptionBox!")
} else console && console.error && console.error("CAPTIONBOX: Must load jQuery 1.3+ before loading CaptionBox!");
(function (a) {
    function g() {
        this.timestamp = this.id = 0;
        this.text = ""
    }

    function f() {
        this.task = this.videoID = this.transcriptID = 0;
        this.hash = "";
        this.content = []
    }
    var c = {}, e = {}, h = 0;
    f.prototype.getContentByTimestamp = function (a) {
        if (this.content.length == 0) return null;
        previousContent = this.content[0];
        for (var c = 0; c < this.content.length; c++) {
            var b = this.content[c];
            if (b.timestamp == a) return b;
            else if (b.timestamp > a) break;
            previousContent = b
        }
        return previousContent
    };
    f.prototype.getContentByID = function (a) {
        for (var c = 0; c < this.content.length; c++) {
            var b =
                this.content[c];
            if (b.id == a) return b
        }
        return null
    };
    f.prototype.updateContentByID = function (a, c) {
        for (var b = 0; b < this.content.length; b++)
            if (this.content[b].id == a) {
                this.content[b].text = c;
                return
            }
        return null
    };
    f.prototype.search = function (a) {
        for (var c = [], a = a.toLowerCase(), b = 0; b < this.content.length; b++) {
            var f = this.content[b];
            f.text.toLowerCase().search(a) != -1 && c.push(f)
        }
        return c
    };
    a.fn.extend({
        hasCaptionBox: function () {
            return a(this).hasClass(STCONST_CLASS_VIDEOPLAYER)
        },
        captionBox: function (c) {
            var f = {
                minHeight: 30,
                defaultHeight: 210,
                transcriptPath: "",
                matchVideoWidth: true,
                initialState: STCONST_CONFIG_INITIALSTATE_OPEN,
                editEnabled: STCONST_CONFIG_EDITENABLED_OFF,
                embedStyle: STCONST_CONFIG_EMBEDSTYLE_EMBED
            };
            typeof STglobalSettings != "undefined" && a.extend(f, STglobalSettings);
            c && a.extend(f, c);
            this.each(function () {
                if (a(this).hasCaptionBox()) return true;
                ++h;
                a(this).addClass(STCONST_CLASS_VIDEOPLAYER);
                var b = a("#" + (f.preEmbedID || STCONST_PLAYER_TRANSCRIPTEMBED_PREFIX + "_" + f.videoPlayer.cbHostId + "_" + f.videoPlayer.videoId));
                if (b.length == 0) return false;
                else {
                    b.removeClass(STCONST_CLASS_PLAYER_BAREBONES);
                    var c = b.STembedWrapper().html(),
                        d = "";
                    d += "<div id='varma' class='" + STCONST_CLASS_PLAYER_EMBEDWRAPPER + "'>";
                    //d += "  <div class='" + STCONST_CLASS_PLAYER_SHAREPANE + " " + STCONST_CLASS_PLAYER_DISPLAYWITHTRANSCRIPT + "'>";
                    //d += "    <span class='" + STCONST_CLASS_PLAYER_SHAREPANE_TEXT + "'>" + STCONST_TEXT_SHARE_UNSELECTED + "</span>" + STCONST_TEXT_SHARE_BUTTONS;
                    //d += "  </div>";
                    d += "  <div class='" + STCONST_CLASS_PLAYER_TRANSCRIPTPANE + "'>";
                    d += "    <div class='" +
                        STCONST_CLASS_PLAYER_SCROLLBAR + "'>";
                    d += "      <div class='" + STCONST_CLASS_PLAYER_SCROLLUP + "'></div>";
                    d += "      <div class='" + STCONST_CLASS_PLAYER_SCROLLVISIBLE + "'>";
                    d += "        <div class='" + STCONST_CLASS_PLAYER_SCROLLTOP + "'></div>";
                    d += "        <div class='" + STCONST_CLASS_PLAYER_SCROLLBOTTOM + "'></div>";
                    d += "      </div>";
                    d += "      <div class='" + STCONST_CLASS_PLAYER_SCROLLDOWN + "'></div>";
                    d += "    </div>";
                    d += "    <div class='" + STCONST_CLASS_PLAYER_TRANSCRIPTWRAPPER + "'>";
                    d += "     <div class='" + STCONST_CLASS_PLAYER_TRANSCRIPTDISPLAY +
                        "'>";
                    d += c;
                    d += "      </div>";
                    d += "      <div class='" + STCONST_CLASS_PLAYER_TRANSCRIPTSTATUS + "'></div>";
                    d += "    </div>";
                    d += "  </div>";
                    d += "  <div class='" + STCONST_CLASS_PLAYER_BASE + "'>";
                    d += "    <div class='" + STCONST_CLASS_PLAYER_BASERIGHT + "'></div>";
                    d += "    <div class='" + STCONST_CLASS_PLAYER_BASELEFT + "'></div>";
                    d += "    <div class='" + STCONST_CLASS_PLAYER_HANDLE + "'></div>";
                    d += "  </div>";
                    d += "  <div class='" + STCONST_CLASS_MESSAGEPANE + "'></div>";
                    d += "</div>";
                    b.STembedWrapper().remove();
                    b.append(d);
                    d = "";
                    d +=
                        "<input type='text' class='" + STCONST_CLASS_PLAYER_SEARCHFIELD + " " + STCONST_CLASS_PLAYER_SEARCHEMPTY + "'/>";
                    d += "<div class='" + STCONST_CLASS_PLAYER_SEARCHPREVBUTTON + " " + STCONST_CLASS_PLAYER_SEARCHEMPTY + " " + STCONST_CLASS_PLAYER_DISPLAYWITHTRANSCRIPT + "'></div>";
                    d += "<div class='" + STCONST_CLASS_PLAYER_SEARCHNEXTBUTTON + " " + STCONST_CLASS_PLAYER_SEARCHEMPTY + " " + STCONST_CLASS_PLAYER_DISPLAYWITHTRANSCRIPT + "'></div>";
                    d += "<div class='" + STCONST_CLASS_PLAYER_FONTSIZEBUTTON + " " + STCONST_CLASS_PLAYER_DISPLAYWITHTRANSCRIPT +
                        "'></div>";
                    d += "<div class='" + STCONST_CLASS_PLAYER_AUTOSCROLL + " " + STCONST_CLASS_PLAYER_DISPLAYWITHTRANSCRIPT + "'>" + STCONST_TEXT_BAR_AUTOSCROLL + "</div>";
                    d += "<div class='" + STCONST_CLASS_PLAYER_SHOWTEXT + "'>" + STCONST_TEXT_BAR_SHOWTEXT + "</div>";
                    b.STbar().append(d);
                    f.editEnabled == STCONST_CONFIG_EDITENABLED_ON && (d = "<a class='" + STCONST_CLASS_EDIT_SAVE + " " + STCONST_CLASS_NICEBUTTON + "' value='" + STCONST_TEXT_EDIT_SAVE + "'>" + STCONST_TEXT_EDIT_SAVE + "</a>", b.append(d), b.STtranscriptWrapper().find("." + STCONST_CLASS_PLAYER_TRANSCRIPT_CONTENT).attr("contentEditable",
                        "true"))
                }
                f.embedStyle == STCONST_CONFIG_EMBEDSTYLE_OVERLAY && b.addClass(STCONST_CLASS_PLAYER_EMBEDOVERLAY);
                a(this).attr("id") || a(this).attr("id", STCONST_CLASS_VIDEOPLAYER + h);
                e[a(this).attr("id")] = b;
                b.data(STCONST_DATAKEY_VIDEOPLAYERID, a(this).attr("id"));
                b.data(STCONST_DATAKEY_VIDEOPLAYER, f.videoPlayer);
                var g = b.STtranscriptDisplay(),
                    i = b.STtranscriptPane(),
                    j = b.STtranscriptWrapper(),
                    c = b.STembedWrapper(),
                    l = b.STsharePane(),
                    v = b.STscrollVisible();
                b.STplayerHandle();
                var m = b.STplayerBase(),
                    K = b.STautoScrollButton(),
                    L = b.STtranscriptShowButton(),
                    n = b.STsearchField(),
                    p = b.STsearchNextButton(),
                    q = b.STsearchPrevButton(),
                    M = b.STfontSizeButton(),
                    d = b.STmessagePane();
                n.val(STCONST_TEXT_BAR_SEARCH);
                f.editEnabled == STCONST_CONFIG_EDITENABLED_ON && (l.remove(), b.addClass(STCONST_CLASS_EDITOR));
                j.attr("tabindex", 100);
                g.bind("mouseup", function () {
                    STgetSelectedText() != "" && a(this).trigger(STCONST_EVENT_CONTENT_SELECT)
                });
                f.editEnabled == STCONST_CONFIG_EDITENABLED_OFF && i.bind("copy", function () {
                    var b = a(this).parents("." + STCONST_CLASS_PLAYER).eq(0),
                        b = a(b).STtranscript(),
                        d = null;
                    if (typeof window.getSelection != "undefined") {
                        var c = window.getSelection();
                        if (c.toString())
                            if (typeof c.setBaseAndExtent != "undefined") {
                                var f = c.getRangeAt(0),
                                    d = f.cloneRange();
                                d.collapse(true);
                                d = d.startContainer;
                                typeof a(d).attr("id") == "undefined" && (d = a(d).parent());
                                var d = a(d).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length),
                                    d = b.getContentByID(d),
                                    b = b.transcriptID,
                                    b = STsetURLParameterByName(window.location.href, STCONST_QUERY_PLAYER_QUOTELINK + b, d.timestamp),
                                    e = document.createElement("div");
                                a(e).css("position", "absolute");
                                a(e).css("left", "-10000px");
                                b = "<a href='" + b + "'>" + a(f.cloneContents()).text() + "</a>";
                                a(e).html(b);
                                a(document.body).append(e);
                                b = document.createRange();
                                b.selectNode(e);
                                c.removeAllRanges();
                                c.addRange(b);
                                window.setTimeout(function () {
                                    a(e).remove();
                                    window.getSelection().setBaseAndExtent(f.startContainer, f.startOffset, f.endContainer, f.endOffset)
                                }, 0)
                            } else c = window.getSelection(), f = c.getRangeAt(0), d = f.cloneRange(), d.collapse(true), d = d.startContainer, typeof a(d).attr("id") == "undefined" &&
                                (d = a(d).parent()), d = a(d).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length), d = b.getContentByID(d), b = b.transcriptID, b = STsetURLParameterByName(window.location.href, STCONST_QUERY_PLAYER_QUOTELINK + b, d.timestamp), e = document.createElement("a"), a(e).attr("href", b), a(e).text(a(f.cloneContents()).text()), a(document.body).append(e), b = document.createRange(), b.selectNode(e), c.removeAllRanges(), c.addRange(b), window.setTimeout(function () {
                                a(e).remove();
                                c.removeAllRanges();
                                c.addRange(f)
                            }, 0)
                    } else if (document.selection) f =
                        document.selection.createRange(), d = document.selection.createRange(), d.collapse(true), d = d.parentElement(), d = a(d).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length), d = b.getContentByID(d), b = b.transcriptID, b = STsetURLParameterByName(window.location.href, STCONST_QUERY_PLAYER_QUOTELINK + b, d.timestamp), e = document.createElement("div"), a(e).css("visibility", "hidden"), b = "<a href='" + b + "'>" + f.htmlText + "</a>", a(e).html(b), a(document.body).append(e), b = document.body.createTextRange(), b.moveToElementText(e),
                    b.select(), window.setTimeout(function () {
                        f.select();
                        a(e).remove()
                    }, 0);
                    a(this).trigger(STCONST_EVENT_CONTENT_COPY)
                });
                f.editEnabled == STCONST_CONFIG_EDITENABLED_ON && b.STsaveButton().click(function () {
                    a(this).addClass("disabled");
                    a(this).html("Saving...");
                    b.STshowMessage(STCONST_TEXT_MESSAGE_SAVING);
                    var d = a(this).STtranscript();
                    a.ajax({
                        type: "PUT",
                        url: STCONST_WS_UPDATE_TRANSCRIPT,
                        data: {
                            hash: d.hash,
                            content: d.content
                        },
                        success: function () {
                            b.STsaveButton().removeClass("disabled");
                            b.STsaveButton().html("Save");
                            b.STshowMessage(STCONST_TEXT_MESSAGE_SAVEOK);
                            window.setTimeout(function () {
                                a(b).SThideMessage()
                            }, 8E3)
                        },
                        error: function () {
                            b.STsaveButton().removeClass("disabled");
                            b.STsaveButton().html("Save");
                            b.STshowMessage(STCONST_TEXT_MESSAGE_SAVEERROR);
                            window.setTimeout(function () {
                                a(b).SThideMessage()
                            }, 5E3)
                        }
                    })
                });
                M.click(function () {
                    b.hasClass(STCONST_CLASS_PLAYER_SMALLFONT) ? (b.removeClass(STCONST_CLASS_PLAYER_SMALLFONT), b.addClass(STCONST_CLASS_PLAYER_MEDIUMFONT)) : b.hasClass(STCONST_CLASS_PLAYER_MEDIUMFONT) ? (b.removeClass(STCONST_CLASS_PLAYER_MEDIUMFONT),
                        b.addClass(STCONST_CLASS_PLAYER_SMALLFONT)) : b.hasClass(STCONST_CLASS_PLAYER_LARGEFONT) ? (b.removeClass(STCONST_CLASS_PLAYER_LARGEFONT), b.addClass(STCONST_CLASS_PLAYER_SMALLFONT)) : b.addClass(STCONST_CLASS_PLAYER_MEDIUMFONT);
                    b.STredraw()
                });
                m.dblclick(function () {
                    b.hasClass(STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE) ? a(this).trigger(STCONST_EVENT_PLAYER_HIDE) : a(this).trigger(STCONST_EVENT_PLAYER_SHOW)
                });
                L.click(function () {
                    a(this).trigger(STCONST_EVENT_PLAYER_SHOW)
                });
                var w = 0,
                    z = 0,
                    o = b.hasClass(STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE),
                    A = function (a) {
                        a = Math.max(z + a.pageY - w, 0);
                        j.height(a);
                        a > 0 && !o ? (o = true, b.addClass(STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE), i.show(), l.show()) : a <= 0 && o && (o = false, b.removeClass(STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE), i.hide(), l.hide());
                        b.STredraw("handleDrag");
                        return false
                    }, r = function (d) {
                        a("html").unbind("mouseup", r);
                        a("html").unbind("mouseleave", r);
                        a("html").unbind("mousemove", A);
                        j.height() < f.minHeight && d.pageY != w && j.animate({
                            height: f.defaultHeight
                        }, 200, function () {
                            b.STredraw()
                        })
                    };
                m.mousedown(function (d) {
                    w =
                        d.pageY;
                    z = j.height();
                    o = b.hasClass(STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE);
                    a("html").bind("mousemove", A);
                    a("html").bind("mouseleave", r);
                    a("html").bind("mouseup", r);
                    return false
                });
                var x = 0,
                    y = 0,
                    B = 0,
                    C = 0,
                    D = 0,
                    E = 0,
                    F = g.get(0).style,
                    G = function (a) {
                        a = Math.max(-y, Math.min((a.pageY - C - D) * E, 0));
                        F.top = a + "px";
                        b.STredraw("scroll");
                        return false
                    }, s = function () {
                        a(document).unbind("mouseup", s);
                        a(document).unbind("mouseleave", s);
                        a(document).unbind("mousemove", G)
                    };
                v.mousedown(function (d) {
                    var c = i.css("padding-top"),
                        c = parseInt(c.substring(0,
                            c.length - 2));
                    C = i.offset().top + c;
                    D = d.pageY - v.offset().top;
                    x = i.height();
                    y = g.height() - x;
                    B = v.height();
                    E = -1 * y / (x - B);
                    b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL, STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_OFF);
                    a(document).bind("mousemove", G);
                    a(document).bind("mouseleave", s);
                    a(document).bind("mouseup", s);
                    return false
                });
                i.mousewheel(function (d, c) {
                    var f = i.height(),
                        f = g.height() - f;
                    if (!(f < 0)) {
                        var e = 1;
                        if (isChrome() || isFirefox() || isMSIE()) e = 16;
                        f = Math.max(-f, Math.min(g.position().top + e * c, 0));
                        F.top = f + "px";
                        b = a(this).parents("." +
                            STCONST_CLASS_PLAYER).eq(0);
                        b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL, STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_OFF);
                        b.STredraw("scroll")
                    }
                }, true);
                var H = function (a) {
                    b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL, STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_OFF);
                    var d = 0,
                        d = a == "line" ? Math.min(g.position().top + 18, 0) : Math.min(g.position().top + i.height() - 20, 0);
                    g.css("top", d);
                    b.STredraw("scroll")
                }, I = function (a) {
                        var d = g.height() - i.height();
                        if (!(d < 0)) {
                            b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL, STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_OFF);
                            var c = 0,
                                c = a == "line" ? Math.max(g.position().top - 18, -d) : Math.max(g.position().top - i.height() + 20, -d);
                            g.css("top", c);
                            b.STredraw("scroll")
                        }
                    };
                i.keydown(function (a) {
                    switch (a.keyCode) {
                    case 38:
                        H("line");
                        break;
                    case 33:
                        H("page");
                        break;
                    case 34:
                        I("page");
                        break;
                    case 40:
                        I("line")
                    }(a.keyCode == 38 || a.keyCode == 33 || a.keyCode == 40 || a.keyCode == 34) && a.preventDefault()
                });
                K.click(function () {
                    var b = a(this).parents("." + STCONST_CLASS_PLAYER).eq(0);
                    b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL) == STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_ON ?
                        b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL, STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_OFF) : b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL, STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_ON);
                    b.STredraw()
                });
                n.keyup(function (b) {
                    a(this).trigger(STCONST_EVENT_PLAYER_SEARCH);
                    (b.which && b.which == 13 || b.keyCode && b.keyCode == 13) && a(this).trigger(STCONST_EVENT_PLAYER_SEARCHNEXT);
                    a(this).val() != "" ? (p.removeClass(STCONST_CLASS_PLAYER_SEARCHEMPTY), q.removeClass(STCONST_CLASS_PLAYER_SEARCHEMPTY)) : (p.addClass(STCONST_CLASS_PLAYER_SEARCHEMPTY),
                        q.addClass(STCONST_CLASS_PLAYER_SEARCHEMPTY))
                });
                n.focus(function () {
                    a(this).hasClass(STCONST_CLASS_PLAYER_SEARCHEMPTY) && (a(this).removeClass(STCONST_CLASS_PLAYER_SEARCHEMPTY), a(this).val(""), a(this).trigger(STCONST_EVENT_PLAYER_SEARCH))
                });
                n.blur(function () {
                    a(this).val() == "" && (a(this).val(STCONST_TEXT_BAR_SEARCH), a(this).addClass(STCONST_CLASS_PLAYER_SEARCHEMPTY), p.addClass(STCONST_CLASS_PLAYER_SEARCHEMPTY), q.addClass(STCONST_CLASS_PLAYER_SEARCHEMPTY))
                });
                p.click(function () {
                    a(this).trigger(STCONST_EVENT_PLAYER_SEARCHNEXT)
                });
                q.click(function () {
                    a(this).trigger(STCONST_EVENT_PLAYER_SEARCHPREV)
                });
                b.bind(STCONST_EVENT_PLAYER_SHOW, function () {
                    b.addClass(STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE);
                    i.slideDown(500);
                    l.slideDown(500, function () {
                        i.height("");
                        b.STredraw()
                    })
                });
                b.bind(STCONST_EVENT_PLAYER_HIDE, function () {
                    i.slideUp(500, function () {
                        b.removeClass(STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE)
                    });
                    l.slideUp(500)
                });
                b.bind(STCONST_EVENT_CONTENT_CLICKED, function (a, d) {
                    b.onSTVPprogress(d.timestamp, true);
                    b.STVPseekToAndPlay(d.timestamp);
                    b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL, STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_ON);
                    b.STredraw()
                });
                b.bind(STCONST_EVENT_PLAYER_SEARCH, function () {
                    var d = n.val(),
                        c = b.STtranscript();
                    b.hasClass(STCONST_CLASS_PLAYER_TRANSCRIPT_VISIBLE) || a(this).trigger(STCONST_EVENT_PLAYER_SHOW);
                    var f = d == "" ? [] : c.search(d);
                    a(this).data(STCONST_DATAKEY_TRANSCRIPT_SEARCHMATCHES, f);
                    a(this).STsearchPrevButton();
                    a(this).STsearchNextButton();
                    a(c.content).each(function () {
                        var b = a("#" + STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX + this.id),
                            c = this.text;
                        d != "" && (c = c.replace(RegExp("(" + d.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1") + ")", "i"), "<span class='" + STCONST_CLASS_PLAYER_SEARCHMATCH + "'>$1</span>"));
                        b.html(c)
                    })
                });
                b.bind(STCONST_EVENT_PLAYER_SEARCHNEXT, function () {
                    var d = a(this).data(STCONST_DATAKEY_TRANSCRIPT_SEARCHMATCHES),
                        c = a(this).data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID),
                        f;
                    a(this).STsearchField().val();
                    if (d.length != 0) {
                        if (c >= d[d.length - 1].id) f = d[0];
                        else
                            for (var e in d) {
                                var g = d[e];
                                if (c < g.id) {
                                    f = g;
                                    break
                                }
                            }
                        b.trigger(STCONST_EVENT_CONTENT_CLICKED, [f])
                    }
                });
                b.bind(STCONST_EVENT_PLAYER_SEARCHPREV, function () {
                    var b = a(this).data(STCONST_DATAKEY_TRANSCRIPT_SEARCHMATCHES),
                        d = a(this).data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID),
                        c;
                    if (d <= b[0].id) c = b[b.length - 1];
                    else
                        for (var f in b) {
                            var e = b[f];
                            if (d <= e.id) break;
                            c = e
                        }
                    a(this).trigger(STCONST_EVENT_CONTENT_CLICKED, [c])
                });
                var t = function () {
                    setTimeout(N, 50)
                }, N = function () {
                        STgetSelectedText() == "" && (b.trigger(STCONST_EVENT_CONTENT_DESELECT), a("html").unbind("mouseup", t), a("html").unbind("keyup", t))
                    };
                b.bind(STCONST_EVENT_CONTENT_SELECT,
                    function () {
                        f.editEnabled != STCONST_CONFIG_EDITENABLED_ON && (a(this).STsharePane().addClass(STCONST_CLASS_PLAYER_SHAREPANE_HIGHLIGHT).find("." + STCONST_CLASS_PLAYER_SHAREPANE_TEXT).html(STCONST_TEXT_SHARE_HIGHLIGHTED), a("html").bind("mouseup", t), a("html").bind("keyup", t))
                    });
                b.bind(STCONST_EVENT_CONTENT_DESELECT, function () {
                    a(this).STsharePane().removeClass(STCONST_CLASS_PLAYER_SHAREPANE_HIGHLIGHT).find("." + STCONST_CLASS_PLAYER_SHAREPANE_TEXT).html(STCONST_TEXT_SHARE_SELECTED);
                    a(this).STsharePane().hasClass(STCONST_CLASS_PLAYER_SHAREPANE_ACTIVE) ||
                        (a(this).STsharePane().removeClass(STCONST_CLASS_COPY_FEEDBACK).find("." + STCONST_CLASS_PLAYER_SHAREPANE_TEXT).html(STCONST_TEXT_SHARE_UNSELECTED), a(this).STsharePane().find("." + STCONST_CLASS_SHARE_BUTTON).show())
                });
                b.bind(STCONST_EVENT_CONTENT_COPY, function () {
                    f.editEnabled != STCONST_CONFIG_EDITENABLED_ON && (b.STshowCopyMessage(), window.setTimeout(function () {
                        b.SThideCopyMessage()
                    }, 5E3))
                });
                b.bind(STCONST_EVENT_TRANSCRIPT_LOADED, function (b, d) {
                    a("." + STCONST_CLASS_PLAYER_TRANSCRIPT_LOADING + d).each(function () {
                        a(this).removeClass(STCONST_CLASS_PLAYER_TRANSCRIPT_LOADING +
                            d);
                        a(this).STrenderTranscript(d)
                    })
                });
                b.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL, STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_ON);
                b.data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID, 0);
                b.data(STCONST_DATAKEY_CONFIG, f);
                b.data(STCONST_DATAKEY_TRANSCRIPT_IGNOREPROGRESS, false);
                f.editEnabled == STCONST_CONFIG_EDITENABLED_ON && b.data(STCONST_DATAKEY_EDITMESSAGE_SHOWN, false);
                b.hasClass(STCONST_CLASS_EMBEDDED) && (b.STtranscriptWrapper().height(f.defaultHeight), b.STsharePane().height(f.defaultHeight + 14));
                f.initialState ==
                    STCONST_CONFIG_INITIALSTATE_OPEN ? b.trigger(STCONST_EVENT_PLAYER_SHOW) : b.trigger(STCONST_EVENT_PLAYER_HIDE);
                b.STloadTranscriptFromPage();
                m = Math.max(400, b.width());
                f.matchVideoWidth && (m = Math.max(400, a(this).width()));
                b.width(m - (b.outerWidth() - b.innerWidth()));
                d.width(m - (d.outerWidth() - d.innerWidth()));
                c.width(m - (c.outerWidth() - c.innerWidth()));
                a(this).css("text-align") == "center" ? b.css("margin", "0 auto") : b.css("margin-left", a(this).css("margin-left"));
                b.width() < 460 && b.addClass("narrow");
                b.STredraw()
            });
            return this
        },
        STcaptureQuoteLink: function () {
            var d = STgetSelectedText() + "",
                c = STgetSelectedContentID();
            d == "" && (d = a(this).parents("." + STCONST_CLASS_PLAYER).eq(0), c = d.data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID), d = d.STtranscriptDisplay().find("#" + STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX + c).text());
            a(this).data(STCONST_DATAKEY_QUOTELINK_TEXT, d);
            a(this).data(STCONST_DATAKEY_QUOTELINK_CONTENTID, c)
        },
        STtwitterShare: function (d) {
            var c = a(this).data(STCONST_DATAKEY_QUOTELINK_TEXT),
                b = a(this).data(STCONST_DATAKEY_QUOTELINK_CONTENTID),
                e = a(this).parents("." + STCONST_CLASS_PLAYER).eq(0),
                e = a(e).STtranscript(),
                b = e.getContentByID(b),
                g = STsetURLParameterByName(window.location.href, STCONST_QUERY_PLAYER_QUOTELINK + e.transcriptID, b.timestamp);
            a.ajax({
                type: "GET",
                url: "http://api.bit.ly/v3/shorten",
                dataType: "jsonp",
                data: {
                    login: STCONSTS_WSCREDS_BITLY_LOGIN,
                    apiKey: STCONSTS_WSCREDS_BITLY_APIKEY,
                    longUrl: g,
                    format: "json"
                },
                success: function (a, b) {
                    new f;
                    g = " - " + a.data.url;
                    b = c.replace("\n", "");
                    b.length + g.length > 140 && (b = b.slice(0, 138 - g.length));
                    var b = '"' +
                        b + '"' + g,
                        e = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(b);
                    d.document.location = e
                },
                error: function () {}
            })
        },
        STfacebookShare: function (d) {
            var c = a(this).data(STCONST_DATAKEY_QUOTELINK_TEXT),
                b = a(this).data(STCONST_DATAKEY_QUOTELINK_CONTENTID),
                e = a(this).parents("." + STCONST_CLASS_PLAYER).eq(0),
                e = a(e).STtranscript(),
                b = e.getContentByID(b),
                g = STsetURLParameterByName(window.location.href, STCONST_QUERY_PLAYER_QUOTELINK + e.transcriptID, b.timestamp);
            a.ajax({
                type: "GET",
                url: "http://api.bit.ly/v3/shorten",
                dataType: "jsonp",
                data: {
                    login: STCONSTS_WSCREDS_BITLY_LOGIN,
                    apiKey: STCONSTS_WSCREDS_BITLY_APIKEY,
                    longUrl: g,
                    format: "json"
                },
                success: function (a) {
                    new f;
                    g = a.data.url;
                    a = "http://facebook.com/sharer.php?u=" + encodeURIComponent(g) + "&t=" + encodeURIComponent(c);
                    d.document.location = a
                },
                error: function () {}
            })
        },
        STurlShare: function () {
            a(this).data(STCONST_DATAKEY_QUOTELINK_TEXT);
            var d = a(this).data(STCONST_DATAKEY_QUOTELINK_CONTENTID),
                c = a(this).parents("." + STCONST_CLASS_PLAYER).eq(0),
                b = a(c).STtranscript(),
                d = b.getContentByID(d),
                e = STsetURLParameterByName(window.location.href, STCONST_QUERY_PLAYER_QUOTELINK + b.transcriptID, d.timestamp);
            a.ajax({
                type: "GET",
                url: "http://api.bit.ly/v3/shorten",
                dataType: "jsonp",
                data: {
                    login: STCONSTS_WSCREDS_BITLY_LOGIN,
                    apiKey: STCONSTS_WSCREDS_BITLY_APIKEY,
                    longUrl: e,
                    format: "json"
                },
                success: function (b) {
                    new f;
                    e = b.data.url;
                    c.STshowMessage(STCONST_TEXT_MESSAGE_SHAREURL_BEGIN + e + STCONST_TEXT_MESSAGE_SHAREURL_END);
                    timeout = c.data(STCONST_DATAKEY_SHAREURL_TIMEOUT);
                    window.clearTimeout(timeout);
                    c.data(STCONST_DATAKEY_SHAREURL_TIMEOUT,
                        window.setTimeout(function () {
                            a(c).SThideMessage()
                        }, 1E4))
                },
                error: function () {}
            })
        },
        STredraw: function (a) {
            var c = this.STtranscriptPane(),
                b = this.STtranscriptDisplay(),
                f = this.STsharePane(),
                e = this.data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID),
                g = b.position().top,
                h = g,
                j = b.height(),
                c = c.height(),
                l = this.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL);
            if (a != "scroll") {
                c <= 0 ? f.height(0) : f.height(c + 14);
                if (e != 0 && l == STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_ON && (e = b.find("#" + STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX + e), f = Math.min(e.position().top,
                    j - c), e = e.height(), e = f + e + g, e < -1 || e > c)) h = -f;
                j = -(j - c);
                g < j && (h = Math.min(0, j));
                STplayer = this;
                h != g && (a == "handleDrag" ? b.css("top", h) : b.animate({
                    top: h
                }, {
                    step: function () {
                        STplayer.STredrawScrollBar()
                    }
                }))
            }
            a = this.find("." + STCONST_CLASS_PLAYER_AUTOSCROLL);
            l = this.data(STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL);
            a.removeClass(STCONST_CLASS_PLAYER_AUTOSCROLL_ON + " " + STCONST_CLASS_PLAYER_AUTOSCROLL_OFF);
            switch (l) {
            case STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_OFF:
                a.addClass(STCONST_CLASS_PLAYER_AUTOSCROLL_OFF);
                break;
            case STCONST_FLAG_TRANSCRIPT_AUTOSCROLL_ON:
                a.addClass(STCONST_CLASS_PLAYER_AUTOSCROLL_ON)
            }
            this.STredrawScrollBar()
        },
        STredrawScrollBar: function () {
            var a = this.STscrollVisible(),
                c = this.STtranscriptPane(),
                b = this.STtranscriptDisplay(),
                f = b.height(),
                c = c.height(),
                b = b.position().top;
            if (f > 0 && c < f) {
                var e = Math.max(c / f * c, 0) + 10;
                c < e ? a.hide() : a.is(":hidden") && a.show();
                a.height(e).css("top", -1 * b / (f - c) * (c - e))
            } else a.hide()
        },
        STrenderTranscript: function (d) {
            if (!(d in c)) return this;
            if (a(this).data(STCONST_DATAKEY_TRANSCRIPTID) != d) {
                var f = c[d];
                a(this).STtranscriptStatus().html("");
                var b = a(this).data(STCONST_DATAKEY_CONFIG);
                a(this).data(STCONST_DATAKEY_TRANSCRIPTID,
                    d);
                var e = "";
                b.editEnabled == STCONST_CONFIG_EDITENABLED_ON && (e = " contenteditable='true'");
                a(this).STtranscriptPane();
                var g = a(this).STtranscriptDisplay();
                if (a(this).hasClass(STCONST_CLASS_EMBEDDED)) a(this).removeClass(STCONST_CLASS_EMBEDDED);
                else {
                    var h = [];
                    a(f.content).each(function () {
                        h.push("<span id='" + STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX + this.id + "' class='" + STCONST_CLASS_PLAYER_TRANSCRIPT_CONTENT + "'" + e + ">" + this.text + "</span>")
                    });
                    var i = h.join("");
                    g.html(i)
                }
                a(this).removeClass(STCONST_CLASS_UNINITIALIZED);
                var j = this;
                a(g).find("." + STCONST_CLASS_PLAYER_TRANSCRIPT_CONTENT).click(function () {
                    if (b.editEnabled == STCONST_CONFIG_EDITENABLED_ON) {
                        if (a(this).hasClass(STCONST_CLASS_PLAYER_CURRENTCONTENT)) return;
                        j.data(STCONST_DATAKEY_EDITMESSAGE_SHOWN) || (j.data(STCONST_DATAKEY_EDITMESSAGE_SHOWN, true), j.STshowMessage(STCONST_TEXT_MESSAGE_EDIT), window.setTimeout(function () {
                            a(j).SThideMessage()
                        }, 5E3))
                    }
                    if (STgetSelectedText() == "") {
                        var d = a(this).STtranscript(),
                            c = a(this).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length);
                        (d = d.getContentByID(c)) && a(this).trigger(STCONST_EVENT_CONTENT_CLICKED, [d])
                    }
                });
                b.editEnabled == STCONST_CONFIG_EDITENABLED_ON && a(g).find("." + STCONST_CLASS_PLAYER_TRANSCRIPT_CONTENT).blur(function () {
                    var b = a(this).STtranscript(),
                        d = a(this).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length);
                    a(this).removeClass(STCONST_CLASS_EDIT_EMPTY);
                    a(this).html() == "" && (a(this).html(" "), a(this).addClass(STCONST_CLASS_EDIT_EMPTY));
                    b.updateContentByID(d, a(this).html())
                }).bind("keydown", function (b) {
                    if (b.keyCode ==
                        8 && (b = a(this).prev().get(0), typeof b !== "undefined" && b.lastChild.nodeType === Node.ELEMENT_NODE && b.lastChild.nodeName.toLowerCase() === "br")) {
                        var d = window.getSelection();
                        d.anchorOffset == 0 && (d.anchorNode == this || d.anchorNode == this.firstChild) && b.removeChild(b.lastChild)
                    }
                }).bind("keypress", function (a) {
                    if (isFirefox() && a.keyCode == 13) {
                        a = window.getSelection().getRangeAt(0);
                        a.deleteContents();
                        var b = document.createElement("br");
                        a.insertNode(b);
                        a.setStartAfter(b)
                    }
                });
                timestamp = STgetURLParameterByName(window.location.href,
                    STCONST_QUERY_PLAYER_QUOTELINK + d);
                timestamp != "" && (timestamp = new Number(timestamp), d = f.getContentByTimestamp(timestamp), a(this).trigger(STCONST_EVENT_PLAYER_SHOW), a(this).trigger(STCONST_EVENT_CONTENT_CLICKED, [d]));
                a(this).STredraw();
                return this
            }
        },
        STvideoPlayer: function () {
            return a("#" + a(this).data(STCONST_DATAKEY_VIDEOPLAYERID))
        },
        STbar: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_BAR)
        },
        STtranscriptPane: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_TRANSCRIPTPANE)
        },
        STsharePane: function () {
            return a(this).find("." +
                STCONST_CLASS_PLAYER_SHAREPANE)
        },
        STtranscriptDisplay: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_TRANSCRIPTDISPLAY)
        },
        STtranscriptWrapper: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_TRANSCRIPTWRAPPER)
        },
        STtranscriptStatus: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_TRANSCRIPTSTATUS)
        },
        STplayerHandle: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_HANDLE)
        },
        STplayerBase: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_BASE)
        },
        STautoScrollButton: function () {
            return a(this).find("." +
                STCONST_CLASS_PLAYER_AUTOSCROLL)
        },
        STtranscriptShowButton: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SHOWTEXT)
        },
        STscrollBar: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SCROLLBAR)
        },
        STscrollUp: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SCROLLUP)
        },
        STscrollDown: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SCROLLDOWN)
        },
        STscrollVisible: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SCROLLVISIBLE)
        },
        STsearch: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SEARCH)
        },
        STsearchField: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SEARCHFIELD)
        },
        STembedWrapper: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_EMBEDWRAPPER)
        },
        STsearchPrevButton: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SEARCHPREVBUTTON)
        },
        STsearchNextButton: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_SEARCHNEXTBUTTON)
        },
        STfontSizeButton: function () {
            return a(this).find("." + STCONST_CLASS_PLAYER_FONTSIZEBUTTON)
        },
        STmessagePane: function () {
            return a(this).find("." + STCONST_CLASS_MESSAGEPANE)
        },
        STtranscript: function () {
            var d;
            d = a(this).hasClass(STCONST_CLASS_PLAYER) ? a(this).data(STCONST_DATAKEY_TRANSCRIPTID) : a(this).parents("." + STCONST_CLASS_PLAYER).eq(0).data(STCONST_DATAKEY_TRANSCRIPTID);
            return c[d] ? c[d] : null
        },
        STsaveButton: function () {
            return a(this).find("." + STCONST_CLASS_EDIT_SAVE)
        },
        STcancelButton: function () {
            return a(this).find("." + STCONST_CLASS_EDIT_CANCEL)
        },
        STplayer: function () {
            var d = a(this).attr("id");
            return d in e ? e[d] : null
        },
        STautoScroll: function () {
            return a(this).find("." + STCONST_DATAKEY_TRANSCRIPT_AUTOSCROLL)
        },
        STloadTranscriptFromPage: function () {
            var d = this.attr("id").replace(STCONST_PLAYER_TRANSCRIPTEMBED_PREFIX + "_", "");
            a(this).addClass(STCONST_CLASS_PLAYER_TRANSCRIPT_LOADING + d);
            a(this).STtranscriptStatus().html(STCONST_TEXT_TRANSCRIPT_LOADING);
            var e = new f;
            a(this).find("." + STCONST_CLASS_PLAYER_TRANSCRIPT_CONTENT).each(function () {
                var b = new g;
                b.id = parseInt(a(this).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length));
                b.timestamp = parseInt(a(this).attr("name"));
                b.text = a(this).html();
                e.content.push(b)
            });
            e.transcriptID = d;
            e.hash = a(this).attr("data-hash");
            c[d] = e;
            a(this).trigger(STCONST_EVENT_TRANSCRIPT_LOADED, [d]);
            return this
        },
        STloadTranscriptFromServer: function (d) {
            a(this).STtranscriptDisplay().html("");
            var e = d.replace(/-/g, "_");
            if (e in c && c[e] instanceof f) return a(this).STrenderTranscript(e), this;
            else if (e in c && c[e] instanceof XMLHttpRequest) return a(this).addClass(STCONST_CLASS_PLAYER_TRANSCRIPT_LOADING + e), this;
            a(this).addClass(STCONST_CLASS_PLAYER_TRANSCRIPT_LOADING + e);
            var b = a(this).STtranscriptStatus();
            b.html(STCONST_TEXT_TRANSCRIPT_LOADING);
            var h = a(this).data(STCONST_DATAKEY_CONFIG).transcriptPath;
            h.length > 0 && h.charAt(h.length - 1) != "/" && (h += "/");
            h += d + ".html";
            STplayer = a(this);
            c[e] = a.ajax({
                type: "GET",
                cache: false,
                url: h,
                dataType: "html",
                success: function (d) {
                    b.html("");
                    var h = new f;
                    a(d).find("." + STCONST_CLASS_PLAYER_TRANSCRIPT_CONTENT).each(function () {
                        var b = new g;
                        b.id = parseInt(a(this).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length));
                        b.timestamp = parseInt(a(this).attr("name"));
                        b.text = a(this).html();
                        h.content.push(b)
                    });
                    h.transcriptID = e;
                    h.hash = a(d).attr("data-hash");
                    c[e] = h;
                    STplayer.trigger(STCONST_EVENT_TRANSCRIPT_LOADED, [e])
                },
                error: function () {
                    b.html(STCONST_TEXT_TRANSCRIPT_UNAVAILABLE)
                }
            });
            return this
        },
        STshowMessage: function (d) {
            var c = a(this).STmessagePane();
            c.html(d);
            c.fadeIn(200)
        },
        STshowCopyMessage: function () {
            var d = a(this).STsharePane();
            d.addClass(STCONST_CLASS_COPY_FEEDBACK);
            d.find("." + STCONST_CLASS_PLAYER_SHAREPANE_TEXT).html(STCONST_TEXT_MESSAGE_COPY);
            d.find("." + STCONST_CLASS_SHARE_BUTTON).hide()
        },
        SThideMessage: function () {
            a(this).STmessagePane().fadeOut(200)
        },
        SThideCopyMessage: function () {
            var d = a(this).STsharePane().removeClass(STCONST_CLASS_COPY_FEEDBACK);
            d.hasClass(STCONST_CLASS_PLAYER_SHAREPANE_HIGHLIGHT) ? d.find("." + STCONST_CLASS_PLAYER_SHAREPANE_TEXT).html(STCONST_TEXT_SHARE_HIGHLIGHTED) : d.hasClass(STCONST_CLASS_PLAYER_SHAREPANE_HIGHLIGHT) ? d.find("." + STCONST_CLASS_PLAYER_SHAREPANE_TEXT).html(STCONST_TEXT_SHARE_SELECTED) : d.find("." + STCONST_CLASS_PLAYER_SHAREPANE_TEXT).html(STCONST_TEXT_SHARE_UNSELECTED);
            d.find("." + STCONST_CLASS_SHARE_BUTTON).show()
        },
        onSTVPprogress: function (a, c) {
            if (!(typeof a == "undefined" || isNaN(a) || a <= 0)) {
                var b = this.STplayer() == null ? this : this.STplayer();
                if (b != null) {
                    var e = b.data(STCONST_DATAKEY_PLAYERQUEUE);
                    typeof e == "undefined" ? b.data(STCONST_DATAKEY_PLAYERQUEUE, -1) : e != -1 && (b.data(STCONST_DATAKEY_PLAYERQUEUE, -1), b.STVPseekTo(e));
                    var f = b.STtranscript();
                    if (f != null) {
                        var e = f.getContentByTimestamp(a),
                            g = b.data(STCONST_DATAKEY_TRANSCRIPT_IGNOREPROGRESS);
                        if (g !== false && !c)
                            if (e.id < g || e.timestamp -
                                STCONST_PLAYER_IGNORE_THRESHOLD > f.getContentByID(g).timestamp) return;
                            else b.data(STCONST_DATAKEY_TRANSCRIPT_IGNOREPROGRESS, false);
                        f = b.STtranscriptDisplay();
                        g = b.data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID);
                        g != e.id && (f.find("#" + STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX + g).removeClass(STCONST_CLASS_PLAYER_CURRENTCONTENT), b.data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID, e.id), f.find("#" + STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX + e.id).addClass(STCONST_CLASS_PLAYER_CURRENTCONTENT), c && b.data(STCONST_DATAKEY_TRANSCRIPT_IGNOREPROGRESS,
                            e.id), b.STsharePane().hasClass(STCONST_CLASS_PLAYER_SHAREPANE_ACTIVE) || b.STsharePane().addClass(STCONST_CLASS_PLAYER_SHAREPANE_ACTIVE).find("." + STCONST_CLASS_PLAYER_SHAREPANE_TEXT).html(STCONST_TEXT_SHARE_SELECTED), b.STredraw())
                    }
                }
            }
        },
        STVPseekTo: function (d) {
            typeof d != "undefined" && a(this).data(STCONST_DATAKEY_VIDEOPLAYER).seekTo(d)
        },
        STVPseekToAndPlay: function (a) {
            var c = this.data(STCONST_DATAKEY_VIDEOPLAYER);
            c.isPlaying() && !this.data(STCONST_DATAKEY_PLAYER_DISABLED) ? this.STVPseekTo(a) : (c.play(), this.data(STCONST_DATAKEY_PLAYERQUEUE,
                a))
        }
    })
})(stjQuery);

function isChrome() {
    return navigator.userAgent.toLowerCase().indexOf("chrome") != -1
}

function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf("firefox") != -1
}

function isMSIE() {
    return navigator.userAgent.toLowerCase().indexOf("msie") != -1
}

function STgetSelectedText() {
    if (window.getSelection) return window.getSelection();
    else if (document.getSelection) return document.getSelection();
    else if (document.selection) return document.selection.createRange().text;
    return ""
}

function STgetSelectedContentID() {
    if (typeof window.getSelection != "undefined") {
        var a = window.getSelection();
        if (a.toString()) return typeof a.setBaseAndExtent == "undefined" && (a = window.getSelection()), a = a.getRangeAt(0), a = a.cloneRange(), a.collapse(true), a = a.startContainer, typeof stjQuery(a).attr("id") == "undefined" && (a = stjQuery(a).parent()), stjQuery(a).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length)
    } else if (document.selection) return document.selection.createRange(), a = document.selection.createRange(),
    a.collapse(true), a = a.parentElement(), stjQuery(a).attr("id").slice(STCONST_PLAYER_TRANSCRIPTCONTENT_PREFIX.length)
}

function STgetURLParameterByName(a, g) {
    var g = g.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
        f = RegExp("[\\?&]?" + g + "=([^&#]*)").exec(a);
    return f == null ? "" : decodeURIComponent(f[1].replace(/\+/g, " "))
}

function STsetURLParameterByName(a, g, f) {
    var c = "";
    if (a.indexOf("?") != -1) {
        var e = a.indexOf(g + "=");
        e != -1 ? (c = a.substring(0, e) + g + "=" + f, isThereMore = a.indexOf("&", e), isThereMore > -1 && (c += a.substring(isThereMore))) : c = a + "&" + g + "=" + f
    } else c = a + "?" + g + "=" + f;
    return c
}
stjQuery.fn.extend({
    mousewheel: function (a, g, f) {
        return this.hover(function () {
            stjQuery.event.mousewheel.giveFocus(this, a, g, f)
        }, function () {
            stjQuery.event.mousewheel.removeFocus(this)
        })
    },
    mousewheeldown: function (a, g) {
        return this.mousewheel(function () {}, a, g)
    },
    mousewheelup: function (a, g) {
        return this.mousewheel(a, function () {}, g)
    },
    unmousewheel: function () {
        return this.each(function () {
            stjQuery(this).unmouseover().unmouseout();
            stjQuery.event.mousewheel.removeFocus(this)
        })
    },
    unmousewheeldown: stjQuery.fn.unmousewheel,
    unmousewheelup: stjQuery.fn.unmousewheel
});
stjQuery.event.mousewheel = {
    giveFocus: function (a, g, f, c) {
        a._handleMousewheel && stjQuery(a).unmousewheel();
        c == window.undefined && f && f.constructor != Function && (c = f, f = null);
        a._handleMousewheel = function (e) {
            if (!e) e = window.event;
            if (c) e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var h = 0;
            e.wheelDelta ? (h = e.wheelDelta / 120, window.opera && (h = -h)) : e.detail && (h = -e.detail / 3);
            g && (h > 0 || !f) ? g.apply(a, [e, h]) : f && h < 0 && f.apply(a, [e, h])
        };
        window.addEventListener && window.addEventListener("DOMMouseScroll", a._handleMousewheel,
            false);
        window.onmousewheel = document.onmousewheel = a._handleMousewheel
    },
    removeFocus: function (a) {
        if (a._handleMousewheel) window.removeEventListener && window.removeEventListener("DOMMouseScroll", a._handleMousewheel, false), window.onmousewheel = document.onmousewheel = null, a._handleMousewheel = null
    }
};
stjQuery.extend({
    loadCaptionBoxDependency: function (a, g) {
        var f = stjQuery("script[src*='" + STCONST_FILENAME + "']").attr("src").replace(RegExp("(.*)" + STCONST_FILENAME + ".*"), "$1");
        stjQuery.ajax({
            type: "GET",
            url: f + a,
            success: g,
            dataType: "script",
            cache: true
        })
    }
});
var STVP_PLAYER_AUTOID_PREFIX = "STautoID";
(function (a) {
    var g = 0;
    a.fixVideoEmbeds = function (f, c) {
        function e() {
            a("object, embed:not(object > embed)").each(function () {
                if (!a(this).html().match(f)) return true;
                g++;
                var e = a(this),
                    d = e.attr("height"),
                    J = e.attr("width"),
                    b = e.attr("id");
                if (typeof b == "undefined" || b == "") b = STVP_PLAYER_AUTOID_PREFIX + g;
                e.attr("id", b).attr("name", b);
                var k = "";
                if (e.is("embed")) k = e.attr("src");
                else if (k = e.find("embed"), k.length) k = k.attr("src");
                else if (e.attr("data")) k = e.attr("data");
                else return true;
                var u = {};
                e.get(0).tagName.toLowerCase() ==
                    "object" && e.find("param").each(function () {
                        u[a(this).attr("name")] = a(this).attr("value")
                    });
                u.allowScriptAccess = "always";
                typeof c == "function" && (k = c(k, b));
                swfobject.embedSWF(k, b, J, d, "8", null, null, u, {
                    id: b,
                    name: b
                })
            })
        }
        typeof swfobject == "undefined" ? a.getScript(window.document.location.protocol + "//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js", e) : e()
    }
})(stjQuery);
(function (a) {
    function g(a, c) {
        this.player = a;
        this.videoId = c
    }
    g.prototype = {
        cbHostId: 4,
        seekTo: function (a) {
            this.player.sendEvent("seek", a / 1E3)
        },
        play: function () {
            this.player.sendEvent("play")
        },
        isPlaying: function () {
            return false
        }
    };
    window.getUpdate = function (f, c) {
        var e = a("embed[src*='blip.tv']").first(),
            h = "";
        e.length > 0 ? (e = e.first(), h = e.attr("src")) : (e = a("object[data*='blip.tv']").first(), h = e.attr("data"));
        h = h.match(/play\/([a-zA-Z0-9+]+)/)[1];
        if (h.indexOf("+") !== -1) {
            var d = STCONST_PLAYER_TRANSCRIPTEMBED_PREFIX +
                "_4_" + h;
            a("#" + d.replace(/\+/g, "\\+")).attr("id", d.replace(/\+/g, "plus"))
        }
        e.hasCaptionBox() || e.captionBox({
            videoPlayer: new g(e.get(0), h.replace(/\+/g, "plus"))
        });
        switch (f) {
        case "time":
        case "current_time_change":
            e.onSTVPprogress(c * 1E3)
        }
    };
    a(function () {
        a.fixVideoEmbeds("blip.tv")
    })
})(stjQuery);
(function (a) {
    function g(a) {
        this.player = a;
        this.modVP = brightcove.getExperience(this.player.attr("id")).getModule(APIModules.VIDEO_PLAYER);
        this.videoId = this.modVP.getCurrentVideo().id
    }
    g.prototype = {
        cbHostId: 3,
        seekTo: function (a) {
            this.modVP.seek(a / 1E3)
        },
        play: function () {
            this.modVP.pause(false)
        },
        isPlaying: function () {
            return this.modVP.isPlaying()
        }
    };
    window.onTemplateLoaded = function (f) {
        var c = brightcove.getExperience(f),
            e = c.getModule(APIModules.VIDEO_PLAYER);
        c.getModule(APIModules.EXPERIENCE);
        c.getModule(APIModules.CONTENT);
        var h = a("#" + f),
            f = function () {
                var a = e.getCurrentVideo().id,
                    c = new g(h);
                if (h.STplayer() === null) h.captionBox({
                    videoPlayer: c
                }), e.pause(true);
                else {
                    var b = h.STplayer();
                    b.data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID, 0);
                    b.STloadTranscriptFromServer(c.cbHostId + "-" + a)
                }
            };
        e.getCurrentVideo() != null ? f() : e.addEventListener(BCMediaEvent.CHANGE, f);
        e.addEventListener(BCMediaEvent.PROGRESS, function (a) {
            h.onSTVPprogress(a.position * 1E3)
        })
    };
    a(function () {
        if (typeof brightcove != "undefined" && typeof APIModules == "undefined") {
            var f =
                brightcove.cdnURL;
            if (window.location.protocol == "https:") f = brightcove.secureCDNURL;
            a.ajax({
                async: false,
                type: "GET",
                url: f + "/js/APIModules_all.js",
                dataType: "script"
            })
        }
    })
})(stjQuery);
(function (a) {
    function g(a, c) {
        this.player = a;
        this.videoId = c
    }
    g.prototype = {
        cbHostId: 7,
        seekTo: function (a) {
            this.player.sendEvent("SEEK", a / 1E3)
        },
        play: function () {
            this.player.sendEvent("PLAY")
        },
        isPlaying: function () {
            return this.player.getConfig().state !== "IDLE"
        }
    };
    window.playerReady = function (a) {
        typeof a.id != "undefined" && (a = document.getElementById(a.id), a.addModelListener("TIME", "st_jw_onProgress"), a.addControllerListener("ITEM", "st_jw_itemChanged"))
    };
    window.st_jw_itemChanged = function (f) {
        if (typeof f.id != "undefined") {
            var c =
                document.getElementById(f.id),
                e = a(c).STplayer(),
                h = c.getPlaylist()[f.index];
            e == null ? (f = a(c).attr("data-stid"), typeof f !== "undefined" && f !== false ? a(c).captionBox({
                videoPlayer: new g(c, ""),
                preEmbedID: f
            }) : typeof h.captionbox !== "undefined" ? a(c).captionBox({
                videoPlayer: new g(c, h.captionbox)
            }) : (f = function () {
                var d = h.file,
                    d = a("<a/>").attr("href", d)[0],
                    d = d.pathname.replace(/^[^\/]/, "/") + d.search,
                    d = sha1Hash(d);
                a(c).captionBox({
                    videoPlayer: new g(c, d)
                })
            }, typeof sha1Hash == "undefined" ? a.loadCaptionBoxDependency("sha1.js",
                f) : f())) : (e.data(STCONST_DATAKEY_TRANSCRIPT_CURRENTCONTENTID, 0), e.STloadTranscriptFromServer(h.captionbox))
        }
    };
    window.st_jw_onProgress = function (f) {
        if (typeof f.id != "undefined") a("#" + f.id).onSTVPprogress(parseFloat(f.position) * 1E3)
    }
})(stjQuery);
(function (a) {
    function g(a) {
        this.player = a;
        this.videoId = this.player.getCurrentItem().embedCode
    }
    g.prototype = {
        cbHostId: 5,
        seekTo: function (a) {
            this.player.setPlayheadTime(a / 1E3)
        },
        play: function () {
            this.player.playMovie()
        },
        isPlaying: function () {
            return this.player.getState() != "playing"
        }
    };
    window.st_ooyala_callback = function (f, c, e) {
        var f = a("#" + f),
            h = f.parent(),
            d = h.STplayer();
        switch (c) {
        case "apiReady":
            h.captionBox({
                videoPlayer: new g(f.get(0))
            });
            h.STplayer().data(STCONST_DATAKEY_PLAYER_DISABLED, false);
            break;
        case "playheadTimeChanged":
            if (!d.data(STCONST_DATAKEY_PLAYER_DISABLED)) h.onSTVPprogress(e.playheadTime *
                1E3);
            break;
        case "adStarted":
            d.data(STCONST_DATAKEY_PLAYER_DISABLED, true);
            break;
        case "adCompleted":
            d.data(STCONST_DATAKEY_PLAYER_DISABLED, false)
        }
    }
})(stjQuery);
(function (a) {
    function g(a, e) {
        this.player = a;
        this.videoId = e
    }

    function f(c, e) {
        var f = a(c).is("object") ? a(c) : a(c).parent();
        f.captionBox({
            videoPlayer: new g(c, e.mediaId)
        });
        window.setInterval(function () {
            f.onSTVPprogress(c.api_getTrackPosition() * 1E3)
        }, 100)
    }
    g.prototype = {
        cbHostId: 6,
        seekTo: function (a) {
            this.player.api_seekTo(a / 1E3)
        },
        play: function () {
            this.player.api_play()
        },
        isPlaying: function () {
            return false
        }
    };
    a(function () {
        a.fixVideoEmbeds("soundcloud.com", function (a, e) {
            STgetURLParameterByName(a, "enable_api") !== "true" &&
                (a = STsetURLParameterByName(a, "enable_api", "true"));
            STgetURLParameterByName(a, "object_id") !== e && (a = STsetURLParameterByName(a, "object_id", e));
            return a
        });
        a("object[data*='soundcloud.com'], embed[src*='soundcloud.com']").length > 0 && a.loadCaptionBoxDependency("soundcloud.player.api.js", function () {
            soundcloud.addEventListener("onPlayerReady", f)
        })
    })
})(stjQuery);
(function (a) {
    function g(c) {
        this.player = c;
        this.videoId = a(c).children("param[name='flashvars']").attr("value").replace(/.*vid=(\d+).*/, "$1");
        this.player.ready()
    }

    function f(c) {
        var e = a("#" + c);
        e.captionBox({
            videoPlayer: new g(e.get(0))
        });
        setInterval(function () {
            var a = e.get(0).getProperty("logic.media", "time");
            e.onSTVPprogress(a * 1E3)
        }, 100)
    }
    g.prototype = {
        cbHostId: 9,
        seekTo: function (a) {
            a /= 1E3;
            var e = this.player.getProperty("logic.media", "duration");
            this.player.callMethod("logic.media", "seek", a / e, false, true)
        },
        play: function () {
            this.player.callMethod("logic.media", "play")
        },
        isPlaying: function () {
            return this.player.getProperty("logic.media", "playing")
        }
    };
    if (typeof ustream == "undefined") window.ustream = {};
    if (typeof ustream.flash == "undefined") window.ustream.flash = {};
    if (typeof ustream.flash.viewer == "undefined") window.ustream.flash.viewer = {};
    a(function () {
        a.fixVideoEmbeds("ustream.tv");
        a("object[id*='ustream']").each(function () {
            var c = a(this).attr("id");
            typeof window.ustream.flash.viewer[c] == "undefined" && (window.ustream.flash.viewer[c] = {
                ready: function () {
                    f(c)
                }
            })
        })
    })
})(stjQuery);
(function (a) {
    function g(c) {
        this.player = c;
        this.videoId = a(c.element).attr("src").match(/video\/(\d+)/)[1]
    }

    function f(c) {
        var e = a("#" + c),
            c = Froogaloop(c);
        e.captionBox({
            videoPlayer: new g(c)
        });
        c.addEvent("playProgress", function (a) {
            e.onSTVPprogress(parseFloat(a.seconds) * 1E3)
        })
    }
    g.prototype = {
        cbHostId: 2,
        seekTo: function (a) {
            this.player.api("seekTo", a / 1E3)
        },
        play: function () {
            this.player.api("play")
        },
        isPlaying: function () {
            this.player.api("paused", function () {});
            return false
        }
    };
    a(function () {
        function c() {
            var c = 0;
            e.each(function () {
                var d =
                    a(this).attr("src"),
                    e = STgetURLParameterByName(d, "api"),
                    b = STgetURLParameterByName(d, "player_id");
                e === "1" && typeof b !== "undefined" && b !== "" ? b !== a(this).attr("id") && a(this).attr("id", b) : (d = STsetURLParameterByName(d, "api", "1"), b = b || STVP_PLAYER_AUTOID_PREFIX + "_vimeo_" + c++, d = STsetURLParameterByName(d, "player_id", b), a(this).attr("src", d), a(this).attr("id", b));
                Froogaloop(b).addEvent("ready", f)
            })
        }
        var e = a("iframe[src*='vimeo']");
        e.length > 0 && (typeof Froogaloop == "undefined" ? a.loadCaptionBoxDependency("froogaloop.min.js",
            c) : c())
    })
})(stjQuery);
(function (a) {
    function g(c) {
        this.player = c;
        this.videoId = a(this.player).attr("id").replace(/wistia_(\d+).*/, "$1")
    }

    function f(c) {
        var e = a("#" + c);
        e.captionBox({
            videoPlayer: new g(e.get(0))
        });
        window.setInterval(function () {
            var a = e.get(0).getCurrentTime();
            e.onSTVPprogress(a * 1E3)
        }, 100)
    }
    g.prototype = {
        cbHostId: 8,
        seekTo: function (a) {
            this.player.videoSeek(a / 1E3)
        },
        play: function () {
            this.player.videoPlay()
        },
        isPlaying: function () {
            this.player.getCurrentState()
        }
    };
    a(function () {
        a.fixVideoEmbeds("wistia.com");
        var c = setInterval(function () {
            a("object[id*='wistia']").each(function () {
                var e =
                    a(this).attr("id");
                try {
                    return a(this).get(0).getCurrentState(), c = clearInterval(c), f(e), false
                } catch (g) {}
            })
        }, 100)
    })
})(stjQuery);
(function (a) {
    function g(a) {
        this.player = a;
        this.videoId = this.player.getVideoUrl().match(/v=([a-zA-Z0-9_\-]+)/)[1]
    }
    g.prototype = {
        cbHostId: 1,
        seekTo: function (a) {
            this.player.seekTo(a / 1E3, true)
        },
        play: function () {
            this.player.playVideo()
        },
        isPlaying: function () {
            return this.player.getPlayerState() == 1
        }
    };
    window.onYouTubePlayerReady = function (f) {
        if (typeof f != "undefined") {
            var c = a("#" + f),
                e = c.is("object") ? c : c.parent();
            e.captionBox({
                videoPlayer: new g(c.get(0))
            });
            window.setInterval(function () {
                e.onSTVPprogress(c.get(0).getCurrentTime() *
                    1E3)
            }, 100)
        }
    };
    window.onYouTubePlayerAPIReady = function () {
        a("iframe[src*='youtube']").each(function () {
            new YT.Player(a(this).attr("id"), {
                events: {
                    onReady: function (f) {
                        var c = f.target,
                            e = a(c.a);
                        e.captionBox({
                            videoPlayer: new g(c)
                        });
                        window.setInterval(function () {
                            e.onSTVPprogress(c.getCurrentTime() * 1E3)
                        }, 100)
                    }
                }
            })
        })
    };
    a(function () {
        a.fixVideoEmbeds("youtube.com", function (a, c) {
            STgetURLParameterByName(a, "enablejsapi") != 1 && (a = STsetURLParameterByName(a, "enablejsapi", 1));
            STgetURLParameterByName(a, "playerapiid") != c &&
                (a = STsetURLParameterByName(a, "playerapiid", c));
            return a
        });
        var f = 0,
            c = a("iframe[src*='youtube']");
        c.length > 0 && (c.each(function () {
            var c = a(this).attr("id");
            if (typeof c == "undefined" || c == "") c = STVP_PLAYER_AUTOID_PREFIX + "_youtube_" + f++, a(this).attr("id", c);
            c = a(this).attr("src");
            STgetURLParameterByName(c, "enablejsapi") !== "1" && (c = STsetURLParameterByName(c, "enablejsapi", "1"), a(this).attr("src", c))
        }), typeof YT == "undefined" && a.getScript(window.document.location.protocol + "//www.youtube.com/player_api"))
    })
})(stjQuery);