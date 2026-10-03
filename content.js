/* ============================================================
   ALL YOUR CONTENT LIVES HERE / TODO TU CONTENIDO VIVE AQUÍ.
   Texts that change by language look like:  { en: "English", es: "Español" }
   Names, tools and links are plain "text" (same in both languages).
   To add a project: copy the commented example below into projects: [ ... ].
   Empty list [] = that section hides itself.
   ============================================================ */

const SITE = {
  // ---- Basics ----
  name: "Ian Sanchez Fernandez",
  role: { en: "Data Analyst · Data Science", es: "Analista de Datos · Data Science" },
  tagline: {
    en: "I turn data into actionable insights that support decision-making and drive business growth.",
    es: "Transformo datos en información accionable que apoya la toma de decisiones e impulsa el crecimiento del negocio."
  },
  bio: {
    en: "Business Development Analyst with a strong interest in Data Science, strategy, and results. Skilled in data management, administration, generation, and analysis. Committed to efficiency, effectiveness, and accuracy in both data and its presentation.",
    es: "Analista de Desarrollo de Negocio con un fuerte interés en ciencia de datos, estrategia y resultados. Con experiencia en gestión, administración, generación y análisis de datos. Comprometido con la eficiencia, la efectividad y la precisión, tanto en los datos como en su presentación."
  },
  now: { en: "", es: "" },                         // one line about what you're doing today ("" hides it)
  location: "México",
  photo: "",                                       // e.g. "assets/foto.jpg" (square); empty = your initials are shown
  available: false,                                // true shows the green "Available for new projects" dot

  // ---- Contact ----
  email: "",                                       // put a PERSONAL email here (not your work one); empty = not shown
  cv: "",                                          // e.g. "assets/cv.pdf" (a version without phone / work email); empty = no button
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ingnanoian" },
    { label: "GitHub",   url: "https://github.com/ingnanoIan" }
  ],

  // ---- Services ----
  services: [
    {
      title: { en: "Process automation", es: "Automatización de procesos" },
      text:  { en: "Tools in R, Python and VBA that remove manual tasks and save hours of work.",
               es: "Herramientas en R, Python y VBA que eliminan tareas manuales y ahorran horas de trabajo." }
    },
    {
      title: { en: "Dashboards & reporting", es: "Dashboards y reportes" },
      text:  { en: "Power BI and Tableau dashboards that communicate findings to technical and non-technical people.",
               es: "Paneles en Power BI y Tableau que comunican hallazgos a personas técnicas y no técnicas." }
    },
    {
      title: { en: "Databases & SQL", es: "Bases de datos y SQL" },
      text:  { en: "Cleaning, consolidation and queries so your data is reliable and easy to use.",
               es: "Limpieza, consolidación y consultas para que tus datos sean confiables y fáciles de usar." }
    }
  ],

  // ---- Projects ----
  // Empty for now: the section hides itself. When you have your first one, add it like this:
  //
  // {
  //   title: { en: "Project name", es: "Nombre del proyecto" },
  //   status: "done",              // "done" | "wip" (in progress) | "soon" (coming soon)
  //   featured: true,              // true = full-width card (for your best project)
  //   year: "2026",
  //   summary:  { en: "One sentence about it.",              es: "Una frase sobre qué es." },
  //   problem:  { en: "What question did it answer?",        es: "¿Qué pregunta resolvía?" },
  //   approach: { en: "How you tackled it and with what.",   es: "Cómo lo abordaste y con qué." },
  //   result:   { en: "What you found (with numbers).",      es: "Qué descubriste (con números)." },
  //   tags: ["Python", "SQL", "Power BI"],
  //   links: [{ label: "Code", url: "https://github.com/..." }, { label: "Dashboard", url: "https://..." }],
  //   image: ""                    // screenshot (e.g. "assets/project1.png"); empty = automatic illustration
  // },
  projects: [],

  // ---- How I work ----
  process: [
    { title: { en: "Understand", es: "Entender" },
      text:  { en: "I define the business question and the decision to be made.", es: "Defino la pregunta de negocio y qué decisión se quiere tomar." } },
    { title: { en: "Prepare", es: "Preparar" },
      text:  { en: "I clean and validate the data: duplicates, gaps and errors.", es: "Limpio y valido los datos: duplicados, vacíos y errores." } },
    { title: { en: "Analyze", es: "Analizar" },
      text:  { en: "I explore, compare and test hypotheses with SQL, R and Python.", es: "Exploro, comparo y pruebo hipótesis con SQL, R y Python." } },
    { title: { en: "Visualize", es: "Visualizar" },
      text:  { en: "I present findings in clear charts, without noise.", es: "Presento los hallazgos en gráficos claros, sin ruido." } },
    { title: { en: "Recommend", es: "Recomendar" },
      text:  { en: "I close with conclusions and concrete actions.", es: "Cierro con conclusiones y acciones concretas." } }
  ],

  // ---- Work experience ----
  experience: [
    {
      role: { en: "Marketing Coordinator", es: "Coordinador de Marketing" },
      company: "American Express",
      period: { en: "Jul 2024 — Present", es: "Jul 2024 — Actualidad" },
      points: [
        {
          en: "Developed a data visualization tool in Jupyter and BigQuery to enable non-technical users within GNS Mexico teams to easily access and interpret business information. (Python & SQL)",
          es: "Desarrollé una herramienta de visualización de datos en Jupyter y BigQuery para que usuarios no técnicos de los equipos de GNS México accedan e interpreten información de negocio fácilmente. (Python y SQL)"
        },
        {
          en: "Created a String Comparator tool in R to improve merchant search and matching within databases, significantly reducing time spent on large-scale LIFs searches. (R Studio)",
          es: "Creé una herramienta comparadora de cadenas de texto en R que mejora la búsqueda y el emparejamiento de comercios en bases de datos, reduciendo de forma significativa el tiempo en búsquedas de LIFs a gran escala. (R Studio)"
        },
        {
          en: "Implemented web scraping solutions in R to generate new LIFs, providing commercial teams with valuable data on industry and brand coverage. (R Studio)",
          es: "Implementé soluciones de web scraping en R para generar nuevos LIFs, aportando a los equipos comerciales datos valiosos sobre la cobertura de industrias y marcas. (R Studio)"
        },
        {
          en: "Built portfolio management profiles in Jupyter for the CMT team, allowing efficient classification and control of unmanaged accounts. (Python)",
          es: "Construí perfiles de gestión de portafolio en Jupyter para el equipo CMT, lo que permitió clasificar y controlar eficientemente cuentas no gestionadas. (Python)"
        },
        {
          en: "Designed and deployed Power BI dashboards to analyze active LIFs across geographies and support strategic initiatives to onboard merchants in target regions. (Power BI)",
          es: "Diseñé y publiqué dashboards en Power BI para analizar los LIFs activos por geografía y apoyar iniciativas estratégicas de incorporación de comercios en regiones objetivo. (Power BI)"
        }
      ]
    },
    {
      role: { en: "Data Analyst", es: "Analista de Datos" },
      company: "American Express",
      period: { en: "Oct 2023 — Jul 2024", es: "Oct 2023 — Jul 2024" },
      points: [
        {
          en: "Automation and Process Efficiency: Developed and enhanced tools using R to automate and optimize processes, improving operational efficiency across various functions. (R Studio)",
          es: "Automatización y eficiencia de procesos: desarrollé y mejoré herramientas en R para automatizar y optimizar procesos, mejorando la eficiencia operativa en varias funciones. (R Studio)"
        },
        {
          en: "Database Management: Responsible for the cleaning, consolidation, and normalization of databases from diverse sources, ensuring data integrity and accessibility. (Access)",
          es: "Gestión de bases de datos: responsable de la limpieza, consolidación y normalización de bases de datos de fuentes diversas, asegurando su integridad y accesibilidad. (Access)"
        },
        {
          en: "Query Development: Created and refined SQL queries to support the Business Development team, enhancing data retrieval and analysis capabilities. (PostgreSQL)",
          es: "Desarrollo de consultas: creé y refiné consultas SQL para apoyar al equipo de Desarrollo de Negocio, mejorando la obtención y el análisis de datos. (PostgreSQL)"
        },
        {
          en: "Reporting and Visualization: Designed and implemented dashboards and presentation slides to effectively communicate insights and findings to stakeholders during strategic meetings. (Power BI)",
          es: "Reportes y visualización: diseñé e implementé dashboards y presentaciones para comunicar hallazgos a las partes interesadas en reuniones estratégicas. (Power BI)"
        }
      ]
    },
    {
      role: { en: "Quality Control Engineer", es: "Ingeniero de Control de Calidad" },
      company: "Agromit S.A. de C.V.",
      period: { en: "Jul 2022 — Dec 2022", es: "Jul 2022 — Dic 2022" },
      points: [
        { en: "Designed, created, and administered databases. (PostgreSQL)",
          es: "Diseñé, creé y administré bases de datos. (PostgreSQL)" },
        { en: "Created automated reports in Excel for product release to clients. (Visual Basic for Applications, VBA)",
          es: "Creé reportes automatizados en Excel para la liberación de producto a clientes. (Visual Basic para Aplicaciones, VBA)" },
        { en: "Analyzed chemical results for quality control. (Python)",
          es: "Analicé resultados químicos para el control de calidad. (Python)" },
        { en: "Developed automated tools for presentations and numerical analysis. (Tableau)",
          es: "Desarrollé herramientas automatizadas para presentaciones y análisis numérico. (Tableau)" }
      ],
      text: {
        en: "Implementing SQL alongside Excel accelerated report creation from 1 week to 1 day.",
        es: "Al incorporar SQL junto con Excel, la creación de reportes pasó de 1 semana a 1 día."
      }
    }
  ],

  // ---- Education (hidden: empty list) ----
  education: [],

  // ---- Certifications ----
  certifications: [
    { title: "PL-300: Microsoft Power BI Data Analyst", place: "Microsoft" },
    { title: "Anaconda Python for Data Science Professional Certificate", place: "Anaconda" },
    { title: "R for Data Science" },
    { title: "Ubuntu Linux Professional Certificate", place: "Canonical" }
  ],

  // ---- Skills, by group ----
  skills: [
    { group: { en: "Programming",    es: "Programación" },   items: ["Python", "R", "SQL", "VBA"] },
    { group: { en: "Visualization",  es: "Visualización" },  items: ["Power BI", "Tableau"] },
    { group: { en: "Data & cloud",   es: "Datos y nube" },   items: ["PostgreSQL", "BigQuery", "GCP", "Access"] },
    { group: { en: "Tools",          es: "Herramientas" },   items: ["Jupyter", "R Studio", "Microsoft Office"] },
    { group: { en: "Strengths",      es: "Competencias" },   items: [
        { en: "Strategic & analytical thinking", es: "Pensamiento estratégico y analítico" },
        { en: "Creative problem-solving",        es: "Resolución creativa de problemas" },
        { en: "Adaptability",                    es: "Adaptabilidad" }
    ] },
    { group: { en: "Languages",      es: "Idiomas" },        items: [
        { en: "Spanish (native)", es: "Español (nativo)" },
        { en: "English (B2)",     es: "Inglés (B2)" }
    ] }
  ]
};
