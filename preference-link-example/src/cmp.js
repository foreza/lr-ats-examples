// All LR related CMP related logic 
import { decodeStringAndReturnContents } from "./tcf-utils";

// Helper function that we can call to suppress the PM SDK dialogue
export function pollForTCFThenRun(tcfApiFunction){

    var maxRetry = 10;

    var poller = setInterval(() => {

        if (typeof __tcfapi == 'function') {
            console.log("__tcfapi defined; let's go.", maxRetry);
            clearInterval(poller);
            tcfApiFunction();;
        }
        
        if (maxRetry == 0) {
            console.log("max retry limit reached; cancel polling");
            clearInterval(poller);
        }
        maxRetry--;
    }, 100)

}

// Example: Pass this to pollForTCF to ensure consent does not show
export function suppressPopup() {
    __tcfapi('toggleConsentTool', 2, () => { console.log("CMP should be hidden.") }, false);
}

// Example: Pass this to pollForTCF to check to see whether consent exists
export function doesConsentExistLocally(){
    __tcfapi('getTCData', 2, (tcData, success) => {
        if (tcData && tcData.tcString && tcData.tcString)
        console.log(tcData.tcString);
    });
}


export function registerEventListenerForConsentChangeAndCallBack(callbackFunction) {

    // https://docs.liveramp.com/privacy-manager/en/events--gdpr-for-web-.html#idm44828611968208

    try {
        __tcfapi('addEventListener', 2, (e) => {

            console.log("Consent updated - grabbing new string..");
    
            // Up to you: Remove the event listener to ensure it happens only once per page load
            // Note that this ensures that future changes persist the link to PL
            // __tcfapi('removeEventListener', 2, (e) => {
            //     console.log("Removing temporary consentChanged listener");
            // }, "consentChanged");
    
            // Get the updated TC data and return it to the callback function as an argument.
            __tcfapi('getTCData', 2, (tcData, success) => {
                console.log("New consent string: ", tcData.tcString);
                callbackFunction(tcData.tcString);
            });
            
        }, "consentChanged");
    } catch (e) {
        // TODO: better error handling
        console.error(e); 
    }
    
}

export function setConsentGivenConsentString(consentString){

    // decodeStringAndReturnContents
    // Assumption - string will decode 100% of the time?

    // test string: 
    // var tString = "CPl4VL9Pl4VL9HmAAAENCZCMAP_AAH_AAAAABcwCQABAAHAAUAFsAL4AYQBHgCTAFyAm8AYAAgACAAwgEtAJoATcAAA.II7Nd_X__bX9n-_7_6ft0eY1f9_r37uQzDhfNs-8F3L_W_LwX32E7NF36tq4KmR4ku1bBIQNtHMnUDUmxaolVrzHsak2cpyNKJ_JkknsZe2dYGF9Pn9lD-YKZ7_5_9_f52T_9_9_-39z3_9f___dv_-__-vjf_599n_v9fV_78_Kf9______-____________8A";

    // CPlyCEAPl1VAAADABAENCzCoAP_AAE_AAAAAGMwBwAKgBMADCAU0BTwC8wGMgYzAGAAqAEwAMIBTQF5gMZAA.doAAAUgAA4AA

    let tcObject = decodeStringAndReturnContents(consentString);

    if (typeof tcObject == 'undefined') {
        // short terminate; if we're here, there was an invalid string provided / string failed to decode
        // rather than risk noncompliance; we should prompt the user.
        console.log("Unable to use provided consent string, bringing up prompt: ", consentString);

        // Force the promt to show.
        __tcfapi('showConsentManager');

        // After this is done; call a manual sync to PL.
        // Example like: forcePreferenceLinkEnterpriseUpdateForIdentifier (in index)

        return;
        
    }

    console.log("Consent components:", tcObject);
    
    // Object with purposeIds, vendorIds, legIntPurposeIds, legIntVendorIds and/or specialFeatureIdsproperties.
    let consentObject = {
        "purposeIds": Array.from(tcObject.purposeConsents.set_),
        "vendorIds": Array.from(tcObject.vendorConsents.set_),
        "legIntPurposeIds": Array.from(tcObject.purposeLegitimateInterests.set_),
        "legIntVendorIds": Array.from(tcObject.vendorLegitimateInterests.set_),
        "specialFeatureIds": Array.from(tcObject.specialFeatureOptins.set_),
    }; // TODO;


    // const {
    //     purposeIds,
    //     vendorIds,
    //     legIntPurposeIds,
    //     legIntVendorIds,
    //     specialFeatureIds,
    //     publisher = {},
    //     consentOnDemand = false,
    //   }

    console.log(consentObject);

    // Take in the new consent object
    __tcfapi('accept', 2, (data,result) => {console.log(result)}, consentObject);

    // TODO: Update UI

}