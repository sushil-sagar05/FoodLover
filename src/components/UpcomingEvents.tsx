"use client"
import { HoverEffect } from "./ui/card-hover-effect"
import Link from "next/link"
const featuredWebinar = [
          {
            title: "Mastering the Art of Baking",
            description: "Join us for an in-depth session on baking techniques, from perfecting your dough to mastering the art of pastries. This webinar will cover everything you need to know about baking delicious treats.",
            slug: "mastering-the-art-of-baking",
            isFeatured: true
          },
          {
            title: "Healthy Cooking for Busy People",
            description: "Learn how to create healthy, quick meals that fit into a busy lifestyle. This webinar will focus on meal prep, quick cooking techniques, and making nutritious meals in under 30 minutes.",
            slug: "healthy-cooking-for-busy-people",
            isFeatured: false
          },
          {
            title: "The Science of Flavor Pairing",
            description: "Discover the science behind flavor pairing and how to create unique and harmonious dishes. This webinar will teach you how to experiment with ingredients and flavors to create gourmet meals.",
            slug: "science-of-flavor-pairing",
            isFeatured: true
          },
          {
            title: "Vegetarian Delights: Creative Meat-Free Meals",
            description: "Explore the world of vegetarian cooking with this webinar. Learn how to prepare delicious, plant-based meals that are full of flavor and nutrition.",
            slug: "vegetarian-delights-creative-meat-free-meals",
            isFeatured: false
          },
          {
            title: "Perfecting the Grill: BBQ Tips and Tricks",
            description: "From grilling techniques to secret marinades, this webinar will cover everything you need to know to become a BBQ expert. Perfect for the upcoming grilling season!",
            slug: "perfecting-the-grill-bbq-tips-and-tricks",
            isFeatured: true
          }
        
      
]

function UpcomingEvents() {
  return (
    <div
    className="p-12 bg-gray-900 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center">
        <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">Featured Webinars</h2>
        <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Cooking Journey</p>
    </div>
    <div className="mt-10">
        <HoverEffect items={featuredWebinar.map(webinar=>(
            {
                title:webinar.title,
                description:webinar.description,
                link:webinar.slug
            }
        ))}/>
    </div>
    <div className="mt-10 text-center">
        <Link 
    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        href={"/"}>
        View All Webinars
        </Link>
    </div>
    </div>
    </div>
  )
}

export default UpcomingEvents