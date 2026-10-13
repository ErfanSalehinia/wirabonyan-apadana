/* ==========================================================================
   ویرا بنیان آپادانا — اسکریپت سایت
   بدون وابستگی خارجی. با باز کردن مستقیم index.html هم کار می‌کند.
   ========================================================================== */

/* --------------------------------------------------------------------------
   ۱. دادهٔ زیربرندها  ← برای افزودن/ویرایش برند فقط همین آرایه را عوض کنید
   --------------------------------------------------------------------------
   name      : نام فارسی برند (اجباری)
   latin     : نام لاتین، اگر داشت
   tagline   : یک خط توضیح
   url       : آدرس کامل سایت، همراه با //:https
   instagram : آی‌دی اینستاگرام همراه @
   logo      : مسیر فایل لوگو. اگر فایل نبود، خودکار مونوگرام نشان داده می‌شود
   color     : رنگ اختصاصی برند — فقط روی خط کناری ردیف می‌نشیند.
               مقادیر فعلی از خودِ فایل لوگوی رسمی نمونه‌برداری شده‌اند.
   -------------------------------------------------------------------------- */

const brands = [
  {
    name: "دندانو",
    tagline: "مرجع آنلاین دندانپزشکی؛ بیش از ۲۵۰۰ محصول از ده‌ها برند برتر دنیا",
    url: "https://dandaano.com",
    instagram: "@dandaano.ir",
    logo: "assets/brands/dandaano.png",
    color: "#23376D"          // سرمه‌ای لوگوی رسمی
  },
  {
    name: "ویرا ویژن",
    latin: "WIRA VISION",
    tagline: "بازتاب دندانپزشکی در دنیای دیجیتال؛ دیجیتال مارکتینگ، تولید محتوا و برندینگ کلینیک‌ها",
    url: "https://www.wiravision.com",
    instagram: "@wiravision",
    logo: "assets/brands/wira-vision.png",
    color: "#573078"          // بنفش لوگوی رسمی
  },
  {
    name: "دندانو آکادمی",
    tagline: "دوره‌ها و کارگاه‌های تخصصی دندانپزشکی",
    url: "https://dandaanoacademy.ir",
    instagram: "@dandaano.academy",
    logo: "assets/brands/dandaano-academy.png",
    // بریف این برند را «مشکی + زرد» گفته و فایل تحویلی فقط نسخهٔ زرد است.
    // زرد روی زمینهٔ روشن این بخش دیده نمی‌شود، پس نیمهٔ مشکیِ همان جفت
    // روی خط کناری می‌نشیند. اگر نسخهٔ مشکی+زرد رسید، این را هم بسنجید.
    color: "#011C3D"
  },
  {
    name: "دندانو سرویس",
    tagline: "سرویس، تعمیر و نگهداشت تجهیزات و هندپیس با پیک رایگان و گارانتی",
    url: "https://dandaanoservice.ir",
    instagram: "",
    logo: "assets/brands/dandaano-service.png",
    color: "#122F5C"          // سرمه‌ای لوگوی رسمی
  },
  {
    name: "سرجی‌بن",
    latin: "SURGIBON",
    tagline: "مرجع آنلاین ملزومات و تجهیزات تخصص جراحی و ایمپلنت‌های دندانی",
    url: "",
    instagram: "@surgi.bon",
    logo: "assets/brands/surgibon.png",
    color: "#9C3138"          // میانگین گرادیان زرشکی لوگوی رسمی
  },
  {
    name: "ویرا وان",
    latin: "WIRA ONE",
    tagline: "باشگاه مشتریان ویرا بنیان آپادانا؛ تخفیف اختصاصی، اولویت خرید و دسترسی زودهنگام به دوره‌ها",
    url: "",
    instagram: "",
    logo: "assets/brands/wira-one.png",
    color: "#008CA1"          // فیروزه‌ای لوگوی رسمی
  },
  {
    name: "ویرا کر",
    latin: "WIRA CARE",
    tagline: "مرکز یکپارچهٔ سفارش، پشتیبانی، خدمات فنی و مشاوره",
    url: "https://03136763.ir",
    instagram: "",
    logo: "assets/brands/wira-care.png",
    color: "#008BA0"          // فیروزه‌ای لوگوی رسمی
  },

  /* لوگوی رسمی دارند، ولی توضیح و آدرس سایتشان هنوز نرسیده.
     تا وقتی tagline خالی است، در نوار «سایر برندهای مجموعه» نشان داده می‌شوند.
     کافی است tagline و url را پر کنید تا خودکار به ردیف کامل تبدیل شوند. */
  { name: "ویبونا",          tagline: "", url: "", instagram: "", logo: "assets/brands/vibona.png",           color: "#2D8FE0" },
  { name: "WIRAX",           tagline: "", url: "", instagram: "", logo: "assets/brands/wirax.png",            color: "#B2000D" },
  { name: "دندانو استیودنت", tagline: "", url: "", instagram: "", logo: "assets/brands/dandaano-student.png", color: "#F37623" },
  { name: "قسطیش",           tagline: "", url: "", instagram: "", logo: "assets/brands/ghestish.png",         color: "#2EAF7D" }
];

