// TODO: Use your own keys and instance ID / account ID for this
const instanceId = process.env.INSTANCE_ID; // "TODO";
const accountId = process.env.ACCOUNT_ID; // "TODO";
const dataKey = process.env.DATA_KEY; // "TODO";

// To run this; create your own .env file with the following:
// INSTANCE_ID=""
// ACCOUNT_ID=""
// DATA_KEY=""


// Your PL Enterprise endpoint
export const prefLinkEndpoint = `https://data-api.${instanceId}.${accountId}.preferencelink.com/v1/subject-data/`;

export async function fetchSubjectDataConsentForIdentifier(identifier, callbackFunction) {

    let path = `${identifier}?info=all`;

    var requestOptions = {
        method: 'GET',
        headers: {
            'data-access-key': dataKey
        },
        redirect: 'follow'
    };

    var requestURL = prefLinkEndpoint + path;

    fetch(requestURL, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.data && result.data.consentString) {
                console.log("Found subject data in PL with consent")
                callbackFunction(result.data.consentString);
            } else {
                console.log("Did not find subject data in PL, or consent not recorded in PL")
                callbackFunction(undefined);
            }
        })
        .catch(error => console.log('error', error));
}

// This assumes a
export async function setSubjectDataConsentForIdentifier(identifier, consentString, callbackFunction) {

    let path = `/`;

    // TODO: Sanitize/check data types...
    var data = {
        "consentString": consentString,
        "custom_user_id": identifier,
        "identifying_field": "custom_user_id"
    }

    var requestOptions = {
        method: 'POST',
        headers: {
            'data-access-key': dataKey,
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    };

    var requestURL = prefLinkEndpoint + path;
    fetch(requestURL, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("POST success with result:", result);
            callbackFunction(result);
        })
        .catch(error => console.log('error', error));
}





