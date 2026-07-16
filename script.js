// ===== Icons (simple line icons, one per service) =====
const ICONS = {
  process: '<path d="M4 6h16M4 12h16M4 18h10" stroke-linecap="round"/>',
  training: '<path d="M12 3l9 4-9 4-9-4 9-4z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
  pmp: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5" stroke-linecap="round"/>',
  finance: '<circle cx="12" cy="12" r="8"/><path d="M12 7v10M9.5 9.5c0-1.5 3-2 4-1s1 2.5-1 3-3 1.5-2 3 3 1.5 4 0" stroke-linecap="round"/>',
  efficiency: '<path d="M4 19V9M10 19V5M16 19v-7M22 19H2" stroke-linecap="round"/>',
  department: '<path d="M12 14a4 4 0 100-8 4 4 0 000 8z"/><path d="M4 20c1.5-4 5-5 8-5s6.5 1 8 5" stroke-linecap="round"/>',
  restaurant: '<path d="M7 3v7a2 2 0 002 2v9M7 3v6M9 3v6M11 3v7a2 2 0 01-2 2M17 3c-1.7 0-3 2-3 5s1 5 3 5v8" stroke-linecap="round" stroke-linejoin="round"/>',
  implementation: '<path d="M9 6h11M9 12h11M9 18h11" stroke-linecap="round"/><circle cx="4.5" cy="6" r="1.5"/><circle cx="4.5" cy="12" r="1.5"/><circle cx="4.5" cy="18" r="1.5"/>',
  feasibility: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-5-5" stroke-linecap="round"/>'
};

const SERVICES = [
  { key: "process", title: "تحسين العمليات الإدارية", desc: "رسم خريطة عملك الحالي، تحديد الفجوات، وإعادة تصميم مسار عمل أوضح وأسرع." },
  { key: "training", title: "التدريب والتوجيه الإداري", desc: "تدريب عملي لفريقك ومديريك مبني على مواقف عمل حقيقية." },
  { key: "pmp", title: "استشارات إدارة المشاريع (PMP)", desc: "تخطيط وجدولة وإدارة مخاطر منظمة لمشاريعك من البداية للنهاية." },
  { key: "finance", title: "التحليل والتخطيط المالي", desc: "ميزانيات وتوقعات وتحليل نقطة تعادل تدعم قراراتك المالية." },
  { key: "efficiency", title: "تنظيم العمل ومراجعة الكفاءة", desc: "تحديد مواضع الفاقد في الوقت والموارد، وإصلاحه عبر مؤشرات أداء وOKR واضحة." },
  { key: "department", title: "تطوير إدارة التدريب", desc: "بناء أو تطوير إدارة التدريب في شركتك من الأساس." },
  { key: "restaurant", title: "استشارات التكاليف للمطاعم والمقاهي", desc: "ضبط تكلفة الأصناف، هندسة القائمة، ومقارنة تكاليف الموردين." },
  { key: "implementation", title: "خطط تنفيذ العمليات التشغيلية", desc: "تحويل الاستراتيجية إلى خطة تنفيذ فعلية بمسؤوليات واضحة." },
  { key: "feasibility", title: "دراسات الجدوى", desc: "دراسة جدوى سوقية وفنية ومالية قبل استثمار وقتك أو مالك." }
];

function buildServices(){
  const grid = document.getElementById("serviceGrid");
  if (!grid) return;
  SERVICES.forEach(s => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${ICONS[s.key]}</svg>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function setupNavToggle(){
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildServices();
  setupNavToggle();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
