"use client"

import { motion, type Variants } from "motion/react"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"

const img1 = "https://cdn.discordapp.com/attachments/1410477937010020434/1526955466070949918/AA5AbUAsybRM1p0gIOkbzhiQ46ybX61_4hSSVPnfPHAowz16uzYrxgy5Hn51X7O_tViRhMZQdTj9J_Ki04EuNhozkvv_S6pwtDH8xljIahweDFRt-l3zoJx357NDnobXXsv9dSDUtKNObgGV0rwmnduvXuEdZEZQWS_azDsz0bmS71E8u-d-IcPHjj4UsHogo7eg56YpyKK3bvMIY6sxgNyMWc_VipYhHC7jrDeeyOWeggMw1280.png?ex=6a5cdc18&is=6a5b8a98&hm=a92b38c035bff34c21d89e49e9e5b79e26887a70d7c5f9e784906f306c626440&"
const img2 = "https://cdn.discordapp.com/attachments/1410477937010020434/1526955466427728013/AA5AbUBFk7Ht_iEr5sO4Cyrp9_kVLz0DyL5Dis9bsyKULzO8pygXjkEpnoR6ZfVk-tnbpdfFCDWFZhvhWaeBJYTCqH-DbeLx7jzMMBMLTs5tYFbDc2RdMEtZYMNKi7yiIqAYb3CpiOQc3RANAcewSdBq_jFjDPXZRCAMWMy1G3CoZT_bOd8jPUVhT-YNS2AwcIK-GHDqVVXrivOuXNQ3I2oHzNKrdtgtWfgoHeFDb3gYw1280.png?ex=6a5cdc18&is=6a5b8a98&hm=a1f8b89bc5d962800b4de17e3add89fcf9808e00721872fda7b64cd5f4e4a986&"
const marqueeImages = [
  img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
  img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
  img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
  img1,
]

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
      <motion.div
        className="px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
        >
          Executor diagnostics. Real results.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
        >
          ExecutorHealthCheck scans, tests, and benchmarks executors to deliver real security insights you can trust.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
          <motion.a
            href="/reports"
            className="rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
            whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View Reports
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-end pr-0"
        initial={{ opacity: 0, x: 40, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <ThreeDMarquee images={marqueeImages} />
      </motion.div>
    </section>
  )
}
