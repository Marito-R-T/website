export interface Slide {
  id: string
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  file: string
  date: string
  tags: string[]
  duration?: string
}

export interface Course {
  id: string
  code: string
  name: string
  nameEn?: string
  university: string
  universityEn?: string
  semester: string
  semesterEn?: string
  color: 'sage' | 'butter' | 'coral' | 'cobalt'
  description: string
  descriptionEn?: string
  topicsCount: number
  slides: Slide[]
}

export const useCourses = () => {
  const { locale } = useI18n()

  const rawCourses: Course[] = [
    {
      id: 'compiladores-2',
      code: 'CC-772',
      name: 'Compiladores 2',
      nameEn: 'Compilers 2',
      university: 'Universidad de San Carlos (CUNOC)',
      universityEn: 'San Carlos University (CUNOC)',
      semester: 'Segundo Semestre',
      semesterEn: 'Second Semester',
      color: 'butter',
      description: 'Generación de código intermedio (C3D), optimizaciones de flujo de control, diseño de activaciones de pila y traducción hacia arquitectura RISC-V.',
      descriptionEn: 'Intermediate code generation (3AC), control flow optimizations, call stack activation layout, and target code emission for RISC-V architecture.',
      topicsCount: 8,
      slides: [
        {
          id: 'risc-v',
          title: 'De Código 3 Direcciones a RISC-V',
          titleEn: 'From 3-Address Code to RISC-V',
          description: 'Traducción de C3D, llamadas de funciones, registros temporales y salvados, convención ABI, frame pointer y simulador de pila interactivo.',
          descriptionEn: '3AC translation, function calls, caller/callee saved registers, ABI conventions, frame pointer, and live interactive stack simulator.',
          file: '/slides/compiladores-2/risc-v.html',
          date: '2024 - 2025',
          tags: ['RISC-V', 'Compiladores', 'C3D', 'Simulador', 'Assembly'],
          duration: '60 min'
        }
      ]
    },
    {
      id: 'ss-1',
      code: 'CC-770',
      name: 'Seminario de Sistemas 1',
      nameEn: 'Systems Seminar 1',
      university: 'Universidad de San Carlos (CUNOC)',
      universityEn: 'San Carlos University (CUNOC)',
      semester: 'Ciclo Académico',
      semesterEn: 'Academic Cycle',
      color: 'sage',
      description: 'BPM, BPMN, BPMS, Cloud Computing, Agentic AI, Arquitectura, Metodologías de Trabajo en Proyectos de Sistemas, Grid Computing, Virtualización y más.',
      descriptionEn: 'BPM, BPMN, BPMS, Cloud Computing, Agentic AI, Architecture, Systems Project Working Methodologies, Grid Computing, Virtualization, and more.',
      topicsCount: 6,
      slides: [
        {
          id: 'virtualization-grid-computing',
          title: 'Sobre las ventajas de la Virtualización y el Grid Computing',
          titleEn: 'On the advantages of Virtualization and Grid Computing',
          description: 'Sobre la Virtualización, sus ventajas y desventajas, la comparativa sobre la dockerización, simulaciones y cómo poner a trabajar varias computadoras en un proceso complejo',
          descriptionEn: 'On Virtualization, its advantages and disadvantages, the comparison with dockerization, simulations, and how to put several computers to work on a complex process',
          file: '/slides/ss-1/virtualization-grid-computing.html',
          date: '2026',
          tags: ['Virtualización', 'Docker', 'Arquitectura', 'Simulador', 'Grid Computing'],
          duration: '---'
        }
      ]
    }
  ]

  const courses = computed(() => {
    const isEn = locale.value === 'en'
    return rawCourses.map(course => ({
      ...course,
      name: isEn && course.nameEn ? course.nameEn : course.name,
      university: isEn && course.universityEn ? course.universityEn : course.university,
      semester: isEn && course.semesterEn ? course.semesterEn : course.semester,
      description: isEn && course.descriptionEn ? course.descriptionEn : course.description,
      slides: course.slides.map(slide => ({
        ...slide,
        title: isEn && slide.titleEn ? slide.titleEn : slide.title,
        description: isEn && slide.descriptionEn ? slide.descriptionEn : slide.description
      }))
    }))
  })

  const getCourse = (id: string) => courses.value.find(c => c.id === id)
  const getSlide = (courseId: string, slideId: string) => {
    const course = getCourse(courseId)
    return course?.slides.find(s => s.id === slideId)
  }

  return {
    courses,
    getCourse,
    getSlide
  }
}
