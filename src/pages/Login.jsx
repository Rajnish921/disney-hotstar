// src/pages/Login.jsx
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="w-full max-w-sm space-y-4">
        <input
          className="w-full p-2 rounded bg-gray-800"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-2 rounded bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <button className="w-full bg-blue-600 py-2 rounded">Login</button>
        <p className="text-sm text-center">
          New here?{" "}
          <Link className="text-blue-400" to="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
