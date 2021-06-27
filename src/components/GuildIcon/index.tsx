import React from 'react';
import { Image, View } from 'react-native';

import DiscordSvg from '../../assets/discord.svg';

import { styles } from './styles';

const { CDN_IMAGE } = process.env;

type GuildIconProps = {
  guildId: string;
  iconId: string | null;
  selectorIcon?: boolean;
}

export function GuildIcon({ guildId, iconId, selectorIcon }: GuildIconProps) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
  
  return (
    <>
    { iconId
      ? <Image 
          source={{ uri }}
          style={[styles.image, { marginLeft: selectorIcon ? -1 : 0 }]}
          resizeMode="cover"
        />
        
      : <View style={styles.container}>
          <DiscordSvg 
            width={48}
            height={48}
          />
        </View>
      }
    </>
  );
}
