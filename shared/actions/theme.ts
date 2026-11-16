'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

// Un archivo "use server" solo puede exportar funciones async: las constantes no se exportan
const LIGHT = 'icesi';
const DARK = 'icesi-dark';

// Alterna entre el tema claro y el oscuro y lo recuerda en una cookie
export async function toggleThemeAction(): Promise<void> {
    const store = await cookies();
    const next = store.get('theme')?.value === DARK ? LIGHT : DARK;

    store.set('theme', next, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    revalidatePath('/', 'layout'); // vuelve a pintar toda la app con el tema nuevo
}
