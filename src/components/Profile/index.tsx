import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar imageUrl="https://avatars.githubusercontent.com/u/53796370?v=4" />
      
      <View style={styles.textContainer}>
        <View style={styles.user}>  
          <Text style={styles.greeting}>
            Olá, 
          </Text>

          <Text style={styles.username}>
            Júlia
          </Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
