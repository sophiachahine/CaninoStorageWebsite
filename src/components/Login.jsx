function Login() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Customer Login</h1>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input type="password" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your password" />
        </div>
        <button type="button" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Log In
        </button>
      </form>
    </main>
  );
}

export default Login;
