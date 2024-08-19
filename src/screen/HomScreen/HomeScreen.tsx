import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';
import { SECUNDARY_COLOR } from '../../commons/constants';
import { styles } from '../../theme/appTheme';
import { ModalCard } from './components/ModalCar';


//interface - producto
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Car {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
}

export const HomeScreen = () => {
    const products: Product[] = [
        { id: 1, name: 'Play 4', price: 399.99, stock: 5, pathImage: 
        'https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$' },
        { id: 2, name: 'Play 4 Slim', price: 299.99, stock: 5, pathImage: 
        'https://assets.yoreparo.com/18219/NicePng_ps4-png_160759-e1682114720976.png' },
        { id: 3, name: 'Play 4 Pro', price: 499.99, stock: 5, pathImage: 
        'https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-product-thumbnail-01-en-14sep21?$facebook$' },
        { id: 4, name: 'Play 5', price: 799.99, stock: 5, pathImage: 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/1200px-PlayStation_5_and_DualSense_with_transparent_background.png' },
        { id: 5, name: 'Play 5 Slim', price: 599.99, stock: 5, pathImage: 
        'https://static.eshop.t-mobile.cz/resize-image?f=cz/6YhZJDqk1QGabmjFdCh1QitV1pkLBL.png' },
        { id: 6, name: 'VR2', price: 599.99, stock: 5, pathImage: 
        'https://gmedia.playstation.com/is/image/SIEPDC/PSVR2-thumbnail-01-en-22feb22?$facebook$' },
        { id: 7, name: 'PS Vita', price: 149.99, stock: 5, pathImage: 
        'https://catalogo.claro.com.ec/uploads/imgs/productos/sony-ps-vita/negro/zoom/02-sony-ps-vita-negro-side.png' },
        { id: 8, name: 'Play 5 Portal', price: 359.99, stock: 5, pathImage: 
        'https://www.mainzempire.com.sg/cdn/shop/files/playstationportal_04_300x300.webp?v=1714408786' },
        { id: 9, name: 'Play 2 slim', price: 79.99, stock: 5, pathImage: 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/PS2-Slim-Console-Set.png/806px-PS2-Slim-Console-Set.png' },
        { id: 13, name: 'Play 2', price: 99.99, stock: 5, pathImage: 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PlayStation_2.png/366px-PlayStation_2.png' },
        { id: 14, name: 'Play 3 Slim', price: 199.99, stock: 5, pathImage: 
        'https://www.jvgelectronics.in/storage/product/1634634323img2.png' },
        { id: 15, name: 'Play 3', price: 299.99, stock: 5, pathImage: 
        'https://static.wikia.nocookie.net/square/images/c/cf/PS3_Original.png/revision/latest?cb=20170228074538' },
        { id: 16, name: 'Read dead redeption', price: 39.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/KXC7-83RN460020-medium_w640_h480_q75-reddeadredemptionps4-1691661758.webp' },
        { id: 17, name: 'Chivalry', price: 39.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/JQCP-YJ3J311084-medium_w640_h480_q75-ps4chivalry2do-1614069294.webp' },
        { id: 18, name: 'Asassins Cree Valhalla', price: 49.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/0MCD-WZRP259647-medium_w640_h480_q75-ps4assasinscreedvalhalla-1602572974.webp' },
        { id: 19, name: 'The last of us Remaster', price: 29.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/VY3C-N4W059697-medium_w640_h480_q75-VY3CN4W059697-original-portada15943-1537341979.webp' },
        { id: 20, name: 'The last of us II', price: 49.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/0MCD-5Q3X241467-medium_w640_h480_q75-ps4-the-last-of-us-parte-ii-1569422850.webp' },
        { id: 21, name: 'Beyond', price: 49.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/NMCQ-DKWW527260-medium_w640_h480_q75-bge20ps4-portada-1723102381.webp' },
        { id: 22, name: 'New Borderlands', price: 29.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/2MC4-Z3WJ526944-medium_w640_h480_q75-portadantbps5-1722870283.webp' },
        { id: 23, name: 'Weiro West', price: 19.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/5RC8-2QR3451040-medium_w640_h480_q75-weirdwests5-1684485024.webp' },
        { id: 24, name: 'Sker Ritual', price: 79.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/1MC2-P2X0512223-medium_w640_h480_q75-skerritualps5-1717163633.webp' },
        { id: 25, name: 'Greed fall', price: 89.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/Y3C6-97M5476164-medium_w640_h480_q75-greedfallgoldps5-1706777046.webp' },
        { id: 26, name: 'Returnal', price: 49.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/MYC3-2Y80303534-medium_w640_h480_q75-ps5returnal-1609843829.webp' },
        { id: 27, name: 'Brats', price: 59.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/ZJC2-31DM410691-medium_w640_h480_q75-bratzps5-1661157486.webp' },
        { id: 28, name: 'Thymesia', price: 29.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/1MCQ-1WXK397509-medium_w640_h480_q75-5056208814388-1653994753.webp' },
        { id: 29, name: 'Greak', price: 39.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/0MCW-59ZJ476450-medium_w640_h480_q75-greakps5-1707122729.webp' },
        { id: 30, name: 'Dead Space', price: 29.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/D9C5-0QNM416558-medium_w640_h480_q75-deadspaceps5-1664893173.webp' },
        { id: 31, name: 'Graven', price: 29.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/NMCQ-ZRWX510797-medium_w640_h480_q75-ps5graven-1715866418.webp' },
        { id: 32, name: 'Pac-Man', price: 49.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/2MCP-WKJQ407540-medium_w640_h480_q75-ps5pacmanworld-1658401025.webp' },
        { id: 33, name: 'Banisher', price: 59.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/ZJC2-00MR457274-medium_w640_h480_q75-banishersps5-1688633902.webp' },
        { id: 34, name: 'Last Faith', price: 69.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/89CR-XX13479808-medium_w640_h480_q75-lastfaithps5-1709814579.webp' },
        { id: 35, name: 'Bob esponja', price: 79.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/JQCP-168M464648-medium_w640_h480_q75-bobesponjaps5-1696840683.webp' },
        { id: 36, name: 'Sport', price: 19.99, stock: 5, pathImage: 
        'https://static.xtralife.com/conversions/1MC2-PWQ4514524-medium_w640_h480_q75-looneytunesps4-1718790658.webp' },
    ];


    const [productsState, setProductsState] = useState(products);
    const [car, setCar] = useState<Car[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const changeStockProduct = (idProduct: number, quantity: number) => {
        const updateStock = productsState.map(product => product.id === idProduct
            ? { ...product, stock: product.stock - quantity }
            : product);
        setProductsState(updateStock);
        addProduct(idProduct, quantity);
    };

    const addProduct = (idProduct: number, quantity: number) => {
        const product = productsState.find(product => product.id === idProduct);
        if (!product) return;
        const existingProductIndex = car.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            const updatedCar = [...car];
            updatedCar[existingProductIndex].totalQuantity += quantity;
            setCar(updatedCar);
        } else {
            const newProductCar: Car = {
                id: product.id,
                name: product.name,
                price: product.price,
                totalQuantity: quantity
            };
            setCar([...car, newProductCar]);
        }
    };

    const zeroCar = () => {
        setCar([]);
    };

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/564x/4e/22/dc/4e22dcf0d8f5e9a27ade7cfb5dfae037.jpg' }} 
            style={styles.background2}
        >
        <View>
            <View style={styles.contentHeaderHome}>
                <TitleComponent title='Nuestros Productos' />
                <View style={styles.iconCardHome}>
                    <Text style={styles.textIconCard}>{car.length}</Text>
                    <TouchableOpacity
                        onPress={() => setShowModal(!showModal)}
                        disabled={car.length === 0}
                    >
                        <Icon
                            name='shopping-cart'
                            size={33}
                            color={car.length === 0 ? '#d3d3d3' : SECUNDARY_COLOR}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>
            <ModalCard
                isVisible={showModal}
                car={car}
                setShowModal={() => setShowModal(!showModal)}
                zeroCar={zeroCar}
            />
        </View>
        </ImageBackground>
        
    );
};

