import { Button, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";
import { View } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState({
    email: false,
    senha: false,
    mensagem: "",
  });

  async function handleLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      console.log(userCredential);
      if (userCredential.user) {
        navigation.navigate("HomeScreen");
      }
    } catch (e) {
      console.error(e);
      setError({
        mensagem: e.message,
        email: e.code === "auth/invalid-email",
        senha:
          e.code === "auth/wrong-password" ||
          e.code === "auth/user-not-found" ||
          e.code === "auth/missing-password",
      });
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Faça seu login</Text>
        <Text>{error.mensagem}</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          error={error.email}
        />
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
          error={error.senha}
        />
        <Button mode="contained" onPress={handleLogin}>
          Faça seu login
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("CadastrarEmpresa")}
        >
          Cadastrar Empresa
        </Button>
      </View>
    </Surface>
  );
}
