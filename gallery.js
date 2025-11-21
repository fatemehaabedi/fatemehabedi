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
    // {
    //   title: "میکاپ عروسی",
    //   cover: "01.jpg",
    //   images: ["01.jpg", "02.jpg", "03.jpg"]
    // },
    // {
    //   title: "میکاپ مهمانی",
    //   cover: "04.jpg",
    //   images: ["04.jpg", "05.jpg", "06.jpg"]
    // },
    // {
    //   title: "سبک کلاسیک",
    //   cover: "07.jpg",
    //   images: ["07.jpg", "08.jpg", "09.jpg" , "10.jpg" , "11.jpg" , "12.jpg"  ]
    // }

    // {
    //   title: "مدل 01",
    //   cover: "MEITU_20251106_140033581.jpg",
    //   images: ["MEITU_20251106_131638231.jpg","MEITU_20251106_131705690.jpg", "MEITU_20251106_131752939.jpg", "MEITU_20251106_140033581.jpg"]
    // },

    //     {
    //   title: "مدل 02",
    //   cover: "MEITU_20251106_131537012.jpg",
    //   images: ["MEITU_20251106_131537012.jpg","MEITU_20251106_131238369.jpg", "MEITU_20251106_131155821.jpg", "MEITU_20251106_131048047.jpg"]
    // }


    {
      title: "file 1",
      cover: "MEITU_20251106_131705690.jpg",
      images: ["MEITU_20251106_131705690.jpg","MEITU_20251110_145834855.jpg","MEITU_20251110_145803298.jpg", "MEITU_20251106_131926841.jpg", "MEITU_20251106_131847640.jpg","MEITU_20251106_131638231.jpg","MEITU_20251106_131608710.jpg","MEITU_20251106_140033581.jpg"]
         },

    {
      title: "file 2",
      cover: "MEITU_20251106_131510170.jpg",
      images: ["MEITU_20251106_131510170.jpg","MEITU_20251106_131537012.jpg","MEITU_20251106_131338529.jpg", "MEITU_20251106_131303210.jpg", "MEITU_20251106_131238369.jpg","MEITU_20251106_131155821.jpg","MEITU_20251106_135942366.jpg"]
         },

    
    {
      title: "file 3",
      cover: "MEITU_20251106_131048047.jpg",
      images: ["MEITU_20251106_131048047.jpg","MEITU_20251106_131108015.jpg","MEITU_20251106_131022162.jpg", "MEITU_20251106_130950586.jpg", "MEITU_20251106_130920774.jpg","MEITU_20251106_130403441.jpg","MEITU_20251106_135900651.jpg"]
         },

    
    {
      title: "file 4",
      cover: "MEITU_20251106_123127856.jpg",
      images: ["MEITU_20251106_123127856.jpg","MEITU_20251106_123425455.jpg","MEITU_20251106_122530419.jpg", "MEITU_20251106_123127856.jpg", "MEITU_20251106_123215159.jpg","MEITU_20251106_123345526.jpg","MEITU_20251106_122328867.jpg","MEITU_20251106_120636493.jpg","MEITU_20251106_133459193.jpg","MEITU_20251106_135538553.jpg"]
         },
{
      title: "file 5",
      cover: "MEITU_20251106_130251499.jpg",
      images: ["MEITU_20251106_130251499.jpg","MEITU_20251106_125419053.jpg","MEITU_20251106_124740459.jpg", "MEITU_20251106_124647381.jpg", "MEITU_20251106_124235905.jpg","MEITU_20251106_124348422.jpg","MEITU_20251106_124145746.jpg","MEITU_20251106_135832278.jpg"]
         },

    {
      title: "file 6",
      cover: "MEITU_20251106_123748255.jpg",
      images: ["MEITU_20251106_123748255.jpg","MEITU_20251106_124034292.jpg","MEITU_20251106_124007727.jpg", "MEITU_20251106_123633290.jpg", "MEITU_20251106_123854334.jpg","MEITU_20251106_135752041.jpg"]
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




