let main = () => {

    window.addEventListener("envelopeModuleReady", () => {

        console.log("ATS ready (now it be ready)")

        // For example, you can directly feed it emails, like so:
        atsenvelopemodule.setAdditionalData({
            'type': 'email',
            'id': "jason@liveramp.com"
        });
    });

    let loadScript = (url, cb, defer) => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.defer = true || false;
        script.onreadystatechange = cb;
        script.onload = cb;
        document.head.appendChild(script);
    }
    
    const atsURL = "https://ats-wrapper.privacymanager.io/ats-modules/0c759718-0b0e-46bc-afd9-722734b2d6b9/ats.js";
    // const cmpURL = 
    

    loadScript(atsURL,() => {}, true);
};

main();
