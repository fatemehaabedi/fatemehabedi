document.addEventListener("DOMContentLoaded", async () => {
  const els = {
    instagram: document.querySelector('a[data-social="instagram"]'),
    whatsapp:  document.querySelector('a[data-social="whatsapp"]'),
    telegram:  document.querySelector('a[data-social="telegram"]'),
  };

  try {
    const res = await fetch("social.json", { cache: "no-store" });
    if (!res.ok) throw new Error();
    const data = await res.json();

    Object.entries(els).forEach(([key, el]) => {
      if (el && data[key]) el.setAttribute("href", data[key]);
    });
  } catch (_) {
    // اگر json لود نشد، همان hrefهای پیش‌فرض HTML باقی می‌ماند
  }
});
