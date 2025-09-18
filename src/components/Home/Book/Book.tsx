"use client";
import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

function Book() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFlip = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions gracefully
        console.log("Audio play prevented by browser");
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-8 px-4 bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Page flip sound */}
      <audio
        ref={audioRef}
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/page-flip.mp3" type="audio/mpeg" />
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+D2yHkpBSuF0/LQfC4GMnvG89qCPAoTP6LL7K9IGQ1Xq+Xz0oE2DCF+1/LB" />
      </audio>

      <div className="w-full max-w-4xl">
        <HTMLFlipBook
          width={500}
          height={650}
          minWidth={280}
          maxWidth={800}
          minHeight={400}
          maxHeight={900}
          size="stretch"
          drawShadow={true}
          maxShadowOpacity={0.4}
          shadowOpacity={0.2}
          mobileScrollSupport={true}
          showCover={true}
          usePortrait={true}
          startPage={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          className="shadow-2xl mx-auto"
          style={{
            margin: "0 auto",
          }}
          onFlip={handleFlip}
          flippingTime={800}
        >
          {/* Cover Page - Single centered image */}
          <div className="page-cover">
            <div className="w-full h-full relative overflow-hidden bg-white rounded-r-xl">
              <img
                src="https://images.pexels.com/photos/2608179/pexels-photo-2608179.jpeg"
                alt="Book Cover"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30"></div>
            </div>
          </div>

          {/* First Content Page */}
          <div className="page-content">
            <div className="w-full h-full relative overflow-hidden bg-white">
              <img
                src="https://images.pexels.com/photos/11769687/pexels-photo-11769687.jpeg"
                alt="First Page"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Second Content Page */}
          <div className="page-content">
            <div className="w-full h-full relative overflow-hidden bg-white">
              <img
                src="https://images.pexels.com/photos/18998695/pexels-photo-18998695.jpeg"
                alt="Second Page"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Third Content Page */}
          <div className="page-content">
            <div className="w-full h-full relative overflow-hidden bg-white">
              <img
                src="https://images.pexels.com/photos/3128502/pexels-photo-3128502.jpeg"
                alt="Third Page"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Fourth Content Page */}
          <div className="page-content">
            <div className="w-full h-full relative overflow-hidden bg-white">
              <img
                src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg"
                alt="Fourth Page"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Back Cover */}
          <div className="page-cover">
            <div className="w-full h-full relative overflow-hidden bg-gray-100 rounded-l-xl border-l border-gray-200">
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  The End
                </h2>
                <p className="text-gray-600">Thank you for reading</p>
              </div>
            </div>
          </div>
        </HTMLFlipBook>

        {/* Instructions */}
        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">Click or swipe to flip pages</p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-cover,
        .page-content {
          background: white;
          display: block;
          width: 100%;
          height: 100%;
        }

        .stf__parent {
          margin: 0 auto !important;
        }

        @media (max-width: 640px) {
          .stf__parent {
            width: 90vw !important;
            max-width: 350px !important;
          }
        }

        @media (max-width: 480px) {
          .stf__parent {
            width: 95vw !important;
            max-width: 300px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Book;
