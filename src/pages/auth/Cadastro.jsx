import { ScrollView, StyleSheet, View, ToastAndroid } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import React, { useState } from 'react';

export default function Cadastro({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const showToast = () => {
    ToastAndroid.show('Cadastro concluído', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          mode='outlined'
          cancelable='true'
          style={styles.input}
          keyboardType='default'
          label="Nome"
          left={
            <TextInput.Icon
              icon={'account'}
            />
          }
        />

        <TextInput
          mode='outlined'
          cancelable='true'
          style={styles.input}
          keyboardType='default'
          label="E-Mail"
          left={
            <TextInput.Icon
              icon={'email'}
            />
          }
        />


<TextInput
          mode='outlined'
          cancelable='true'
          style={styles.input}
          label="Senha"
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          left={
            <TextInput.Icon
              icon={'lock'}
            />
          }
        />

        <TextInput
          mode='outlined'
          cancelable='true'
          style={styles.input}
          label="Confirmar senha"
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          left={
            <TextInput.Icon
              icon={'lock'}
            />
          }
        />

        <View style={styles.spanContainer}>
          <Text>Já possui uma conta?</Text>
          <Button onPress={() => navigation.goBack()}>Faça login</Button>
        </View>

        <Button
          style={styles.button}
          dark='true'
          icon="login"
          mode="contained-tonal"
          onPress={() => showToast()}>
          Cadastrar
        </Button>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 50,
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 50,
    marginVertical: 20,
    padding: 6
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    marginTop: 100,
    marginBottom: 50,
    color: '#24E4FF',
  },
  spanContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});