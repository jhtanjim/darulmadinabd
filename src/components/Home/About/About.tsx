const About = () => {
  return (
    <div className="min-h-screen bg-white flex items-center px-6 lg:px-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to
              <span className="block" style={{ color: "#186d46" }}>
                Excellence Academy
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Empowering minds, building futures, and creating tomorrow's
              leaders through innovative education and dedicated teaching.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
              style={{ backgroundColor: "#186d46" }}
            >
              Explore Programs
            </button>
            <button
              className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-colors duration-300"
              style={{
                color: "#2e6d72",
                borderColor: "#2e6d72",
              }}
            >
              Schedule Visit
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "#186d46" }}>
                500+
              </div>
              <div className="text-gray-600 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "#2e6d72" }}>
                50+
              </div>
              <div className="text-gray-200 text-sm">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "#61ce70" }}>
                25+
              </div>
              <div className="text-gray-200 text-sm">Years</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative background shapes */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: "#61ce70" }}
            ></div>
            <div
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full opacity-30"
              style={{ backgroundColor: "#2e6d72" }}
            ></div>

            {/* Main image container */}
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students learning in classroom"
                className="w-full h-96 lg:h-[500px] object-cover"
              />

              {/* Floating achievement badge */}
              <div
                className="absolute top-6 left-6 px-4 py-2 text-white font-semibold rounded-full shadow-lg"
                style={{ backgroundColor: "#186d46" }}
              >
                ⭐ Award Winning School
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
