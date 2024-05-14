import { Button, Card, Surface, Text } from "react-native-paper";
import { styles } from "../config/styles";
import tailwind from "twrnc";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { FlatList, View } from "react-native";

export default function ListarEmpresas() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const listarEmpresasCadastradas = async () => {
      const colRef = collection(db, "empresas");
      const querySnapshot = await getDocs(colRef);
      setEmpresas(querySnapshot.docs.map((doc) => doc.data()));
      /*
        bairroEmpresa
        cepEmpresa
        cidadeEmpresa
        enderecoEmpresa
        estadoEmpresa
      */

      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    };
    listarEmpresasCadastradas();
  }, []);

  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Text style={tailwind`text-center text-2xl mb-[20px]`}>Empresas Cadastradas</Text>
        {/* {empresas.map((empresa) => (
          <Text key={empresa.nomeEmpresa} style={tailwind`text-center text-xl`}>
            {empresa.nomeEmpresa}
          </Text>
        ))} */}
        <FlatList
          data={empresas}
          renderItem={({ item }) => (
            <Card mode="outlined" style={tailwind`mb-3`}>
              <Card.Title title={item.nomeEmpresa} />
              <Card.Content>
                <Text>{item.enderecoEmpresa}</Text>
                <Text>{item.bairroEmpresa}</Text>
                <Text>{item.cidadeEmpresa}</Text>
                <Text>{item.estadoEmpresa}</Text>
                <Text>{item.cepEmpresa}</Text>
              </Card.Content>
              <Card.Actions>
                <Button>Editar</Button>
                <Button>Excluir</Button>
              </Card.Actions>
            </Card>
          )}
        />
      </View>
    </Surface>
  );
}
