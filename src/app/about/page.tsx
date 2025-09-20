"use client";
import {
  Award,
  BookOpen,
  ChevronRight,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Star,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: "about",
      title: "About Us",
      icon: <BookOpen className="w-8 h-8" />,
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/2021/11/darulmadinah-school.jpeg",
      content:
        "Our greatest strength lies in our commitment to community. Dar-ul-Madinah English School also aims to encourage students to develop a sense of social responsibility. We strive hard to enhance the quality of teaching and learning by means of innovative practices and leading edge technology. Education provides the framework where an individual or a society is enabled to realise a particular way of living and to sustain it.",
      color: "#186d46",
    },
    {
      id: "mission",
      title: "Our Mission",
      icon: <Target className="w-8 h-8" />,
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/sb-instagram-feed-images/345434253_3046573782303895_4161311305325893271_nfull.jpg",
      content:
        "To provide quality Islamic education that nurtures both spiritual and academic excellence, preparing students to become responsible global citizens who contribute positively to society while maintaining their Islamic identity and values.",
      color: "#61ce70",
    },
    {
      id: "aims",
      title: "Aims & Objectives",
      icon: <Star className="w-8 h-8" />,
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/sb-instagram-feed-images/345138257_1222475828631066_126210402018228021_nfull.jpg",
      content:
        "To develop well-rounded individuals through comprehensive Islamic education, foster critical thinking and creativity, promote moral and ethical values, encourage community service and social responsibility, provide modern educational facilities with traditional Islamic teachings.",
      color: "#2E6D72",
    },
    {
      id: "purpose",
      title: "Purpose of Establishment",
      icon: <Heart className="w-8 h-8" />,
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/sb-instagram-feed-images/345062842_3427257624204917_315296764152484219_nfull.jpg",
      content:
        "Darul Madinah Education Foundation was established to bridge the gap between modern education and Islamic values, creating an environment where students can excel academically while staying connected to their faith and cultural heritage.",
      color: "#186d46",
    },
    {
      id: "features",
      title: "Salient Features",
      icon: <Award className="w-8 h-8" />,
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/sb-instagram-feed-images/345138257_1222475828631066_126210402018228021_nfull.jpg",
      content:
        "Comprehensive Islamic curriculum integrated with modern subjects, experienced faculty, state-of-the-art facilities, small class sizes for personalized attention, extracurricular activities for holistic development, strong emphasis on character building.",
      color: "#61ce70",
    },
  ];

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovative Learning",
      desc: "Modern teaching methods with traditional values",
      color: "#186d46",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Focus",
      desc: "Building strong community connections",
      color: "#61ce70",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Excellence",
      desc: "High standards in education and character",
      color: "#2E6D72",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm pt-20">
        <div className="bg-gradient-to-r from-[#186d46] via-[#61ce70] to-[#2E6D72] text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Globe className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Darul Madinah Education Foundation
                </h1>
                <p className="text-lg md:text-xl font-light mt-2 opacity-90">
                  Nurturing Minds, Building Character, Serving Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === index
                    ? "text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{
                  backgroundColor:
                    activeSection === index ? section.color : undefined,
                }}
              >
                <span className="mr-2">{section.icon}</span>
                <span className="text-sm md:text-base">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="bg-gray-50 p-8 flex items-center justify-center">
              <img
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className="w-full max-w-sm h-64 object-contain rounded-lg"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div
                  className="p-3 rounded-xl mr-4 text-white"
                  style={{ backgroundColor: sections[activeSection].color }}
                >
                  {sections[activeSection].icon}
                </div>
                <h2
                  className="text-3xl font-bold"
                  style={{ color: sections[activeSection].color }}
                >
                  {sections[activeSection].title}
                </h2>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {sections[activeSection].content}
              </p>

              <button
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: sections[activeSection].color }}
              >
                Learn More <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      {/* <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h3>
          <p className="text-xl text-gray-600">
            Excellence in every aspect of education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Join Our Educational Journey
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Be part of an institution that shapes minds, builds character, and
            creates future leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#186d46] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#145a37] transition-colors">
              Admission Inquiry
            </button>
            <button className="border-2 border-[#186d46] text-[#186d46] px-8 py-4 rounded-lg font-semibold hover:bg-[#186d46] hover:text-white transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
