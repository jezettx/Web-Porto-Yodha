// lib/cx.ts
export function cx(...strings: Array<string | false | null | undefined>) {
  // CHANGE: formatting doang
    return strings.filter(Boolean).join(" ");
}