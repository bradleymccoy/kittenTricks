import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ArrowForwardIcon, FacebookIcon, GoogleIcon, TwitterIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import { ForgotPasswordScreen } from '../../../scenes/forgotpassword/forgot-password.component'
 
export default ({ navigation }): React.ReactElement => {

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const onSignInButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate('SignUp1');
  };

  const onForgotPasswordPress = (): void => {
    navigation && navigation.navigate('ForgotPassword');
  }

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/sign-in-background.jpg')}>
        <View style={styles.signInContainer}>
          <Text
            style={styles.signInLabel}
            status='control'
            category='h4'>
            SIGN IN
          </Text>
          <Button
            style={styles.signUpButton}
            appearance='ghost'
            status='control'
            size='giant'
            accessoryLeft={ArrowForwardIcon}
            onPress={onSignUpButtonPress}>
            Sign Up
          </Button>
        </View>
        <View style={styles.formContainer}>
          <Input
            label='EMAIL'
            placeholder='Email'
            status='control'
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            secureTextEntry={true}
            placeholder='Password'
            label='PASSWORD'
            status='control'
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button
          status='control'
          size='large'
          onPress={onSignInButtonPress}>
          SIGN IN
        </Button>
        <View style={styles.socialAuthContainer}>
          <Button
            style={styles.socialAuthHintText}
            status='control'
            onPress={onForgotPasswordPress}>
            Forgot Password
          </Button>
        </View>
      </ImageOverlay>
    </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  socialAuthContainer: {
    marginTop: 48,
  },
  evaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInLabel: {
    flex: 1,
  },
  signUpButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
});


