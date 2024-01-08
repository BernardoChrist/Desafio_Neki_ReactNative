import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigation();

  const entrar = async () => {
    try {
      // Requisição
      const response = await axios.get(
        "https://65983642668d248edf244c68.mockapi.io/usuario"
      );

      // Verifica se existe usuário e senha
      const usuarioEncontrado = response.data.find(
        (usuario) => usuario.login === login && usuario.senha === senha
      );

      if (usuarioEncontrado) {
        alert("Login efetuado com sucesso!");
        navigation.navigate("Home");
      } else {
        alert("Login ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro na requisição para a API", error);
    }
  };

  const cadastrar = async () => {
    if (!login || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      await axios.post("https://65983642668d248edf244c68.mockapi.io/usuario", {
        login,
        senha,
      });
      setIsModalOpen(false);
      setSenha("");
      setLogin("");
      alert("Usuário cadastrado com sucesso!");
      // Implemente a navegação ou outra lógica após o cadastro
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error);
      alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Faça seu login</Text>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          value={login}
          onChangeText={(text) => setLogin(text)}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cadastrarButton]}
          onPress={() => setIsModalOpen(true)}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.formmodal}>
            <Text style={styles.title}>Cadastro de Novo Usuário</Text>
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o usuário"
              value={login}
              onChangeText={(text) => setLogin(text)}
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Digite a senha"
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
            <Text style={styles.label}>Confirmar Senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Digite a senha"
              value={confirmarSenha}
              onChangeText={(text) => setConfirmarSenha(text)}
            />
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.voltarButton]}
              onPress={() => {
                setIsModalOpen(false);
                setSenha("");
                setLogin("");
                setConfirmarSenha("");
              }}
            >
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#424646",
  },
  form: {
    width: "80%",
    padding: "10%",
    backgroundColor: "#a5f1e1",
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 20,
  },

  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cadastrarButton: {
    backgroundColor: "black",
    marginTop: 20,
    borderRadius: 20,
  },
  modalContainer: {
    backgroundColor: "#424646",
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  voltarButton: {
    backgroundColor: "#d14836",
    borderRadius: 20,
  },

  formmodal: {
    width: "80%",
    padding: "10%",
    backgroundColor: "#a5f1e1",
    borderRadius: 20,
  },
});
