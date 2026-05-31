// Subdomain label: 3–32 chars, lowercase alphanumeric, hyphens not at start/end
const SUBDOMAIN_PATTERN = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export function isValidSubdomain(value: string): boolean {
  return value.length >= 3 && value.length <= 32 && SUBDOMAIN_PATTERN.test(value);
}
