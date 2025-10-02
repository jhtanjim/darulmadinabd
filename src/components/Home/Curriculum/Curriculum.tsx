"use client";

import {
  Building,
  Calendar,
  GraduationCap,
  UserCheck,
  Users,
} from "lucide-react";

const CurriculumSection = () => {
  const stats = [
    { id: 1, icon: Users, number: "16,000+", label: "Students" },
    { id: 2, icon: Calendar, number: "12+", label: "Years" },
    { id: 3, icon: Building, number: "45+", label: "Campus" },
    { id: 4, icon: UserCheck, number: "1,200+", label: "Staff" },
  ];

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Heading with decorative icon */}
        <div className="text-center text-white mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Curriculum Department
          </h2>
          <div className="w-24 h-1 bg-white/60 mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

              <div className="relative flex flex-col items-center justify-center space-y-4">
                {/* Icon with animated background */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Number */}
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CurriculumSection;
