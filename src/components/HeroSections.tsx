import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
function HeroSections() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col  justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the Art of Cooking</h1>
            <p
            className="mt-4 font-normal text-base  md:text-lg text-neutral-300 max-w-lg mx-auto"
            > We believe in the transformative power of cooking and its ability to inspire, nourish, and bring people together. Our academy offers a comprehensive, supportive environment for chefs of all levels, from beginners to seasoned professionals. Whether you're just starting your culinary adventure or aiming to refine your techniques, our expert instructors are here to guide you every step of the way, helping you unlock your full cooking potential.</p>
            <div className="mt-4">
                <Link href={'/courses'}>
                <Button 
                borderRadius="1.75rem"
                >
                  Explore Courses
                </Button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default HeroSections