const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Plain <a> tags to files in public/ don't get basePath applied automatically.
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
