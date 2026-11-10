import type { Category, Exercise } from './types';

// Colores de la marca por categoría (sin el #)
const COLORS: Record<Category, string> = { fuerza: '5454e9', cardio: 'e9683b', movilidad: '4cb979' };

// Imagen de relleno: tamaño, color de fondo y de texto, formato y el texto que muestra
const img = (category: Category, text: string) =>
    `https://placehold.co/800x600/${COLORS[category]}/ffffff/png?text=${encodeURIComponent(text)}`;

export const EXERCISES: Exercise[] = [
    {
        id: 1,
        name: 'Sentadilla',
        category: 'fuerza',
        muscle: 'Piernas',
        durationMin: 10,
        image: img('fuerza', 'Sentadilla'),
        description:
            'Con los pies al ancho de los hombros, baja la cadera como si fueras a sentarte, manteniendo la espalda recta y las rodillas alineadas con los pies. Sube empujando con los talones.',
    },
    {
        id: 2,
        name: 'Flexiones',
        category: 'fuerza',
        muscle: 'Pecho y brazos',
        durationMin: 8,
        image: img('fuerza', 'Flexiones'),
        description:
            'Apoya las manos un poco más abiertas que los hombros y mantén el cuerpo en línea recta. Baja el pecho hasta casi tocar el suelo y vuelve a subir sin arquear la espalda.',
    },
    {
        id: 3,
        name: 'Plancha',
        category: 'fuerza',
        muscle: 'Abdomen',
        durationMin: 5,
        image: img('fuerza', 'Plancha'),
        description:
            'Apóyate sobre los antebrazos y las puntas de los pies. Aprieta el abdomen y los glúteos para mantener el cuerpo recto, sin dejar caer la cadera. Respira con calma.',
    },
    {
        id: 4,
        name: 'Zancadas',
        category: 'fuerza',
        muscle: 'Piernas y glúteos',
        durationMin: 10,
        image: img('fuerza', 'Zancadas'),
        description:
            'Da un paso largo hacia adelante y baja hasta que ambas rodillas formen un ángulo de 90 grados. Vuelve a la posición inicial y alterna la pierna.',
    },
    {
        id: 5,
        name: 'Saltos de tijera',
        category: 'cardio',
        muscle: 'Cuerpo completo',
        durationMin: 6,
        image: img('cardio', 'Saltos de tijera'),
        description:
            'Salta abriendo las piernas y llevando los brazos por encima de la cabeza; en el siguiente salto vuelve a juntarlos. Mantén un ritmo constante y aterriza suave.',
    },
    {
        id: 6,
        name: 'Trote suave',
        category: 'cardio',
        muscle: 'Piernas y corazón',
        durationMin: 20,
        image: img('cardio', 'Trote suave'),
        description:
            'Trota a un ritmo en el que todavía puedas conversar. Mantén los hombros relajados, los brazos a 90 grados y pisa con la parte media del pie.',
    },
    {
        id: 7,
        name: 'Estiramiento de isquiotibiales',
        category: 'movilidad',
        muscle: 'Parte trasera del muslo',
        durationMin: 5,
        image: img('movilidad', 'Isquiotibiales'),
        description:
            'Sentado con una pierna estirada, inclina el tronco hacia adelante desde la cadera hasta sentir la tensión detrás del muslo. Sostén 30 segundos y cambia de pierna.',
    },
    {
        id: 8,
        name: 'Postura del gato y la vaca',
        category: 'movilidad',
        muscle: 'Columna',
        durationMin: 4,
        image: img('movilidad', 'Gato y vaca'),
        description:
            'En cuatro apoyos, redondea la espalda llevando el mentón al pecho (gato) y luego arquéala mirando hacia arriba (vaca). Acompaña cada movimiento con la respiración.',
    },
];
