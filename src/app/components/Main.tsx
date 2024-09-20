import { ReactNode } from "react"

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {

  return (
    <main className="flex-1 flex flex-col p-4 sm:p-8">
      {children}
    </main>
  )
}