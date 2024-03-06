import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';;

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