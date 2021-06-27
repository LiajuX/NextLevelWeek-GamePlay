import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { ListDivider } from '../ListDivider';

import { Guild, GuildProps } from '../Guild';
import { Load } from '../Load';

import { api } from '../../services/api';

import { styles } from './styles'
import { useState } from 'react';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading,setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);    
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <>
      { loading 
        ? <Load /> 
        : <FlatList 
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Guild 
                data={item}
                onPress={() => handleGuildSelect(item)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 90, paddingTop: 104 }}
            ListHeaderComponent={() => <ListDivider width="74%" />}
            ListHeaderComponentStyle={styles.listHeader}
            ItemSeparatorComponent={() => <ListDivider width="74%" isCentered />}
            showsVerticalScrollIndicator={false}
          />
        }
    </>
  );
}
