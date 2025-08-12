/**
 * Normaliza um texto removendo pontuação, espaços extras e convertendo para minúsculas
 */
export function normalizeText(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, '')      // remove all spaces
        .replace(/[.,;]/g, '')    // remove punctuation
        .replace(/[+]-/g, '-')    // normalize +-
        .replace(/[-]+/g, '-')    // normalize multiple -
        .trim();
}