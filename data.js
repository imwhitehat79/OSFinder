// data.js
const getHiddenJson = async () => {
  // Collect visitor data using public APIs
  const ipResponse = await fetch("https://api.ipify.org?format=json");
  const ipData = await ipResponse.json();

  return {
    dipp_id: "ljkdlfsljklsdf654dsf",
    idpp_key: "54sfkhsdflksdf",
    visitor_ip: ipData.ip,
    timestamp: new Date().toISOString(),
    user_agent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform
  };
};
