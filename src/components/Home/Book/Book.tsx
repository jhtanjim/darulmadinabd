"use client";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import page1 from "../../../assets/Images/activities/activities (1).jpg";
import page2 from "../../../assets/Images/activities/activities (2).jpg";
import page3 from "../../../assets/Images/activities/activities (3).jpg";
import page4 from "../../../assets/Images/activities/activities (4).jpg";

function Book() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFlip = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        console.log("Audio play prevented by browser");
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-8 px-4 bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Page flip sound */}
      <audio ref={audioRef} preload="auto">
        <source src="/page-flip.mp3" type="audio/mpeg" />
      </audio>

      <div className="w-full max-w-4xl">
        <HTMLFlipBook
          width={800} // wider
          height={500} // shorter
          size="stretch"
          minWidth={400}
          maxWidth={1200}
          minHeight={250}
          maxHeight={700}
          drawShadow={true}
          maxShadowOpacity={0.4}
          mobileScrollSupport={true}
          showCover={true}
          usePortrait={false} // 👈 important: spread/landscape mode
          startPage={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          className="shadow-2xl mx-auto"
          style={{ margin: "0 auto" }}
          onFlip={handleFlip}
          flippingTime={800}
          startZIndex={0}
        >
          {/* Pages with images */}
          <div className="page-content">
            <img
              src={page1.src}
              alt="Page 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="page-content">
            <img
              src={page2.src}
              alt="Page 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="page-content">
            <img
              src={page3.src}
              alt="Page 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="page-content">
            <img
              src={page4.src}
              alt="Page 4"
              className="w-full h-full object-cover"
            />
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
