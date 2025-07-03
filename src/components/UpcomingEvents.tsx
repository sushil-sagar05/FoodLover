"use client"
import { HoverEffect } from "./ui/card-hover-effect"
import Link from "next/link"

const featuredWebinar = [
  {
    title: "Mastering Music Theory",
    description:
      "Dive into the fundamentals of music theory, including scales, chords, harmony, and rhythm. Perfect for beginners and intermediate musicians aiming to deepen their understanding.",
    slug: "mastering-music-theory",
    isFeatured: true,
  },
  {
    title: "Practice Techniques for Busy Musicians",
    description:
      "Learn effective and efficient ways to practice your instrument, even with a packed schedule. This session covers time management, focused exercises, and goal setting.",
    slug: "practice-techniques-for-busy-musicians",
    isFeatured: false,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Unlock your creativity and learn the craft of songwriting. Explore lyrical techniques, melody creation, and the structure of compelling songs across genres.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Exploring Jazz Improvisation",
    description:
      "Step into the world of jazz with an intro to improvisation. Learn scales, phrasing, and techniques to freely express yourself through music.",
    slug: "exploring-jazz-improvisation",
    isFeatured: false,
  },
  {
    title: "Recording at Home: Pro Tips & Setup",
    description:
      "This webinar walks you through building a home studio, choosing the right gear, and using software tools to produce professional-quality music from home.",
    slug: "recording-at-home-pro-tips-setup",
    isFeatured: true,
  },
];

function UpcomingEvents() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Elevate Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinar.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            href={"/"}
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
