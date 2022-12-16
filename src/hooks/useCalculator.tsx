import React, {useState} from 'react';

export default function useCalculator() {
  const [calcType, setCalcType] = useState<string>('');
  const [inputNumber, setInputNumber] = useState<number>(0);

  const handleCalcType = (matchType: string) => {
    setCalcType(matchType);
  };

  const handlerInputNumber = (value: string) => {
    const actualValue = `${inputNumber.toString()}${value}`;
    console.log(actualValue);
    setInputNumber(+actualValue);
  };

  const deleteNumbers = () => {
    setInputNumber(0);
  };
  return {handleCalcType, handlerInputNumber, inputNumber, deleteNumbers};
}
