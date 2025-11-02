import React from "react";
import Hero from "./home/Hero";
import FeatureSection from "./home/FeatureSection";
import ListBlog from "./home/ListBlog";
import RegionExplorer from "./home/RegionExplorer";
import FeaturedDestinations from "./home/FeaturedDestinations";
import TravelGoals from "./home/TravelGoals";
import FeaturedTours from "./home/FeaturedTours";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <RegionExplorer />
      <TravelGoals />
      <FeaturedDestinations />
      <FeaturedTours />
      <ListBlog />
    </div>
  );
};

export default Home;
