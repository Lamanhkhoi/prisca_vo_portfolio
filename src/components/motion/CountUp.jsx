import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

/** Counts from 0 to `value` once the number scrolls into view. Writes to the DOM directly (no re-renders). */
export default function CountUp({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()
  const format = (n) => `${n.toFixed(decimals)}${suffix}`

  useEffect(() => {
    const node = ref.current
    if (!node || !inView) return
    if (reduce) {
      node.textContent = format(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => {
        node.textContent = format(n)
      },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value, decimals, suffix])

  return (
    <span aria-label={format(value)}>
      <span ref={ref} aria-hidden="true">
        {format(0)}
      </span>
    </span>
  )
}
