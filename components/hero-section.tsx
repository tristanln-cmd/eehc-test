import { ThreeDMarquee } from "@/components/ui/3d-marquee"

const img1 = "https://media.discordapp.net/attachments/1392170085011030180/1525920374775087235/AA5AbUAsybRM1p0gIOkbzhiQ46ybX61_4hSSVPnfPHAowz16uzYrxgy5Hn51X7O_tViRhMZQdTj9J_Ki04EuNhozkvv_S6pwtDH8xljIahweDFRt-l3zoJx357NDnobXXsv9dSDUtKNObgGV0rwmnduvXuEdZEZQWS_azDsz0bmS71E8u-d-IcPHjj4UsHogo7eg56YpyKK3bvMIY6sxgNyMWc_VipYhHC7jrDeeyOWeggMw1280.png?ex=6a552397&is=6a53d217&hm=0dc96a4760176c38b3ea68d42ea4f82721cae55f67d952624c44f67981068bcf&=&format=webp&quality=lossless&width=1251&height=982"
const img2 = "https://media.discordapp.net/attachments/1392170085011030180/1525920375232528434/AA5AbUBFk7Ht_iEr5sO4Cyrp9_kVLz0DyL5Dis9bsyKULzO8pygXjkEpnoR6ZfVk-tnbpdfFCDWFZhvhWaeBJYTCqH-DbeLx7jzMMBMLTs5tYFbDc2RdMEtZYMNKi7yiIqAYb3CpiOQc3RANAcewSdBq_jFjDPXZRCAMWMy1G3CoZT_bOd8jPUVhT-YNS2AwcIK-GHDqVVXrivOuXNQ3I2oHzNKrdtgtWfgoHeFDb3gYw1280.png?ex=6a552397&is=6a53d217&hm=eb237417d589a7a74e50acc8deaece36df9c44fd9cfc308cbb759fb36a2f7559&=&format=webp&quality=lossless&width=1172&height=982"
const marqueeImages = [
  img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
  img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
  img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
  img1,
]

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
      <div className="px-6">
        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Executor diagnostics. Real results.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          ExecutorHealthCheck scans, tests, and benchmarks executors to deliver real security insights you can trust.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="/reports"
            className="rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Reports
          </a>
        </div>
      </div>

      <div className="flex justify-end pr-0">
        <ThreeDMarquee images={marqueeImages} />
      </div>
    </section>
  )
}
