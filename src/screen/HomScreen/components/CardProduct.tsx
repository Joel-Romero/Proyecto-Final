import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';

interface Props {
    product: Product;
    changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const CardProduct = ({ product, changeStockProduct }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.contentCard}>
                <Image source={{
                    uri: product.pathImage
                }}
                    style={styles.imageCard} />
                <View>
                    <Text style={styles.titleCard}>{product.name}</Text>
                    <Text style={styles.titleCard}>Costo: ${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.iconCard}>
                    <Icon
                        name='add'
                        size={50}
                        color='white'
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <ModalProduct
                isVisible={showModal}
                setShowModal={() => setShowModal(!showModal)}
                product={product}
                changeStockProduct={changeStockProduct} />
        </View>
    )
}
