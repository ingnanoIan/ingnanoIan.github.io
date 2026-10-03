/* Reads content.js and builds the page (EN / ES). You normally don't need to touch this file. */
(function () {
  const $ = (id) => document.getElementById(id);
  const has = (list) => Array.isArray(list) && list.length > 0;

  /* ----- Interface texts (menus, headings, buttons) ----- */
  const UI = {
    en: {
      nav_about: "About", nav_path: "Career", nav_projects: "Projects", nav_process: "Method", nav_contact: "Contact",
      status: "Available for new projects",
      cta_path: "View experience", cta_projects: "View projects", cta_contact: "Contact me", cta_cv: "Download CV ↓",
      h_about: "About me", h_tools: "Tools", now: "Now",
      h_path: "Career", h_exp: "Experience", h_edu: "Education", h_certs: "Certifications",
      h_projects: "Projects", h_process: "How I work", h_services: "Services",
      h_contact: "Let's talk about your data",
      contact_lead: "Have data and an unanswered question? Reach out and let's see how I can help.",
      top: "Back to top ↑", theme_aria: "Switch between light and dark mode",
      problem: "Problem", approach: "Approach", result: "Result",
      done: "Completed", wip: "In progress", soon: "Coming soon"
    },
    es: {
      nav_about: "Sobre mí", nav_path: "Trayectoria", nav_projects: "Proyectos", nav_process: "Método", nav_contact: "Contacto",
      status: "Disponible para nuevos proyectos",
      cta_path: "Ver experiencia", cta_projects: "Ver proyectos", cta_contact: "Contáctame", cta_cv: "Descargar CV ↓",
      h_about: "Sobre mí", h_tools: "Herramientas", now: "Ahora",
      h_path: "Trayectoria", h_exp: "Experiencia", h_edu: "Educación", h_certs: "Certificaciones",
      h_projects: "Proyectos", h_process: "Cómo trabajo", h_services: "Servicios",
      h_contact: "Hablemos de tus datos",
      contact_lead: "¿Tienes datos y una pregunta sin responder? Escríbeme y vemos cómo ayudarte.",
      top: "Volver arriba ↑", theme_aria: "Cambiar entre modo claro y oscuro",
      problem: "Problema", approach: "Enfoque", result: "Resultado",
      done: "Completado", wip: "En progreso", soon: "Próximamente"
    }
  };

  let lang = "en";
  try { const saved = localStorage.getItem("lang"); if (saved && UI[saved]) lang = saved; } catch (e) {}

  const t = (key) => UI[lang][key];
  // Texts can be plain strings or { en: "...", es: "..." }
  const tr = (v) => (v && typeof v === "object" && !Array.isArray(v) ? (v[lang] || v.en || "") : v);

  function el(tag, props, children) {
    const node = document.createElement(tag);
    Object.entries(props || {}).forEach(([k, v]) => {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    });
    (children || []).forEach((c) => c && node.appendChild(c));
    return node;
  }
  const chips = (list) => el("ul", { class: "chips" }, list.map((x) => el("li", { text: tr(x) })));

  /* ----- Mini bar-chart illustration for projects without an image ----- */
  function chartSketch(seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    const rnd = () => { h = (h * 1664525 + 1013904223) >>> 0; return h / 4294967296; };
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 200 100");
    svg.setAttribute("class", "sketch");
    svg.setAttribute("aria-hidden", "true");
    const pts = [];
    for (let i = 0; i < 9; i++) {
      const v = 25 + rnd() * 55 + i * 1.5;
      const r = document.createElementNS(NS, "rect");
      r.setAttribute("x", 14 + i * 19); r.setAttribute("y", 90 - v);
      r.setAttribute("width", 12); r.setAttribute("height", v); r.setAttribute("rx", 3);
      r.setAttribute("class", "sketch__bar");
      svg.appendChild(r);
      pts.push((20 + i * 19) + "," + (80 - v * 0.8 - rnd() * 6));
    }
    const line = document.createElementNS(NS, "polyline");
    line.setAttribute("points", pts.join(" "));
    line.setAttribute("class", "sketch__line");
    svg.appendChild(line);
    return svg;
  }

  function timeline(listId, wrapId, items, titleKey, subKey) {
    if (!has(items)) return;
    $("trayectoria").hidden = false;
    $(wrapId).hidden = false;
    items.forEach((it) => {
      const sub = tr(it[subKey]);
      $(listId).appendChild(el("li", {}, [
        it.period ? el("span", { class: "period", text: tr(it.period) }) : null,
        el("div", { class: "title" }, [document.createTextNode(tr(it[titleKey]) + (sub ? " " : "")), sub ? el("span", { text: "· " + sub }) : null]),
        has(it.points) ? el("ul", { class: "points" }, it.points.map((p) => el("li", { text: tr(p) }))) : null,
        it.text ? el("p", { class: "text", text: tr(it.text) }) : null
      ]));
    });
  }

  let revealed = false;

  /* ----- Builds (or rebuilds) everything for the current language ----- */
  function render() {
    document.documentElement.lang = lang;
    document.title = SITE.name + " — " + tr(SITE.role);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", SITE.name + " — " + tr(SITE.tagline));

    document.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = t(n.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach((n) => { n.setAttribute("aria-label", t(n.dataset.i18nAria)); });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    ["skills", "projects", "process", "services", "experience", "education", "certs", "links"].forEach((id) => { $(id).textContent = ""; });
    ["trayectoria", "proyectos", "proceso", "servicios"].forEach((id) => { $(id).hidden = true; });
    ["experience-wrap", "education-wrap", "certs-wrap"].forEach((id) => { $(id).hidden = true; });

    /* Basics */
    $("brand").textContent = SITE.name;
    $("hero-name").textContent = SITE.name;
    $("hero-role").textContent = tr(SITE.role);
    $("hero-tagline").textContent = tr(SITE.tagline);
    $("bio").textContent = tr(SITE.bio);
    $("status").hidden = !SITE.available;
    $("foot").textContent = "© " + new Date().getFullYear() + " " + SITE.name + (SITE.location ? " · " + SITE.location : "");
    const now = tr(SITE.now);
    $("now").hidden = !now;
    $("now-text").textContent = now;
    if (SITE.cv) { $("cta-cv").href = SITE.cv; $("cta-cv").hidden = false; } else { $("cta-cv").hidden = true; }

    /* Photo, or initials */
    const media = $("hero-media");
    media.textContent = "";
    if (SITE.photo) media.appendChild(el("img", { src: SITE.photo, alt: "" }));
    else media.appendChild(el("span", {
      class: "hero__initials",
      text: SITE.name.split(/\s+/).slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join("")
    }));

    /* Tools by group */
    $("skills-wrap").hidden = !has(SITE.skills);
    (SITE.skills || []).forEach((g) =>
      $("skills").appendChild(el("div", { class: "skillgroup" }, [el("span", { class: "skillgroup__name", text: tr(g.group) }), chips(g.items)]))
    );

    /* Projects */
    if (has(SITE.projects)) {
      $("proyectos").hidden = false;
      SITE.projects.forEach((p) => {
        const title = tr(p.title);
        const mediaBox = el("div", { class: "card__media" });
        if (p.image) mediaBox.appendChild(el("img", { src: p.image, alt: title, loading: "lazy" }));
        else mediaBox.appendChild(chartSketch(title));

        const rows = [["problem", p.problem], ["approach", p.approach], ["result", p.result]]
          .filter((r) => tr(r[1]))
          .map((r) => el("div", { class: "row" }, [el("dt", { text: t(r[0]) }), el("dd", { text: tr(r[1]) })]));
        const links = (p.links || []).filter((l) => l.url)
          .map((l) => el("a", { class: "pill", href: l.url, target: "_blank", rel: "noopener", text: tr(l.label) + " ↗" }));
        const status = p.status ? el("span", { class: "badge badge--" + p.status, text: t(p.status) || p.status }) : null;

        const body = el("div", { class: "card__body" }, [
          el("div", { class: "card__head" }, [el("h3", { text: title }), status]),
          p.year ? el("span", { class: "card__year", text: p.year }) : null,
          tr(p.summary) ? el("p", { class: "card__summary", text: tr(p.summary) }) : null,
          rows.length ? el("dl", { class: "rows" }, rows) : null,
          has(p.tags) ? chips(p.tags) : null,
          links.length ? el("div", { class: "card__links" }, links) : null
        ]);
        $("projects").appendChild(el("article", { class: "card" + (p.featured ? " card--featured" : "") }, [mediaBox, body]));
      });
    }

    /* How I work */
    if (has(SITE.process)) {
      $("proceso").hidden = false;
      SITE.process.forEach((s, i) =>
        $("process").appendChild(el("li", { class: "step" }, [
          el("span", { class: "step__n", text: String(i + 1).padStart(2, "0") }),
          el("h3", { text: tr(s.title) }),
          el("p", { text: tr(s.text) })
        ]))
      );
    }

    /* Services */
    if (has(SITE.services)) {
      $("servicios").hidden = false;
      SITE.services.forEach((s) =>
        $("services").appendChild(el("div", { class: "service" }, [el("h3", { text: tr(s.title) }), el("p", { text: tr(s.text) })]))
      );
    }

    /* Career */
    timeline("experience", "experience-wrap", SITE.experience, "role", "company");
    timeline("education", "education-wrap", SITE.education, "title", "place");
    timeline("certs", "certs-wrap", SITE.certifications, "title", "place");

    /* Contact */
    if (SITE.email) {
      $("mail").href = "mailto:" + SITE.email;
      $("mail").textContent = SITE.email;
      $("mail").hidden = false;
    } else {
      $("mail").hidden = true;
    }
    (SITE.links || []).forEach((l) =>
      $("links").appendChild(el("li", {}, [el("a", { href: l.url, target: "_blank", rel: "noopener", text: l.label })]))
    );

    /* Main button of the hero, and menu items without content */
    const cta = $("cta-primary");
    cta.hidden = false;
    if (has(SITE.projects)) { cta.textContent = t("cta_projects"); cta.href = "#proyectos"; }
    else if (has(SITE.experience)) { cta.textContent = t("cta_path"); cta.href = "#trayectoria"; }
    else cta.hidden = true;
    document.querySelectorAll(".nav a[data-section]").forEach((a) => {
      const target = document.querySelector(a.getAttribute("href"));
      a.hidden = !!(target && target.hidden);
    });

    /* Soft fade-in on first load only (re-renders on language change are instant) */
    if (!revealed) {
      revealed = true;
      const targets = document.querySelectorAll(".block, .card, .service, .step");
      targets.forEach((x) => x.classList.add("reveal"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
          { threshold: 0.08 }
        );
        targets.forEach((x) => io.observe(x));
      } else {
        targets.forEach((x) => x.classList.add("in"));
      }
    }
  }

  /* ----- Controls ----- */
  $("theme").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (e) {}
      render();
    })
  );

  render();
})();
