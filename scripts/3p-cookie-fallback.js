// Example function that calls the ATS API
// This should pick up the rlas3 cookie set on the rlcdn domain
// It will either return an envelope, or not!
// If you call this on a domain that your PID is not approved for, expect this to fail
async function doEnvelopeAPIFallbackForPID(pid) {

    var envString;

    try {
        var response = await fetch("https://api.rlcdn.com/api/identity/envelope?pid="
            + pid, { credentials: 'include' });
        envString = await response.json();
        envString = envString.envelope;

        // TODO: Persist this yourself to use in subsequent requests for users that are not logged in.
        // As best practice, make sure to discard and not use this if you get a RampID envelope from a logged in user.
        // For context, our ATS web product stores it like this:
        // https://developers.liveramp.com/authenticatedtraffic-api/docs/5-store-the-identity-envelope#storing-the-envelope-in-a-first-party-cookie

    } catch (error) {
        envString = "noEnvelope"; 
    }

    return envString;
}


// Sample function invocation to be fired
await doEnvelopeAPIFallbackForPID("13669"); // replace with your own
