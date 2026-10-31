"use strict";

// Redesigned presentation of the original 2024 directory.
// The original contact records are stored unchanged in directory-data.js.
// Keep the archival year visible: these records have not been verified as current.
const directoryUnits = [
  {id:"dean",ar:"عميد الدراسات العليا",en:"Dean of Graduate Studies",category:"leadership",icon:"◆",arDesc:"الإشراف العام على عمادة الدراسات العليا وقيادة أعمالها.",enDesc:"General oversight and leadership of the graduate studies deanship.",rolesAr:["الإشراف والتوجيه","متابعة الأولويات"],rolesEn:["Leadership and oversight","Strategic priorities"]},
  {id:"vice-dean",ar:"وكيل الدراسات العليا",en:"Vice Dean of Graduate Studies",category:"leadership",icon:"◇",arDesc:"المساندة في تنسيق الأعمال والمبادرات الأكاديمية والإدارية.",enDesc:"Supporting coordination of academic and administrative initiatives.",rolesAr:["التنسيق المؤسسي","متابعة الأنشطة"],rolesEn:["Institutional coordination","Activity follow-up"]},
  {id:"dean-office",ar:"سكرتير مكتب العميد",en:"Dean's Office Secretariat",category:"leadership",icon:"▤",arDesc:"تنظيم المراسلات والمواعيد والمهام المكتبية.",enDesc:"Organizing office correspondence, scheduling, and secretarial tasks.",rolesAr:["إدارة المراسلات","تنسيق الاجتماعات"],rolesEn:["Correspondence management","Meeting coordination"]},
  {id:"admin-finance",ar:"الشؤون الإدارية والمالية",en:"Administrative & Financial Affairs",category:"administrative",icon:"▦",arDesc:"مساندة الإجراءات الإدارية والمالية والتنظيمية.",enDesc:"Supporting administrative, financial, and organizational procedures.",rolesAr:["متابعة الأعمال الإدارية","التنسيق المالي"],rolesEn:["Administrative follow-up","Financial coordination"]},
  {id:"finance",ar:"وحدة المالية",en:"Finance Unit",category:"administrative",icon:"◈",arDesc:"متابعة الاحتياجات والسجلات والإجراءات المالية.",enDesc:"Supporting financial records, needs, and procedures.",rolesAr:["تنظيم السجلات المالية","متابعة المعاملات"],rolesEn:["Financial record keeping","Transaction follow-up"]},
  {id:"admission",ar:"وحدة القبول",en:"Admissions Unit",category:"services",icon:"▣",arDesc:"المساعدة في الإجراءات والمعلومات المتعلقة بقبول الدراسات العليا.",enDesc:"Supporting graduate admission procedures and information.",rolesAr:["استفسارات القبول","متابعة الطلبات"],rolesEn:["Admission inquiries","Application follow-up"]},
  {id:"registration",ar:"وحدة التسجيل",en:"Registration Unit",category:"services",icon:"▥",arDesc:"المساندة في التسجيل والسجلات والإجراءات الأكاديمية.",enDesc:"Supporting registration, records, and related academic processes.",rolesAr:["إجراءات التسجيل","متابعة السجلات"],rolesEn:["Registration procedures","Records follow-up"]},
  {id:"academic",ar:"وحدة الشؤون الأكاديمية",en:"Academic Affairs Unit",category:"services",icon:"✦",arDesc:"تنسيق ومتابعة المسائل الأكاديمية لبرامج الدراسات العليا.",enDesc:"Coordinating graduate program academic affairs and follow-up.",rolesAr:["المتابعة الأكاديمية","التنسيق مع البرامج"],rolesEn:["Academic follow-up","Program coordination"]},
  {id:"it",ar:"وحدة تقنية المعلومات",en:"Information Technology Unit",category:"administrative",icon:"⌘",arDesc:"دعم الأنظمة والخدمات الرقمية والمساندة التقنية.",enDesc:"Supporting technology systems, digital services, and technical assistance.",rolesAr:["المساندة التقنية","دعم الأنظمة"],rolesEn:["Technical assistance","Systems support"]},
  {id:"communications",ar:"وحدة الاتصالات الإدارية",en:"Administrative Communications Unit",category:"administrative",icon:"✉",arDesc:"تنظيم حركة المراسلات والإحالات الإدارية.",enDesc:"Handling administrative correspondence and routing.",rolesAr:["المراسلات الصادرة والواردة","التنسيق الإداري"],rolesEn:["Incoming and outgoing mail","Administrative coordination"]},
  {id:"scholarships-training",ar:"وحدة الابتعاث والتدريب",en:"Scholarships & Training Unit",category:"services",icon:"✧",arDesc:"المساندة في إجراءات الابتعاث وبرامج التدريب.",enDesc:"Supporting scholarship and training-related procedures.",rolesAr:["المتابعة والتنسيق","استفسارات التدريب"],rolesEn:["Coordination and follow-up","Training inquiries"]},
  {id:"scholarships",ar:"شؤون الابتعاث",en:"Scholarships Affairs",category:"services",icon:"↗",arDesc:"متابعة المعاملات المتعلقة بشؤون المبتعثين.",enDesc:"Supporting processes related to scholarship affairs.",rolesAr:["المعاملات والإجراءات","استفسارات الابتعاث"],rolesEn:["Procedures and requests","Scholarship inquiries"]},
  {id:"graduates",ar:"وحدة الخريجين",en:"Graduates Unit",category:"services",icon:"★",arDesc:"تقديم المساندة للمسائل ذات الصلة بخريجي الدراسات العليا.",enDesc:"Supporting inquiries and processes concerning graduate students who completed their degrees.",rolesAr:["متابعة ملفات الخريجين","الخدمات والاستفسارات"],rolesEn:["Graduate records follow-up","Graduate-related inquiries"]}
];

