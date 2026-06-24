import { ThemeProvider } from './ThemeContext';
import { useCurrencyApi } from './ApiComponent';
import { Navbar } from './Navbar';
import { ExpenseTracker } from './ExpenseTracker';
import { Footer } from './Footer';
import './FullProject.css';

export const FullExpenseProject = () => {
  const { usdToIls, loading } = useCurrencyApi();

  return (
    <ThemeProvider>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <ExpenseTracker usdToIls={usdToIls} loadingRate={loading} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default FullExpenseProject;