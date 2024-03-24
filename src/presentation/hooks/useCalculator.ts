/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = '*',
  divide = '÷',
}

export const useCalculator = () => {
  const [numberCalculator, setNumberCalculator] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const [formula, setFormula] = useState('');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(
        `${firstFormulaPart} ${lastOperation.current} ${numberCalculator}`,
      );
    } else {
      setFormula(numberCalculator);
    }
  }, [numberCalculator]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(subResult.toString());
  }, [formula]);

  const buildNumber = (numberStr: string) => {
    // no puede poner numero al inicio
    if (numberCalculator.includes('.') && numberStr === '.') {
      return;
    }

    // si pone . despues de cero
    if (numberCalculator.startsWith('0') || numberCalculator.startsWith('-0')) {
      // punto decimal
      if (numberStr === '.') {
        return setNumberCalculator(numberCalculator + numberStr);
      }

      // evular si es otro cero y no hay punto
      if (numberStr === '0' && numberCalculator.includes('.')) {
        return setNumberCalculator(numberCalculator + numberStr);
      }

      // evaluar si es diferente de 0 y no hay punto
      if (numberStr !== '0' && !numberCalculator.includes('.')) {
        return setNumberCalculator(numberStr);
      }

      // evitar 00000
      if (numberStr === '0' && !numberCalculator.includes('.')) {
        return;
      }

      return setNumberCalculator(numberCalculator + numberStr);
    }
    setNumberCalculator(numberCalculator + numberStr);
  };

  const setLastNumber = () => {
    calulateResult();
    if (numberCalculator.endsWith('.')) {
      setPrevNumber(numberCalculator.slice(0, -1));
    } else {
      setPrevNumber(numberCalculator);
    }
    setNumberCalculator('0');
  };

  // Function Operators
  function divideOperartion() {
    setLastNumber();

    lastOperation.current = Operator.divide;
  }

  function addOperartion() {
    setLastNumber();

    lastOperation.current = Operator.add;
  }

  function subtractOperartion() {
    setLastNumber();

    lastOperation.current = Operator.subtract;
  }

  function multiplyOperartion() {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  }

  function clean() {
    setNumberCalculator('0');
    setPrevNumber('0');
    lastOperation.current = undefined;
    setFormula('');
  }

  function deleteOperation() {
    if (numberCalculator.length === 2 && numberCalculator.includes('-')) {
      return setNumberCalculator('0');
    }

    if (numberCalculator.length === 1) {
      return setNumberCalculator('0');
    }
    return setNumberCalculator(
      numberCalculator.substring(0, numberCalculator.length - 1),
    );
  }

  function toogleSing() {
    if (numberCalculator.includes('-')) {
      return setNumberCalculator(numberCalculator.replace('-', ''));
    }
    setNumberCalculator('-' + numberCalculator);
  }

  const calulateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    // Properties
    formula,
    prevNumber,
    //Methods
    buildNumber,
    clean,
    toogleSing,
    deleteOperation,
    divideOperartion,
    addOperartion,
    subtractOperartion,
    multiplyOperartion,
    calulateResult,
  };
};