// Preserve the Arabic names and contact details exactly as supplied in the 2024 HTML.
for (const unit of directoryUnits) {
  unit.people = originalStaffDirectory[unit.ar] || [];
}

const translations = {
  ar:{brandTitle:"دليل الدراسات العليا",brandSub:"مشروع تدريب تعاوني · 2024",navHome:"الرئيسية",navDirectory:"الدليل",navAbout:"عن المشروع",eyebrow:"مشروع تدريبي مستقل · 2024",heroTitle:"دليل وحدات<br><span>الدراسات العليا</span>",heroSummary:"واجهة رقمية مبسطة لاستعراض وحدات العمادة، والبحث عنها، والوصول إلى الخدمات ذات الصلة — بتجربة واضحة وسريعة على جميع الأجهزة.",explore:"استكشف الوحدات",aboutButton:"تفاصيل المشروع",demoNote:"بيانات الاتصال الوظيفية كما وردت في دليل المشروع لعام 2024؛ يُرجى الانتباه إلى أنها قد تكون تغيّرت.",previewLabel:"نظرة على الدليل",previewTitle:"كل الوحدات، في مكان واحد.",previewSearch:"ابحث عن موظف أو وحدة...",previewItem1:"وحدة القبول",previewItem2:"وحدة التسجيل",previewItem3:"وحدة تقنية المعلومات",previewChip:"تصميم متجاوب",statUnits:"وحدة تنظيمية",statSearch:"موظفًا في نسخة 2024",statLanguages:"واجهتان لغويتان",statYear:"سنة تطوير المشروع",dirKicker:"الدليل التفاعلي",dirTitle:"استكشف الوحدات",dirDescription:"ابحث بالاسم أو رقم المكتب أو التحويلة أو البريد الإلكتروني، أو تصفّح الوحدات.",sampleTag:"سجلات مشروع 2024",staffListTitle:"أسماء الموظفين ومعلومات التواصل",filterAll:"جميع الوحدات",filterLeadership:"الإدارة العليا",filterAdministrative:"الشؤون الإدارية",filterServices:"الخدمات الأكاديمية",selectHint:"اختر وحدة لعرض جميع بيانات موظفيها",emptyTitle:"لا توجد نتائج مطابقة",emptyDescription:"جرّب كلمة بحث مختلفة أو اختر جميع الوحدات.",reset:"مسح البحث",linksKicker:"روابط مفيدة",linksTitle:"خدمات الجامعة",linksDescription:"روابط خارجية رسمية وردت في النسخة الأصلية من المشروع.",linkDeanship:"عمادة الدراسات العليا",linkAdmission:"بوابة القبول",linkGuides:"الأدلة الإرشادية",linkCalendar:"التقويم الأكاديمي",external:"الموقع الرسمي ↗",aboutKicker:"خلفية المشروع",aboutTitle:"من مشروع التدريب إلى ملف الأعمال",aboutDescription:"بدأ هذا المشروع عام 2024 خلال فترة التدريب التعاوني في عمادة الدراسات العليا بجامعة الإمام عبدالرحمن بن فيصل. جرى تحديث واجهته ليكون نموذجًا عمليًا يوضح بناء واجهات ويب تفاعلية باستخدام HTML وCSS وJavaScript.",aboutDisclaimer:"نسخة محدثة من مشروع التدريب التعاوني لعام 2024 لعرضها ضمن ملف الأعمال؛ وليست مرجعًا رسميًا محدثًا. بيانات التواصل الوظيفية مأخوذة من الملف الأصلي وقد تتغير.",footerTitle:"دليل الدراسات العليا · مشروع 2024",footerSub:"مشروع تدريب تعاوني، 2024 — نسخة أعمال غير رسمية ومعلومات تاريخية.",backTop:"العودة للأعلى ↑",dialogEyebrow:"دليل الموظفين · أرشيف 2024",dialogNote:"هذه البيانات مأخوذة من ملف المشروع الأصلي لعام 2024 وقد تكون تغيّرت؛ تحقق من المعلومات قبل استخدامها.",officialLink:"زيارة صفحة العمادة الرسمية ↗",searchPlaceholder:"ابحث بالاسم أو الوحدة أو المكتب أو التحويلة أو البريد...",resultsWord:"وحدة متاحة",resultsWordPlural:"وحدات متاحة",categoryLeadership:"الإدارة العليا",categoryAdministrative:"الشؤون الإدارية",categoryServices:"الخدمات الأكاديمية",openDetails:"عرض التفاصيل ↗",fieldOffice:"المكتب",fieldEmail:"البريد",fieldExtension:"التحويلة",close:"إغلاق"},
  en:{brandTitle:"Graduate Studies Directory",brandSub:"Co-op project · 2024",navHome:"Home",navDirectory:"Directory",navAbout:"About",eyebrow:"Independent training project · 2024",heroTitle:"Graduate Studies<br><span>Unit Directory</span>",heroSummary:"A streamlined digital interface for exploring deanship units, searching instantly, and reaching useful university services — designed to work across devices.",explore:"Explore units",aboutButton:"Project details",demoNote:"Historical 2024 work contact details from the original directory. Information may have changed since then.",previewLabel:"Directory preview",previewTitle:"Every unit. One place.",previewSearch:"Search staff or unit...",previewItem1:"Admissions Unit",previewItem2:"Registration Unit",previewItem3:"Information Technology Unit",previewChip:"Responsive design",statUnits:"Organizational units",statSearch:"Staff records from 2024",statLanguages:"Two interface languages",statYear:"Original project year",dirKicker:"INTERACTIVE DIRECTORY",dirTitle:"Explore the units",dirDescription:"Search by staff name, office number, extension, or work email — or browse organizational units.",sampleTag:"2024 directory records",staffListTitle:"Staff and contact information",filterAll:"All units",filterLeadership:"Leadership",filterAdministrative:"Administrative",filterServices:"Academic services",selectHint:"Select a unit to view its staff and contact information",emptyTitle:"No matching results",emptyDescription:"Try a different query or reset the filters.",reset:"Clear search",linksKicker:"USEFUL LINKS",linksTitle:"University services",linksDescription:"Official external links included in the original project.",linkDeanship:"Graduate Studies Deanship",linkAdmission:"Admissions Portal",linkGuides:"Guidebooks",linkCalendar:"Academic calendar",external:"Official website ↗",aboutKicker:"PROJECT BACKGROUND",aboutTitle:"From cooperative training to portfolio",aboutDescription:"The original project was developed in 2024 during a cooperative training placement with the Deanship of Graduate Studies at Imam Abdulrahman Bin Faisal University. This redesigned version demonstrates interactive frontend development with HTML, CSS, and JavaScript.",aboutDisclaimer:"An updated portfolio presentation of the 2024 cooperative training project, not an up-to-date official university directory. Historical staff contact details are retained exactly as originally provided and may have changed.",footerTitle:"Graduate Studies Directory · 2024 Project",footerSub:"2024 cooperative training project — historical contacts, not an official live university directory.",backTop:"Back to top ↑",dialogEyebrow:"Staff directory · 2024 archive",dialogNote:"Details are reproduced from the original 2024 project file and may no longer be current; please verify before relying on them.",officialLink:"Visit the official deanship page ↗",searchPlaceholder:"Search staff name, unit, office, extension or email...",resultsWord:"unit available",resultsWordPlural:"units available",categoryLeadership:"Leadership",categoryAdministrative:"Administration",categoryServices:"Academic services",openDetails:"View details ↗",fieldOffice:"Office",fieldEmail:"Email",fieldExtension:"Extension",close:"Close"}
};

