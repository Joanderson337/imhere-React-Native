import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Rodrigo",
    "Vini",
    "Diego",
    "Biro",
    "Ana",
    "Isa",
    "Rodrigo",
    "Vini",
    "Diego",
    "Biro",
    "Ana",
    "Isa",
    "Jack",
    "Mayk",
    "João",
    "Jack",
    "Mayk",
    "João",
  ];

  function handleParticipantAdd() {
    alert("Você clicou no botão de Adicionar!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
          data={participants}
          keyExtractor={item => item}
          renderItem={({item}) => (<Participant name={item} key={item} onRemove={handleParticipantAdd} />) }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
            </Text>
          )}
      />
    </View>
  );
}
