import { View, Text, Button, ScrollView } from "react-native";

export default function HomeScreens({ navigation }) {

    const alunos = [
        { id: 1, nome: 'João', idade: 15, curso: 'DES', cidade: 'São Paulo' },
        { id: 2, nome: 'Paulo', idade: 21, curso: 'ADS', cidade: 'Ivaiporã' },
        { id: 3, nome: 'Pedro', idade: 27, curso: 'Engenharia Mecânica', cidade: 'Pitanga' },
        { id: 4, nome: 'Pamela', idade: 21, curso: 'Engenharia Elétrica', cidade: 'Manoel Ribas' },
    ];

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }} >
            <Text style={{ fontSize: 20, marginBottom: 10 }} >
                Lista de Alunos:
            </Text>

            {alunos.map((aluno) => (
                <View key={aluno.id} style={{ marginBottom: 10 }} >
                    <Button
                        title={aluno.nome}
                        onPress={() => (navigation.navigate('Detalhes', { aluno }))}
                    />
                </View>
            ))};

        </ScrollView>
    );


};