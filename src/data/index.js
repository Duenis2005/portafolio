// Edita aqui tus datos. Todo el contenido del portafolio sale de este archivo.
export const data = {
  nombre: "Duenis",
  rol: "Estudiante de Redes y Desarrollo de Software",
  resumen:
    "Estudio ingenieria en ciencias de la computacion en UNICAH. Me interesa entender como viaja la informacion y construir las aplicaciones que la usan.",
  anio: new Date().getFullYear(),

  enlaces: [
    { texto: "Sobre mi", id: "sobre-mi" },
    { texto: "Habilidades", id: "habilidades" },
    { texto: "Vision", id: "vision" },
    { texto: "Contacto", id: "contacto" }
  ],

  sobre: [
    "Soy estudiante universitario en Honduras. Mi carrera combina dos areas que se complementan: la infraestructura de redes y el desarrollo de software.",
    "En redes trabajo con configuracion de switches y routers, VLAN y subneteo. En desarrollo hago paginas web con Vite, LESS y Handlebars, y aplicaciones Android."
  ],
  datos: [
    { etiqueta: "Universidad", valor: "UNICAH" },
    { etiqueta: "Pais", valor: "Honduras" },
    { etiqueta: "Areas", valor: "Redes, sistemas operativos, web y Android" }
  ],

  habilidades: [
    {
      categoria: "Redes",
      detalle: "Diseno y configuracion de redes a nivel CCNA.",
      items: ["Cisco CCNA", "VLAN", "Subneteo", "Enrutamiento", "Switching"]
    },
    {
      categoria: "Sistemas operativos",
      detalle: "Administracion de servidores y equipos.",
      items: ["Windows Server", "Linux basico", "Linea de comandos"]
    },
    {
      categoria: "Desarrollo web",
      detalle: "Paginas responsivas con herramientas modernas.",
      items: ["HTML", "LESS", "JavaScript", "Vite", "Handlebars", "Bootstrap"]
    },
    {
      categoria: "Desarrollo Android",
      detalle: "Aplicaciones moviles nativas.",
      items: ["Android Studio", "Java / Kotlin"]
    }
  ],

  vision: {
    meta: "Quiero trabajar como profesional que entiende la red y el software por igual, para disenar sistemas que sean seguros, rapidos y faciles de mantener.",
    pasos: [
      "Terminar la carrera y certificarme en Cisco CCNA.",
      "Ganar experiencia en proyectos reales de redes y desarrollo.",
      "Especializarme en infraestructura y aplicaciones conectadas."
    ]
  },

  contactos: [
    { medio: "Correo", valor: "tucorreo@ejemplo.com", url: "duef_rodriguezm14@unicah.edu" },
    { medio: "GitHub", valor: "github.com/DuenisUnicah", url: "https://github.com/DuenisUnicah" },
  ]
}
