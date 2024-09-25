import type { Metadata } from "next"
import { Fugaz_One, Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"] })
const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400"
})


export const metadata: Metadata = {
  title: "Mood",
  description: "Track your daily mood mood every day of the year!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center
    justify-between gap-4">
      <h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>Mood</h1>
      <div className="flex items-center justify-between">
        PLACEHOLDER CTA OR STATS
      </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-content-center">
      <p className={`text-indigo-500 ${fugaz.className}`}>Create with 💛</p>
    </footer>
  )

  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm
          sm:text-base min-h-screen flex flex-col text-slate-800 ${openSans.className}` }
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
