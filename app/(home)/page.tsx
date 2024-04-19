import BestSeller from "@/components/BestSeller";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import ImageHeroSection from "@/components/ImageHeroSection";
import Products from "@/components/Products";
import Services from "@/components/Services";
import UserReviews from "@/components/UserReviews";

const Homepage = () => {
  return (
    <main className=' flex flex-col gap-20 sp'>
      <HeroSection />
      <Services />
      <ImageHeroSection />
      <div className='container sp flex flex-col '>
        <BestSeller />
        <Features />
        <Products />
        <UserReviews />
      </div>
    </main>
  );
};

export default Homepage;
