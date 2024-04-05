const HeroSection = () => {
  return (
    <main className='lg:h-[calc(100vh-5rem)] h-full w-full  '>
      <section >
        <div className=''>
          <figure
            style={{
              backgroundImage: `url(/images/hero.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "calc(100vh - 5rem)",
            }}
          ></figure>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
