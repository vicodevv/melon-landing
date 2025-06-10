import Marquee from "react-fast-marquee";
import Image from "next/image";

export const FeaturedBy = () => {
  const companies = [
    { name: 'Beyond Limits', logo: '/images/Beyond-Limits2.png' },
    { name: 'Orange Corners', logo: '/images/Orange-Corners.svg' },
    { name: 'Techpoint', logo: '/images/Techpoint.svg' },
    { name: 'Tony Elumelu', logo: '/images/Tony-Elumelu.png' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-medium mb-2">
            Featured By
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c2331]">
            Trusted by leading organizations
          </h2>
        </div>

        <Marquee 
          speed={50}
          gradient={true}
          gradientColor="white"
          gradientWidth={80}
          pauseOnHover={true}
        >
          {companies.map((company, index) => (
            <div key={index} className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};