type RGB = [number, number, number];

export const invoiceTheme: Record<
  "primary" | "secondary" | "accent" | "success" | "dark" | "light",
  RGB
> = {
  primary: [124, 58, 237],
  secondary: [236, 72, 153],
  accent: [245, 158, 11],
  success: [34, 197, 94],
  dark: [31, 41, 55],
  light: [245, 245, 245],
};