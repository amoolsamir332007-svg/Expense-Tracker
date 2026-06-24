export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p>
          جميع الحقوق محفوظة © {new Date().getFullYear()} | حاسبة النفقات الذكية
        </p>
        <p className="footer-credit">بُني بكل إتقان باستخدام React.js 🚀</p>
      </div>
    </footer>
  );
};
