//cloudflare worker to send requests to mixpanel
addEventListener("fetch", (event) => {
  event.waitUntil(logRequest(event.request));
});
async function logRequest(request) {
  const { url } = request;
  const templateId = url.match(/json\/(.*)\/Project/);
  if (templateId) {
    const mixPanelConfig = {
      event: "Open template import",
      properties: {
        token: "ec1307c86f23aa7b8c66951a12a65303",
        templateId: templateId[1],
      },
    };
    await fetch(
      "https://api.mixpanel.com/track/?data=" +
        btoa(JSON.stringify(mixPanelConfig))
    );
  }
}
