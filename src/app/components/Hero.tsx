import { Fugaz_One } from "next/font/google"
import Button from "./Button"
import Calendar from "./Calendar"

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400"
})

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-4 sm:gap-8">
      <h1 className={`text-5xl sm:text-6xl md:text-7xl
        text-center ${fugaz.className}`}>
        <span className="textGradient">Mood</span> helps you track you 
        <span className="textGradient">daily</span> mood!
      </h1>
      <p className="text-lg sm:text-xl md:text2xl text-center w-full 
      mx-auto max-w-[600px]">Create your mood record and see how you fell on
        <span className="font-semibold"> every day of every year.</span>
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Button text="Sign Up"/>
        <Button text="Log In" dark/>
      </div>
      <Calendar />
    </div>
  )
}