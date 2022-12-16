import React from 'react';
import {View} from 'react-native';

type Props = {
  column?: number;
  row?: number;
};

export default function Spacer({column = 10, row = 10}: Props) {
  return (
    <View style={{paddingHorizontal: row, paddingVertical: column}}>
      {null}
    </View>
  );
}
