import React from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  selected?: boolean;
}

export function Category({
  title,
  icon: Icon,
  selected = false,
  ...rest
}: CategoryProps) {
  const { secondary50, secondary70 } = theme.colors;

  console.log(Icon);

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: selected ? 1 : 0.4 }]}>
          <View style={selected ? styles.selected : styles.selected} />
          
{/*           <Icon width={48} height={48} />
 */}
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}