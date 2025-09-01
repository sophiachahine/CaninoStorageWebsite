function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Canino RV & Boat Storage</h1>
      <p className="text-lg text-gray-700 mb-6">Secure, affordable storage for your RV, boat, or vehicle. Reserve your space today!</p>
      <a href="/login" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Book Now
      </a>
    </main>
  );
}

export default Home;