const $ = id => document.getElementById(id);
const grid = $("unitsGrid"), search = $("unitSearch"), dialog = $("unitDialog");
let locale = "ar", activeFilter = "all";
try { locale = localStorage.getItem("iau-directory-locale") === "en" ? "en" : "ar"; } catch {}
const tr = key => translations[locale][key] || key;
const categoryLabel = category => tr("category" + category.charAt(0).toUpperCase() + category.slice(1));
function normalize(value) {
  return String(value).normalize("NFKD")
    .replace(/[\u064b-\u065f\u0670\u0640]/g, "")
    .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي")
    .toLocaleLowerCase().trim();
}
function staffSearchText(person, unit) {
  return [person.name, person.office, person.email, person.extension, unit.ar, unit.en].join(" ");
}
function countText(count) {
  return locale === "ar" ? count + " " + (count === 1 ? "موظف" : "موظفين") : count + " staff";
}
function makeCard(item, index) {
  const button = document.createElement("button");
  button.type = "button"; button.className = "unit-card"; button.dataset.unit = item.id;
  button.setAttribute("aria-label", (locale === "ar" ? item.ar : item.en) + " — " + tr("openDetails"));
  const head = document.createElement("div"); head.className = "unit-card-head";
  const icon = document.createElement("span"); icon.className = "unit-icon"; icon.setAttribute("aria-hidden", "true"); icon.textContent = item.icon;
  const num = document.createElement("span"); num.className = "unit-number"; num.textContent = String(index + 1).padStart(2, "0"); head.append(icon, num);
  const title = document.createElement("strong"); title.className = "unit-name"; title.textContent = locale === "ar" ? item.ar : item.en;
  const desc = document.createElement("p"); desc.className = "unit-description"; desc.textContent = locale === "ar" ? item.arDesc : item.enDesc;
  const staffCount = document.createElement("div"); staffCount.className = "unit-staff-count";
  staffCount.textContent = countText(item.people.length);
  const bottom = document.createElement("div"); bottom.className = "unit-card-bottom";
  const cat = document.createElement("span"); cat.className = "unit-category"; cat.textContent = categoryLabel(item.category);
  const more = document.createElement("span"); more.className = "unit-open"; more.textContent = tr("openDetails"); bottom.append(cat, more);
  button.append(head, title, desc, staffCount, bottom);
  button.addEventListener("click", () => openUnit(item));
  return button;
}
function makeTextCell(label, value, asEmail = false) {
  const field = document.createElement("div"); field.className = "person-contact";
  const cap = document.createElement("span"); cap.className = "person-contact-label"; cap.textContent = label;
  const data = asEmail && value !== "-" ? document.createElement("a") : document.createElement("strong");
  data.textContent = value;
  data.dir = asEmail ? "ltr" : "auto";
  if (asEmail && value !== "-") { data.href = "mailto:" + value; data.className = "person-email"; }
  field.append(cap, data);
  return field;
}
function makePersonCard(person, unit, showUnit = false) {
  const card = document.createElement("article"); card.className = "person-card";
  const top = document.createElement("div"); top.className = "person-top";
  const avatar = document.createElement("div"); avatar.className = "person-avatar"; avatar.setAttribute("aria-hidden", "true"); avatar.textContent = "♙";
  const info = document.createElement("div"); info.className = "person-info";
  const name = document.createElement("strong"); name.className = "person-name"; name.textContent = person.name; name.dir="rtl";
  info.append(name);
  if (showUnit) {
    const unitButton = document.createElement("button"); unitButton.type = "button"; unitButton.className = "person-unit-link";
    unitButton.textContent = locale === "ar" ? unit.ar : unit.en;
    unitButton.addEventListener("click", () => openUnit(unit));
    info.append(unitButton);
  }
  top.append(avatar, info);
  const fields = document.createElement("div"); fields.className = "person-fields";
  fields.append(makeTextCell(tr("fieldOffice"), person.office), makeTextCell(tr("fieldExtension"), person.extension), makeTextCell(tr("fieldEmail"), person.email, true));
  card.append(top, fields);
  return card;
}
function renderUnits() {
  const query = normalize(search.value);
  const filtered = directoryUnits.filter(item => {
    if (activeFilter !== "all" && item.category !== activeFilter) return false;
    if (!query) return true;
    const unitText = [item.ar, item.en, item.arDesc, item.enDesc, categoryLabel(item.category)].join(" ");
    return normalize(unitText).includes(query) || item.people.some(person => normalize(staffSearchText(person, item)).includes(query));
  });
  grid.replaceChildren(...filtered.map(makeCard));
  $("resultsCount").textContent = filtered.length + " " + (filtered.length === 1 ? tr("resultsWord") : tr("resultsWordPlural"));
  $("emptyState").hidden = filtered.length > 0;
  // Show matching people immediately as first-class results, not hidden inside unit dialogs.
  const matchedPeople = query ? filtered.flatMap(unit => unit.people.filter(person => normalize(staffSearchText(person,unit)).includes(query)).map(person => ({ person, unit }))) : [];
  $("peopleResultsSection").hidden = matchedPeople.length === 0;
  $("peopleResultsHeading").textContent = tr("peopleResultsHeading");
  $("peopleResultsCount").textContent = matchedPeople.length + " " + tr("matchingPeople");
  $("peopleResults").replaceChildren(...matchedPeople.map(({person,unit})=>makePersonCard(person,unit,true)));
}
function applyLanguage() {
  document.documentElement.lang = locale; document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  document.title = locale === "ar" ? "دليل موظفي عمادة الدراسات العليا | مشروع 2024" : "Graduate Studies Staff Directory | 2024 Project";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if (key === "heroTitle") el.innerHTML = tr(key);
    else el.textContent = tr(key);
  });
  $("languageLabel").textContent = locale === "ar" ? "English" : "العربية";
  $("languageToggle").setAttribute("aria-label", locale === "ar" ? "Switch to English" : "التبديل إلى العربية");
  search.placeholder = tr("searchPlaceholder"); search.setAttribute("aria-label", tr("searchPlaceholder"));
  $("dialogClose").setAttribute("aria-label", tr("close"));
  renderUnits();
}
function openUnit(unit) {
  $("dialogTitle").textContent = locale === "ar" ? unit.ar : unit.en;
  $("dialogDescription").textContent = tr("unitStaffDescription");
  $("dialogStaffCount").textContent = countText(unit.people.length);
  $("dialogStaffList").replaceChildren(...unit.people.map(person=>makePersonCard(person, unit)));
  if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
}
// Add only interface labels: personal names, work emails, offices and extensions remain unchanged in all languages.
Object.assign(translations.ar, {
  fieldOffice:"رقم المكتب",fieldExtension:"التحويلة",fieldEmail:"البريد الإلكتروني",
  staffListTitle:"أسماء الموظفين ومعلومات التواصل",
  peopleResultsHeading:"نتائج البحث عن الموظفين", matchingPeople:"نتيجة لموظف",
  unitStaffDescription:"بيانات موظفي الوحدة كما وردت في الدليل الأصلي لعام 2024.",
  sampleTag:"سجلات مشروع 2024", statSearch:"موظفًا في نسخة 2024"
});
Object.assign(translations.en, {
  fieldOffice:"Office number",fieldExtension:"Extension",fieldEmail:"Work email",
  staffListTitle:"Staff and contact information",
  peopleResultsHeading:"Matching staff members", matchingPeople:"staff matches",
  unitStaffDescription:"Staff contact details reproduced from the original 2024 directory.",
  sampleTag:"2024 records", statSearch:"Staff records from 2024"
});
$("languageToggle").addEventListener("click", () => {locale = locale === "ar" ? "en" : "ar"; try {localStorage.setItem("iau-directory-locale", locale);}catch{} applyLanguage();});
search.addEventListener("input", renderUnits);
document.querySelectorAll(".filter-chip").forEach(btn => btn.addEventListener("click",()=>{
  activeFilter = btn.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach(b=>{const on = b === btn; b.classList.toggle("active",on); b.setAttribute("aria-pressed",String(on));});
  renderUnits();
}));
$("resetSearch").addEventListener("click",()=>{search.value=""; document.querySelector('[data-filter="all"]').click(); search.focus();});
$("dialogClose").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
document.addEventListener("keydown",event=>{
  if(event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey && !/^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName||"") && !dialog.open){event.preventDefault(); search.focus();}
});
applyLanguage();
