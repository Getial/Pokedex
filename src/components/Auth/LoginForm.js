import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [error, setError] = useState('');
  const { login } = useAuth();

  console.log(useAuth());

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('');
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError('El usuario o la contraseña no son correcto');
      } else {
        login(userDetails);
      }
    },
  });
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de Usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      {/* <Button title="Entrar" onPress={formik.handleSubmit} style={styles.btnEntrar} /> */}
      <TouchableOpacity onPress={formik.handleSubmit} style={styles.btnEntrar}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: '',
    password: '',
  };
}

function validationSchema() {
  return {
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  };
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  btnEntrar: {
    width: 120,
    height: 30,
    backgroundColor: '#2288dd',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
});
