import { Alert, StyleSheet, ToastAndroid, View, Image, ScrollView } from 'react-native';
import { Avatar, Appbar, Text, Button } from 'react-native-paper';
import { useState } from 'react';

export default function User({ navigation }) {
    const [value, setValue] = useState('');

    const showAlert = () =>
        Alert.alert(
            'Atenção',
            'Ao confirmar abaixo, você confirma que deseja excluir sua conta permanentemente.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => Alert.alert('C Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Entendi',
                    onPress: () => Alert.alert('E Pressed'),
                    style: 'default',
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        'This alert was dismissed by tapping outside of the alert dialog.',
                    ),
            },
        );

    return (
        <View>
            <ScrollView>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                </Appbar.Header>
                <View style={styles.align}>
                    <Avatar.Text size={100} label="LD" />
                    <Text style={{ fontSize: 30, marginTop: 30 }}>Luka Doncic</Text>
                    <Text style={styles.description}>Burraço</Text>
                    <Button icon='file-upload-outline' onPress={() => ToastAndroid.show('Foto alterada!', ToastAndroid.SHORT)}>Alterar foto de perfil</Button>
                    <Button icon='pencil' onPress={() => ToastAndroid.show('Nome alterado!', ToastAndroid.SHORT)}>Alterar nome de usuário</Button>
                    <Button icon='file-upload-outline' onPress={() => ToastAndroid.show('Foto enviada!', ToastAndroid.SHORT)}>Enviar foto de perfil</Button>
                    <Button icon='delete' onPress={() => showAlert()}>Excluir conta</Button>
                    <Image
                        style={styles.pugs}
                        source={require('../../../assets/pugs.png')}
                    />
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    align: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginBottom: 20
    },
    pugs: {
        marginVertical: 50,
        width: 150,
        height: 150,
        borderRadius: 10
    }
});