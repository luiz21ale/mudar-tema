
// --------Importações--------------
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


//  2. Definindo o Componente App
const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // 3. Função troca Tema
    const trocarTema = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    //VALOR BINARIO
    return (                                               //condição ? valorSeVerdadeiro : valorSeFalso;
        <View style={[styles.container, { backgroundColor: isDarkTheme ? 'black' : 'white' }]}>

            <Text style={{ color: isDarkTheme ? 'white' : 'black', fontSize: 40 }}>
                {isDarkTheme ? 'Tema Escuro' : 'Tema Claro'}
            </Text>
            <TouchableOpacity style={styles.button} onPress={trocarTema}>
                <Text style={styles.buttonText}>Mudar Tema</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default App;

// A linha export default App; exporta o componente App como a exportação padrão do arquivo.
//Isso permite que outros arquivos o importem e o utilizem, promovendo a modularidade e a organização
//do código em projetos React Native e JavaScript em geral.
