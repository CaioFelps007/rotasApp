import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput } from 'react-native';







export default function App() {

  const imagefundo = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/539459-ilustracao-preto-e-branco-do-bodybuilder-do-gorila-vetor.jpg'}
  const imagereact = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/9472292-gorila-ginasio-logo-premium-vetor.jpg'}


  return (

    <View style={styles.container}>
    

      <View style={styles.secondaryContainer}>
      <ImageBackground  style={styles.imagefundo} source={imagefundo} >
       

        <View style={styles.terciaryContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, borderBottomWidth: 2, borderBottomColor: 'white'}}>Login</Text>
        <TextInput style={styles.InputName}
            placeholder='Seu Nome'
          />
          <TextInput style={styles.InputName}
            placeholder='Sua Senha'
            secureTextEntry={true}
          />

          <Button style={styles.btn}
          title='Pronto'

            />
          
         
        </View>

        <Image source={imagereact} style ={styles.imagereact}/>

        </ImageBackground>
        
          
      </View>

  
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

  btn: {
    color: 'black',
    backgroundColor: 'grey',
  },

  InputName: {
 
  borderWidth: 2,
  borderColor: 'grey',
  borderRadius: 5,
  margin: 15,
  justifyContent: 'center',
  backgroundColor: 'white',
  width: '90%',
  height: '20%',

},

  secondaryContainer: {
  flex: 1,
  width: '100%',
  backgroundColor: 'white',
  alignItems: 'center',


},

  terciaryContainer: {
  
  backgroundColor: 'grey',
  borderWidth: 2,
  borderColor: 'white',
  backgroundColor: 'red',
  alignItems: 'center',
  width: '80%',
  borderRadius: 15,
  height: '40%',
  justifyContent: 'center',
  marginTop: '1%',
 shadowColor: 'red',
 shadowOpacity: 1,
 shadowRadius: 30,
 opacity: '95%',
},

 imagefundo: {
  width: '100%',
  flex: 1,
  alignItems: 'center',
  opacity: 30,
  justifyContent: 'center'
 },

 imagereact: {
    height: 100,
    width: 100,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginTop: '5%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'grey',
   
 }
});