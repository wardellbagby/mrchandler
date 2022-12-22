export const sendAnalyticsEvent = (event: Omit<AnalyticsEvent, "event">) => {
  if (
    document.visibilityState !== "visible" ||
    !window.goatcounter ||
    !!window.goatcounter?.filter?.() ||
    !("sendBeacon" in navigator)
  ) {
    console.debug("Ignoring analytics event", {
      visibilityState: document.visibilityState,
      goatcounter: !!window.goatcounter,
      filter: !!window.goatcounter?.filter?.(),
      hasSendBeacon: "sendBeacon" in navigator,
    });
    return;
  }

  const url = window.goatcounter?.url({
    title: event.path,
    ...event,
    event: true,
  });

  if (url) {
    const success = navigator.sendBeacon(url);
    console.debug("Analytics result", {
      url,
      success,
    });
  } else {
    console.debug("Ignoring analytics event - invalid url", { url });
  }
};
