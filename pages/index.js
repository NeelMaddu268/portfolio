export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">My AI Portfolio</h1>
      <p className="text-center mb-10">Welcome to my AI projects showcase!</p>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">📌 Multimodal AI Search</h2>
        <p className="mb-3">
          A search engine that handles both text and image queries to find relevant content using CLIP, FAISS, and BLIP.
        </p>
        <p className="mb-2"><strong>Tech Stack:</strong> Python, PyTorch, FAISS, CLIP, BLIP, Streamlit</p>

        <div className="flex gap-4 mt-4">
          <a href="https://multimodal-ai-search.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            🔗 Try Live Demo
          </a>
          <a href="https://github.com/NeelMaddu268/multimodal-ai-search" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            💻 View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
