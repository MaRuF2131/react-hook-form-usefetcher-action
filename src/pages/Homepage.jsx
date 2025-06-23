import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 text-center bg-white shadow rounded">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h2>
      <p className="text-gray-600 mb-6">This is a demo multi-step registration form using React Hook Form and React Router.
        Submission status displayed (`submitting`, `idle`)
        Backend-like form handling using `action()` functions
        Non-navigating form submission with `useFetcher`
      </p>
      <Link 
        to="/register" 
        className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
      >
        Start Registration
      </Link>
    </div>
  );
}