/* شبکه‌های اجتماعی شرکت مادر — ‹تکمیل شود›.
   وقتی آی‌دی رسید، این‌طور اضافه کنید:
   { label: "اینستاگرام", url: "https://instagram.com/…", icon: "instagram" }  */
const socialLinks = [];


/* --------------------------------------------------------------------------
   ۲. ابزارهای کوچک
   -------------------------------------------------------------------------- */

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function esc(str) {
  return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

/* نمایش دامنه بدون //:https و بدون اسلش پایانی */
function prettyUrl(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.84-.4.4-.64.8-.84 1.3-.16.4-.35 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.07 4.7c.05 1.1.24 1.7.4 2.1.2.5.44.9.84 1.3.4.4.8.64 1.3.84.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.84.4-.4.64-.8.84-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.44-.9-.84-1.3-.4-.4-.8-.64-1.3-.84-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.8a3.1 3.1 0 100 6.2 3.1 3.1 0 000-6.2zm5.1-.9a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z"/></svg>',
  telegram:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.2 3.4 2.9 10.5c-1.1.4-1.1 1.1-.2 1.4l4.6 1.4 1.8 5.4c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.2-2.2 4.6 3.4c.8.5 1.4.2 1.6-.8l3-13.9c.3-1.2-.5-1.8-1.3-1.5zM8.6 13.4l9.9-6.2c.5-.3.9-.1.6.2l-8.5 7.6-.3 3.5-1.7-5.1z"/></svg>',
  whatsapp:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.9 9.9 0 00-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1012 2zm0 1.8a8.1 8.1 0 010 16.2 8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-3-.2-.3A8.1 8.1 0 0112 3.8zm4.6 10.3c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 01-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.6 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z"/></svg>',
  linkedin:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>'
};


/* --------------------------------------------------------------------------
   ۳. ساخت ردیف‌های زیربرند
   -------------------------------------------------------------------------- */

function brandRow(brand) {
  const li = document.createElement("li");
  li.className = "brand-row";
  if (brand.color) li.style.setProperty("--brand-color", brand.color);

  /* لوگو: مونوگرام پیش‌فرض است؛ اگر فایل لوگو باز شد، روی آن می‌نشیند */
  const logoBox = document.createElement("span");
  logoBox.className = "brand-logo";
  logoBox.innerHTML = '<span class="brand-monogram" aria-hidden="true">' +
                      esc(brand.name.trim().charAt(0)) + "</span>";

  if (brand.logo) {
    const img = document.createElement("img");
    img.src = brand.logo;
    img.alt = "لوگوی " + brand.name;
    img.loading = "lazy";
    img.addEventListener("error", () => img.remove());   // فایل نبود → مونوگرام می‌ماند
    img.addEventListener("load", () => {
      const mono = $(".brand-monogram", logoBox);
      if (mono) mono.remove();
    });
    logoBox.appendChild(img);
  }

  const body = document.createElement("div");
  body.innerHTML =
    '<h3 class="brand-name">' + esc(brand.name) +
      (brand.latin ? '<span class="brand-latin">' + esc(brand.latin) + "</span>" : "") +
    "</h3>" +
    (brand.tagline ? '<p class="brand-tagline">' + esc(brand.tagline) + "</p>" : "");

  const links = document.createElement("div");
  links.className = "brand-links";
  let linksHtml = "";
  if (brand.url) {
    linksHtml += '<a href="' + esc(brand.url) + '" target="_blank" rel="noopener">' +
                 'مشاهدهٔ سایت<span class="sr-only"> ' + esc(brand.name) + "</span></a>";
  }
  if (brand.instagram) {
    const handle = brand.instagram.replace(/^@/, "");
    linksHtml += '<a class="brand-ig" href="https://instagram.com/' + esc(handle) +
                 '" target="_blank" rel="noopener">' + esc(brand.instagram) + "</a>";
  }
  links.innerHTML = linksHtml;

  li.append(logoBox, body, links);
  return li;
}

function renderBrands() {
  const list = $("#brand-list");
  const moreWrap = $("#brand-more");
  const moreList = $("#brand-more-list");
  if (!list) return;

  /* برند «کامل» یعنی حداقل یک خط توضیح دارد */
  const ready   = brands.filter(b => b.tagline);
  const pending = brands.filter(b => !b.tagline);

  ready.forEach(b => list.appendChild(brandRow(b)));

  if (pending.length && moreList && moreWrap) {
    pending.forEach(function (b) {
      const li = document.createElement("li");

      /* لوگو هست ولی توضیح ندارد → نام کنار لوگوی کوچک.
         اگر فایل لوگو باز نشد، کلاس برداشته می‌شود و نقطهٔ زرد برمی‌گردد. */
      if (b.logo) {
        const img = document.createElement("img");
        img.src = b.logo;
        img.alt = "لوگوی " + b.name;
        img.loading = "lazy";
        img.addEventListener("error", function () {
          img.remove();
          li.classList.remove("has-logo");
        });
        li.classList.add("has-logo");
        li.appendChild(img);
      }

      const label = document.createElement("span");
      label.textContent = b.name;
      li.appendChild(label);

      moreList.appendChild(li);
    });
    moreWrap.hidden = false;
  }
}


/* --------------------------------------------------------------------------
   ۴. نوار نام برندها در فوتر
   -------------------------------------------------------------------------- */

function renderFooterBrands() {
  const ul = $("#footer-brands");
  if (!ul) return;

  ul.innerHTML = brands.map(function (b) {
    const label = esc(b.name);
    return b.url
      ? '<li><a href="' + esc(b.url) + '" target="_blank" rel="noopener">' + label + "</a></li>"
      : "<li>" + label + "</li>";
  }).join("");
}

function renderSocial() {
  const ul = $("#footer-social");
  if (!ul) return;

  if (!socialLinks.length) { ul.remove(); return; }   // آی‌دی شرکت مادر هنوز نرسیده

  ul.innerHTML = socialLinks.map(function (s) {
    return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener" aria-label="' +
           esc(s.label) + '">' + (ICONS[s.icon] || "") + "</a></li>";
  }).join("");
}


/* --------------------------------------------------------------------------
   ۵. لوگوی نهادهای اعتبارنامه (اگر فایلش موجود بود)
   -------------------------------------------------------------------------- */

function renderCredMarks() {
  $$(".cred-mark").forEach(function (slot) {
    const src = slot.dataset.logo;
    if (!src) return;

    /* تصویر بلافاصله اضافه می‌شود و فقط در صورت خطا حذف — همان الگوی لوگوی
       برندها. الگوی قبلی (ساخت جدا از صفحه و افزودن پس از رویداد load) با
       loading="lazy" کار نمی‌کرد: مرورگر بارگذاری عنصرِ خارج از صفحه را
       معلق نگه می‌دارد، پس load هرگز نمی‌آمد و حلقه خالی می‌ماند. */
    const img = document.createElement("img");
    img.alt = slot.dataset.alt || "";
    img.addEventListener("error", () => img.remove());
    img.src = src;
    slot.appendChild(img);
    /* اگر فایل نشان رسمی نبود، حلقهٔ خالی می‌ماند — نشان جعلی ساخته نمی‌شود */
  });
}


/* --------------------------------------------------------------------------
   ۶. هدر و منوی موبایل
   -------------------------------------------------------------------------- */

function initHeader() {
  const header = $(".site-header");
  const nav    = $("#site-nav");
  const toggle = $(".nav-toggle");
  if (!header) return;

  /* هدر پیش‌فرض سرمه‌ای است؛ بالای صفحه (روی هیرو) شفاف، بعد از اسکرول کپسول شناور */
  const onScroll = function () {
    const atTop = window.scrollY <= 20;
    header.classList.toggle("is-top", atTop);
    header.classList.toggle("is-floating", !atTop);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!nav || !toggle) return;

  const setOpen = function (open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  /* با کلیک روی هر لینک و با Escape بسته شود */
  $$("a", nav).forEach(a => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  /* اگر از موبایل به دسکتاپ رفت، حالت منو ریست شود */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) setOpen(false);
  });
}

