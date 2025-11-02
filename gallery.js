document.addEventListener("DOMContentLoaded", () => {
  const foldersContainer = document.querySelector(".folders");
  const galleryContainer = document.querySelector(".gallery-container");
  const gallery = document.querySelector(".gallery");
  const backBtn = document.querySelector(".back-btn");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox.querySelector("img");
  const scrollY = { value: 0 };

  // ✳️ اینجا فقط گالری‌ها رو تعریف کن:
  const GALLERIES = [
    {
      title: "میکاپ عروسی",
      cover: "01.jpg",
      images: ["01.jpg", "02.jpg", "03.jpg"]
    },
    {
      title: "میکاپ مهمانی",
      cover: "04.jpg",
      images: ["04.jpg", "05.jpg", "06.jpg"]
    },
    {
      title: "سبک کلاسیک",
      cover: "07.jpg",
      images: ["07.jpg", "08.jpg", "09.jpg" , "10.jpg" , "11.jpg" , "12.jpg"  ]
    }
  ];

  // ساخت خودکار پوشه‌ها
  foldersContainer.innerHTML = GALLERIES.map(g => `
    <div class="folder" data-images="${g.images.join(",")}">
      <img src="${g.cover}" alt="${g.title}">
      <p>${g.title}</p>
    </div>
  `).join("");

  const folders = document.querySelectorAll(".folder");

  // باز شدن گالری هر پوشه
  folders.forEach(folder => {
    folder.addEventListener("click", e => {
      e.preventDefault();
      scrollY.value = window.scrollY;

      const imgs = folder.dataset.images.split(",");
      gallery.innerHTML = imgs.map(src => `<img src="${src.trim()}" alt="نمونه‌کار">`).join("");

      foldersContainer.style.opacity = "0";
      setTimeout(() => {
        foldersContainer.style.display = "none";
        galleryContainer.style.display = "block";
        requestAnimationFrame(() => {
          galleryContainer.style.opacity = "1";
        });
      }, 200);
    });
  });

  // بازگشت
  backBtn.addEventListener("click", e => {
    e.preventDefault();
    galleryContainer.style.opacity = "0";
    setTimeout(() => {
      galleryContainer.style.display = "none";
      foldersContainer.style.display = "flex";
      requestAnimationFrame(() => {
        foldersContainer.style.opacity = "1";
        window.scrollTo({ top: scrollY.value, behavior: "instant" });
      });
    }, 200);
  });

  // حالت تمام‌صفحه
  gallery.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
      lightboxImg.src = e.target.src;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  });
});
