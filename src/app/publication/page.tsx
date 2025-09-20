"use client";
import { useState } from "react";

const PublicationPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Nursery", "Junior", "Senior", "Primary"];

  const books = [
    {
      id: 1,
      title: "Islamiyat 10th Class",
      subtitle: "اسلامیات دسویں جماعت",
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/elementor/thumbs/10th-Islamiyat-01-01-01-01-01-r9h4iybjgl4ssw28zlzl6d6x4jd6mogxdxgna5jem0.png",
      category: "Senior",
      description: "Complete Islamic Studies for 10th Grade",
    },
    {
      id: 2,
      title: "Islamiyat 7th Class",
      subtitle: "اسلامیات ساتویں جماعت",
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/elementor/thumbs/7th-Islamiyat-01-01-r9h4irqo4qvsjmbt21576wuoyu9m4sqt10w8x7t5tk.png",
      category: "Junior",
      description: "Islamic Studies curriculum for 7th Grade",
    },
    {
      id: 3,
      title: "Islamiyat 10th Class",
      subtitle: "اسلامیات دسویں جماعت",
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/elementor/thumbs/10th-Islamiyat-01-01-01-01-01-r9h4iybjgl4ssw28zlzl6d6x4jd6mogxdxgna5jem0.png",
      category: "Primary",
      description: "Foundational Islamic education",
    },
    {
      id: 4,
      title: "Islamiyat 7th Class",
      subtitle: "اسلامیات ساتویں جماعت",
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/elementor/thumbs/7th-Islamiyat-01-01-r9h4irqo4qvsjmbt21576wuoyu9m4sqt10w8x7t5tk.png",
      category: "Nursery",
      description: "Early Islamic learning materials",
    },
  ];

  const filteredBooks =
    activeCategory === "All"
      ? books
      : books.filter((book) => book.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="lg:py-20">
        <header className="relative bg-gradient-to-r from-[#186d46] via-[#2E6D72] to-[#186d46] py-40 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Islamic Publications
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
                Discover our comprehensive collection of Islamic educational
                materials
              </p>
            </div>

            {/* YouTube Video Section */}
            <div className="">
              <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/dGHR5jE1CAk"
                    title="Islamic Publications Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#61ce70] rounded-full opacity-20"></div>
            <div className="absolute top-1/2 -left-8 w-32 h-32 bg-[#61ce70] rounded-full opacity-10"></div>
            <div className="absolute bottom-8 right-1/4 w-16 h-16 bg-white rounded-full opacity-10"></div>
          </div>
        </header>
      </div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Filters */}

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
                  activeCategory === category
                    ? "bg-[#186d46] text-white shadow-lg"
                    : "bg-white text-[#2E6D72] hover:bg-[#186d46] hover:text-white border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Book Image */}
              <div className="relative overflow-hidden bg-white p-4 h-80 flex items-center justify-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/api/placeholder/200/280";
                  }}
                />

                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-[#61ce70] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {book.category}
                  </span>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#186d46] mb-2 group-hover:text-[#2E6D72] transition-colors">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2 text-lg" dir="rtl">
                  {book.subtitle}
                </p>
                <p className="text-gray-500 text-sm mb-4">{book.description}</p>

                <button className="w-full bg-gradient-to-r from-[#186d46] to-[#2E6D72] text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:from-[#61ce70] group-hover:to-[#186d46]">
                  Read Me
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No books found
            </h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="bg-[#186d46] text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Explore More Islamic Publications
          </h3>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            Join thousands of students learning with our comprehensive Islamic
            education materials
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#61ce70] hover:bg-green-500 px-8 py-3 rounded-xl font-medium transition-colors duration-300">
              Browse All Books
            </button>
            <button className="border-2 border-green-200 hover:bg-white hover:text-[#186d46] px-8 py-3 rounded-xl font-medium transition-colors duration-300">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicationPage;
