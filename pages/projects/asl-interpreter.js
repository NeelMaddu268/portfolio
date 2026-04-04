import Head from 'next/head';
import Link from 'next/link';

export default function ASLInterpreter() {
  return (
    <>
      <Head>
        <title>Real-Time ASL Interpreter | Neel Maddu</title>
      </Head>
      
      <nav style={{ padding: '1.5rem 0', background: 'var(--bg-color)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontWeight: 600, color: 'var(--text-muted)' }}>← Back to Portfolio</Link>
          <div style={{ fontWeight: 800 }}>NM.</div>
        </div>
      </nav>

      <main className="article-container animate-fade-in delay-100">
        <div style={{ marginBottom: '3rem' }}>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">OpenCV</span>
          <span className="tech-badge">MediaPipe</span>
          <span className="tech-badge">Scikit-learn</span>
        </div>

        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Real-Time ASL Interpreter</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Computer vision pipeline bridging the communication gap.
        </p>

        <h2>Overview</h2>
        <p>
          I engineered a <strong>Real-Time ASL Interpreter</strong> focused on translating static alphabet letters accurately using a live camera feed. This platform provides continuous tracking of gestures and converts recognized signs into synthesized text-to-speech output in real-time.
        </p>

        <h2>Pipeline & Technologies</h2>
        <p>
          Instead of just sending entire images into a bulky Convolutional Neural Network, the pipeline utilizes <strong>Google's MediaPipe</strong> framework. MediaPipe extracts precise structural geometry (21 3D landmarks) from the hand skeleton. 
        </p>
        <p>
          These coordinate vectors are serialized and fed into a custom <strong>scikit-learn</strong> classifier pipeline. This significantly increases frame rates and inference speeds since the mathematical payload is drastically reduced compared to pixel-inference arrays.
        </p>
        
        <ul className="feature-list">
          <li><strong>Real-Time Tracking:</strong> Leverages OpenCV to capture streaming data and layer visual UI elements denoting the skeletal tracking grid.</li>
          <li><strong>High Accuracy Classifier:</strong> Achieved a sustained 95% classification accuracy across the dataset matrix on gestures captured from variable lighting conditions.</li>
          <li><strong>Text-to-Speech Engine:</strong> Actively converts new and distinct sequential predictions into audible speech automatically, mimicking natural spoken word translation.</li>
          <li><strong>UX Optimization:</strong> Integrated a "None" class and a mute toggle to prevent audio spamming when the user's gestures are transient or unclear between distinct letters.</li>
        </ul>

        <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/NeelMaddu268/ASL_Interpreter" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub Code
          </a>
        </div>
      </main>
    </>
  );
}
