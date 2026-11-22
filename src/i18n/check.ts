// Verificación en tiempo de compilación: el inglés debe tener exactamente
// las mismas claves que el español. Si falta una, `tsc` falla aquí.
import type { Dictionary } from "./dictionaries";
import en from "./messages/en.json";

export const enMatchesEs: Dictionary = en;
