import {TCString, TCModel} from '@iabtcf/core';


// If this has an error; return empty array?
export function decodeStringAndReturnContents(encodedTCString) {

    window.playWithMe = "hello";
    var decodedTCModel;
    try {
        decodedTCModel = TCString.decode(encodedTCString);
        window.playWithMe = decodedTCModel;
        console.log(decodedTCModel);
        return decodedTCModel;
    } catch (e) {
      // Likely invalid TC string.
      console.error("Invalid TC string - generate a new one.", e);
      // If there's no existing TC string
    }
    


}



