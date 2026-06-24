import { useState, useEffect } from 'react';

export const useCurrencyApi = () => {
  const [usdToIls, setUsdToIls] = useState(3.75);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates && data.rates.ILS) {
          setUsdToIls(data.rates.ILS);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("فشل جلب الأسعار، تم استخدام السعر الافتراضي:", err);
        setLoadingRate(false);
      });
  }, []);

  return { usdToIls, loading };
};