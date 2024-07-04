const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-[500] text-center mb-4">
          Log in to your Account
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between my-4 text-sm">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="flex items-center justify-between my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-4 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="space-y-4">
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.675 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H22.67c.733 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0zm-1.853 20.8h-3.68v-9.72h3.68v9.72zm-1.84-11.12c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zm3.78 11.12H19.1v-9.72h3.66v9.72zm-1.83-11.12c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zm-3.78 11.12h-3.68v-4.86h3.68v4.86zm-1.84-6.06c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zm-3.78 6.06H8.78v-4.86h3.68v4.86zm-1.83-6.06c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zm-3.78 6.06H5.1v-9.72h3.68v9.72zm-1.84-11.12c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14zm3.78 11.12H1.326V11.08h3.68v9.72zm-1.84-11.12c-1.18 0-2.14-.96-2.14-2.14 0-1.18.96-2.14 2.14-2.14 1.18 0 2.14.96 2.14 2.14 0 1.18-.96 2.14-2.14 2.14z" />
            </svg>
            Sign Up With Facebook
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="currentColor"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.7 0 6.6 1.5 8.7 3.9l6.4-6.4C34.3 3.4 29.5 1 24 1 14.8 1 7 6.7 3.9 14.7l7.5 5.8C13.4 13.5 18.2 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.4 24.3c0-1.5-.1-3-.4-4.4H24v8.5h12.8c-.6 3.2-2.5 5.9-5.3 7.7l7.5 5.8c4.4-4.1 6.9-10.1 6.9-17.6z"
              />
              <path
                fill="#4A90E2"
                d="M7.5 29.8c-1.1-3.2-1.1-6.7 0-9.9L.1 14C-1.3 17 0 20.8 0 24s1.3 7 3.6 10l7.5-5.8c-.4-1-.6-2.1-.6-3.4z"
              />
              <path
                fill="#FBBC05"
                d="M24 47c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2.2 1.4-4.9 2.3-7.7 2.3-5.8 0-10.7-3.9-12.5-9.2l-7.5 5.8C7 41.3 14.8 47 24 47z"
              />
            </svg>
            Sign Up With Google
          </button>
        </div>
        <p className="text-center text-gray-600 mt-4">
          New to EasyPlan?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