/* کپسول زرد زیر لینک‌های منو: با موس یا Tab روی هر لینک می‌لغزد
   و با بیرون رفتن از منو محو می‌شود. در موبایل با CSS پنهان است. */
function initNavCursor() {
  const nav  = $("#site-nav");
  const list = nav && $("ul", nav);
  if (!list) return;

  const cursor = document.createElement("span");
  cursor.className = "nav-cursor";
  cursor.setAttribute("aria-hidden", "true");
  nav.prepend(cursor);
  nav.classList.add("has-cursor");

  let current = null;

  const moveTo = function (link) {
    const navBox  = nav.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    const hidden  = !cursor.classList.contains("is-visible");

    if (hidden) cursor.classList.add("is-instant");
    cursor.style.setProperty("--x", (linkBox.left - navBox.left) + "px");
    cursor.style.setProperty("--y", (linkBox.top - navBox.top) + "px");
    cursor.style.setProperty("--w", linkBox.width + "px");
    cursor.style.setProperty("--h", linkBox.height + "px");
    if (hidden) {
      void cursor.offsetWidth;   // اول جای تازه ثبت شود، بعد انیمیشن برگردد
      cursor.classList.remove("is-instant");
    }
    cursor.classList.add("is-visible");

    if (current) current.classList.remove("is-under-cursor");
    link.classList.add("is-under-cursor");
    current = link;
  };

  const hide = function () {
    cursor.classList.remove("is-visible");
    if (current) current.classList.remove("is-under-cursor");
    current = null;
  };

  $$("a", list).forEach(function (link) {
    link.addEventListener("mouseenter", () => moveTo(link));
    link.addEventListener("focus", () => moveTo(link));
  });
  list.addEventListener("mouseleave", hide);
  list.addEventListener("focusout", function (e) {
    if (!list.contains(e.relatedTarget)) hide();
  });

  /* وقتی هدر بین تمام‌عرض و کپسول عوض می‌شود، لینک‌ها جا عوض می‌کنند.
     نشانگر محو می‌شود و بعد از جمع شدن، اگر موس هنوز روی لینک بود، برمی‌گردد. */
  const inner = nav.closest(".header-inner");
  if (!inner) return;
  let pending = null;
  inner.addEventListener("transitionrun", function (e) {
    if (e.target !== inner || e.propertyName !== "max-width") return;
    if (current) pending = current;
    hide();
  });
  inner.addEventListener("transitionend", function (e) {
    if (e.target !== inner || e.propertyName !== "max-width") return;
    if (pending && pending.matches(":hover, :focus")) moveTo(pending);
    pending = null;
  });
}


