import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { CategoryList } from '../../components/CategoryList';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Home() {
  const navigation = useNavigation();

  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        
        <RectButton 
          style={styles.addButton} 
          onPress={handleAppointmentCreate}
        >
          <MaterialCommunityIcons 
            name="plus" 
            color={theme.colors.heading} 
            size={24}
          />
        </RectButton>
      </View>

      <View>
        <CategoryList 
          categorySelected={category} 
          setCategory={handleCategorySelect}
        />
      </View>

      { loading 
        ? <Load />
        : <>
            <View style={styles.content}>
              <ListHeader 
                title="Partidas jogadas" 
                subtitle={`Total ${appointments.length}`} 
              />
            
            </View>

            <FlatList 
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={(({ item }) => (
                <Appointment 
                  data={item} 
                  onPress={() => handleAppointmentDetails(item)} 
                />
              ))}
              ItemSeparatorComponent={() => <ListDivider width="78%" />}
              contentContainerStyle={{ paddingBottom: 69 }}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
            />
          </>
      }
    </Background>
  );
}
