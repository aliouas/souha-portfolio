const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const isEnabled =
  import.meta.env.PROD &&
  /^G-[A-Z0-9]+$/i.test(measurementId || "") &&
  navigator.doNotTrack !== "1";

export function initializeAnalytics() {
  if (!isEnabled) return () => {};

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    page_path: window.location.pathname,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  const trackClick = (event) => {
    const link = event.target.closest("a[data-analytics]");
    if (!link) return;

    window.gtag("event", "link_click", {
      link_id: link.dataset.analytics,
      link_type: link.dataset.analyticsType || "navigation",
      transport_type: "beacon",
    });
  };

  document.addEventListener("click", trackClick);
  return () => document.removeEventListener("click", trackClick);
}