/* --------------------------------------------------------------------------
   ۷. کپی شمارهٔ تماس
   -------------------------------------------------------------------------- */

function initCopyPhone() {
  const btn    = $("#copy-phone");
  const status = $("#copy-status");
  if (!btn || !status) return;

  let timer;

  const legacyCopy = function (text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  };

  const say = function (msg) {
    status.textContent = msg;
    clearTimeout(timer);
    timer = setTimeout(() => { status.textContent = ""; }, 2000);
  };

  btn.addEventListener("click", function () {
    const phone = btn.dataset.phone || "";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(phone)
        .then(() => say("کپی شد"))
        .catch(() => say(legacyCopy(phone) ? "کپی شد" : "کپی نشد؛ شماره را دستی بردارید"));
    } else {
      say(legacyCopy(phone) ? "کپی شد" : "کپی نشد؛ شماره را دستی بردارید");
    }
  });
}


/* --------------------------------------------------------------------------
   ۸. هیرو: نماد بی‌نهایت، پس‌زمینهٔ متحرک و ورود متن‌ها
   -------------------------------------------------------------------------- */

const prefersStill = !!(window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches);

/* لودر صفحه: وقتی فونت آماده شد محو می‌شود و انیمیشن‌های هیرو از همان لحظه شروع می‌شوند.
   منتظر رویداد load (همهٔ تصاویر) نمی‌ماند: محتوا زودتر آماده است و با اینترنت کند
   لودر بی‌دلیل جلوی صفحه را می‌گرفت. */
