import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourceable</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          zIndex: 0,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          background: '#fff',
          transition: 'background 1s',
        }}
      />
      <main style={{ fontFamily: 'Inter, sans-serif', backgroundColor: 'transparent', color: '#102542', lineHeight: '1.5', position: 'relative', zIndex: 2 }}>
        <header style={{ textAlign: 'center', padding: '60px 20px 30px' }}>
          <Image
            src="/logo.jpeg"
            alt="Sourceable logo"
            width={320}
            height={60}
            quality={100}
            priority
            sizes="(max-width: 600px) 100vw, 320px"
            style={{
              imageRendering: 'auto',
              borderRadius: '12px',
              boxShadow: '0 6px 32px rgba(30,60,114,0.18)',
              marginBottom: 24,
              background: '#fff',
              padding: 8,
              maxWidth: '95vw',
              height: 'auto',
              objectFit: 'cover',
              aspectRatio: '16/3',
            }}
          />
          <h1 style={{ fontSize: '3em', fontWeight: 800, marginBottom: 10 }}>Capture It. Prove It.</h1>
          <p style={{ fontSize: '1.2em', color: '#444', maxWidth: 600, margin: '0 auto' }}>
            Sourceable is a simple tool for everyday people to verify what they’re seeing, doing, and experiencing — in real time.
          </p>
          <div style={{ marginTop: 40 }}>
            <a
              href="https://sourceable.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                textDecoration: 'none',
                padding: '14px 28px',
                borderRadius: '40px',
                fontWeight: 600,
                fontSize: '1em',
              }}
            >
              Launch the App
            </a>
          </div>
        </header>

        <section style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h2>What It Does</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 600, margin: '0 auto', fontSize: '1.1em', color: '#555' }}>
            <div>• Snap a photo or video directly in the app</div>
            <div>• Auto-generates a link with time, location, and map</div>
            <div>• Adds a sleek Sourceable watermark</div>
            <div>• Instantly share your proof — no questions asked</div>
          </div>
        </section>

        <section style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h2>Why It Matters</h2>
          <p style={{ fontSize: '1.2em', color: '#444', maxWidth: 600, margin: '0 auto' }}>
            Whether you're at a protest, documenting injustice, or just showing you were really there — Sourceable helps make your content trustworthy.
          </p>
          <div style={{
            maxWidth: '1100px',
            margin: '48px auto 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}>
            <Image
              src="/app_preview.png"
              alt="App Preview"
              width={480}
              height={240}
              quality={100}
              style={{
                borderRadius: 0,
                boxShadow: 'none',
                objectFit: 'contain',
                width: '100%',
                height: 'auto',
                maxHeight: '240px',
                background: 'none',
                aspectRatio: '2/1',
                padding: 0,
                backgroundClip: 'border-box',
              }}
            />
          </div>
        </section>

        <footer style={{ textAlign: 'center', fontSize: '0.9em', color: '#aaa', padding: '40px 20px' }}>
          &copy; 2025 Sourceable. Built for real ones.
        </footer>
      </main>
    </>
  );
}