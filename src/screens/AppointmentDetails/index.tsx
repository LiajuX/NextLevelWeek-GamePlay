import React, { useState, useEffect } from 'react';
import { 
  Alert, 
  FlatList, 
  ImageBackground, 
  Text, 
  Platform,
  Share,
  View,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member, MemberProps } from '../../components/Member';
import { Load } from '../../components/Load';
import { ButtonIcon } from '../../components/ButtonIcon';

import BannerImg from '../../assets/images/banner.png';

import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Params = {
  guildSelected: AppointmentProps;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
     
      setWidget(response.data);

    } catch {
      Alert.alert('Verifique se o Widget está habilitado nas configurações do servidor.');
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios'
    ? `Junte-se a ${guildSelected.guild.name}`
    : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header 
        title="Detalhes" 
        action={
          guildSelected.guild.owner || typeof widget.instant_invite === 'string' 
          ? <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto 
                name="share"
                size={24}
                color={theme.colors.primary}
              />
            </BorderlessButton>
          : false
        }
      />

      <ImageBackground 
        source={BannerImg} 
        style={styles.banner}
        resizeMode="cover"
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{ guildSelected.guild.name }</Text>
          
          <Text style={styles.subtitle}>
            { guildSelected.description }
          </Text>
        </View>
      </ImageBackground>


      { loading 
        ? <Load />
        : <>
            <ListHeader 
              title="Jogadores" 
              subtitle={`Total ${widget.members.length}`} 
            />
            
            <FlatList 
              data={widget.members} 
              keyExtractor={item => item.id}
                renderItem={(({ item }) => (
                  <Member data={item} />
                ))}
                ItemSeparatorComponent={() => <ListDivider width="78%" isCentered />}
                contentContainerStyle={{ paddingBottom: 60 }}
                showsVerticalScrollIndicator={false}
            />
          </>
      }

        { widget.instant_invite &&
          <View style={styles.buttonContainer}>
            <ButtonIcon 
              title="Entrar na partida"
              onPress={handleOpenGuild} 
            />
          </View>
        }
    </Background>
  );
}
