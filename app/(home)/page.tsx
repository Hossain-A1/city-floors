import BestSeller from "@/components/BestSeller";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import ImageHeroSection from "@/components/ImageHeroSection";
import Products from "@/components/Products";
import UserReviews from "@/components/UserReviews";

const Homepage = () => {
  return (
    <main className='container flex flex-col gap-20 sp'>
      <HeroSection />
      <ImageHeroSection/>
      <Features/>
      <BestSeller/>
      <Products />
      <UserReviews/>
    </main>
  );
};

export default Homepage;
