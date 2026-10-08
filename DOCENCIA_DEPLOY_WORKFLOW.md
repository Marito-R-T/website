# Protocolo de Gestión, Despliegue y Modificación Dinámica Sin Redesplegar

Este documento detalla los dos mecanismos oficiales de la plataforma:
1. **Modificación de Contenidos Dinámicos SIN Redesplegar (GitHub Raw + Nitro SWR)**.
2. **Despliegue y Organización de Diapositivas Reveal.js (.html)**.

---

## 🚀 1. Cómo Modificar Textos/Notas SIN Redesplegar (Cero Builds de Vercel)

Para avisos, notas académicas o artículos que quieras modificar en tiempo real desde tu computadora o tu celular sin tener que esperar que Vercel compile:

### El Proceso en 3 Pasos:
1. **Abre el archivo en GitHub**:
   * Entra a: `https://github.com/Marito-R-T/website/blob/main/content/announcement.md`
   * (O desde el mismo botón **"Editar en GitHub ↗"** que aparece en la tarjeta en vivo de tu web).
2. **Edita el contenido directamente en GitHub**:
   * Presiona la tecla `.` para abrir el editor web de GitHub, o haz clic en el icono del lápiz (**Edit this file**).
   * Modifica el título, la fecha o el texto en Markdown:
     ```markdown
     ---
     title: Próxima clase: Generación de Código RISC-V
     tag: DOCENCIA CUNOC
     date: 8 de Octubre 2026
     ---
     Bienvenidos al laboratorio. Recuerden revisar el simulador de registros antes de la sesión práctica.
     ```
3. **Guarda el cambio**:
   * Haz clic en el botón verde **Commit changes**.
   * **¡Listo!** Vercel NO necesita compilar nada.
   * Entra a tu página web y haz clic en el botón **"Refrescar ↻"** (o recarga la página): el servidor Nitro consulta GitHub Raw y muestra el nuevo texto al instante.

---

## 🎓 2. Cómo Agregar Nuevas Presentaciones (.html) de Reveal.js

Las presentaciones interactivas de Reveal.js se alojan en `public/slides/<curso-slug>/`:

```text
public/
  slides/
    compiladores-2/
      risc-v.html                 <-- Presentación actual
      optimizacion.html           <-- Nueva presentación
    arquitectura-computadoras/
      microarquitectura.html
```

### Paso A: Colocar el archivo HTML
Copia tu archivo `.html` generado con Reveal.js dentro de:
`public/slides/<curso>/<archivo>.html`

### Paso B: Registrarlo en el catálogo (`composables/useCourses.ts`)
Abre `composables/useCourses.ts` y agrega la presentación al arreglo `slides` del curso:

```ts
{
  id: 'optimizacion',
  title: 'Optimización de Flujo de Control',
  titleEn: 'Control Flow Optimization',
  description: 'Análisis de dominancia, bloques básicos y eliminación de código muerto.',
  descriptionEn: 'Dominator tree analysis, basic blocks, and dead code elimination.',
  file: '/slides/compiladores-2/optimizacion.html',
  date: '2026',
  tags: ['Compiladores', 'Optimizacion', 'SSA']
}
```

### Paso C: Desplegar a Vercel
Al ejecutar `npm run build`, el script automatizado `prebuild` (`scripts/inject-slide-favicons.js`) verifica que cualquier nuevo `.html` tenga vinculados automáticamente los favicons (`favicon.svg`, `favicon.ico`, `apple-touch-icon`).

```bash
git add .
git commit -m "feat(slides): agregar presentacion optimizacion a compiladores 2"
git push origin main
```
Vercel detecta el commit automáticamente y despliega la actualización en ~25 segundos.

---

## 🤖 3. Prompt para Futuras Sesiones de IA

Copia y pega este texto cuando quieras que otra sesión de IA agregue una presentación:

```markdown
Hola, tengo una nueva presentación en formato .html para mi portfolio universitario:
- Archivo adjunto o ruta: [indicar_archivo.html]
- Curso: [ej. Compiladores 2]
- Título: [ej. Optimización y Bloques Básicos]
- Descripción: [ej. Explicación de grafos de flujo y eliminación de código muerto]
- Tags: [ej. C3D, Optimizaciones, SSA]

Por favor sigue el protocolo documentado en DOCENCIA_DEPLOY_WORKFLOW.md:
1. Copia el archivo .html a public/slides/<curso-slug>/<archivo>.html
2. Regístralo en composables/useCourses.ts con sus títulos en español e inglés.
3. Verifica que la compilación (npm run build) pase exitosamente.
4. Prepara el commit para Vercel.
```
