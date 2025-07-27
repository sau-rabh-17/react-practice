import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`;

    console.log("Fetching currency data from:", url);

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log("API response:", response);
        setData(response[currency.toLowerCase()]);
      })
      .catch((error) => console.error("Currency API Error:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
