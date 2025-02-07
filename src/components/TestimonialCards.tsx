
"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const CostumerTestimonial = [
    
        
          {
            quote: "\"I've learned so many new cooking techniques from this project. The step-by-step tips have made cooking at home so much easier and more enjoyable!\"",
            name: "Emily Jackson",
            title: "Home Cook Enthusiast",
            location: "New York, USA"
          },
          {
            quote: "\"As someone who loves to cook but often struggles with timing, the tips on meal prep and cooking efficiency have saved me so much stress and time in the kitchen!\"",
            name: "Carlos Rivera",
            title: "Professional Chef",
            location: "Madrid, Spain"
          },
          {
            quote: "\"The cooking tips are practical and easy to follow. I particularly love the advice on healthy ingredient substitutions. It's helped me make delicious meals without feeling guilty!\"",
            name: "Sarah Lee",
            title: "Health-conscious Foodie",
            location: "London, UK"
          },
          {
            quote: "\"I’ve always been intimidated by cooking techniques, but this project broke everything down into manageable steps. It’s been a game-changer for me in the kitchen!\"",
            name: "Johnathan Smith",
            title: "Novice Cook",
            location: "Sydney, Australia"
          },
        {
            quote: "\"I appreciate the variety of tips you provide for both beginners and more advanced cooks. I’ve already improved my cooking skills and feel much more confident in the kitchen.\"",
            name: "Laura Williams",
            title: "Aspiring Chef",
            location: "Toronto, Canada"
          },
          {
            quote: "\"I appreciate the variety of tips you provide for both beginners and more advanced cooks. I’ve already improved my cooking skills and feel much more confident in the kitchen.\"",
            name: "Laurau Williams",
            title: "Aspiring Chef",
            location: "Toronto, Canada"
          }
       
      
      
]
function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8">Hear Our Harmony: Voice of Success </h2>
       <div className="flex ">
       <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={CostumerTestimonial}
        direction="left"
        speed="slow"
      />
        </div>
       </div>

    </div>
  )
}

export default TestimonialCards