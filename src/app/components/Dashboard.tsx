import { Fugaz_One } from "next/font/google"

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400"
})

type Statuses = {
  num_days: number
  time_remaining: string
  date: string
}

export default function Dashboard() {

  const statuses = {
    num_days: 4,
    time_remaining: "13:14:26",
    date: (new Date()).toDateString(),
  }

  return (
    <div className="flex flex-col flex-1 gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-indigo-50
      text-indigo-500 rounded-lg">
        {(Object.keys(statuses) as Array<keyof Statuses>).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className="p-4 flex flex-col gap-1
            sm:gap-2" >
              <p className="font-medium uppercase text-xs sm:text-sm">
                {status.replaceAll("_", " ")}
              </p>
              <p className={`text-base sm:text-lg ${fugaz.className}`}>
                {statuses[status]}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
