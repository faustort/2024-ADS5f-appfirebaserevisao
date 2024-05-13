import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { db } from "./src/config/firebase";
 
export default function App() {
  const [nomeEmpresa, setNomeEmpresa] = useState();
  const [cidadeEmpresa, setCidadeEmpresa] = useState();
  const [enderecoEmpresa, setEnderecoEmpresa] = useState();
  const [cepEmpresa, setCepEmpresa] = useState();
  const [estadoEmpresa, setEstadoEmpresa] = useState();
  const [bairroEmpresa, setBairroEmpresa] = useState();

  // criação da função de forma assíncrona, que aguarda a resposta da requisição
  async function handleCadastro() {
    try {
      const docRef = await addDoc(
        collection(db, "empresas"), {
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
    <View>
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
      <Button title="Cadastrar Empresa" onPress={handleCadastro} />
    </View>
  );
}
