import React from "react-native";
import AlunoCard from "./AlunoCard";
import { View } from "react-native";

export default function DetailsScreen({ route }) {
    const { aluno } = route.params;

    return (
        <View style = {{flex:1}}>
            <AlunoCard aluno={aluno} />
        </View>
    )
};