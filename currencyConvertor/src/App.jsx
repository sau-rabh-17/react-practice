import { useState } from 'react';
import './App.css';
import './index.css';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  console.log("Currency Info:", currencyInfo);
  console.log("Available Options:", options);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (!currencyInfo[to]) {
      alert("Currency data not yet loaded.");
      return;
    }
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  if (options.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-black text-white text-xl">
        Loading currency data...
      </div>
    );
  }

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(https://previews.123rf.com/images/hikrcn/hikrcn1205/hikrcn120500041/13846381-coins-of-different-countries-mixed-currencies-tl-dollar-euro.jpg)`
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bg-white shadow-lg'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>

            <div className='relative w-full h-0.5 my-4'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                type="button"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className='w-full mb-1'>
              <InputBox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-2'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
