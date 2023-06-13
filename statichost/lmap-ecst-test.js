// Got your conk!
var launchPad = document.createElement("script")
  , launchPadConfiguration = (launchPad.async = !0,
launchPad.defer = !0,
!function() {
    var o, c, n, e;
    "function" != typeof window.__launchpad && (o = [],
    c = window,
    n = c.document,
    e = c.__launchpad ? c.__launchpad.start : function() {}
    ,
    !c.__launchpad && function e() {
        var a, t = !!c.frames.__launchpadLocator;
        return t || (n.body ? ((a = n.createElement("iframe")).style.cssText = "display:none",
        a.name = "__launchpadLocator",
        n.body.appendChild(a)) : setTimeout(e, 5)),
        !t
    }() && (c.__launchpad = function(e, a, t, n) {
        if (!(e = [e, a, t, n]).length)
            return o;
        "ping" === e[0] ? "function" == typeof e[2] && e[2]({
            loaded: !1,
            apiVersion: "1.0"
        }, !0) : o.push(e)
    }
    ,
    c.__launchpad.commandQueue = o,
    c.__launchpad.start = e,
    c.addEventListener("message", function(t) {
        var n = "string" == typeof t.data
          , e = {};
        try {
            e = n ? JSON.parse(t.data) : t.data
        } catch (e) {}
        var o = e.__launchpadCall;
        o && c.__launchpad(o.command, o.version, function(e, a) {
            t.source && (e = {
                __launchpadReturn: {
                    returnValue: e,
                    success: a,
                    callId: o.callId,
                    command: o.command
                }
            },
            n && (e = JSON.stringify(e)),
            t.source.postMessage(e, "*"))
        }, o.parameter)
    }, !1)))
}(),
{
    configVersion: 21,
    cmpRules: [{
        triggers: [{
            type: "geo",
            condition: {
                allCountries: !1,
                allStates: !1,
                countries: ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LT", "LV", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"],
                includeSelection: !0,
                states: []
            }
        }],
        type: "gdpr",
        apps: [{
            weight: 1,
            id: "1053505c-f262-497e-bd95-c6dc323971c8"
        }]
    }, {
        triggers: [{
            type: "geo",
            condition: {
                allCountries: !1,
                allStates: !0,
                countries: ["US"],
                includeSelection: !0,
                states: []
            }
        }],
        type: "global",
        apps: [{
            weight: 1,
            id: "bf694711-e1b9-4d71-9ca4-eabe62df97df"
        }]
    }],
    logging: !0,
    atsRules: [{
        ecst: {
            lr_placementId: "712137",
            enabled: !0,
            id: "712137"
        },
        id: "a15dfeef-211e-4025-a6b8-ee545a81e707",
        triggers: [{
            type: "LOAD_EVENT",
            loadEvent: "DOM_READY"
        }, {
            type: "PAGE_VIEW",
            rules: [{
                operation: "CONTAINS",
                value: "localhost",
                attribute: "PAGE_URL"
            }, 
            {
                operation: "CONTAINS",
                value: "jasonthechiu.com",
                attribute: "PAGE_URL"
            }, 
            {
                operation: "CONTAINS",
                value: "rampidbestid.com",
                attribute: "PAGE_URL"
            },{
                operation: "CONTAINS",
                value: "fktr.io",
                attribute: "PAGE_URL"
            }, {
                operation: "CONTAINS",
                value: "rlcdn.com",
                attribute: "PAGE_URL"
            }]
        }, {
            type: "GEO_TARGETING",
            geoTargeting: {
                includeSelection: !0,
                countries: ["NL", "US", "IN"],
                allStates: !0
            }
        }],
        type: "ATS"
    }],
    triggers: [],
    preload: !0,
    libraryVersion: "latest"
})
  , nodeScript = (/MSIE/.test(navigator.userAgent) && console.log("Your browser doesn't support LiveRamp's LaunchPad. Please update to a more recent one."),
launchPad.src = "https://launchpad.acc.privacymanager.io/latest/launchpad.bundle.js",
launchPad.onload = function() {
    window.__launchpad.start(launchPadConfiguration)
}
,
launchPad.onerror = function(e) {
    console.log("Script not loaded due to: ", e)
}
,
document.getElementsByTagName("script")[0]);
nodeScript.parentNode.insertBefore(launchPad, nodeScript);
