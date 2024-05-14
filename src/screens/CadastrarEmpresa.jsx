import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import { View } from "react-native";
import { Surface, TextInput, Button, Text } from "react-native-paper";
import { styles } from "../config/styles";
import tailwind from "twrnc";

export default function CadastrarEmpresa({ navigation }) {
  const [nomeEmpresa, setNomeEmpresa] = useState();
  const [cidadeEmpresa, setCidadeEmpresa] = useState();
  const [enderecoEmpresa, setEnderecoEmpresa] = useState();
  const [cepEmpresa, setCepEmpresa] = useState();
  const [estadoEmpresa, setEstadoEmpresa] = useState();
  const [bairroEmpresa, setBairroEmpresa] = useState();

  // criação da função de forma assíncrona, que aguarda a resposta da requisição
  async function handleCadastro() {
    try {
      const colRef = collection(db, "empresas");
      const docRef = await addDoc(colRef, {
        nomeEmpresa: nomeEmpresa,
        cidadeEmpresa: cidadeEmpresa,
        enderecoEmpresa: enderecoEmpresa,
        cepEmpresa: cepEmpresa,
        estadoEmpresa: estadoEmpresa,
        bairroEmpresa: bairroEmpresa,
      });

      console.log("O documento foi criado com a ID:", docRef.id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Text
          variant="headlineMedium"
          style={tailwind`text-center text-2xl mb-5`}
        >
          Cadastrar Empresa
        </Text>
        <TextInput
          value={nomeEmpresa}
          onChangeText={setNomeEmpresa}
          placeholder="Nome da Empresa"
        />
        <TextInput
          value={cepEmpresa}
          onChangeText={setCepEmpresa}
          placeholder="CEP"
        />
        <TextInput
          value={cidadeEmpresa}
          onChangeText={setCidadeEmpresa}
          placeholder="Cidade Empresa"
        />
        <TextInput
          value={estadoEmpresa}
          onChangeText={setEstadoEmpresa}
          placeholder="Estado Empresa"
        />
        <TextInput
          value={bairroEmpresa}
          onChangeText={setBairroEmpresa}
          placeholder="Bairro"
        />
        <TextInput
          value={enderecoEmpresa}
          onChangeText={setEnderecoEmpresa}
          placeholder="Logradouro"
        />
        <Button title="" onPress={handleCadastro}>
          Cadastrar Empresa
        </Button>
        <Button
          variant={"outlined"}
          title=""
          onPress={() => navigation.navigate("ListarEmpresas")}
        >
          Listar Empresas
        </Button>
      </View>
    </Surface>
  );
}
