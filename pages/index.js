import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-10 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🧠 Neel's AI Portfolio</h1>
        <nav>
          <a href="#projects" className="text-blue-600 hover:underline">Projects</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-4">Hi, I&apos;m Neel</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I build cool AI stuff. Here&apos;s a showcase of my projects using modern AI and machine learning tools.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-10 bg-white rounded-t-3xl shadow-inner">
        <h3 className="text-3xl font-bold text-center mb-8">🚀 Projects</h3>

        {/* Project Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 p-6 mb-6">
          <h4 className="text-2xl font-semibold mb-2">Multimodal AI Search</h4>
          <p className="mb-3">
            A search engine that handles both text and image queries to find relevant content using CLIP, FAISS, and BLIP.
          </p>
          <p className="mb-2"><strong>Tech Stack:</strong> Python, PyTorch, CLIP, FAISS, Streamlit</p>
          <div className="flex gap-4 mt-4">
            <a href="https://multimodal-ai-search.streamlit.app/" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">🔗 Live Demo</a>
            <a href="https://github.com/NeelMaddu268/multimodal-ai-search" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">💻 GitHub Code</a>
          </div>
        </div>

        {/* Project Card – Real-Time Sign Language Interpreter */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 p-6 mb-6">
          <h4 className="text-2xl font-semibold mb-2">Real-Time Sign Language Interpreter</h4>
          <p className="mb-3">
            A real-time ASL hand sign interpreter using computer vision and machine learning, designed to recognize static and dynamic gestures.
          </p>
          <p className="mb-2"><strong>Tech Stack:</strong> Python, OpenCV, MediaPipe, Scikit-learn, Streamlit</p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/YourGitHubUsername/sign-lang-interpreter" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">💻 GitHub Code</a>
          </div>
        </div>


        {/* Add more project cards below like this one */}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-6">
        © {new Date().getFullYear()} Neel • Built with Next.js + Tailwind
      </footer>
    </div>
  );
}
