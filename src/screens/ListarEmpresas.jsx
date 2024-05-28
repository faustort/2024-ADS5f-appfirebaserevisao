import { Button, Card, Modal, Portal, Surface, Text } from "react-native-paper";
import { styles } from "../config/styles";
import tailwind from "twrnc";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { FlatList, View } from "react-native";

export default function ListarEmpresas() {
  const [empresas, setEmpresas] = useState([]);
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const listarEmpresasCadastradas = async () => {
      const colRef = collection(db, "empresas");
      const querySnapshot = await getDocs(colRef);
      setEmpresas(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    };
    listarEmpresasCadastradas();
  }, []);

  const showModal = (empresa) => {
    setSelectedEmpresa(empresa);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "empresas", selectedEmpresa.id));
      setEmpresas(
        empresas.filter((empresa) => empresa.id !== selectedEmpresa.id)
      );
      hideModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Surface style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={tailwind`bg-white p-4`}
        >
          <Text>Confirmar Exclusão</Text>
          <View style={tailwind`mt-4 flex-row justify-between`}>
            <Button onPress={hideModal} mode="contained">
              Cancelar
            </Button>
            <Button mode="contained" onPress={handleDelete}>
              Excluir
            </Button>
          </View>
        </Modal>
      </Portal>

      <View style={styles.container_inner}>
        <Text style={tailwind`text-center text-2xl mb-[20px]`}>
          Empresas Cadastradas
        </Text>
        <FlatList
          data={empresas}
          keyExtractor={(item) => item.id}
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
                <Button onPress={() => showModal(item)}>Excluir</Button>
              </Card.Actions>
            </Card>
          )}
        />
      </View>
    </Surface>
  );
}
