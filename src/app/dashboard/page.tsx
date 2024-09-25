import { Metadata } from "next"
import Main from "../components/Main"
import Login from "../components/Login"
import Dashboard from "../components/Dashboard"

export const metadata: Metadata = {
  title: "Mood · Dashboard"
}

export default function DashboardPage() {

  const isAuthenticated: boolean = true

  let children = (
    <Login />
  )

  if (isAuthenticated) {
    children = (
      <Dashboard />
    )
  }

  return (
    <Main>
      {children}
    </Main>
  )
}