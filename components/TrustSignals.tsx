export default function TrustSignals() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
          <div className="flex flex-col items-center p-2">
            <svg className="h-7 w-auto mb-1.5" viewBox="0 0 46 46" fill="none">
              <path d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" fill="#4285F4" />
              <path d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" fill="#34A853" />
              <path d="M11.69 28.18A13.98 13.98 0 0 1 10.96 24c0-1.45.25-2.86.73-4.18v-5.7H4.34A22.99 22.99 0 0 0 1.9 24c0 3.71.89 7.22 2.44 10.32l7.35-5.7-.01-.44z" fill="#FBBC05" />
              <path d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.94 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" fill="#EA4335" />
            </svg>
            <span className="text-lg font-bold text-brandBlue">
              4.7 <span className="text-amber-500 text-sm">★★★★★</span>
            </span>
            <span className="text-gray-400 text-xs">373+ Direct Patient Reviews</span>
          </div>

          <div className="flex flex-col items-center border-l border-gray-100 p-2">
            <span className="mb-1.5 rounded bg-[#152E50] px-2 py-1 text-[0.65rem] font-bold text-white tracking-wide">
              NABH
            </span>
            <span className="text-base font-bold text-brandBlue">NABH Certified</span>
            <span className="text-gray-400 text-xs">National Standard Approved</span>
          </div>

          <div className="flex flex-col items-center border-l border-gray-100 p-2">
            <div className="text-2xl font-bold text-brandBlue mb-0.5">15,000+</div>
            <span className="text-sm font-semibold text-gray-700">Successful Cases</span>
            <span className="text-gray-400 text-xs">Documented Success History</span>
          </div>

          <div className="flex flex-col items-center border-l border-gray-100 p-2">
            <div className="text-emerald-600 text-xl font-bold flex items-center gap-1 mb-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708-.523.75.75 0 00-.75.75v12.5a.75.75 0 00.316.613l5.5 3.889a.75.75 0 00.868 0l5.5-3.889a.75.75 0 00.316-.613V3.682a.75.75 0 00-.75-.75.75.75 0 00-.708.523L11.5 5.108l-5.233-1.653z" clipRule="evenodd" />
              </svg>
              Claimable
            </div>
            <span className="text-base font-bold text-brandBlue">Insurance Support</span>
            <span className="text-gray-400 text-xs">Major Providers Accepted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
