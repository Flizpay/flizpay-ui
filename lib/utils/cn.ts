import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description
 * A utility function to merge tailwind classes.
 * Used for conditional merging of Tailwind CSS classes.
 * @param inputs - A variadic list of Tailwind CSS class names or `undefined`/`false` values
 * @returns A string of tailwind classes.
 * @example
 * cn('text-red-500', 'text-red-600') => text-red-600
 * cn('text-red-500', undefined, 'bg-red-500')
 * **/
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
