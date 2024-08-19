import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { INPUT_COLOR2 } from '../commons/constants';

interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void; 
    name: string;
    isPassword?: boolean;    
    hasIcon?: boolean;
    setHiddenPaswword?: () => void;
}

export const InputComponent = ({ placeholder, 
    handleSetValues, 
    name, 
    isPassword = false, 
    hasIcon = false, 
    setHiddenPaswword }: Props) => {
    return (
        <View>
            {
                (hasIcon)
                    ? <Icon name='visibility' 
                    size={25} 
                    color={INPUT_COLOR2} 
                    onPress={setHiddenPaswword} 
                    style={styles.iconPassword} />
                    : null
            }
            <TextInput
                placeholder={placeholder} 
                keyboardType='default' 
                onChangeText={(value) => 
                    handleSetValues(name, value)} 
                    secureTextEntry={isPassword}
                style={styles.inputText}
            />
        </View>
    )
}
