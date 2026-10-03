/* ============================================================
   TODO TU CONTENIDO VIVE AQUÍ.
   Edita los textos entre comillas "..." y guarda el archivo.
   Para agregar un proyecto: copia un bloque de ejemplo (abajo, comentado),
   pégalo dentro de projects: [ ... ] y cambia los datos.
   Si no quieres una sección, déjala vacía: []  (se oculta sola)
   ============================================================ */

const SITE = {
  // ---- Datos básicos ----
  name: "Ian Sanchez Fernandez",
  role: "Analista de Datos · Data Science",
  tagline: "Transformo datos en información accionable que apoya la toma de decisiones e impulsa el crecimiento del negocio.",
  bio: "Ingeniero en Nanotecnología y analista de desarrollo de negocio con fuerte interés en ciencia de datos, estrategia y resultados. Tengo experiencia en gestión, administración, generación y análisis de datos, y me enfoco en la eficiencia, la efectividad y la precisión, tanto en los datos como en la forma de presentarlos.",
  now: "",                                        // una línea sobre lo que haces hoy (o "" para ocultar)
  location: "México",
  photo: "",                                       // tu foto (ej. "assets/foto.jpg", cuadrada); vacío = se muestran tus iniciales
  available: false,                                // true muestra el punto verde "Disponible para nuevos proyectos"

  // ---- Contacto ----
  email: "",                                       // pon aquí un correo PERSONAL (no el del trabajo); vacío = no se muestra
  cv: "",                                          // ej. "assets/cv.pdf" (usa una versión sin teléfono ni correo del trabajo); vacío = sin botón
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ingnanoian" },
    { label: "GitHub",   url: "https://github.com/ingnanoIan" }
  ],

  // ---- Servicios ----
  services: [
    { title: "Automatización de procesos",   text: "Herramientas en R, Python y VBA que eliminan tareas manuales y ahorran horas de trabajo." },
    { title: "Dashboards y reportes",        text: "Paneles en Power BI y Tableau que comunican hallazgos a personas técnicas y no técnicas." },
    { title: "Bases de datos y SQL",         text: "Limpieza, consolidación y consultas sobre tus datos para que sean confiables y fáciles de usar." }
  ],

  // ---- Proyectos ----
  // Vacío por ahora: la sección se oculta sola. Cuando tengas el primero, agrégalo así:
  //
  // {
  //   title: "Nombre del proyecto",
  //   status: "done",              // "done" (Completado) | "wip" (En progreso) | "soon" (Próximamente)
  //   featured: true,              // true = tarjeta a todo el ancho (para tu mejor proyecto)
  //   year: "2026",
  //   summary: "Una frase sobre qué es.",
  //   problem: "¿Qué pregunta o problema resolvía?",
  //   approach: "¿Cómo lo abordaste y con qué herramientas?",
  //   result: "¿Qué descubriste? Con números si puedes.",
  //   tags: ["Python", "SQL", "Power BI"],
  //   links: [{ label: "Código", url: "https://github.com/..." }, { label: "Dashboard", url: "https://..." }],
  //   image: ""                    // captura (ej. "assets/proyecto1.png"); vacío = ilustración automática
  // },
  projects: [],

  // ---- Cómo trabajo ----
  process: [
    { title: "Entender",   text: "Defino la pregunta de negocio y qué decisión se quiere tomar." },
    { title: "Preparar",   text: "Limpio y valido los datos: duplicados, vacíos y errores." },
    { title: "Analizar",   text: "Exploro, comparo y pruebo hipótesis con SQL, R y Python." },
    { title: "Visualizar", text: "Presento los hallazgos en gráficos claros, sin ruido." },
    { title: "Recomendar", text: "Cierro con conclusiones y acciones concretas." }
  ],

  // ---- Experiencia ----
  experience: [
    {
      role: "Coordinador de Marketing",
      company: "American Express",
      period: "Jul 2024 — Actualidad",
      points: [
        "Desarrollé una herramienta de visualización de datos en Jupyter y BigQuery para que usuarios no técnicos de los equipos de GNS México accedan e interpreten información de negocio fácilmente (Python y SQL).",
        "Creé una herramienta comparadora de cadenas de texto en R que mejora la búsqueda y el emparejamiento de comercios en bases de datos, reduciendo de forma significativa el tiempo en búsquedas a gran escala (R Studio).",
        "Implementé soluciones de web scraping en R para generar nuevos LIFs, aportando a los equipos comerciales datos valiosos sobre industrias y marcas (R Studio).",
        "Construí perfiles de gestión de portafolio en Jupyter para el equipo CMT, lo que permitió clasificar y controlar cuentas no gestionadas (Python).",
        "Diseñé y publiqué dashboards en Power BI para analizar los LIFs activos por geografía y apoyar iniciativas estratégicas de incorporación de comercios en regiones objetivo (Power BI)."
      ]
    },
    {
      role: "Analista de Datos",
      company: "American Express",
      period: "Oct 2023 — Jul 2024",
      points: [
        "Automatización y eficiencia de procesos: desarrollé y mejoré herramientas en R para automatizar y optimizar procesos en varias funciones (R Studio).",
        "Gestión de bases de datos: limpieza, consolidación y normalización de datos de fuentes diversas, asegurando su integridad y accesibilidad (Access).",
        "Desarrollo de consultas: creé y refiné consultas SQL para apoyar al equipo de Desarrollo de Negocio con mejor acceso y análisis de datos (PostgreSQL).",
        "Reportes y visualización: diseñé dashboards y presentaciones para comunicar hallazgos a las partes interesadas en reuniones estratégicas (Power BI)."
      ]
    },
    {
      role: "Ingeniero de Control de Calidad",
      company: "Agromit S.A. de C.V.",
      period: "Jul 2022 — Dic 2022",
      points: [
        "Diseñé, creé y administré bases de datos (PostgreSQL).",
        "Creé reportes automatizados en Excel para la liberación de producto a clientes (Visual Basic para Aplicaciones, VBA).",
        "Analicé resultados químicos para el control de calidad (Python).",
        "Desarrollé herramientas automatizadas para presentaciones y análisis numérico (Tableau)."
      ],
      text: "Al incorporar SQL junto con Excel, el tiempo de creación de reportes pasó de 1 semana a 1 día."
    }
  ],

  // ---- Educación ----
  education: [
    { title: "Ingeniería en Nanotecnología", place: "Universidad Politécnica del Valle de México", period: "2019 — 2023" }
  ],

  // ---- Certificaciones ----
  certifications: [
    { title: "PL-300: Microsoft Power BI Data Analyst", place: "Microsoft" },
    { title: "Anaconda Python for Data Science Professional Certificate", place: "Anaconda" },
    { title: "R for Data Science" },
    { title: "Ubuntu Linux Professional Certificate", place: "Canonical" }
  ],

  // ---- Herramientas, por grupos ----
  skills: [
    { group: "Lenguajes",     items: ["Python", "R", "SQL", "VBA"] },
    { group: "Visualización", items: ["Power BI", "Tableau"] },
    { group: "Datos y nube",  items: ["PostgreSQL", "BigQuery", "GCP", "Access"] },
    { group: "Herramientas",  items: ["Jupyter", "R Studio", "Microsoft Office"] },
    { group: "Competencias",  items: ["Pensamiento estratégico y analítico", "Resolución creativa de problemas", "Adaptabilidad"] },
    { group: "Idiomas",       items: ["Español (nativo)", "Inglés (B2)"] }
  ]
};
