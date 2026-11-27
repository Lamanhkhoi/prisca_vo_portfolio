import { twMerge } from 'tailwind-merge'

/** Joins class names; when two utilities clash (bg-white + bg-navy) the last one wins. */
export function cn(...classes) {
  return twMerge(classes.filter(Boolean).join(' '))
}

export const EASE = [0.22, 1, 0.36, 1]
