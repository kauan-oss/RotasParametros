import React from "react-native";
import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function AlunoCard({ aluno }) {

 
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text> Nome : {dados.nome} </Text>
            <Text> Idade : {dados.idade} </Text>
            <Text> Curso : {dados.curso} </Text>
            <Text> Cidade : {dados.cidade} </Text>
            <Text> {dados.idade >= 18 ? "Maior de idade" : "Menor de idade"} </Text>

            <Button
                title="Mudar curso para ADS"
                onPress={() => setDados({ ...dados, curso: 'ADS' })}
            />
        </View>
    );
};