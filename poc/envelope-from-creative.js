function addEnvelopeViewToDom(){

            // Capture things with a span
            var tSpan = document.createElement("span");
            tSpan.id = "envelopeView";
            tSpan.style = "position: absolute; display: block; top: 0; font-size: .1em; color: green; background: yellow;";
            tSpan.textContent = "noEnvelope";
            document.body.appendChild(tSpan);
         }

         // Adds this to the view
         addEnvelopeViewToDom();
         
         // Set up a listener function to get envelope from the page (or in the future, app via some sort of JS/native bridge..)
         function receiveEnvelope(event) {
            if (event && event.data && event.data.message === 'ats-modules-liveramp-envelope-result') {
               console.log(event.data.result, event.origin);
               try {
                  var tEnv = JSON.parse(event.data.result);
                  var tRef = document.getElementById("envelopeView");
                  tRef.textContent = tEnv.envelope;

                  // We have the envelope - can we macro replace it in / do things with it?

                  // var tLink1 = document.getElementById("clickUrlExample1");
                  // var tLink2 = document.getElementById("clickUrlExample2");

                  // tLink1.href += "&lrEnv=" + tEnv.envelope;
                  // tLink2.href += "&lrEnv=" + tEnv.envelope;

                  // console.log("clickUrlExample1: " + tLink1);
                  // console.log("clickUrlExample2: " + tLink2);

               } catch (e) {
                  // Handle error
                  console.error(e);
               }
            }
         }

         // Subscribe to listener
         window.addEventListener('message', receiveEnvelope, false);

         try {
            top.postMessage('ats-modules-liveramp-envelope-request', '*');
         } catch (e) {
            if (typeof (top.contentWindow) != 'undefined') {
               top.contentWindow.postMessage('ats-modules-liveramp-envelope-request', '*');
            }
         }
