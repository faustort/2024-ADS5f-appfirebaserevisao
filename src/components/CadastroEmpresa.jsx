import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Surface } from "react-native-paper";
import { styles } from "../config/styles";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function CadastroEmpresa() {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [emailEmpresa, setEmailEmpresa] = useState("");
  const [senhaEmpresa, setSenhaEmpresa] = useState("");
  const [cidadeEmpresa, setCidadeEmpresa] = useState("");
  const [enderecoEmpresa, setEnderecoEmpresa] = useState("");
  const [cepEmpresa, setCepEmpresa] = useState("");
  const [estadoEmpresa, setEstadoEmpresa] = useState("");
  const [bairroEmpresa, setBairroEmpresa] = useState("");

  async function handleCadastro() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailEmpresa,
        senhaEmpresa
      );
      const user = userCredential.user;

      const docRef = await addDoc(collection(db, "empresa"), {
        id: user.uid,
        nomeEmpresa: nomeEmpresa,
        cidadeEmpresa: cidadeEmpresa,
        enderecoEmpresa: enderecoEmpresa,
        cepEmpresa: cepEmpresa,
        estadoEmpresa: estadoEmpresa,
        bairroEmpresa: bairroEmpresa,
        isAdmin: true,
      });

      console.log("O documento foi criado com a ID:", docRef.id);
    } catch (error) {
      console.log("Erro ao cadastrar empresa:", error);
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <TextInput
          value={nomeEmpresa}
          onChangeText={setNomeEmpresa}
          placeholder="Nome da Empresa"
        />
        <TextInput
          value={emailEmpresa}
          onChangeText={setEmailEmpresa}
          placeholder="Email da Empresa"
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
        <TextInput
          value={senhaEmpresa}
          onChangeText={setSenhaEmpresa}
          placeholder="Digite a senha"
          secureTextEntry // define um campo de senha
        />
        <Button title="Cadastrar Empresa" onPress={handleCadastro} />
      </View>
    </Surface>
  );
}
