(async function () {
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();

    const userData = {
      dipp_id: "ljkdlfsljklsdf654dsf",
      idpp_key: "54sfkhsdflksdf",
      visitor_ip: ipData.ip,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform
    };

    // Show JSON directly in page to allow Android fetching
    const jsonPre = document.createElement("pre");
    jsonPre.id = "osfinder-data";
    jsonPre.textContent = JSON.stringify(userData, null, 2); // Pretty format
    document.body.appendChild(jsonPre);

    // Optional: log it
    console.log("Collected Data:", userData);
  } catch (err) {
    console.error("Failed to collect info", err);
  }
})();
