import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export type GuildProps = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
}
  
type Props = TouchableOpacityProps & {
  data: GuildProps;
} 

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.7} 
      {...rest}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{ data.name }</Text>
          <Text style={styles.playerType}>{ data.owner ? 'Administrador' : 'Convidado' }</Text>
        </View>

        <Feather 
          name="chevron-right"
          color={theme.colors.heading}
          size={18}
        />
      </View>
    </TouchableOpacity>
  );
}
