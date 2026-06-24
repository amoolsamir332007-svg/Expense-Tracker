import { useTheme } from './ThemeContext';

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="app-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">📊</span>
          <span className="logo-text">حاسبتي المالية</span>
        </div>
        
        <ul className="navbar-links">
          <li><a href="#home" className="active">الرئيسية</a></li>
          <li><a href="#reports">التقارير</a></li>
          <li><a href="#settings">الإعدادات</a></li>
        </ul>

        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
          {isDarkMode ? '☀️ الوضع الفاتح' : '🌙 الوضع الداكن'}
        </button>
      </div>
    </nav>
  );
};