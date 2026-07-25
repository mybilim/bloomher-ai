export default function HomePage() {
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        <div className="text-7xl mb-6">
          🌸
        </div>

        <h1 className="text-5xl font-bold text-pink-700">
          BloomHer AI
        </h1>

        <p className="mt-4 text-lg text-pink-600">
          Bloom Naturally.
          <br />
          Live Confidently.
        </p>

        <button
          className="
          mt-10
          w-full
          rounded-2xl
          bg-pink-600
          py-4
          text-white
          text-lg
          font-semibold
          transition
          hover:bg-pink-700
          "
        >
          Get Started
        </button>

      </div>
    </main>
  );
}
