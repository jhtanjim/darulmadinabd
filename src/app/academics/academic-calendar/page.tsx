"use client";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
  FileText,
} from "lucide-react";
import React, { useState } from "react";

interface CalendarDocument {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  academicYear: string;
  semester: string;
  uploadDate: string;
  fileSize: string;
}

const AcademicCalendarPage: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("2024-2025");

  // Sample calendar data - replace with your actual PDF URLs
  const calendarDocuments: CalendarDocument[] = [
    {
      id: "1",
      title: "Fall Semester 2024",
      description:
        "Complete academic calendar for Fall 2024 semester including important dates, holidays, and examination schedules.",
      pdfUrl: "/calendars/fall-2024-calendar.pdf",
      academicYear: "2024-2025",
      semester: "Fall",
      uploadDate: "2024-08-15",
      fileSize: "2.3 MB",
    },
    {
      id: "2",
      title: "Spring Semester 2025",
      description:
        "Academic calendar for Spring 2025 semester with registration dates, breaks, and final exam periods.",
      pdfUrl: "/calendars/spring-2025-calendar.pdf",
      academicYear: "2024-2025",
      semester: "Spring",
      uploadDate: "2024-11-20",
      fileSize: "2.1 MB",
    },
    {
      id: "3",
      title: "Summer Session 2025",
      description:
        "Summer session calendar including intensive courses, workshops, and special programs.",
      pdfUrl: "/calendars/summer-2025-calendar.pdf",
      academicYear: "2024-2025",
      semester: "Summer",
      uploadDate: "2024-12-10",
      fileSize: "1.8 MB",
    },
    {
      id: "4",
      title: "Fall Semester 2025",
      description:
        "Upcoming Fall 2025 semester calendar with preliminary dates and important deadlines.",
      pdfUrl: "/calendars/fall-2025-calendar.pdf",
      academicYear: "2025-2026",
      semester: "Fall",
      uploadDate: "2025-03-15",
      fileSize: "2.4 MB",
    },
  ];

  const academicYears = ["2023-2024", "2024-2025", "2025-2026"];

  const filteredDocuments = calendarDocuments.filter(
    (doc) => doc.academicYear === selectedYear
  );

  const handleViewPDF = (pdfUrl: string, title: string) => {
    // Open PDF in new tab
    window.open(pdfUrl, "_blank");
  };

  const handleDownloadPDF = (pdfUrl: string, title: string) => {
    // Create download link
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const getSemesterColor = (semester: string) => {
    switch (semester.toLowerCase()) {
      case "fall":
        return "bg-orange-100 text-orange-800";
      case "spring":
        return "bg-green-100 text-green-800";
      case "summer":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8fffe" }}>
      {/* Header Section */}
      <div className="pt-20">
        <div
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#186d46" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Calendar className="w-12 h-12 text-white mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Academic Calendar
              </h1>
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Access and download official academic calendars for all semesters.
              Stay informed about important dates, holidays, and examination
              schedules.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Year Filter */}
        <div className="mb-8">
          <label
            className="block text-lg font-semibold mb-3"
            style={{ color: "#186d46" }}
          >
            Academic Year:
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-3 border-2 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 transition-all"
            style={{
              borderColor: "#61ce70",
            }}
          >
            {academicYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Calendar Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4"
              style={{ borderLeftColor: "#186d46" }}
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FileText
                      className="w-8 h-8 mr-3"
                      style={{ color: "#2e6d72" }}
                    />
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: "#186d46" }}
                      >
                        {doc.title}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getSemesterColor(
                          doc.semester
                        )}`}
                      >
                        {doc.semester}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCard(doc.id)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {expandedCard === doc.id ? (
                      <ChevronUp
                        className="w-5 h-5"
                        style={{ color: "#186d46" }}
                      />
                    ) : (
                      <ChevronDown
                        className="w-5 h-5"
                        style={{ color: "#186d46" }}
                      />
                    )}
                  </button>
                </div>

                {/* Card Content */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {doc.description}
                </p>

                {/* Expanded Details */}
                {expandedCard === doc.id && (
                  <div className="border-t pt-4 mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Upload Date:</span>
                      <span className="font-medium">
                        {new Date(doc.uploadDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">File Size:</span>
                      <span className="font-medium">{doc.fileSize}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Academic Year:</span>
                      <span className="font-medium">{doc.academicYear}</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => handleViewPDF(doc.pdfUrl, doc.title)}
                    className="flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105"
                    style={{
                      backgroundColor: "#61ce70",
                      color: "white",
                    }}
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View PDF
                  </button>

                  <button
                    onClick={() => handleDownloadPDF(doc.pdfUrl, doc.title)}
                    className="flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105"
                    style={{
                      backgroundColor: "#2e6d72",
                      color: "white",
                    }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Documents Message */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <Calendar
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: "#61ce70" }}
            />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#186d46" }}
            >
              No calendars available
            </h3>
            <p className="text-gray-600">
              No academic calendars found for the selected year. Please check
              back later.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div
          className="mt-16 p-8 rounded-xl"
          style={{ backgroundColor: "#f0f9f4" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#186d46" }}>
            Important Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: "#2e6d72" }}>
                PDF Viewing Requirements
              </h3>
              <p className="text-sm leading-relaxed">
                Academic calendars are provided in PDF format. Ensure you have a
                PDF viewer installed on your device for optimal viewing
                experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: "#2e6d72" }}>
                Updates and Changes
              </h3>
              <p className="text-sm leading-relaxed">
                Academic calendars may be subject to updates. Please check
                regularly for the most current version and any important
                announcements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarPage;
