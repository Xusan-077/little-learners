"use client";

import TopTitle from "@/components/ui/TopTitle";

import "@splidejs/react-splide/css";
import HomeTestimonialsCorusel from "@/components/ui/HomeTestimonialsCorusel";

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24">
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
            title="Our Testimonials"
            type="Their Happy Words 🤗"
          />
          <HomeTestimonialsCorusel />
        </div>
      </div>
    </section>
  );
}
