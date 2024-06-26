import BestSeller from "@/components/BestSeller";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import ImageHeroSection from "@/components/ImageHeroSection";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Support from "@/components/Support";
import UserReviews from "@/components/UserReviews";

const Homepage = () => {
  return (
    <main className=' '>
      <HeroSection />
      <Services />
      <ImageHeroSection />
      <div className='container gap-20 flex flex-col '>
        <BestSeller />
        <Features />
        <Products />
        <UserReviews />
      </div>
        <Support/>
    </main>
  );
};

export default Homepage;
