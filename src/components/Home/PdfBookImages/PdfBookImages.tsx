"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook, { HTMLFlipBookProps } from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// ✅ Custom hook for window size
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function PdfBookImages() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  //   const [currentPage, setCurrentPage] = useState(0);
  const { width: screenWidth, height: screenHeight } = useWindowSize();

  const handleFlip: HTMLFlipBookProps["onFlip"] = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 2.3;
      audioRef.current.play().catch((error) => {
        console.log("Audio play prevented");
      });
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPdfLoaded(true);
  };

  // ✅ Responsive width & height
  const flipWidth = screenWidth > 1024 ? 555 : Math.min(screenWidth * 0.9, 400);
  const flipHeight =
    screenWidth > 1024 ? 290 : Math.min(screenHeight * 0.7, 600);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center py-4 sm:py-6 md:py-8 px-2 sm:px-4 min-h-screen">
        <audio ref={audioRef} preload="auto">
          <source src="/pagesound.m4a" type="audio/mpeg" />
        </audio>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 animate-fadeIn">
          <div className="inline-block mb-2">
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-teal-600 to-green-500 rounded-full mx-auto"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-teal-700 to-green-600 mb-1 sm:mb-2">
            E-Prospectus
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Interactive Digital Publication
          </p>
        </div>

        {/* Hidden Document loader */}
        <div style={{ position: "absolute", left: "-9999px" }}>
          <Document
            file="/EProspectus.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={1} width={1} />
          </Document>
        </div>

        {/* Flipbook Container */}
        {pdfLoaded && (
          <div className="w-full max-w-7xl mb-4 sm:mb-6 md:mb-8 animate-fadeIn">
            <div className="relative px-2 sm:px-4">
              <div className="relative backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4">
                <HTMLFlipBook
                  width={flipWidth}
                  height={flipHeight}
                  size="stretch"
                  minWidth={200}
                  maxWidth={1000}
                  minHeight={200}
                  maxHeight={1200}
                  drawShadow={true}
                  maxShadowOpacity={0.4}
                  mobileScrollSupport={true}
                  showCover={false}
                  usePortrait={true}
                  autoSize={true}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={30}
                  showPageCorners={true}
                  disableFlipByClick={false}
                  className="mx-auto flipbook-container"
                  onFlip={handleFlip}
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <div
                      key={`pdf-${index}`}
                      className="page-content bg-white overflow-hidden"
                    >
                      <Document file="/EProspectus.pdf">
                        <Page
                          pageNumber={index + 1}
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                          width={flipWidth} // ✅ responsive page width
                          className="w-full h-full object-cover"
                        />
                      </Document>
                    </div>
                  ))}
                </HTMLFlipBook>

                {/* Instructions */}
                <div className="text-center mt-3 sm:mt-4">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      Click or swipe to flip pages
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {!pdfLoaded && (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
            <div className="relative w-16 sm:w-20 h-16 sm:h-20">
              <div className="absolute inset-0 border-4 rounded-full"></div>
              <div className="absolute inset-0 border-4 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-4 sm:mt-6 text-gray-600 font-medium text-sm sm:text-base">
              Loading your prospectus...
            </p>
          </div>
        )}

        {/* Download Button */}
        <div className="text-center">
          <a
            href="/EProspectus.pdf"
            download
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold text-sm sm:text-base md:text-lg"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      <style jsx>{`
        .page-content {
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .stf__parent {
          margin: 0 auto !important;
          width: 100% !important;
          height: 100% !important;
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .flipbook-container {
          filter: drop-shadow(0 10px 25px rgba(22, 109, 70, 0.12));
        }

        @media (min-width: 768px) {
          .flipbook-container {
            filter: drop-shadow(0 20px 40px rgba(22, 109, 70, 0.15));
          }
        }
      `}</style>
    </div>
  );
}

export default PdfBookImages;
