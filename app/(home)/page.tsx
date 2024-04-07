import HeroSection from "@/components/HeroSection";
import ImageHeroSection from "@/components/ImageHeroSection";
import Products from "@/components/Products";

const Homepage = () => {
  return (
    <main className='container sp'>
      <HeroSection />
      <ImageHeroSection/>
      <Products />
    </main>
  );
};

export default Homepage;
