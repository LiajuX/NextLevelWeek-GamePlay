import React from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Profile } from '../../components/Profile';
import { CategoryList } from '../../components/CategoryList';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        
        <RectButton style={styles.addButton}>
          <MaterialCommunityIcons 
            name="plus" 
            color={theme.colors.heading} 
            size={24}
          />
        </RectButton>
      </View>

      <View>
        <CategoryList/>
      </View>
    </View>
  );
}
