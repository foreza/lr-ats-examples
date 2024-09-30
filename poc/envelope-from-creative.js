let retryCounter = 10; // for POC purposes, only

function addEnvelopeViewToDom() {

   // Capture things with a span
   var tSpan = document.createElement("span");
   tSpan.id = "envelopeView";
   tSpan.style = "position: absolute; display: block; top: 0; font-size: .1em; color: green; background: yellow;";
   tSpan.textContent = "noEnvelope";
   document.body.appendChild(tSpan);
}

// Set up a listener function to get envelope from the page (or in the future, app via some sort of JS/native bridge..)
function receiveEnvelope(event) {
   if (event && event.data && event.data.message === 'ats-modules-liveramp-envelope-result') {
      console.log(event.data.result, event.origin);

      // Clear the interval once we get it
      clearInterval(envelopePoll);

      try {
         var tEnv = JSON.parse(event.data.result);
         var tRef = document.getElementById("envelopeView");
         tRef.textContent = tEnv.envelope;

         // (POC) Append envelope dynamically to any / all links in the creative?
         var tLinks = document.querySelectorAll("a");
         for (t in tLinks) {
            tLinks[t].href += "&lrEnv=" + tEnv.envelope;
            console.log(tLinks[t]);
         }

      } catch (e) {
         // Handle error
         console.error(e);
      }
   }
}


// Function to poll (just for POC purposes)
function makeCallToParentForEnvelope() {
   try {
      top.postMessage('ats-modules-liveramp-envelope-request', '*');
   } catch (e) {
      if (typeof (top.contentWindow) != 'undefined') {
         top.contentWindow.postMessage('ats-modules-liveramp-envelope-request', '*');
      }
   }
}



// Subscribe to listener
window.addEventListener('message', receiveEnvelope, false);

// Adds this to the view
addEnvelopeViewToDom();

// Begin polling
var envelopePoll = setInterval(() => {
   retryCounter--;

   if (retryCounter <= 0) {
      console.log("Stop polling!");
      clearInterval(envelopePoll);
   }

   console.log("Creative polling start: " + retryCounter + " more times");
   makeCallToParentForEnvelope();
}, 1000);
