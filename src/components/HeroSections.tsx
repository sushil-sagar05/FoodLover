import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSections() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Unleash Your Musical Talent
        </h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >
          At our Music Academy, we believe in the power of music to inspire, connect, and transform lives. Whether you're picking up an instrument for the first time or refining your performance skills, our experienced instructors offer personalized guidance to help you reach your full musical potential in a supportive and creative environment.
        </p>
        <div className="mt-4">
          <Link href={'/courses'}>
            <Button borderRadius="1.75rem">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSections
