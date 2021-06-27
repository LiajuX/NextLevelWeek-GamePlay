import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Avatar } from '../Avatar';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props =  RectButtonProps & {
  data: MemberProps;
}

export function Member({ data, ...rest }: Props) {
  const isOnline = data.status === 'online';

  const { primary, on } = theme.colors;  

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <Avatar imageUrl={data.avatar_url} />

        <View style={styles.content}>
          <Text style={styles.username}>{ data.username }</Text>

          <View style={styles.status}>
            <View 
              style={[
                styles.statusBullet, 
                { backgroundColor: isOnline ? on : primary }
              ]} 
            />

            <Text style={styles.statusName}>
              { isOnline ? 'Disponível' : 'Ocupado' }
            </Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
