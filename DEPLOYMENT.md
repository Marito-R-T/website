# Guía de Despliegue y Adición de Diapositivas (Vercel & Reveal.js)

Este documento detalla el procedimiento estándar para desplegar el portafolio en **Vercel** y la metodología para agregar nuevas diapositivas de **Reveal.js** a los cursos universitarios.

---

## 1. Conexión y Despliegue en Vercel

El proyecto está construido sobre **Nuxt 3** y está preconfigurado para ejecutarse con **Nitro** en modo servidor o estático sobre Vercel.

### Pasos iniciales en Vercel:
1. Ingresa a tu panel de control en [vercel.com](https://vercel.com).
2. Haz clic en **"Add New..."** -> **"Project"**.
3. Conecta tu cuenta de GitHub y selecciona el repositorio `Marito-R-T/website`.
4. En la configuración de construcción (**Build and Output Settings**):
   - **Framework Preset**: `Nuxt.js` (detectado automáticamente).
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output` (Vercel lo gestiona automáticamente con Nitro).
5. Haz clic en **Deploy**.
6. **Despliegues Automáticos**: Cada vez que realices un `git push origin main`, Vercel compilará y actualizará el sitio en producción inmediatamente.

---

## 2. Instrucción Rápida para Futuras Sesiones de IA

Cuando abras una nueva sesión de chat o solicites a un agente desplegar o actualizar, solo debes indicarle:

> *"Por favor prepara las nuevas diapositivas, compila el proyecto con `npm run build`, realiza un commit con un mensaje descriptivo y haz push a `main` para que Vercel lo despliegue automáticamente."*

---

## 3. Procedimiento para Agregar Nuevas Presentaciones (.html)

### Paso A: Guardar el archivo HTML de la diapositiva
Coloca el archivo HTML generado por Reveal.js dentro del directorio público del curso correspondiente:
```
public/slides/<id-curso>/<nombre-de-la-presentacion>.html
```
*Ejemplo para Compiladores 2:*
`public/slides/compiladores-2/optimizacion-ast.html`

*Ejemplo para Seminario de Sistemas 1:*
`public/slides/ss-1/arquitecturas-nube-distribuidas.html`

### Paso B: Registrar la presentación en `composables/useCourses.ts`
Abre el archivo `composables/useCourses.ts` y agrega la diapositiva al arreglo `slides` del curso correspondiente:

```typescript
{
  id: 'optimizacion-ast',
  title: 'Optimización de Código y Árboles AST',
  description: 'Técnicas de reducción de expresiones, propagación de constantes y simplificación.',
  file: '/slides/compiladores-2/optimizacion-ast.html',
  date: '2026',
  tags: ['AST', 'Optimizacion', 'C3D']
}
```

### Paso C: Probar y Desplegar
Ejecuta en la terminal:
```bash
# 1. Verificar compilación limpia
npm run build

# 2. Confirmar cambios y enviar a GitHub (Vercel desplegará automáticamente)
git add .
git commit -m "feat(slides): agregar presentacion optimizacion ast a compiladores 2"
git push origin main
```

---

## 4. Paleta de Colores por Curso y Diapositivas

Para mantener armonía y consistencia visual con el sistema Bento Neo-Brutalista:

| Código de Color | Nombre | Tono Visual | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| `butter` | Amarillo Mantequilla | `#FBE795` | Ciencias de la Computación, Compiladores |
| `sage` | Verde Salvia | `#C6D8C4` | Sistemas Distribuidos, Redes, Virtualización |
| `coral` | Coral Cálido | `#F4B6A6` | Arquitectura de Hardware, Ensamblador |
| `cobalt` | Azul Cobalto | `#B8C9F8` | Algoritmos, Matemáticas, Bases de Datos |
| `lilac` | Lila Pastel | `#DCC6E0` | Seminarios, Inteligencia Artificial, Ética |
| `mint` | Verde Menta | `#B5EAD7` | Desarrollo Web, Frontend, DevOps |

---

## 5. Contacto & Soporte
- Desarrollador: **Mario Moisés Ramírez Tobar**
- Email: `mariomoises20008@gmail.com`
- GitHub: [github.com/Marito-R-T](https://github.com/Marito-R-T)
