'use server';

import { revalidatePath } from 'next/cache';
import { routinesStore } from './store';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Marca o desmarca un ejercicio como hecho (se usa en la sección 4)
export async function toggleDoneAction(routineId: number, exerciseId: number): Promise<void> {
    await delay(800); // simula una base de datos lenta para que se note la UI optimista
    routinesStore.toggleDone(routineId, exerciseId);
    revalidatePath(`/routines/${routineId}`);
}
