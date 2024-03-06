import { TextInput, View} from 'react-native';




export default function Inputs() {

    return (
        <View style={styles.terciaryContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, borderBottomWidth: 2, borderBottomColor: 'white' }}>Login</Text>
            <TextInput style={styles.InputName}
                placeholder='Seu Nome'
            />
            <TextInput style={styles.InputName}
                placeholder='Sua Senha'
                secureTextEntry={true}
            />

        </View>
    )
}





