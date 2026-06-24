import { ThemeProvider } from './ThemeContext';
import { useCurrencyApi } from './ApiComponent';
import { ExpenseTracker } from './ExpenseTracker';
import './FullProject.css'; 

export const FullExpenseProject = () => {
  const { usdToIls, loading } = useCurrencyApi();

  return (
    <ThemeProvider>
      <div className="app-wrapper">
        <ExpenseTracker usdToIls={usdToIls} loadingRate={loading} />
      </div>
    </ThemeProvider>
  );
};

export default FullExpenseProject;