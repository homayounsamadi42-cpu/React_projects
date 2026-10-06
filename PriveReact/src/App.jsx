import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Work from './pages/Work'

function App() {
  return (
    <div>
      {/* منوی ناوبری برای جابه‌جایی بین صفحات بدون رفرش شدن مرورگر */}
      <nav style={{ padding: '10px', background: '#f0f0f0', display: 'flex', gap: '15px' }}>
        <Link to="/">خانه</Link>
        <Link to="/about">درباره ما</Link>
        <Link to="/blog">بلاگ</Link>
        <Link to="/work">نمونه کارها</Link>
        <Link to="/contact">تماس با ما</Link>
      </nav>

      {/* مدیریت نمایش جداگانه صفحات بر اساس آدرس مرورگر */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
