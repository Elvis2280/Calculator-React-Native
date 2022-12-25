import React from 'react';
import {Text, View} from 'react-native';
import CalculadoraBtn from '../components/CalculadoraBtn';
import Spacer from '../components/Spacer';
import useCalculator from '../hooks/useCalculator';
import styles from '../theme/appTheme';
export default function CalculadoraScreen() {
  const {
    handlerInputNumber,
    inputNumber,
    deleteNumbers,
    handleCalcType,
    result,
    equalBtn,
    changePositiveNegative,
    convertToPorcent,
  } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.textoResultado}>{result}</Text>
      <Text style={styles.texto}>
        {Number(inputNumber).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </Text>

      <Spacer />
      <View style={styles.rowBtn}>
        <CalculadoraBtn
          handler={() => deleteNumbers()}
          color="black"
          bgColor="#9C9B9C">
          {Number(inputNumber) > 0 ? 'AC' : 'C'}
        </CalculadoraBtn>
        <CalculadoraBtn
          handler={changePositiveNegative}
          color="black"
          bgColor="#9C9B9C">
          +/-
        </CalculadoraBtn>
        <CalculadoraBtn
          handler={convertToPorcent}
          color="black"
          bgColor="#9C9B9C">
          %
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handleCalcType('/')} bgColor="#F9940B">
          &#xf7;
        </CalculadoraBtn>
      </View>
      <Spacer column={5} />
      <View style={styles.rowBtn}>
        <CalculadoraBtn handler={() => handlerInputNumber('7')}>
          7
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handlerInputNumber('8')}>
          8
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handlerInputNumber('9')}>
          9
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handleCalcType('x')} bgColor="#F9940B">
          X
        </CalculadoraBtn>
      </View>
      <Spacer column={5} />
      <View style={styles.rowBtn}>
        <CalculadoraBtn handler={() => handlerInputNumber('4')}>
          4
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handlerInputNumber('5')}>
          5
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handlerInputNumber('6')}>
          6
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handleCalcType('-')} bgColor="#F9940B">
          -
        </CalculadoraBtn>
      </View>
      <Spacer column={5} />
      <View style={styles.rowBtn}>
        <CalculadoraBtn handler={() => handlerInputNumber('1')}>
          1
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handlerInputNumber('2')}>
          2
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handlerInputNumber('3')}>
          3
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handleCalcType('+')} bgColor="#F9940B">
          +
        </CalculadoraBtn>
      </View>
      <Spacer column={5} />
      <View style={styles.rowBtn}>
        <CalculadoraBtn
          handler={() => handlerInputNumber('0')}
          css={{width: 150, marginRight: 30}}>
          0
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => handlerInputNumber('.')}>
          .
        </CalculadoraBtn>
        <CalculadoraBtn handler={() => equalBtn()} bgColor="#F9940B">
          =
        </CalculadoraBtn>
      </View>
    </View>
  );
}
