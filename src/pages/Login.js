import { View } from "react-native"





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