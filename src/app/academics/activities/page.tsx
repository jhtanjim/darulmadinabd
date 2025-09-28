"use client";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// import all 52 images
import image1 from "../../../assets/Images/activities/activities (1).jpg";
import image10 from "../../../assets/Images/activities/activities (10).jpg";
import image11 from "../../../assets/Images/activities/activities (11).jpg";
import image12 from "../../../assets/Images/activities/activities (12).jpg";
import image13 from "../../../assets/Images/activities/activities (13).jpg";
import image14 from "../../../assets/Images/activities/activities (14).jpg";
import image15 from "../../../assets/Images/activities/activities (15).jpg";
import image16 from "../../../assets/Images/activities/activities (16).jpg";
import image17 from "../../../assets/Images/activities/activities (17).jpg";
import image18 from "../../../assets/Images/activities/activities (18).jpg";
import image19 from "../../../assets/Images/activities/activities (19).jpg";
import image2 from "../../../assets/Images/activities/activities (2).jpg";
import image20 from "../../../assets/Images/activities/activities (20).jpg";
import image21 from "../../../assets/Images/activities/activities (21).jpg";
import image22 from "../../../assets/Images/activities/activities (22).jpg";
import image23 from "../../../assets/Images/activities/activities (23).jpg";
import image24 from "../../../assets/Images/activities/activities (24).jpg";
import image25 from "../../../assets/Images/activities/activities (25).jpg";
import image26 from "../../../assets/Images/activities/activities (26).jpg";
import image27 from "../../../assets/Images/activities/activities (27).jpg";
import image28 from "../../../assets/Images/activities/activities (28).jpg";
import image29 from "../../../assets/Images/activities/activities (29).jpg";
import image3 from "../../../assets/Images/activities/activities (3).jpg";
import image30 from "../../../assets/Images/activities/activities (30).jpg";
import image31 from "../../../assets/Images/activities/activities (31).jpg";
import image32 from "../../../assets/Images/activities/activities (32).jpg";
import image33 from "../../../assets/Images/activities/activities (33).jpg";
import image34 from "../../../assets/Images/activities/activities (34).jpg";
import image35 from "../../../assets/Images/activities/activities (35).jpg";
import image36 from "../../../assets/Images/activities/activities (36).jpg";
import image37 from "../../../assets/Images/activities/activities (37).jpg";
import image38 from "../../../assets/Images/activities/activities (38).jpg";
import image39 from "../../../assets/Images/activities/activities (39).jpg";
import image4 from "../../../assets/Images/activities/activities (4).jpg";
import image40 from "../../../assets/Images/activities/activities (40).jpg";
import image41 from "../../../assets/Images/activities/activities (41).jpg";
import image42 from "../../../assets/Images/activities/activities (42).jpg";
import image43 from "../../../assets/Images/activities/activities (43).jpg";
import image44 from "../../../assets/Images/activities/activities (44).jpg";
import image45 from "../../../assets/Images/activities/activities (45).jpg";
import image46 from "../../../assets/Images/activities/activities (46).jpg";
import image47 from "../../../assets/Images/activities/activities (47).jpg";
import image48 from "../../../assets/Images/activities/activities (48).jpg";
import image49 from "../../../assets/Images/activities/activities (49).jpg";
import image5 from "../../../assets/Images/activities/activities (5).jpg";
import image50 from "../../../assets/Images/activities/activities (50).jpg";
import image51 from "../../../assets/Images/activities/activities (51).jpg";
import image52 from "../../../assets/Images/activities/activities (52).jpg";
import image6 from "../../../assets/Images/activities/activities (6).jpg";
import image7 from "../../../assets/Images/activities/activities (7).jpg";
import image8 from "../../../assets/Images/activities/activities (8).jpg";
import image9 from "../../../assets/Images/activities/activities (9).jpg";

// create an array with all images
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
];

const ActivitiesPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Moments That Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore all of our activities through these captured moments.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(img.src)}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={img}
                    alt={`Activity ${index + 1}`}
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
                </div>
              </div>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found.</p>
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
