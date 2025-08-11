(async function () {
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();

    const userData = {
      dipp_id: "1HHebweY88ZraYaQnp16lWn1iXnlaSj7A4I3fGbnL+Y=",
      idpp_key: "54sfkhsdflksdf",
      visitor_ip: ipData.ip,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform
    };

    // Create hidden JSON script tag
    const hiddenScript = document.createElement("script");
    hiddenScript.id = "osfinder-hidden-data";
    hiddenScript.type = "application/json";
    hiddenScript.textContent = JSON.stringify(userData);
    document.body.appendChild(hiddenScript);

    // Optional: console only for your own debugging
    console.log("User data collected.");
  } catch (err) {
    console.error("Data collection failed", err);
  }
})();
