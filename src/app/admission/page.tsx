const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-10 max-w-lg w-full border border-green-100">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-[#186d46] to-[#2e6d72] p-5 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#186d46] mb-3 text-center">
          School360 Payment Gateway
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-[#186d46] via-[#61ce70] to-[#2e6d72] mx-auto rounded-full mb-6"></div>

        {/* Description */}
        <p className="text-gray-600 text-center mb-8 leading-relaxed">
          Complete your payment securely through our official payment gateway.
          Click the button below to proceed with your transaction.
        </p>

        {/* CTA Button */}
        <a
          href="https://school360.app/homes/pbc"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-[#186d46] to-[#2e6d72] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center group"
        >
          <span className="flex items-center justify-center gap-2">
            Proceed to Payment Gateway
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </a>

        {/* Security Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <svg
            className="w-5 h-5 text-[#61ce70]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Secure Payment Processing</span>
        </div>

        {/* URL Display */}
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-100">
          <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">
            Payment Gateway URL
          </p>
          <a
            href="https://school360.app/homes/pbc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2e6d72] text-sm font-mono break-all hover:text-[#186d46] transition-colors underline decoration-dotted"
          >
            https://school360.app/homes/pbc
          </a>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-xs text-center text-gray-400">
          If you encounter any issues, please contact support
        </p>
      </div>
    </div>
  );
};

export default Page;
