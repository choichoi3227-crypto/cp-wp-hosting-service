/** Allow only same-origin relative paths (blocks open redirects). */
export function safeRedirectPath(raw: string | null | undefined, fallback = '/dashboard'): string {
  if (!raw) return fallback;
  const trimmed = raw.trim();
  if (!trimmed.startsWith('/') || trimmed.startsWith('//')) return fallback;
  try {
    const base = typeof location !== 'undefined' ? location.origin : 'https://localhost';
    const url = new URL(trimmed, base);
    if (url.origin !== base) return fallback;
    if (url.username || url.password) return fallback;
    return url.pathname + url.search + url.hash;
  } catch {
    return fallback;
  }
}
