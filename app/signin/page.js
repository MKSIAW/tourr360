const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-2">Username</label>
          <input type="text" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-2">Password</label>
          <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="font-medium">Remember me</label>
          <a href="#" className="ml-auto text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Sign In</button>
        <p className="mt-4 text-center">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
