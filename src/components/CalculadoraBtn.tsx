import React, {useRef} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../theme/appTheme';

type Props = {
  children: React.ReactElement | string;
  bgColor?: string;
  color?: string;
  css?: React.CSSProperties;
  handler?: Function;
};

export default function CalculadoraBtn({
  children,
  bgColor = '#2F2E2F',
  color = 'white',
  css,
  handler,
}: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (handler) {
          handler();
        }
      }}
      style={{...styles.btn, ...css, backgroundColor: bgColor}}>
      <Text style={{...styles.btnText, color}}>{children}</Text>
    </TouchableOpacity>
  );
}
