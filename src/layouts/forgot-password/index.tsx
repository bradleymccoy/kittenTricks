import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { EmailIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import { ArrowIosBackIcon } from '../../components/icons';
import { SignIn1Screen } from '../../scenes/auth/sign-in-1.component'
import { ContentView } from '../../layouts/auth/sign-in-1'
import { useNavigation } from '@react-navigation/native';


export default ({ navigation }): React.ReactElement => {

  const [email, setEmail] = React.useState<string>();

  const onResetPasswordButtonPress = (): void => {
    navigation && navigation.goBack();
  };
  

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/image-background.jpg')}>
        <View style={styles.forgotPasswordContainer}>
        </View>
        <View style={styles.enterEmailLabel}>
          <Text
            style={styles.forgotPasswordLabel}
            category='h2'
            status='control'>
            Forgot Password
          </Text>
          <Text
            style={styles.enterEmailLabel}
            status='control'>
            Please enter your email address
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            status='control'
            placeholder='Email'
            accessoryRight={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Button
          size='giant'
          onPress={onResetPasswordButtonPress}>
          RESET PASSWORD
        </Button>

      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  forgotPasswordLabel: {
    flex: 1,
    marginTop: 24,
  },
  enterEmailLabel: {
    alignItems: 'center',
    marginTop: 48,
  },
});
