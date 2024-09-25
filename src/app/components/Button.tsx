import { Fugaz_One } from "next/font/google"
import React from "react"

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400"
})

interface ButtonProps {
  text: string
  dark?: boolean
  full?: boolean
}

export default function Button({ text, dark, full }: ButtonProps) {
  return (
    <button className={`rounded-full overflow-hidden border-solid
      border-indigo-600 border-2 duration-200 hover:opacity-60
      ${dark ? "text-white bg-indigo-600 " : "text-indigo-600"}
      ${full ? "grid place-content-center w-full" : ""}`
    }>
      <p className={`px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3
        ${fugaz.className}`}>{text}</p>
    </button>
  )
}
