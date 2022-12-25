import {useState} from 'react';

// handler calc depend the type of calc and return value
const calcResult = (val1: number, val2: number, calc: string) => {
  let getResult: number;
  switch (calc) {
    case '/':
      getResult = val1 / val2;
      break;

    case '+':
      getResult = val1 + val2;
      break;
    case '-':
      getResult = val1 - val2;
      break;
    case 'x':
      getResult = val1 * val2;
      break;

    default:
      getResult = 0;
  }
  console.log(getResult);

  return getResult;
};

export default function useCalculator() {
  const [calcType, setCalcType] = useState<string>('');
  const [inputNumber, setInputNumber] = useState<string>('0');
  const [operationValues, setOperationValues] = useState<Array<number>>([]);
  const [result, setResult] = useState<string>('');

  // calc type handler
  const handleCalcType = (matchType: string) => {
    setInputNumber('0');
    setCalcType(matchType);
    if (calcType === '' && operationValues.length === 0) {
      const currentOpVal = operationValues;
      currentOpVal.push(Number(inputNumber));
      setOperationValues(currentOpVal);
      setResult(operationValues[0].toString());
    } // for the first input, allowed to only store one value in the array even touch many times the symbols btn

    if (operationValues.length >= 1 && calcType !== '' && inputNumber !== '0') {
      console.log('effect');
      const currentOpVal = operationValues;
      currentOpVal.push(Number(inputNumber));
      setOperationValues(currentOpVal);
      const operationResult = calcResult(
        operationValues[0],
        operationValues[1],
        calcType,
      );
      // if we already put the first value to calc it allowed to calc afther trigger again a symbol btn
      const operationValFromResult = [operationResult];
      setOperationValues(operationValFromResult);
      setResult(operationResult.toString());
    }
  };

  const equalBtn = () => {
    const currentOpVal = operationValues;
    currentOpVal.push(Number(inputNumber));
    const operationResult = calcResult(
      operationValues[0],
      operationValues[1],
      calcType,
    ); //get the result when trigger = btn

    const operationValFromResult = [operationResult];
    setOperationValues(operationValFromResult);
    setCalcType('');
    setInputNumber('0');
    setResult(operationResult.toString());
    console.log(operationValFromResult);
    console.log(operationValues);
  };

  const handlerInputNumber = (value: string) => {
    const actualValue = `${inputNumber.toString()}${value}`;
    console.log(`${inputNumber.toString()}${value}`);
    setInputNumber(actualValue);
  }; // put values we trigger

  const changePositiveNegative = () => {
    let actualInput = inputNumber;
    if (actualInput.startsWith('-')) {
      console.log('entre');
      actualInput = actualInput.replace('-', '');
    } else {
      actualInput = '-' + actualInput;
    }
    setInputNumber(actualInput);
  };

  const convertToPorcent = () => {
    const actualInputNum = inputNumber;
    const porcentNum = Number(actualInputNum) / 100;
    setInputNumber(porcentNum.toString());
  };

  const deleteNumbers = () => {
    setInputNumber('0');
    setOperationValues([]);
    setResult('');
    setCalcType('');
  };
  return {
    handleCalcType,
    handlerInputNumber,
    inputNumber,
    deleteNumbers,
    result,
    equalBtn,
    changePositiveNegative,
    convertToPorcent,
  };
}
