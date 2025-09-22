"use client";
import { Award, Calendar, Eye, Star, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock data for activities
const activitiesStats = [
  {
    icon: <Users className="w-6 h-6" />,
    number: "500+",
    label: "Active participants in various activities",
    color: "text-primary",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    number: "25+",
    label: "Different activity programs running monthly",
    color: "text-secondary",
  },
  {
    icon: <Award className="w-6 h-6" />,
    number: "15+",
    label: "Awards won in inter-school competitions",
    color: "text-accent",
  },
];

const imageGallery = [
  {
    id: 1,
    title: "Science Fair 2024",
    description: "Students showcase their innovative projects",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    category: "Academic",
  },
  {
    id: 2,
    title: "Annual Sports Day",
    description: "Exciting moments from our sports events",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    category: "Sports",
  },
  {
    id: 3,
    title: "Cultural Festival",
    description: "Celebrating diversity through arts and culture",
    image:
      "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=800&h=600&fit=crop",
    category: "Cultural",
  },
  {
    id: 4,
    title: "Robotics Workshop",
    description: "Students building and programming robots",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    category: "STEM",
  },
  {
    id: 5,
    title: "Art Exhibition",
    description: "Creative masterpieces by our talented students",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    category: "Arts",
  },
  {
    id: 6,
    title: "Environmental Day",
    description: "Promoting sustainability and eco-awareness",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    category: "Environmental",
  },
  {
    id: 7,
    title: "Music Concert",
    description: "Melodious performances by our choir",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    category: "Cultural",
  },
  {
    id: 8,
    title: "Mathematics Olympiad",
    description: "Young minds solving complex problems",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop",
    category: "Academic",
  },
  {
    id: 9,
    title: "Basketball Championship",
    description: "Thrilling matches and team spirit",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
    category: "Sports",
  },
];

const categories = [
  "All",
  "Academic",
  "Sports",
  "Cultural",
  "STEM",
  "Arts",
  "Environmental",
];

const ActivitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? imageGallery
      : imageGallery.filter((image) => image.category === selectedCategory);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen">
      <style jsx>{`
        .primary {
          --primary: #186d46;
        }
        .secondary {
          --secondary: #61ce70;
        }
        .accent {
          --accent: #2e6d72;
        }
        .text-primary {
          color: #186d46;
        }
        .text-secondary {
          color: #61ce70;
        }
        .text-accent {
          color: #2e6d72;
        }
        .bg-primary {
          background-color: #186d46;
        }
        .bg-secondary {
          background-color: #61ce70;
        }
        .bg-accent {
          background-color: #2e6d72;
        }
        .hover\\:bg-secondary\\/90:hover {
          background-color: rgba(97, 206, 112, 0.9);
        }
        .hover\\:bg-primary\\/10:hover {
          background-color: rgba(24, 109, 70, 0.1);
        }
        .hover\\:text-primary:hover {
          color: #186d46;
        }
        .bg-secondary\\/20 {
          background-color: rgba(97, 206, 112, 0.2);
        }
        .bg-secondary\\/30 {
          background-color: rgba(97, 206, 112, 0.3);
        }
        .from-primary {
          --tw-gradient-from: #186d46;
        }
        .to-accent {
          --tw-gradient-to: #2e6d72;
        }
        .via-primary\\/90 {
          --tw-gradient-via: rgba(24, 109, 70, 0.9);
        }
      `}</style>

      {/* Hero Section */}
      <div className="pt-20">
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-500"></div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <div className="inline-flex items-center bg-secondary/20 rounded-full px-4 py-2 mb-6">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">
                    Engaging Learning Experience
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Explore Our
                  <span className="text-secondary block">Student Life</span>
                </h1>

                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  We don&apos;t just provide education, we create memorable
                  experiences through diverse activities, workshops, and
                  interactive programs that shape young minds!
                </p>

                <button className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Eye className="w-5 h-5 mr-2" />
                  View Gallery
                </button>
              </div>

              {/* Right Content - Stats */}
              <div className="space-y-6">
                {activitiesStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`${stat.color} bg-white/20 p-3 rounded-full mr-4`}
                      >
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-white/80 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Decorative Images */}
                <div className="relative">
                  <div className="absolute -top-10 -right-5 w-32 h-32 bg-secondary/30 rounded-full"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="w-full h-48 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-xl flex items-center justify-center">
                      <div className="text-white/60 text-center">
                        <Users className="w-16 h-16 mx-auto mb-2" />
                        <p>Student Activities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-12 fill-white"
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
            </svg>
          </div>
        </section>
      </div>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Moments That Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the vibrant life at our school through these captured
              moments of learning, growth, creativity, and joy that define our
              educational journey.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(item.image)}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              priority
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivitiesPage;
