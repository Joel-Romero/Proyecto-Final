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
}
interface FormLogin {
    user: string;
    password: string;
}

export const Login = ({ users }: Props) => {
    const [formLogin, setFormLogin] = useState<FormLogin>({
        user: '',
        password: ''
    });
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const navigation = useNavigation();
    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value });
    }

    const handleSignIn = () => {
        if (!formLogin.user || !formLogin.password) {
            Alert.alert(
                'ESPERA!!',
                'Ingrese valores en todos los campos!'
            );
            return;
        }
        if (!verifyUser()) {
            Alert.alert(
                'ESPERA!!',
                'Usuario y/o contraseña incorrecta!'
            );
            return;
        }
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    }
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.user === formLogin.user && user.password === formLogin.password);
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
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleHeaderBody}>Bienvenido a PlayStation</Text>
                    <Text style={styles.textBody}>Explora con PlayStation</Text>
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Ingrese su Usuario'
                        handleSetValues={handleSetValues}
                        name='user' />
                    <InputComponent
                        placeholder='Ingrese su Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        setHiddenPaswword={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Iniciar' onPress={handleSignIn} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRedirection}>Registrarse</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
        </ImageBackground>
    )
}
