const grid = document.getElementById("workGrid");
const filters = document.getElementById("filters");
const count = document.getElementById("count");
const dialog = document.getElementById("projectDialog");
const body = document.getElementById("projectDialogBody");
function makeEl(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = text;
  return el;
}
function renderProjects(filter = "All") {
  grid.replaceChildren();
  const allItems = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter,
  );
  const items = document.body.classList.contains("is-works-page")
    ? allItems
    : PROJECTS.filter((p) => p.featured).slice(0, 4);
  if (count)
    count.textContent = `(${PROJECTS.length.toString().padStart(2, "0")})`;
  if (!items.length) {
    grid.append(
      makeEl("p", "muted", "이 카테고리는 현재 제작중입니다."),
    );
    return;
  }
  items.forEach((p) => {
    const card = makeEl("article", "work-card");
    const btn = makeEl("button", "work-image");
    btn.type = "button";
    btn.setAttribute("aria-label", `${p.title} 상세 보기`);
    const img = document.createElement("img");
    img.src = p.cover;
    img.alt = `${p.title} 프로젝트 썸네일`;
    img.loading = "lazy";
    btn.append(img);
    btn.addEventListener("click", () => openProject(p));
    const detail = makeEl("div", "work-details");
    const left = makeEl("div");
    left.append(
      makeEl("h3", "", p.title),
      makeEl("p", "", `${p.category.toUpperCase()}  /  ${p.year}`),
    );
    detail.append(left, makeEl("span", "work-arrow", "↗"));
    card.append(btn, detail);
    grid.append(card);
  });
}
if (filters)
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-filter]");
    if (!b) return;
    filters.querySelectorAll("button").forEach((x) => {
      x.classList.toggle("active", x === b);
      x.setAttribute("aria-pressed", x === b ? "true" : "false");
    });
    renderProjects(b.dataset.filter);
  });

function openProject(p) {
  body.replaceChildren();

  // DIGITAL CONTENTS 카테고리만 구분
  body.classList.toggle(
    "digital-contents",
    p.category === "DIGITAL CONTENTS"
  );

  body.append(
    makeEl("p", "eyebrow", `${p.category.toUpperCase()} / ${p.year}`),
    makeEl("h2", "", p.title),
    makeEl("div", "detail-meta", p.role),
    makeEl("p", "", p.description),
  );

  p.images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${p.title} 상세 이미지`;
    img.loading = "lazy";
    body.append(img);
  });

  dialog.showModal();
}

document
  .getElementById("closeProject")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
document.getElementById("privacyOpen")?.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("privacyDialog").showModal();
});
document
  .getElementById("closePrivacy")
  ?.addEventListener("click", () =>
    document.getElementById("privacyDialog").close(),
  );
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }),
);
document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
const form = document.getElementById("contactForm"),
  status = document.getElementById("formStatus"),
  submitBtn = document.getElementById("sendBtn"),
  note = document.getElementById("setupNote");
const endpoint = SITE_CONFIG.formspreeEndpoint.trim();
const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);
if (form && !configured) {
  note.textContent =
    "⚙️ 메일 연결 전 미리보기 상태입니다. content.js의 formspreeEndpoint를 설정하면 발송이 활성화됩니다.";
  submitBtn.textContent = "EMAIL SETUP REQUIRED ↗";
  submitBtn.disabled = true;
} else if (form) {
  note.textContent = "개인정보는 문의 응대 목적으로만 이용됩니다.";
}
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!configured) {
    status.textContent = "먼저 Formspree를 연결해 주세요.";
    return;
  }
  if (!form.reportValidity()) return;
  submitBtn.disabled = true;
  submitBtn.textContent = "SENDING...";
  status.textContent = "문의 내용을 전송하고 있습니다.";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const messages = (data.errors || [])
        .map((x) => x.message)
        .filter(Boolean);
      throw new Error(
        messages.join(" / ") ||
          "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
      );
    }
    form.reset();
    status.textContent = "문의가 정상적으로 접수되었습니다. 감사합니다!";
  } catch (err) {
    status.textContent = `전송 실패: ${err.message}`;
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = "SEND INQUIRY <span>↗</span>";
  }
});