const LOADER_MIN_MS = 700;    // کمتر از این، لودر فقط یک چشمک ناخوشایند می‌شود
const LOADER_MAX_MS = 2500;   // اگر فونت دیر رسید، صفحه بیش از این منتظر نمی‌ماند

function initLoader() {
  const root   = document.documentElement;
  const loader = $(".page-loader");
  if (!loader) { root.classList.remove("is-loading"); return; }

  /* با «کاهش حرکت»، آیکون روی شکل بی‌نهایت (وسط چرخهٔ ۳ ثانیه‌ای) ثابت می‌ماند */
  const icon = $(".mobius-loop", loader);
  if (prefersStill && icon && typeof icon.pauseAnimations === "function") {
    icon.setCurrentTime(1.5);
    icon.pauseAnimations();
  }

  let done = false;
  const finish = function () {
    if (done) return;
    done = true;
    loader.classList.add("is-done");
    root.classList.remove("is-loading");
    setTimeout(() => loader.remove(), 700);   // بعد از محو شدن (۰.۶ ثانیه)
  };

  /* script.js آخر body است، پس اینجا HTML کامل خوانده شده؛ فقط فونت مانده */
  const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  fontsReady.then(function () {
    setTimeout(finish, Math.max(0, LOADER_MIN_MS - performance.now()));
  });

  setTimeout(finish, Math.max(0, LOADER_MAX_MS - performance.now()));
}

/* انیمیشن نماد روبانی لوگو — فقط یک‌بار هنگام لود. با «کاهش حرکت» نشان کامل و ثابت می‌ماند. */
function initInfinity() {
  const svg = $(".hero-infinity");
  if (!svg || prefersStill) return;
  svg.classList.add("is-drawing");
}

/* نشان روبانی لوگو برای خطوط پس‌زمینه — همان شکل هیرو با جزئیات کمتر
   (۱۱۱ نقطه به‌جای ۲۳۱)، چون ده‌ها نسخه‌اش همزمان انیمیشن می‌خورند و باید سبک بماند.
   اندازهٔ طبیعی ۸۷۹×۵۱۵ است و مرکزش (۴۳۹٫۵ ، ۲۵۷٫۵). */
