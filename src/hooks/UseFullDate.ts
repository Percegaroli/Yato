import { useState, useEffect } from 'react';

interface Config {
  withHours?: boolean
}

const UseFullDate = (date: Date, config?: Config = {}) => {
  const [fullDate, setFullDate] = useState('');

  const adicionarPrefixoZero = (number: number) => (number < 10 ? `0${number}` : `${number}`);

  useEffect(() => {
    const day = adicionarPrefixoZero(date.getDate());
    const month = adicionarPrefixoZero(date.getMonth());
    const year = date.getFullYear();
    let newDate = `${day}/${month}/${year}`;
    if (config.withHours) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      newDate = `${newDate} ${hours}:${minutes}`;
    }
    setFullDate(newDate);
  }, [date]);

  return fullDate;
};

export default UseFullDate;
