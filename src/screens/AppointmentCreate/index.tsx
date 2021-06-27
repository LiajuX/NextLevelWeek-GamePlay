import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategoryList } from '../../components/CategoryList';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { Guilds } from '../../components/Guilds';
import { GuildProps } from '../../components/Guild';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AppointmentCreate() {
  const navigation = useNavigation();

  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');
  const [description, seDescription] = useState('');

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }
  
  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
  }
  
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minutes}h`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  }
  
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header 
            title="Agendar partida" 
          />

          <Text style={[styles.label, { marginLeft: 24 }]}>Categoria</Text>
          
          <View>
            <CategoryList 
              hasCheckbox
              categorySelected={category} 
              setCategory={handleCategorySelect}
            />
          </View>
            
          <View style={styles.form}>
            <RectButton 
              style={styles.serverSelector} 
              onPress={handleOpenGuildsModal}
            >
              <View style={styles.selectorContent}>
                { guild.icon 
                  ? <GuildIcon 
                      guildId={guild.id} 
                      iconId={guild.icon} 
                      selectorIcon 
                    />
                  : <View style={styles.selectorimage} />
                }

                <View style={styles.selectorBody}>
                  <Text style={styles.selectorTitle}>
                    { guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather 
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                  />
                </View>
            </RectButton>
            
            <View style={styles.dateField}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                
                <View style={styles.column}>
                  <SmallInput 
                    maxLength={2}
                    onChangeText={setDay} 
                  />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput 
                    maxLength={2}
                    onChangeText={setMonth} 
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Horário</Text>
                
                <View style={styles.column}>
                  <SmallInput 
                    maxLength={2}
                    onChangeText={setHour} 
                  />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput 
                    maxLength={2}
                    onChangeText={setMinutes} 
                  />
                </View>
              </View>
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.labelSubtitle}>Max 100 caracteres</Text>
            </View>

            <TextInput 
              style={styles.textarea} 
              maxLength={100}
              autoCorrect={false}
              onChangeText={seDescription}
              multiline 
            />

            <RectButton style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Agendar</Text>
            </RectButton>
          </View>
        </ScrollView>
      </Background>

      <Modal
        animationType="slide"
        visible={openGuildsModal}
        statusBarTranslucent
        transparent
      >
        <TouchableWithoutFeedback onPress={handleCloseGuildsModal}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Background>
                <View style={styles.bar} />

                <Guilds handleGuildSelect={handleGuildSelect} />
              </Background>
            </View>
          </View>        
        </TouchableWithoutFeedback>
      </Modal>
    </KeyboardAvoidingView>
   );
}
