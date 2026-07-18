"use client"

import { motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import { ReactNode, useState, useEffect, useRef, createContext, useContext } from "react"

interface TransitionContextValue {
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextValue>({
  isTransitioning: false,
})

export function useTransition() {
  return useContext(TransitionContext)
}

const overlayCoverVariants = {
  initial: { y: "100%" },
  animate: {
    y: "0%",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as number[] },
  },
  exit: {
    y: "0%",
    transition: { duration: 0 },
  },
}

const overlayRevealVariants = {
  initial: { y: "0%" },
  animate: {
    y: "-100%",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as number[] },
  },
}

export function TransitionOverlay({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [displayPath, setDisplayPath] = useState(pathname)
  const [overlayState, setOverlayState] = useState<"idle" | "covering" | "revealing">("idle")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }

  useEffect(() => {
    if (pathname === displayPath) return

    clearAllTimers()
    setIsTransitioning(true)
    setOverlayState("covering")

    const swapTimer = setTimeout(() => {
      setDisplayPath(pathname)
    }, 320)
    timersRef.current.push(swapTimer)

    const revealTimer = setTimeout(() => {
      setOverlayState("revealing")
    }, 360)
    timersRef.current.push(revealTimer)

    const idleTimer = setTimeout(() => {
      setOverlayState("idle")
      setIsTransitioning(false)
    }, 700)
    timersRef.current.push(idleTimer)

    return () => clearAllTimers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <TransitionContext.Provider value={{ isTransitioning }}>
      <AnimatePresence mode="sync">
        {overlayState === "covering" && (
          <motion.div
            key="overlay-cover"
            className="fixed inset-0 z-[100] bg-background"
            variants={overlayCoverVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
        {overlayState === "revealing" && (
          <motion.div
            key="overlay-reveal"
            className="fixed inset-0 z-[100] bg-background"
            variants={overlayRevealVariants}
            initial="initial"
            animate="animate"
          />
        )}
      </AnimatePresence>

      <div key={displayPath}>{children}</div>
    </TransitionContext.Provider>
  )
}
