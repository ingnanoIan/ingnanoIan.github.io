/* Lee content.js y arma la página. Normalmente no necesitas tocar este archivo. */
(function () {
  const $ = (id) => document.getElementById(id);
  const has = (list) => Array.isArray(list) && list.length > 0;

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

  const chips = (list) => el("ul", { class: "chips" }, list.map((t) => el("li", { text: t })));

  /* ----- Tema claro / oscuro ----- */
  $("theme").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ----- Datos básicos ----- */
  document.title = SITE.name + " — " + SITE.role;
  $("brand").textContent = SITE.name;
  $("hero-name").textContent = SITE.name;
  $("hero-role").textContent = SITE.role;
  $("hero-tagline").textContent = SITE.tagline;
  $("bio").textContent = SITE.bio;
  $("status").hidden = !SITE.available;
  if (SITE.cv) { $("cta-cv").href = SITE.cv; $("cta-cv").hidden = false; }
  $("foot").textContent = "© " + new Date().getFullYear() + " " + SITE.name + (SITE.location ? " · " + SITE.location : "");
  if (SITE.now) { $("now").hidden = false; $("now-text").textContent = SITE.now; }

  /* Foto (opcional) o iniciales del nombre */
  const media = $("hero-media");
  if (SITE.photo) media.appendChild(el("img", { src: SITE.photo, alt: "" }));
  else media.appendChild(el("span", {
    class: "hero__initials",
    text: SITE.name.split(/\s+/).slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join("")
  }));

  /* ----- Herramientas por grupos ----- */
  if (has(SITE.skills)) {
    $("skills-wrap").hidden = false;
    SITE.skills.forEach((g) =>
      $("skills").appendChild(el("div", { class: "skillgroup" }, [el("span", { class: "skillgroup__name", text: g.group }), chips(g.items)]))
    );
  }

  /* ----- Ilustración automática para proyectos sin imagen: mini gráfico de barras ----- */
  function chartSketch(seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    const rnd = () => { h = (h * 1664525 + 1013904223) >>> 0; return h / 4294967296; };
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 200 100");
    svg.setAttribute("class", "sketch");
    svg.setAttribute("aria-hidden", "true");
    const n = 9, pts = [];
    for (let i = 0; i < n; i++) {
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

  /* ----- Proyectos ----- */
  const STATUS = { done: "Completado", wip: "En progreso", soon: "Próximamente" };
  if (has(SITE.projects)) {
    $("proyectos").hidden = false;
    SITE.projects.forEach((p) => {
      const mediaBox = el("div", { class: "card__media" });
      if (p.image) mediaBox.appendChild(el("img", { src: p.image, alt: "Captura de " + p.title, loading: "lazy" }));
      else mediaBox.appendChild(chartSketch(p.title));

      const rows = [["Problema", p.problem], ["Enfoque", p.approach], ["Resultado", p.result]]
        .filter((r) => r[1])
        .map((r) => el("div", { class: "row" }, [el("dt", { text: r[0] }), el("dd", { text: r[1] })]));

      const links = (p.links || []).filter((l) => l.url)
        .map((l) => el("a", { class: "pill", href: l.url, target: "_blank", rel: "noopener", text: l.label + " ↗" }));

      const status = p.status ? el("span", { class: "badge badge--" + p.status, text: STATUS[p.status] || p.status }) : null;

      const body = el("div", { class: "card__body" }, [
        el("div", { class: "card__head" }, [el("h3", { text: p.title }), status]),
        p.year ? el("span", { class: "card__year", text: p.year }) : null,
        p.summary ? el("p", { class: "card__summary", text: p.summary }) : null,
        rows.length ? el("dl", { class: "rows" }, rows) : null,
        has(p.tags) ? chips(p.tags) : null,
        links.length ? el("div", { class: "card__links" }, links) : null
      ]);

      $("projects").appendChild(el("article", { class: "card" + (p.featured ? " card--featured" : "") }, [mediaBox, body]));
    });
  }

  /* ----- Método de trabajo ----- */
  if (has(SITE.process)) {
    $("proceso").hidden = false;
    SITE.process.forEach((s, i) =>
      $("process").appendChild(el("li", { class: "step" }, [
        el("span", { class: "step__n", text: String(i + 1).padStart(2, "0") }),
        el("h3", { text: s.title }),
        el("p", { text: s.text })
      ]))
    );
  }

  /* ----- Servicios ----- */
  if (has(SITE.services)) {
    $("servicios").hidden = false;
    SITE.services.forEach((s) =>
      $("services").appendChild(el("div", { class: "service" }, [el("h3", { text: s.title }), el("p", { text: s.text })]))
    );
  }

  /* ----- Trayectoria: experiencia, educación y certificaciones ----- */
  function timeline(listId, wrapId, items, titleKey, subKey) {
    if (!has(items)) return;
    $("trayectoria").hidden = false;
    $(wrapId).hidden = false;
    items.forEach((it) =>
      $(listId).appendChild(el("li", {}, [
        it.period ? el("span", { class: "period", text: it.period }) : null,
        el("div", { class: "title" }, [document.createTextNode(it[titleKey] + (it[subKey] ? " " : "")), it[subKey] ? el("span", { text: "· " + it[subKey] }) : null]),
        has(it.points) ? el("ul", { class: "points" }, it.points.map((t) => el("li", { text: t }))) : null,
        it.text ? el("p", { class: "text", text: it.text }) : null
      ]))
    );
  }
  timeline("experience", "experience-wrap", SITE.experience, "role", "company");
  timeline("education", "education-wrap", SITE.education, "title", "place");
  timeline("certs", "certs-wrap", SITE.certifications, "title", "place");

  /* ----- Contacto ----- */
  if (SITE.email) {
    $("mail").href = "mailto:" + SITE.email;
    $("mail").textContent = SITE.email;
    $("mail").hidden = false;
  }
  (SITE.links || []).forEach((l) =>
    $("links").appendChild(el("li", {}, [el("a", { href: l.url, target: "_blank", rel: "noopener", text: l.label })]))
  );

  /* ----- Botón principal del hero y menú: ocultar lo que no tiene contenido ----- */
  if (has(SITE.projects)) { $("cta-primary").textContent = "Ver proyectos"; $("cta-primary").href = "#proyectos"; }
  else if (!has(SITE.experience)) $("cta-primary").hidden = true;
  document.querySelectorAll(".nav a[data-section]").forEach((a) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target && target.hidden) a.hidden = true;
  });

  /* ----- Aparición suave al hacer scroll ----- */
  const targets = document.querySelectorAll(".block, .card, .service, .step");
  targets.forEach((t) => t.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add("in"));
  }
})();
