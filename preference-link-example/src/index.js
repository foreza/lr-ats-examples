// Example core implementation
import { pollForTCFThenRun, suppressPopup, doesConsentExistLocally, setConsentGivenConsentString, registerEventListenerForConsentChangeAndCallBack} from './cmp';
import { fetchSubjectDataConsentForIdentifier, setSubjectDataConsentForIdentifier } from './pl-enterprise-sync';

// We would like to hide the prompt on page load.
pollForTCFThenRun(suppressPopup);
pollForTCFThenRun(doesConsentExistLocally);

// All of these functions are available through the global "prefLinkSyncDemo" object.


// Demo function to get the consent string from CMP
export function getCurrentLocalConsentString(successCallbackFn) {
  __tcfapi('getTCData', 2, (tcData, success) => {
    console.log("Consent string from CMP: ", tcData.tcString);
    successCallbackFn(tcData.tcString);
  })
};


// Demo function to get the consent string from PL
export function getRemoteConsentString(identifier, successCallbackFn, failureCallbackFn) {
  __tcfapi('getTCData', 2, (tcData, success) => {

    fetchSubjectDataConsentForIdentifier(identifier, (result) => {

      // If the user exists, result will be the consent string
      if (typeof result != "undefined") {
        successCallbackFn(result);
      } else {
        // Doesn't exist.
        failureCallbackFn();
      }

  })
});
};


// Secondary sync function 
// To be used to "force" the preference link version to match the one stored in our CMP
export function forcePreferenceLinkEnterpriseUpdateForIdentifier (identifier) {

  __tcfapi('getTCData', 2, (tcData, success) => {
    console.log("Consent string from CMP: ", tcData.tcString);
    
    setSubjectDataConsentForIdentifier(identifier, tcData.tcString, (e) => {
      console.log("Data was force updated from client; server will now match client CMP value.")
      // Data has been set (hopefully) in preference link!
    });
  });


}

// Main sync function to be called once subject is identified.
// First fetches the subject data and then either triggers CMP prompt (new subject) or sets PL string directly.
export function syncWithPreferenceLinkEnterpriseForIdentifier (identifier) {

  // First, fetches subject data
  fetchSubjectDataConsentForIdentifier(identifier, (result) => {

    // If the user exists, result will be the consent string
    if (typeof result != "undefined") {

      // Ensure the remote consent string is the one used in the CMP.
      // We'll leverage the TCFIABv2 JS lib to decode the string and set it LOCALLY (in our CMP)
      setConsentGivenConsentString(result);
      // Done! 
      // Optionally - if you'd prefer to not do it this way, you can enable "set consent string by query param"
      // then, append the consent string to the URL and redirect the page, with the query param of: cconsent-v2
      // If you do this; make sure to put in logic to only do this once so you don't get caught in an infinite loop!
      // https://jasonthechiu.com/lr-ats-examples/preference-link-example/?cconsent-v2=CPkPJ8APkPJ8AADAOBENCvCgAAAAAAAAAAAAAAAAAAAA.YAAAAAAAAAA&euconsent-v2=CPkPJ8APkPJ8AADAOBENCvCoAP_AAH_AAAAAGMwBgAKgBMAKaAp4BeYDGQMZgDAAVACYAGEApoC8wGMgAA.doAAAUgAAAA&gdpr-dau=true&gdpr-last-interaction=1671491039115

    } else {

      console.log("Received undefined; sync will now defer to CMP for consent string.")

      // User doesn't exist or an invalid string was recorded in PL 
      registerEventListenerForConsentChangeAndCallBack((consentString) => {
        // Callback will be just the consent string

        // and then set it to PL once we get the TCF API callback (and unsubscribe!)
        setSubjectDataConsentForIdentifier(identifier, consentString, (e) => {
          console.log("Data was updated from client; server now has client value. (new data subject)")
          // Data has been set (hopefully) in preference link!
        });

      })

      // Surface the consent prompt
      // Above callback (registerEventListenerForConsentChangeAndCallBack)
      // Ensures that once the CMP is closed; the data for PL can be updated.
      __tcfapi('showConsentManager');

    }

  })

}