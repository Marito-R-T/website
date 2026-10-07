export interface Slide {
  id: string
  title: string
  description: string
  file: string // Path relative to public (e.g. '/slides/compiladores-2/risc-v.html') or remote URL
  date: string
  tags: string[]
  duration?: string
}

export interface Course {
  id: string
  code: string
  name: string
  university: string
  semester: string
  color: 'sage' | 'butter' | 'coral' | 'cobalt'
  description: string
  topicsCount: number
  slides: Slide[]
}

export const useCourses = () => {
  const courses = ref<Course[]>([
    {
      id: 'compiladores-2',
      code: 'CC-772',
      name: 'Compiladores 2',
      university: 'Universidad de San Carlos (CUNOC)',
      semester: 'Segundo Semestre',
      color: 'butter',
      description: 'Generación de código intermedio (C3D), optimizaciones de flujo de control, diseño de activaciones de pila y traducción hacia arquitectura RISC-V.',
      topicsCount: 8,
      slides: [
        {
          id: 'risc-v',
          title: 'De Código 3 Direcciones a RISC-V',
          description: 'Traducción de C3D, llamadas de funciones, registros temporales y salvados, convención ABI, frame pointer y simulador de pila interactivo.',
          file: '/slides/compiladores-2/risc-v.html',
          date: '2024 - 2025',
          tags: ['RISC-V', 'Compiladores', 'C3D', 'Simulador', 'Assembly'],
          duration: '60 min'
        }
      ]
    },
    {
      id: 'arquitectura-computadoras',
      code: 'CC-770',
      name: 'Arquitectura de Computadoras',
      university: 'Universidad de San Carlos (CUNOC)',
      semester: 'Ciclo Académico',
      color: 'sage',
      description: 'Organización de CPU, microarquitectura, jerarquía de memoria caché, buses de datos e interfaces de entrada/salida.',
      topicsCount: 6,
      slides: []
    },
    {
      id: 'introduccion-programacion',
      code: 'CC-700',
      name: 'Introducción a la Programación',
      university: 'Universidad de San Carlos (CUNOC)',
      semester: 'Ciclo Académico',
      color: 'coral',
      description: 'Fundamentos de lógica algorítmica, programación estructurada y orientada a objetos, estructuras de datos y Git.',
      topicsCount: 10,
      slides: []
    }
  ])

  const getCourse = (id: string) => courses.value.find(c => c.id === id)
  const getSlide = (courseId: string, slideId: string) => {
    const course = getCourse(courseId)
    return course?.slides.find(s => s.id === slideId)
  }

  const allSlides = computed(() => {
    return courses.value.flatMap(course => 
      course.slides.map(slide => ({
        ...slide,
        courseId: course.id,
        courseName: course.name,
        courseColor: course.color
      }))
    )
  })

  return {
    courses,
    getCourse,
    getSlide,
    allSlides
  }
}
