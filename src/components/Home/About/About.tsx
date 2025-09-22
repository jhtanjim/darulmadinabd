import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex items-center pt-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Welcome to{" "}
              <span className="text-[#186d46]">Excellence Academy</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Empowering minds, building futures, and creating tomorrow&apos;s
              leaders through innovative education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-[#186d46] text-white font-medium rounded-lg hover:bg-[#2e6d72] transition-colors">
                Explore Programs
              </button>
              <button className="px-6 py-3 text-[#2e6d72] border-2 border-[#2e6d72] font-medium rounded-lg hover:bg-[#2e6d72] hover:text-white transition-colors">
                Schedule Visit
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#186d46]">
                  500+
                </div>
                <div className="text-gray-600 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#2e6d72]">
                  50+
                </div>
                <div className="text-gray-600 text-sm">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#61ce70]">
                  25+
                </div>
                <div className="text-gray-600 text-sm">Years</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://darulmadinah.edu.in/wp-content/uploads/2022/09/2_20220922_011008_0001-300x300.png"
                  alt="Students learning in classroom"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />

                <div className="absolute top-4 left-4 px-3 py-2 bg-[#186d46] text-white text-sm font-medium rounded-full">
                  ⭐ Award Winning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
