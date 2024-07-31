// ----------------------- Home Page ----------------------//

import "./globals.css";
import "./global.queries.css";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import ServiceSlider from "@/components/services";
import Headings from "@/components/headings";
import QuikPort from "@/components/quikPortfolio";
import QuikBlogs from "@/components/quikBlogs";
import Reviews from "@/components/reviews";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Home | Aldor Technologies",
  description: "Welcome to Aldor Technologies - your go-to destination for expert web development, web hosting, and web design. Our comprehensive solutions include SEO services, blog writing, and content creation to enhance your online presence. Explore our innovative portfolios and contact options to discover how Aldor Technologies can elevate your web and digital marketing strategies.",
};

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Suspense fallback={<Loading />}>
            <HeroSection />
            <ServiceSlider />
            <Headings />
            <QuikPort />
            <Reviews />
            <QuikBlogs />
            <Footer />
          </Suspense>
        </div>
      </main>
    </>
  );
}
