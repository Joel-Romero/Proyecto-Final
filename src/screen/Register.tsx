import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface Props {
    users: User[];
    handleAddUser: (user: User) => void;
}

interface FormRegister {
    user: string;
    email: string;
    cedula: string;
    password: string;
}

export const Register = ({ users, handleAddUser }: Props) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        user: '',
        email: '',
        cedula: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const navigation = useNavigation();

    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value });
    }

    const handleSignUp = () => {
        if (!formRegister.user || !formRegister.email || !formRegister.cedula || !formRegister.password) {
            Alert.alert(
                'ESPERA!!',
                'Ingrese valores en todos los campos!'
            );
            return;
        }

        if (verifyUser() != null) {
            Alert.alert(
                'ESPERA!!',
                'El usuario ya se encuentra registrado!'
            );
            return;
        }

        const getIdUsers = users.map(user => user.id);
        const getNewId = Math.max(...getIdUsers) + 1;

        const newUser: User = {
            id: getNewId,
            user: formRegister.user,
            email: formRegister.email,
            cedula: formRegister.cedula,
            password: formRegister.password
        }

        handleAddUser(newUser);
        Alert.alert(
            'Felicitaciones',
            'Bienvenido a PlayStation'
        );

        navigation.goBack();
    }

    const verifyUser = () => {
        const existUser = users.filter(user => user.email === formRegister.email)[0];
        return existUser;
    }

    return (
        <ImageBackground
            source={{ uri: 'https://preview.redd.it/p3j1w2u4sqr41.jpg?auto=webp&s=4a5fc796d7c1071dfa491bba63294b4d73388596' }} 
            style={styles.background1}
            resizeMode="cover"
        >
            <View>
                <StatusBar backgroundColor='black' />
                <TitleComponent title='Regístrate' />
                <BodyComponent>
                    <View>
                        <Text style={styles.titleHeaderBody}>Bienvenido a PlayStation</Text>
                        <Text style={styles.textBody}>Explora nuestros productos</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <InputComponent
                            placeholder='Ingrese un Usuario'
                            handleSetValues={handleSetValues}
                            name='user' />
                        <InputComponent
                            placeholder='Ingrese un Correo'
                            handleSetValues={handleSetValues}
                            name='email' />
                        <InputComponent
                            placeholder='Ingrese un Cédula'
                            handleSetValues={handleSetValues}
                            name='cedula' />
                        <InputComponent
                            placeholder='Ingrese una Contraseña'
                            handleSetValues={handleSetValues}
                            name='password'
                            isPassword={hiddenPassword}
                            hasIcon={true}
                            setHiddenPaswword={() => setHiddenPassword(!hiddenPassword)} />
                    </View>
                    <ButtonComponent textButton='Registrar' onPress={handleSignUp} />
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                        <Text style={styles.textRedirection}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </BodyComponent>
            </View>
        </ImageBackground>
    )
}
