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