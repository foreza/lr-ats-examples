import {TCString, TCModel} from '@iabtcf/core';

window.TCString = TCString; // Assign to window so we can play with the decoder

// If this has an error; return empty array?
export function decodeStringAndReturnContents(encodedTCString) {
    
    window.decodedModel = "";
    var decodedTCModel;
    try {
        decodedTCModel = TCString.decode(encodedTCString);
        window.decodedModel = decodedTCModel;
        console.log(`decodedTCModel: `, decodedTCModel);
        return decodedTCModel;
    } catch (e) {
      // Likely invalid TC string.
      console.error("Invalid TC string - generate a new one.", e);
      // If there's no existing TC string
    }
    


}



