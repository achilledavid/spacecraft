import { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";
import { Text } from "react-native-paper";
import { Button, TextInput } from "react-native-paper";

import Header from "~/components/Header";
import { useAuthContext } from "~/contexts/AuthContext";

export default function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { toggleIsSignedIn } = useAuthContext();

  return (
    <>
      <SafeAreaView style={styles.notch} />
      <View style={styles.container}>
        <Header title="Spacecraft" />
        <KeyboardAvoidingView style={styles.form}>
          <TextInput
            mode="outlined"
            label="Email"
            keyboardType="email-address"
          />
          <TextInput
            mode="outlined"
            label="Mot de passe"
            secureTextEntry={!visiblePassword}
            right={
              <TextInput.Icon
                onPress={() => setVisiblePassword((old) => !old)}
                icon={visiblePassword ? "eye" : "eye-off"}
              />
            }
          />
          <Button onPress={() => toggleIsSignedIn()} mode="contained">Connexion</Button>
          <Pressable>
            <Text
              variant="bodySmall"
              style={styles.baseline}
            >
              Read Terms and conditions
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
      <SafeAreaView />
    </>
  );
}

const styles = StyleSheet.create({
  baseline: {
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    textDecorationLine: "underline"
  },
  container: {
    backgroundColor: "white",
    flex: 1
  },
  form: {
    display: "flex",
    flex: 1,
    gap: 24,
    padding: 32
  },
  notch: {
    backgroundColor: "#6B4FAA"
  }
});
