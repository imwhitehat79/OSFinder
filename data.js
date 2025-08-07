// data.js
window.getHiddenJson = async function () {
  const ipRes = await fetch("https://api.ipify.org?format=json");
  const ipData = await ipRes.json();

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
