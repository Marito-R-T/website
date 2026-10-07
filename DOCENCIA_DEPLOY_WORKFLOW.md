# Protocolo de Gestión y Despliegue de Presentaciones (Reveal.js) y Cursos

Este documento define el proceso exacto y estandarizado para agregar nuevas presentaciones en formato `.html` (hechas con Reveal.js u otras herramientas interactivas), organizarlas en cursos universitarios y desplegarlas a **Vercel** de manera inmediata.

Cualquier sesión de IA o desarrollador puede seguir estos 3 pasos exactos sin fricción.

---

## 1. Estructura de Archivos para Presentaciones (.html)

Todas las presentaciones estáticas e interactivas residen en la carpeta `public/slides/` organizadas por el identificador del curso (slug):

```text
public/
  slides/
    compiladores-2/
      risc-v.html                 <-- Presentación autónoma
      optimizacion-flujo.html     <-- Próxima presentación
    arquitectura-computadoras/
      microarquitectura.html
    introduccion-programacion/
      algoritmos-intro.html
```

> **Regla de Oro**: Como los archivos `.html` se colocan dentro de `public/`, Nuxt y Vercel los sirven directamente en la ruta raíz `/slides/<curso-slug>/<archivo>.html`. Esto garantiza:
> * 0 problemas de CORS.
> * Reveal.js conserva el 100% de su interactividad, plugins y estilos.
> * Carga instantánea tanto en el **Visor Embebido (SlideViewer)** como a **Pantalla Completa** o en una pestaña nueva.

---

## 2. Registro en el Catálogo Académico (`composables/useCourses.ts`)

Para que la presentación aparezca automáticamente en la página `/cursos` y en el lanzador del Bento Grid, edita el archivo:
`composables/useCourses.ts`

### Caso A: Agregar una diapositiva a un curso existente
Localiza el curso (ej. `compiladores-2`) y añade el objeto en su arreglo `slides`:

```ts
{
  id: 'optimizacion-flujo',
  title: 'Optimización de Flujo de Control y Bloques Básicos',
  description: 'Algoritmos de análisis de flujo, dominancia, SSA y eliminación de código muerto.',
  file: '/slides/compiladores-2/optimizacion-flujo.html',
  date: '2025',
  tags: ['Compiladores', 'Optimizacion', 'SSA', 'Grafos'],
  duration: '45 min'
}
```

### Caso B: Crear un nuevo curso
Agrega un nuevo elemento al arreglo `courses`:

```ts
{
  id: 'sistemas-operativos-1',
  code: 'CC-774',
  name: 'Sistemas Operativos 1',
  university: 'Universidad de San Carlos (CUNOC)',
  semester: 'Primer Semestre',
  color: 'sage', // Opciones de paleta Bento: 'butter' | 'sage' | 'coral' | 'cobalt'
  description: 'Gestión de procesos, llamadas al sistema (syscalls), sincronización, memoria virtual y sistemas de archivos.',
  topicsCount: 5,
  slides: [
    {
      id: 'procesos-hilos',
      title: 'Procesos, Hilos y Planificación de CPU',
      description: 'Mecanismos de cambio de contexto, PCB y algoritmos de planificación.',
      file: '/slides/sistemas-operativos-1/procesos-hilos.html',
      date: '2025',
      tags: ['Linux', 'Procesos', 'Hilos', 'CPU']
    }
  ]
}
```

---

## 3. Despliegue Inmediato a Vercel

Una vez colocado el archivo `.html` y registrado en `composables/useCourses.ts`:

### Opción 1: Mediante Git (Automático con Vercel Git Integration)
```bash
# 1. Preparar cambios
git add public/slides/ composables/useCourses.ts

# 2. Commit semántico
git commit -m "feat(slides): agregar presentacion [nombre] al curso [curso]"

# 3. Subir a GitHub (Vercel detecta el push y despliega en ~25 segundos)
git push origin main
```

### Opción 2: Mediante Vercel CLI (Línea de comandos directa)
```bash
vercel --prod
```

---

## 4. Prompt para Copiar y Pegar en Futuras Sesiones de IA

Cuando desees pedirle a un asistente de IA en una sesión futura que agregue una nueva presentación, copia y pega este texto:

```markdown
Hola, tengo una nueva presentación en formato .html para mi portfolio universitario:
- Archivo adjunto o ruta: [indicar_archivo.html]
- Curso: [ej. Compiladores 2 o ID compiladores-2]
- Título: [ej. Optimización y Bloques Básicos]
- Descripción breve: [ej. Explicación de grafos de flujo y eliminación de código muerto]
- Tags: [ej. C3D, Optimizaciones, SSA]

Por favor sigue el protocolo documentado en DOCENCIA_DEPLOY_WORKFLOW.md:
1. Copia el archivo .html a public/slides/<curso-slug>/<archivo>.html
2. Regístralo en composables/useCourses.ts dentro de su curso correspondiente.
3. Verifica que la compilación (npm run build) pase exitosamente.
4. Prepara el commit o despliegue para Vercel.
```
