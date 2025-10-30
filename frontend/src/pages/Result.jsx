import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Detection Result</h2>

      {state?.result ? (
        <div className="bg-white p-6 shadow-md rounded-lg">
          <p className="text-xl font-semibold text-gray-700">
            🌿 Your plant has: <span className="text-green-600">{state.result}</span>
          </p>
        </div>
      ) : (
        <p className="text-gray-700">No result found.</p>
      )}

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Back to Home
      </button>
    </div>
  );
}