const MARK_PATH = "M172 2 203 2 229 6 287 28 331 52 369 77 403 104 428 129 395 235 282 113 225 66 183 47 156 46 134 53 111 68 96 90 83 123 76 162 75 191 79 227 88 264 104 305 129 350 174 408 247 475 301 512 255 507 205 493 163 474 117 443 78 406 49 368 25 325 8 278 2 237 3 183 12 136 29 96 55 61 91 31 132 11ZM572 21 635 25 675 35 699 45 651 44 615 53 579 74 552 103 533 136 515 186 475 367 453 430 425 472 406 488 377 501 351 507 331 506 304 499 276 483 244 455 271 463 300 461 326 448 347 427 363 399 373 374 433 162 453 112 478 74 504 48 535 30ZM667 55 716 60 739 68 764 81 788 99 810 121 845 172 867 225 877 278 872 336 857 379 828 416 799 434 762 444 724 445 667 435 628 421 591 402 522 352 500 331 522 221 559 269 598 314 639 352 680 381 717 397 748 401 776 394 794 378 800 367 807 339 807 320 800 271 786 225 758 170 730 133 692 99 645 73 619 64Z";
const MARK_CX = 439.5, MARK_CY = 257.5, MARK_W = 879;

/* پس‌زمینهٔ بی‌نهایت‌های تودرتو. در صفحهٔ عمودی (موبایل) فقط کادر viewBox بلندتر
   می‌شود، نه خود نشان‌ها: نشان همیشه افقی می‌ماند چون شکل لوگوست و چرخاندنش
   لوگو را وارونه نشان می‌دهد. نسخه‌های بزرگ‌تر از دو طرف بریده می‌شوند و همین
   حس «موج‌هایی که از قاب بیرون می‌زنند» را می‌سازد. */
function initHeroLoops() {
  const hero = $(".hero");
  if (!hero) return;

  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "hero-loops");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
  hero.prepend(svg);

  const portrait = window.matchMedia("(orientation: portrait)");
  let vbW, vbH;

  const draw = function () {
    const tall  = portrait.matches;
    /* هر نسخه سه تکه روبان و ۱۱۱ نقطه است، پس تعدادش از حالت خط سادهٔ قبلی کمتر است */
    const count = window.innerWidth < 640 ? 10 : 18;
    vbW = tall ? 900 : 1600;
    vbH = tall ? 1600 : 900;
    svg.setAttribute("viewBox", (-vbW / 2) + " " + (-vbH / 2) + " " + vbW + " " + vbH);

    const g = document.createElementNS(NS, "g");

    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const s = (170 + t * 1830) / MARK_W;      // پهنای هر نسخه از ۱۷۰ تا ۲۰۰۰ واحد
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", MARK_PATH);
      path.setAttribute("pathLength", "1");
      /* همه هم‌جهت و هم‌مرکزند تا مثل موج‌های نشان تودرتو بنشینند؛ آینه‌کردنِ
         یکی‌درمیان امتحان شد ولی خط‌ها روی هم می‌افتادند و گوشه‌ها شلوغ می‌شد. */
      path.setAttribute("transform", "scale(" + s.toFixed(4) +
                                     ") translate(" + (-MARK_CX) + " " + (-MARK_CY) + ")");
      if (i % 4 === 2) path.setAttribute("class", "is-accent");    // هر چند نسخه، یکی زرد
      path.style.setProperty("--s", s.toFixed(4));   // برای جبران ضخامت خط
      path.style.setProperty("--o", (0.10 + t * 0.22).toFixed(2));
      path.style.setProperty("--dur", (9 + (i % 5) * 1.5) + "s");
      path.style.setProperty("--delay", (0.3 + i * 0.12).toFixed(2) + "s");
      g.appendChild(path);
    }
    svg.replaceChildren(g);
    fitStroke();
  };

  /* ضخامت خط در واحد viewBox است؛ طوری تنظیم می‌شود که روی هر صفحه‌ای ۱ پیکسل بماند */
  const fitStroke = function () {
    const box = svg.getBoundingClientRect();
    if (!box.width) return;
    const scale = Math.max(box.width / vbW, box.height / vbH);
    svg.style.setProperty("--sw", (1 / scale).toFixed(3));
  };

  draw();
  if (portrait.addEventListener) portrait.addEventListener("change", draw);
  window.addEventListener("resize", fitStroke);

  if (prefersStill) return;   // خطوط ثابت می‌مانند
  svg.classList.add("is-live");
  pauseOffscreen(hero, svg);
}

