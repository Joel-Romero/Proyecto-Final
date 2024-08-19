import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { PRIMARY_COLOR } from '../commons/constants';
import { HomeScreen } from '../screen/HomScreen/HomeScreen';
import { Login } from '../screen/Login';
import { Register } from '../screen/Register';



export interface User {
    id: number;
    user: string;
    email: string;
    cedula: string;
    password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
    const users: User[] = [
        { id: 1, user: 'joelromero', 
        email: 'joelromero@gmail.com', 
        cedula: '12345678', 
        password: '123456789' },
        { id: 2, user: 'andresmolina', 
        email: 'andresmolina@gmail.com', 
        cedula: '87654321', 
        password: '987654321' }
    ];

    const [listUsers, setListUsers] = useState(users);

    const handleAddUser = (user: User) => {
        setListUsers([...listUsers, user]);
    }

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR
                }
            }}>
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                children={() => <Login users={listUsers} />} />
            <Stack.Screen
                name="Register"
                options={{ headerShown: false }}
                children={() => <Register users={listUsers} 
                handleAddUser={handleAddUser} />} />
            <Stack.Screen
                name='Home'
                options={{ headerShown: false }}
                component={HomeScreen} />
        </Stack.Navigator>
    );
}
