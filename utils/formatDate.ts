"use client";

// export function formatDate(iso?: string) {
//   if (!iso) return "";
//   const d = new Date(iso);
//   return d.toLocaleString();
// }

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("en-GB", {
    timeZone: "UTC",
    dateStyle: "short",
    timeStyle: "short",
  });
}
