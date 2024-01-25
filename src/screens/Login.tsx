import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import Header from '~/components/Header';

export default function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.notch} />
      <View style={styles.container}>
        <Header title='Spacecraft' />
        <KeyboardAvoidingView style={styles.form}>
          <TextInput mode='outlined' label='Email' keyboardType='email-address' />
          <TextInput mode='outlined' label='Mot de passe' secureTextEntry={!visiblePassword} right={
            <TextInput.Icon
              onPress={() => setVisiblePassword((old) => !old)}
              icon={visiblePassword ? "eye" : "eye-off"}
            />
          } />
          <Button mode='contained'>Connexion</Button>
          <Pressable><Text variant="bodySmall" style={styles.baseline}>Read Terms and conditions</Text></Pressable>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  notch: {
    backgroundColor: "#6B4FAA",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  form: {
    flex: 1,
    padding: 32,
    display: "flex",
    gap: 24
  },
  baseline: {
    textAlign: "center",
    color: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
  }
});
