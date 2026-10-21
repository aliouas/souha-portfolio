// Google Analytics 4 measurement ID. Set to "" to disable analytics.
const GA_MEASUREMENT_ID = "G-PNEY6JCZFG";

// Only the live site is tracked: local previews (localhost, file://, LAN IPs) are skipped.
const isLiveSite =
  location.protocol === "https:" &&
  !/^(localhost|127\.|192\.168\.|10\.)/.test(location.hostname);

const analyticsEnabled =
  isLiveSite &&
  /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID) &&
  navigator.doNotTrack !== "1";

function initializeAnalytics() {
  if (!analyticsEnabled) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    page_path: location.pathname,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-analytics]");
    if (!link) return;

    window.gtag("event", "link_click", {
      link_id: link.dataset.analytics,
      link_type: link.dataset.analyticsType || "navigation",
      transport_type: "beacon",
    });
  });
}

initializeAnalytics();

document.getElementById("year").textContent = new Date().getFullYear();
