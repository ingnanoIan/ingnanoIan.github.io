/* ============================================================
   TODO TU CONTENIDO VIVE AQUÍ.
   Edita los textos entre comillas "..." y guarda el archivo.
   Para agregar un proyecto: copia un bloque { ... }, pégalo
   debajo (con su coma) y cambia los datos.
   Si no quieres una sección, déjala vacía: []
   ============================================================ */

const SITE = {
  // ---- Datos básicos ----
  name: "Tu Nombre",
  role: "Desarrollador Web Freelance",          // lo que haces, en pocas palabras
  tagline: "Creo sitios y aplicaciones rápidas, claras y fáciles de usar.",
  bio: "Soy freelance con X años de experiencia ayudando a negocios y personas a poner sus ideas en internet. Trabajo de forma directa, con comunicación clara y entregas a tiempo.",
  location: "Ciudad, País",
  available: true,                               // true muestra el punto verde "Disponible para proyectos"

  // ---- Contacto ----
  email: "tu@correo.com",
  cv: "assets/cv.pdf",                           // pon tu PDF en la carpeta assets/ con este nombre (o "" para ocultar el botón)
  links: [
    { label: "GitHub",   url: "https://github.com/tu-usuario" },
    { label: "LinkedIn", url: "https://linkedin.com/in/tu-usuario" },
    { label: "WhatsApp", url: "https://wa.me/521234567890" }
  ],

  // ---- Servicios (qué ofreces) ----
  services: [
    { title: "Sitios web",        text: "Páginas rápidas y adaptadas a celular para tu negocio o marca personal." },
    { title: "Aplicaciones",      text: "Herramientas a la medida: paneles, formularios, automatizaciones." },
    { title: "Mantenimiento",     text: "Mejoras, correcciones y soporte continuo para tu proyecto existente." }
  ],

  // ---- Proyectos ----
  // image: ruta a una captura (ej. "assets/proyecto1.jpg") o "" para usar un diseño automático
  // url: enlace al proyecto en vivo (o "" si no hay)
  projects: [
    {
      title: "Nombre del proyecto 1",
      description: "Qué problema resolvía el cliente y qué hiciste tú. Una o dos frases bastan.",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "https://ejemplo.com",
      image: "",
      year: "2026"
    },
    {
      title: "Nombre del proyecto 2",
      description: "Describe el resultado: más ventas, menos tiempo, mejor imagen, etc.",
      tags: ["React", "Node.js"],
      url: "https://ejemplo.com",
      image: "",
      year: "2025"
    },
    {
      title: "Nombre del proyecto 3",
      description: "Otro trabajo del que te sientas orgulloso.",
      tags: ["WordPress", "Diseño"],
      url: "",
      image: "",
      year: "2025"
    }
  ],

  // ---- Experiencia ----
  experience: [
    {
      role: "Desarrollador freelance",
      company: "Independiente",
      period: "2023 — Actualidad",
      text: "Proyectos para clientes de distintos rubros: sitios, tiendas en línea y sistemas internos."
    },
    {
      role: "Puesto anterior",
      company: "Empresa",
      period: "2020 — 2023",
      text: "Describe en una línea tus responsabilidades y logros principales."
    }
  ],

  // ---- Educación ----
  education: [
    { title: "Tu carrera o curso", place: "Institución", period: "2016 — 2020" }
  ],

  // ---- Habilidades ----
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "Figma", "SEO básico"]
};
