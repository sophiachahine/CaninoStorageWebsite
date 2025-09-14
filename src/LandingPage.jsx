import { useEffect } from 'react';

function LandingPage() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('opacity-100', 'translate-y-0');
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'40\' fill=\'none\' stroke=\'%23ffffff33\' stroke-width=\'2\'/%3E%3C/svg%3E')] opacity-10 animate-pulse"></div>
      <div className="relative z-10 text-center px-6">
        <div className="fade-in opacity-0 translate-y-10 mb-8">
          <div className="w-64 h-64 mx-auto bg-gray-700 rounded-lg shadow-lg animate-pulse"></div>
          <p className="mt-4 text-sm text-gray-400">Secure. Spacious. Always Accessible.</p>
        </div>
        <h1 className="fade-in opacity-0 translate-y-10 text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Canino RV & Boat Storage
        </h1>
        <p className="fade-in opacity-0 translate-y-10 text-lg md:text-xl mb-8 max-w-md mx-auto">
          Discover a new way to store your RV, boat, or vehicle with cutting-edge security and convenience. More details coming soon!
        </p>
        <p className="fade-in opacity-0 translate-y-10 text-3xl md:text-4xl font-semibold mb-6 animate-bounce">
          Coming Soon
        </p>
        <p className="fade-in opacity-0 translate-y-10 text-sm text-gray-300 mb-4">
          Stay tuned for the full experience. Contact us for early access!
        </p>
        <a
          href="mailto:contact@caninostorage.com"
          className="fade-in opacity-0 translate-y-10 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default LandingPage;