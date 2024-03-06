import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput } from 'react-native';

// PAGES:



//   IMPORT STACK NAVIGATION.
import { NavigationContainer, useNavigation } from '@react-navigation/native';;
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//
//Criando uma instancia do STACK NAVIGATOR
// Isso nos permite utilizar comandos para definir a navegação da aplicacao
const Stack = createNativeStackNavigator();


export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Contact' component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  const navigation = useNavigation();
  const imagefundo = { uri: 'https://static.vecteezy.com/ti/fotos-gratis/p2/6263904-fundo-abstrato-branco-pano-de-fundo-para-design-de-apresentacao-para-site-gratis-foto.jpg' }

  return (
    <ImageBackground source={imagefundo} style={{ flex: 1, width: '100%', }}>
      <View>
        <Text>Open up App.js...</Text>
        <Button title='Sobre' onPress={() => navigation.navigate("Sobre")} />
      </View>
    </ImageBackground>

  )
}

function About() {

  const imagefundosobre = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2059683-branco-abstrato-dinamico-moderno-fundo-terno-para-negocios-instituicao-instituicao-festa-festiva-seminario-e-conversas-vetor.jpg' }

  return (
    <ImageBackground source={imagefundosobre} style={{ flex: 1, width: '100%' }}>
      <View >
        <Text>Sobre:</Text>
      </View>
    </ImageBackground>

  )
}
;