/* انیمیشن‌های همیشگی وقتی از دید خارج می‌شوند متوقف شوند تا باتری و پردازنده هدر نرود.
   کلاس is-paused روی mark می‌نشیند و CSS انیمیشن را نگه می‌دارد. */
function pauseOffscreen(watch, mark) {
  if (!("IntersectionObserver" in window)) return;
  new IntersectionObserver(function (entries) {
    (mark || watch).classList.toggle("is-paused", !entries[0].isIntersecting);
  }).observe(watch);
}

/* منوی «مسیریابی» (نشان یا گوگل‌مپ). خودِ باز و بسته شدن کار <details> است؛
   این‌ها فقط رفتارهای اضافی‌اند: یکی‌درمیان باز نماند، با Escape و کلیک بیرون بسته شود. */
function initGoMenus() {
  const menus = $$(".branch-go");
  if (!menus.length) return;

  menus.forEach(function (menu) {
    menu.addEventListener("toggle", function () {
      if (!menu.open) return;
      menus.forEach(function (other) { if (other !== menu) other.open = false; });
    });
  });

  document.addEventListener("click", function (e) {
    menus.forEach(function (menu) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    menus.forEach(function (menu) {
      if (!menu.open) return;
      menu.open = false;
      $("summary", menu).focus();
    });
  });
}

/* نوار نور دور قاب بخش تماس؛ چرخشش با CSS است و اینجا فقط متوقف می‌شود */
function initContactBeam() {
  const frame = $(".contact-frame");
  if (frame && !prefersStill) pauseOffscreen(frame);
}

/* ورود متن‌های هیرو. عنوان کلمه‌به‌کلمه می‌آید نه حرف‌به‌حرف:
   جدا کردن حروف فارسی در span، اتصالشان را می‌شکند. متن همچنان از
   index.html خوانده می‌شود، پس ویرایش متن مثل قبل است. */
function initHeroReveal() {
  const hero  = $(".hero");
  const title = $(".hero-title");
  if (!hero || !title || prefersStill) return;

  const words = title.textContent.trim().split(/\s+/);
  title.replaceChildren();
  words.forEach(function (word, i) {
    if (i > 0) title.append(" ");
    const span = document.createElement("span");
    span.className = "reveal-word";
    span.style.setProperty("--i", i);
    span.textContent = word;
    title.appendChild(span);
  });

  hero.classList.add("is-revealing");
}


/* --------------------------------------------------------------------------
   ۹. سال جاری در کپی‌رایت (تقویم هجری شمسی، ارقام فارسی)
   -------------------------------------------------------------------------- */

function initYear() {
  const el = $("#year");
  if (!el) return;

  let year;
  try {
    year = new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(new Date());
  } catch (e) {
    year = String(new Date().getFullYear());
  }
  el.textContent = year;
}


/* --------------------------------------------------------------------------
   ۱۰. راه‌اندازی
   -------------------------------------------------------------------------- */

initLoader();   // اول از همه: اگر بخش دیگری خطا داد، لودر روی صفحه گیر نکند
renderBrands();
renderFooterBrands();
renderSocial();
renderCredMarks();
initHeader();
initNavCursor();
initCopyPhone();
initInfinity();
initHeroLoops();
initHeroReveal();
initContactBeam();
initGoMenus();
initYear();
