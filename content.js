/* ============================================================
   TODO TU CONTENIDO VIVE AQUÍ.
   Edita los textos entre comillas "..." y guarda el archivo.
   Para agregar un proyecto: copia un bloque { ... }, pégalo
   debajo (con su coma) y cambia los datos.
   Si no quieres una sección, déjala vacía: []
   Los datos actuales son de EJEMPLO: reemplázalos por los tuyos.
   ============================================================ */

const SITE = {
  // ---- Datos básicos ----
  name: "Tu Nombre",
  role: "Analista de Datos · Data Science",
  tagline: "Convierto datos en decisiones: limpieza, análisis, dashboards y modelos que responden preguntas de negocio.",
  bio: "Estoy construyendo mi carrera en análisis y ciencia de datos. Me gusta partir de una pregunta real, ordenar datos desordenados y explicar los hallazgos de forma clara para que se pueda actuar sobre ellos. Aquí documento cada proyecto con su problema, su método y su resultado.",
  now: "Aprendiendo SQL avanzado y construyendo mi primer dashboard en Power BI.",   // una línea sobre lo que haces hoy (o "" para ocultar)
  location: "Ciudad, País",
  photo: "",                                     // tu foto (ej. "assets/foto.jpg", cuadrada); vacío = se muestran tus iniciales
  available: true,                               // true muestra el punto verde "Disponible para proyectos"

  // ---- Contacto ----
  email: "tu@correo.com",
  cv: "assets/cv.pdf",                           // pon tu PDF en la carpeta assets/ con este nombre (o "" para ocultar el botón)
  links: [
    { label: "GitHub",         url: "https://github.com/tu-usuario" },
    { label: "LinkedIn",       url: "https://linkedin.com/in/tu-usuario" },
    { label: "Kaggle",         url: "https://www.kaggle.com/tu-usuario" },
    { label: "Tableau Public", url: "https://public.tableau.com/app/profile/tu-usuario" }
  ],

  // ---- Servicios (qué ofreces como freelance) ----
  services: [
    { title: "Limpieza y análisis de datos", text: "Ordeno tus hojas de cálculo o bases de datos y encuentro patrones, errores y oportunidades." },
    { title: "Dashboards e informes",        text: "Paneles interactivos en Power BI, Tableau o Looker Studio para seguir tus indicadores sin esfuerzo." },
    { title: "Modelos y automatización",     text: "Predicciones sencillas y reportes automáticos con Python para ahorrar horas de trabajo manual." }
  ],

  // ---- Proyectos ----
  // status: "done" (Completado) | "wip" (En progreso) | "soon" (Próximamente)
  // featured: true hace que la tarjeta ocupe todo el ancho (úsalo en tu mejor proyecto)
  // problem / approach / result: las tres frases clave de cada proyecto (déjalas vacías "" si aún no las tienes)
  // links: botones con tu código, dashboard, notebook, informe, etc. (puede ir vacío: [])
  // image: captura de tu dashboard o gráfico (ej. "assets/proyecto1.png"); vacío = ilustración automática
  projects: [
    {
      title: "Análisis de ventas de una tienda en línea",
      status: "wip",
      featured: true,
      year: "2026",
      summary: "Análisis exploratorio y dashboard de un conjunto de datos real de pedidos.",
      problem: "¿Qué productos y meses generan más ingresos y dónde se pierden clientes?",
      approach: "Limpieza con Python (pandas), consultas en SQL y visualización en Power BI.",
      result: "Aquí va tu hallazgo principal con números, por ejemplo: «los clientes recurrentes aportan el 62% de los ingresos».",
      tags: ["Python", "SQL", "Power BI"],
      links: [
        { label: "Código", url: "https://github.com/tu-usuario/proyecto-ventas" },
        { label: "Dashboard", url: "" }
      ],
      image: ""
    },
    {
      title: "Predicción de cancelación de clientes",
      status: "soon",
      year: "2026",
      summary: "Modelo de clasificación para identificar clientes con riesgo de abandonar un servicio.",
      problem: "¿Qué clientes tienen más probabilidad de irse y por qué?",
      approach: "Análisis exploratorio, ingeniería de variables y modelos de scikit-learn comparados.",
      result: "",
      tags: ["Python", "scikit-learn", "Jupyter"],
      links: [],
      image: ""
    },
    {
      title: "Tablero de datos públicos de tu país",
      status: "soon",
      year: "2026",
      summary: "Dashboard con datos abiertos (salud, economía, clima...) que cuenta una historia clara.",
      problem: "",
      approach: "",
      result: "",
      tags: ["Excel", "Tableau"],
      links: [],
      image: ""
    }
  ],

  // ---- Cómo trabajo (tu método; sirve igual de bien al empezar) ----
  process: [
    { title: "Entender",   text: "Defino la pregunta de negocio y qué decisión se quiere tomar." },
    { title: "Preparar",   text: "Limpio y valido los datos: duplicados, vacíos y errores." },
    { title: "Analizar",   text: "Exploro, comparo y pruebo hipótesis con SQL y Python." },
    { title: "Visualizar", text: "Presento los hallazgos en gráficos claros, sin ruido." },
    { title: "Recomendar", text: "Cierro con conclusiones y acciones concretas." }
  ],

  // ---- Experiencia (déjala vacía [] si aún no tienes; no pasa nada) ----
  experience: [],

  // ---- Educación ----
  education: [
    { title: "Tu carrera o programa", place: "Institución", period: "2020 — 2024" }
  ],

  // ---- Certificaciones y cursos ----
  certifications: [
    { title: "Google Data Analytics (ejemplo)", place: "Coursera", period: "2026" },
    { title: "SQL para análisis de datos (ejemplo)", place: "Plataforma", period: "2026" }
  ],

  // ---- Herramientas, por grupos ----
  skills: [
    { group: "Lenguajes",     items: ["Python", "SQL"] },
    { group: "Análisis",      items: ["pandas", "NumPy", "scikit-learn", "Excel"] },
    { group: "Visualización", items: ["Power BI", "Tableau", "Matplotlib"] },
    { group: "Herramientas",  items: ["Git", "Jupyter", "VS Code"] }
  ]
};
