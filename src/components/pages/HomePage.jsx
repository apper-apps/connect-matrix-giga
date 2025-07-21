import React from "react";
import HeroSection from "@/components/organisms/HeroSection";
import FeaturedInitiatives from "@/components/organisms/FeaturedInitiatives";
import LatestBlogPosts from "@/components/organisms/LatestBlogPosts";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedInitiatives />
      <LatestBlogPosts />
    </div>
  );
};

export default HomePage;