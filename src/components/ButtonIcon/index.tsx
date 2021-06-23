import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordLogoImg from '../../assets/images/discord-logo.png';

import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton 
      style={styles.container} 
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordLogoImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
