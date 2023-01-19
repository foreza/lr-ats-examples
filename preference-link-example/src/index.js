// Example core implementation
import {TCString, TCModel} from '@iabtcf/core';
import {pollForTCFThenRun, suppressPopup, doesConsentExistLocally} from './cmp';
import {fetchSubjectDataConsentForIdentifier, setSubjectDataConsentForIdentifier} from './pl-enterprise-sync';


const encodedString = "CPl0qlVPl0qlVL_AAAENCZCAAAIAAAAAAAAAAwwAQAwgAAAA.II7Nd_X__bX9n-_7_6ft0eY1f9_r37uQzDhfNs-8F3L_W_LwX32E7NF36tq4KmR4ku1bBIQNtHMnUDUmxaolVrzHsak2cpyNKJ_JkknsZe2dYGF9Pn9lD-YKZ7_5_9_f52T_9_9_-39z3_9f___dv_-__-vjf_599n_v9fV_78_Kf9______-____________8A"

pollForTCFThenRun(suppressPopup);
pollForTCFThenRun(doesConsentExistLocally);

// fetchSubjectDataConsentForIdentifier("1984", (e) => console.log(e));
setSubjectDataConsentForIdentifier(1984, encodedString, (e) => console.log(e));



// Step 1: Do we have a TC string in storage already?

// take an encoded TC string and decode into a TCModel


try {

} catch (e) {
  // Likely invalid TC string.
  console.error(e);

  // If there's no existing TC string
}
var decodedTCModel = TCString.decode(encodedString);
console.log(decodedTCModel);
