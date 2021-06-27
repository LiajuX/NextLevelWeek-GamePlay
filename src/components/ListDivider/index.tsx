import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type ListDividerProps = {
  width: string | number;
  isCentered?: boolean;
}

export function ListDivider({ width, isCentered }: ListDividerProps) {
  return (
    <View 
      style={[
        styles.container,
        { width: width },
        isCentered ? {
          marginVertical: 12,
        } : {
          marginBottom: 30,
        }
      ]}
    />
  );
}
