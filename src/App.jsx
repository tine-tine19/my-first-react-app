import { useState } from 'react'

// Header Component
function Header() {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
      <h1>My First React App 🚀</h1>
    </header>
  )
}

// Footer Component
function Footer() {
  return (
    <footer style={{ marginTop: '50px', color: '#888' }}>
      <p>© 2026 Built with React and Vite</p>
    </footer>
  )
}

// Main App Component
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <Header />

      <main style={{ marginTop: '30px' }}>
        <p>Button clicked: <strong>{count}</strong> times</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Click Me!
        </button>
      </main>

      <Footer />
    </div>
  )
}

export default App