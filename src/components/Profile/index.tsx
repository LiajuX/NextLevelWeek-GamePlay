import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Modal, 
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/useAuth';

import { Avatar } from '../Avatar';
import { Background } from '../Background';

import { styles } from './styles';

export function Profile() {
  const { user, signOut } = useAuth();
  
  const [openGuildsModal, setOpenGuildsModal] = useState(false);

  
  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }
  
  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
  }

  function handleSignOut() {
    handleCloseGuildsModal();
    signOut();
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenGuildsModal}>
        <Avatar imageUrl={user.avatar} />
      </RectButton>
      
      <View style={styles.textContainer}>
        <View style={styles.user}>  
          <Text style={styles.greeting}>
            Olá, 
          </Text>

          <Text style={styles.username}>
            { user.firstName }
          </Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>

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
                <Text style={styles.modalTitle}>
                  Deseja sair do Game<Text style={styles.redText}>Play</Text>?
                </Text>

                <View style={styles.buttonsContainer}>
                  <RectButton onPress={handleCloseGuildsModal}>
                    <View style={styles.outlinedButton}>
                      <Text style={styles.buttonText}>Não</Text>
                    </View>
                  </RectButton>

                  <TouchableOpacity 
                    style={styles.filledButton} 
                    activeOpacity={0.8}
                    onPress={handleSignOut}
                  >
                    <Text style={styles.buttonText}>Sim</Text>
                  </TouchableOpacity>
                </View>
              </Background>
            </View>
          </View>        
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
