import { Surface } from "react-native-paper";
import { styles } from "../config/styles";

export default function RegisterScreen() {
  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Faça seu cadastro</Text>
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={() => handleCadastro()}
          style={styles.input}
        >
          Cadastrar
        </Button>
      </View>
    </Surface>
  );
}
