import { campuses } from "@/data/campusData";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Header Section */}
      <div className="pt-20">
        <div className="bg-gradient-to-r from-green-800 to-teal-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our Campuses
            </h1>
            <p className="text-xl text-center text-green-100 max-w-2xl mx-auto">
              Discover our beautiful campuses located across the region, each
              offering unique opportunities and state-of-the-art facilities.
            </p>
          </div>
        </div>
      </div>

      {/* Campus Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {campuses.map((campus) => (
            <div
              key={campus.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-green-100"
            >
              {/* Campus Image */}
              {campus.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}

              {/* Card Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {campus.name}
                </h3>
                <div className="w-12 h-1 bg-green-300 rounded-full"></div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <div className="space-y-3 mb-5">
                  {campus.location && (
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {campus.location}
                      </p>
                    </div>
                  )}

                  {campus.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <a
                        href={`tel:${campus.phone}`}
                        className="text-gray-700 text-sm hover:text-green-600 transition-colors"
                      >
                        {campus.phone}
                      </a>
                    </div>
                  )}

                  {campus.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <a
                        href={`mailto:${campus.email}`}
                        className="text-gray-700 text-sm hover:text-green-600 transition-colors truncate"
                      >
                        {campus.email}
                      </a>
                    </div>
                  )}
                </div>

                {/* Map Link Button */}
                {campus.mapUrl && (
                  <a
                    href={campus.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg w-full justify-center"
                  >
                    <span>View on Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-200 to-transparent opacity-50 rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Visit Our Campuses
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Each of our campuses offers a unique learning environment with
              modern facilities, dedicated faculty, and vibrant student
              communities. We encourage you to visit and experience what makes
              each location special.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
