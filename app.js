/* Lee content.js y arma la página. Normalmente no necesitas tocar este archivo. */
(function () {
  const $ = (id) => document.getElementById(id);

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

  const chips = (list) => el("ul", { class: "chips" }, (list || []).map((t) => el("li", { text: t })));

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

  /* Foto (opcional) o iniciales del nombre */
  const media = $("hero-media");
  if (SITE.photo) media.appendChild(el("img", { src: SITE.photo, alt: "" }));
  else media.appendChild(el("span", {
    class: "hero__initials",
    text: SITE.name.split(/\s+/).slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join("")
  }));
  if (!SITE.projects || !SITE.projects.length) $("cta-projects").hidden = true;

  const skills = $("skills");
  if (SITE.skills && SITE.skills.length) SITE.skills.forEach((s) => skills.appendChild(el("li", { text: s })));
  else skills.hidden = true;

  /* ----- Servicios ----- */
  if (SITE.services && SITE.services.length) {
    $("servicios").hidden = false;
    SITE.services.forEach((s) =>
      $("services").appendChild(el("div", { class: "service" }, [el("h3", { text: s.title }), el("p", { text: s.text })]))
    );
  }

  /* ----- Proyectos ----- */
  if (SITE.projects && SITE.projects.length) {
    $("proyectos").hidden = false;
    SITE.projects.forEach((p) => {
      const media = el("div", { class: "card__media" });
      if (p.image) media.appendChild(el("img", { src: p.image, alt: "Captura de " + p.title, loading: "lazy" }));
      else media.appendChild(el("span", { class: "card__initial", text: p.title.trim().charAt(0).toUpperCase() }));

      const body = el("div", { class: "card__body" }, [
        el("div", { class: "card__head" }, [el("h3", { text: p.title }), p.year ? el("span", { class: "card__year", text: p.year }) : null]),
        el("p", { text: p.description }),
        p.tags && p.tags.length ? chips(p.tags) : null,
        p.url ? el("span", { class: "card__link", text: "Ver proyecto ↗" }) : null
      ]);

      const card = p.url
        ? el("a", { class: "card", href: p.url, target: "_blank", rel: "noopener" }, [media, body])
        : el("article", { class: "card" }, [media, body]);
      $("projects").appendChild(card);
    });
  }

  /* ----- Experiencia y educación ----- */
  if (SITE.experience && SITE.experience.length) {
    $("experiencia").hidden = false;
    $("experience-wrap").hidden = false;
    SITE.experience.forEach((e) =>
      $("experience").appendChild(
        el("li", {}, [
          el("span", { class: "period", text: e.period }),
          el("div", { class: "title" }, [document.createTextNode(e.role + " "), el("span", { text: "· " + e.company })]),
          el("p", { class: "text", text: e.text })
        ])
      )
    );
  }
  if (SITE.education && SITE.education.length) {
    $("experiencia").hidden = false;
    $("education-wrap").hidden = false;
    SITE.education.forEach((e) =>
      $("education").appendChild(
        el("li", {}, [
          el("span", { class: "period", text: e.period }),
          el("div", { class: "title" }, [document.createTextNode(e.title + " "), el("span", { text: "· " + e.place })])
        ])
      )
    );
  }

  /* ----- Contacto ----- */
  $("mail").href = "mailto:" + SITE.email;
  $("mail").textContent = SITE.email;
  $("cta-contact").href = "#contacto";
  (SITE.links || []).forEach((l) =>
    $("links").appendChild(el("li", {}, [el("a", { href: l.url, target: "_blank", rel: "noopener", text: l.label })]))
  );

  /* ----- Aparición suave al hacer scroll ----- */
  const targets = document.querySelectorAll(".block, .card, .service");
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
