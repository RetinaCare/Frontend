import { ChevronRight } from "lucide-react";

const specialists = [
  {
    name: "Dr. Anya Okafor",
    role: "Consultant Ophthalmologist",
    image: "./images/doc1.png",
  },
  {
    name: "Dr. Tola Bamdele",
    role: "Retina Specialist",
    image: "./images/doc2.png",
  },
  {
    name: "Dr. Ibrahim Musa",
    role: "Endocrinology & Diabetes Care Expert",
    image: "/public/images/doc3.png",
  },
];

export default function MeetSpecialists() {
  return (
    <section className="w-full  md:px-22 py-16">
      <div className="max-w-[1440px] bg-[#1E5EDD] mx-auto px-6 md:px-12 text-white">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wide">
          MEET OUR SPECIALIST
        </h2>

        {/* Subtitle */}
        <p className="text-center text-sm md:text-base max-w-2xl mx-auto mt-2 opacity-90">
          Board-certified doctors, nurses and healthcare professionals collaborate across
          specialties to deliver comprehensive, specialized care.
        </p>

        {/* Specialists Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {specialists.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md text-gray-900 w-[260px]"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold text-lg">{doctor.name}</p>
                <p className="text-sm opacity-80 mt-1">{doctor.role}</p>
              </div>
            </div>
          ))}
          {/* Arrow */}
          <div className="bg-white/30 backdrop-blur-sm mr-8 p-2 rounded-full grid place-self-end">
            <ChevronRight className="text-white" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-end items-center mt-10 gap-4 pr-4 md:pr-8">
          <button className="bg-white text-[#1E5EDD] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
            Explore All
          </button>

          
        </div>
      </div>
    </section>
  );
}
