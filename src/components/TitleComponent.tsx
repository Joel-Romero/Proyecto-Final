import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    const { height, width } = useWindowDimensions();
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
                ...styles.globalTitle,
                height: height * 0.12,
                textAlign: 'center', 
            }}>
                {title}
            </Text>
        </View>
    );
}
