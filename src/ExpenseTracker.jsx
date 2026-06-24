import { useState } from 'react';
import { useTheme } from './ThemeContext';

export const ExpenseTracker = ({ usdToIls, loadingRate }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('عام');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    const newExpense = {
      id: Date.now(),
      title: title.trim(),
      amountInUsd: parseFloat(amount),
      amountInIls: parseFloat(amount) * usdToIls,
      category: category,
      date: new Date().toLocaleDateString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    };

    setExpenses([newExpense, ...expenses]);
    setTitle('');
    setAmount('');
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  const totalUsd = expenses.reduce((sum, item) => sum + item.amountInUsd, 0);
  const totalIls = expenses.reduce((sum, item) => sum + item.amountInIls, 0);

  return (
    <div className={`expense-container ${isDarkMode ? 'dark' : 'light'}`}>
      
      <header className="tracker-header">
        <h2>📊 حاسبة النفقات ومحول العملات اللحظي</h2>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? '☀️ الوضع الفاتح' : '🌙 الوضع الداكن'}
        </button>
      </header>
      
      <div className="currency-badge">
        💵 سعر صرف الدولار الحالي: 
        <span> {loadingRate ? "جاري التحديث..." : `${usdToIls.toFixed(2)} شيكل`}</span>
      </div>

      <form onSubmit={handleAddExpense} className="expense-form">
        <div className="form-group">
          <label>بيان المصروف</label>
          <input type="text" placeholder="مثلا: اشتراك إنترنت..." value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>المبلغ ($)</label>
          <input type="number" step="0.01" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>الفئة</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="عام">عام</option>
            <option value="دراسة">دراسة وعمل</option>
            <option value="طعام">طعام ومشتريات</option>
          </select>
        </div>
        <button type="submit" className="add-btn">➕ إضافة</button>
      </form>

      <div className="totals-board">
        <div className="total-box usd"><p>الإجمالي ($)</p><h3>${totalUsd.toFixed(2)}</h3></div>
        <div className="total-box ils"><p>الإجمالي (شيكل)</p><h3>₪{totalIls.toFixed(2)}</h3></div>
      </div>

      <div className="expenses-list">
        {expenses.length === 0 ? (
          <p className="empty-msg">لا توجد مصاريف مضافة بعد.</p>
        ) : (
          <div className="table-responsive">
            <table className="expense-table">
              <thead>
                <tr>
                  <th>البيان</th>
                  <th>الفئة</th>
                  <th>التاريخ</th>
                  <th>المبلغ ($)</th>
                  <th>المقابل (شيكل)</th>
                  <th>إجراء</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td><span className={`badge ${item.category}`}>{item.category}</span></td>
                    <td>{item.date}</td>
                    <td className="price-usd">${item.amountInUsd.toFixed(2)}</td>
                    <td className="price-ils">₪{item.amountInIls.toFixed(2)}</td>
                    <td><button onClick={() => handleDeleteExpense(item.id)} className="delete-btn">🗑️</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};