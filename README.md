# 🌐 Portafolio Profesional - Julian Tabaco

[![GitHub License](https://img.shields.io/github/license/Julianj09/portafolio-servicios-julian?style=for-the-badge&color=62E02D)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Julianj09/portafolio-servicios-julian?style=for-the-badge&color=56C2DB)](https://github.com/Julianj09/portafolio-servicios-julian/stargazers)
[![Status](https://img.shields.io/badge/Status-Desarrollo-orange?style=for-the-badge)](https://github.com/Julianj09/portafolio-servicios-julian)

Un portafolio moderno, dinámico y modular diseñado para creadores y desarrolladores. Este proyecto destaca por su estética, arquitectura limpia en **Vanilla JavaScript** y una experiencia de usuario optimizada con soporte nativo para **Dark Mode**.

---

## 🚀 Demo
[Ver Proyecto en Vivo](https://julianj09.github.io/portafolio-servicios-julian/)

---

## 📸 Capturas de Pantalla

| Vista Light Mode | Vista Dark Mode (Cyberpunk) |
| :---: | :---: |
| ![Light Mode](https://via.placeholder.com/600x400?text=Light+Mode+Preview) | ![Dark Mode](https://via.placeholder.com/600x400?text=Dark+Mode+Preview) |

---

## 🛠️ Tecnologías Utilizadas

- **Core:** HTML5, CSS3 (Modulada), JavaScript (ES6+).
- **Animaciones:** [ScrollReveal](https://scrollrevealjs.org/) (Efectos de entrada dinámicos).
- **Notificaciones:** [SweetAlert2](https://sweetalert2.github.io/) (Alertas interactivas).
- **Servicios:** [EmailJS](https://www.emailjs.com/) (Integración de formulario de contacto sin backend).
- **Tipografía:** Poppins & Raleway (vía Google Fonts).
- **Iconografía:** [Unicons](https://iconscout.com/unicons).

---

## 📐 Arquitectura del Proyecto

El proyecto sigue una estructura modular para facilitar el mantenimiento y la escalabilidad.

```text
portafolio-servicios-julian/
├── assets/             # Recursos visuales (Imágenes, iconos, WebP)
├── data/               # Fuentes de verdad (JSON con datos del perfil)
│   ├── profile.json    # Información personal y 'Sobre mí'
│   ├── skills.json     # Tecnologías y Hobbies
│   ├── projects.json   # GitHub repos y proyectos destacados
│   └── social.json     # Enlaces a redes sociales
├── js/                 # Lógica de la aplicación
│   ├── modules/        # Componentes reutilizables y utilidades
│   │   ├── theme.js    # Lógica de Dark/Light Mode
│   │   ├── form.js     # Validación y envío de EmailJS
│   │   └── render*.js  # Funciones para renderizar secciones dinámicas
│   └── main.js         # Entry point (Inicialización de ScrollReveal e hidratación)
├── styles/             # Estilos modulares (BEM-ish variables)
│   ├── base/           # Resets, Tipografía y Tokens (Variables)
│   ├── components/     # Estilos de botones, cards y badges
│    └── layout/         # Estilos de Header, Footer y Secciones
└── index.html          # Página principal
└── README.md           # Documentación del proyecto
```

---

## ✨ Características Principales

- **Cyberpunk Dark Mode:** Implementación de un tema nocturno con contrastes neón verde y cian.
- **Renderizado Dinámico:** El contenido se carga desde archivos JSON, permitiendo actualizaciones rápidas sin tocar el HTML.
- **Formulario Inteligente:** Validación en tiempo real y envío directo al correo mediante EmailJS.
- **Optimización WebP:** Todas las imágenes han sido convertidas para maximizar la velocidad de carga.
- **Diseño Ultra-Responsivo:** Adaptado perfectamente a móviles, tablets y desktops de gran formato.

---

## 💻 Instalación y Uso Local

### Requisitos
- Un navegador moderno (Chrome, Firefox, Edge).
- (Opcional) [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para VS Code.

### Pasos
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Julianj09/portafolio-servicios-julian.git
   ```
2. **Navegar al directorio:**
   ```bash
   cd portafolio-servicios-julian
   ```
3. **Ejecutar:**
   Simplemente abre el archivo `index.html` en tu navegador o inicia el **Live Server**.

---

## 🚢 Despliegue (Deploy)

Este proyecto está listo para ser hosteado en **GitHub Pages**, **Vercel** o **Netlify**.

1. Sube tus cambios a la rama `main`.
2. En GitHub: `Settings > Pages > Build and deployment > Branch: main`.
3. ¡Listo! Tu portafolio estará disponible en `https://<tu-usuario>.github.io/<repo>/`.

---

## 🌿 Convenciones de Código

### Git Flow & Ramas
- `main`: Código estable de producción.
- `feature/*`: Nuevas funcionalidades (ej: `feature/portafolio-mejoras`).
- `bugfix/*`: Corrección de errores.

### Commits
Seguimos la convención de **Conventional Commits**:
- `feat`: Una nueva característica.
- `fix`: Una corrección de error.
- `perf`: Cambios para mejorar el rendimiento.
- `refactor`: Cambios que no añaden funcionalidad ni corrigen errores.

Ejemplo: `feat(ui): implementar selector de tema oscuro con persistencia`

---

## 🔮 Mejoras Futuras
- [ ] Mejorar la experiencia de usuario.
- [ ] Mejorar la accesibilidad.
- [ ] Optimizar el SEO con metadatos dinámicos por sección.
- [ ] Integrar micro-interacciones con Framer Motion (si se migra a React).

---

## 👨‍💻 Autor

**Julian Tabaco**
- [LinkedIn](https://www.linkedin.com/in/didier-julian-tabaco-duran-619069312/)
- [GitHub](https://github.com/Julian090104)
- [Email](mailto:didierjuliantabacoduran@gmail.com)

---

## 📄 Licencia
Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más información.

---
*Desarrollado con ❤️ por Julian Tabaco - 2024*
*Actualizado por Julian Tabaco - 2026*


