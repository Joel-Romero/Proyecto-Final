import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR } from '../../../commons/constants';

interface Car {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
}

interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    car: Car[];
    zeroCar: () => void;
}

export const ModalCard = ({ isVisible, car, setShowModal, zeroCar }: Props) => {
    const { width, height } = useWindowDimensions();

    const totalPay = (): number => {
        return car.reduce((total, product) => total + product.price * product.totalQuantity, 0);
    };

    const descTotal = totalPay() * 0.10; 
    const descFinal = totalPay() - descTotal;

    const handleSendInfo = () => {
        zeroCar();
        setShowModal();
    };


    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={[styles.contentPrincipal, { width, height }]}>
                <View style={[styles.contentModal, { width: width * 0.95, height: height * 0.95 }]}>
                    <View style={styles.headModal}>
                        <Text style={styles.titleModal}>Tus Productos</Text>
                        <View style={styles.iconCard}>
                            <Icon name='close' size={30} color='white' onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={[styles.headerTable, { justifyContent: 'space-around', width: '100%' }]}>
                        <Text style={styles.textInformation}>
                            <Icon name='inventory-2' size={40} color='white' /></Text>
                        <Text style={styles.textInformation}>
                            <Icon name='payments' size={40} color='white' /></Text>
                        <Text style={styles.textInformation}>
                            <Icon name='numbers' size={40} color='white' /></Text>
                        <Text style={styles.textInformation}>
                            <Icon name='equalizer' size={40} color='white' /></Text>
                    </View>
                    <FlatList
                        data={car}
                        renderItem={({ item }) => (
                            <View style={styles.headerTable} key={item.id}>
                                <Text style={{ marginHorizontal: 10, color: PRIMARY_COLOR }}>{item.name}</Text>
                                <View style={styles.headerInformation}>
                                    <Text style={{ marginHorizontal: 10, color: PRIMARY_COLOR }}>
                                        {item.price.toFixed(2)}</Text>
                                    <Text style={{ marginHorizontal: 60, color: PRIMARY_COLOR }}>
                                        {item.totalQuantity}</Text>
                                    <Text style={{ marginHorizontal: 2, color: PRIMARY_COLOR }}>
                                        {(item.price * item.totalQuantity).toFixed(2)}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.textTotalPay}>Total a pagar: ${totalPay().toFixed(2)}</Text>
                        <Text style={styles.textTotalPay}>Total con el decuento: ${descFinal.toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity onPress={handleSendInfo} style={styles.buttonAddCar}>
                        <Text style={styles.textButtonAddCar}>Realizar Compra</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};