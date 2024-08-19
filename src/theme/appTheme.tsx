import { StyleSheet } from "react-native";
import {INPUT_COLOR, INPUT_COLOR2, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    globalTitle: { //DISEÑO DE NICIAR SECION Y REGISTRAR
        color:'white',
        fontSize: 17,
        paddingHorizontal: 25,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: { //ANCHURA DE CAMPOS
        paddingHorizontal: 20,
        paddingTop: 40
    
    },
    titleHeaderBody: {//DISELO DE BIENVENIDO A PLAYSTATION
        fontSize: 20,
        paddingHorizontal: 22,
        fontWeight: 'bold',
        color: SECUNDARY_COLOR
    },
    textBody: { //DISELO DE EXPLORAR CON PLAYSTATION
        fontSize: 15,
        paddingHorizontal: 22,
        color: SECUNDARY_COLOR
    },
    inputText: { //DISEÑO DE CAMPOS
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    contentInput: { //POSICION DE CAMPOS
        marginTop: 50,
        gap: 25
    },
    button: { //POSICION DEL BOTON INICIAR SESION
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: { //DISEÑO DE TEXTO DE INICIO DE SESION
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: { //DISEÑO DEL ICONO DEL OJO
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 10
    },
    textRedirection: { //DISEÑO DE REGISTRATE AHORA CON PLAY STATION
        marginTop: 30,
        fontSize: 15,
        color: SECUNDARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    }, //----------------------------------------------------------consolas--------------------------------------------------------------------------------
    contentCard: {  //cuadro de los productos
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderStyle: 'solid',
        borderColor: PRIMARY_COLOR,
        borderWidth: 1,
        marginBottom: 30
    },
    titleCard: {  //Tamaño de las letras del producto
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        fontSize: 15,
    },
    imageCard: {//Tamaño de la imagen de produto
        width: 70,
        height: 70
    },
    iconCard: {  //Posicion del icono de mas
        flex: 1,
        alignItems: 'flex-end'
    },
    contentPrincipal: { //Cuadro del producto
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    contentModal: { //DISEÑO DE VENTANA PRODUCTO
        padding: 25,
        backgroundColor:'#102252' ,
    },
    headModal: {  //LINEA DE IMAGEN PRODUCTO
        flexDirection: 'row',
    },
    titleModal: { //TITULO DEL CUADRO PRODUCTO
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    imageModal: { //TAMAÑO DE IMAGEN DE CUADRO DE PRODUCTO
        width: 100,
        height: 100,
    },
    contentQuantity: { //BOTON DE + Y -
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: { //DISEÑO DE BOTON + Y -
        width:50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
    },
    textButtonQuantity: {//DISEÑO DE BOTON + Y -
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    textQuantity: { //DISEÑO DE TEXTO TOTAL
        fontSize: 30,
        color: PRIMARY_COLOR,
        textAlign: 'center'
    },
    buttonAddCar: {//DISEÑO DE BOTON AGREGAR CRRITO
        marginTop: 45,
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center'
    },
    textButtonAddCar: {//DISEÑO DE TEXTO BOTON AGREGAR CRRITO
        color: 'black',//no toparrrrrrrrrrrrrrrrrrrrrrrrrrrrr
        fontWeight: 'bold'
    },
    messageStock: {
        fontSize: 20,
        fontWeight: 'bold',
        color: INPUT_COLOR2,
        textAlign: 'center'
        
    },
    contentHeaderHome: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCardHome: { //DISEÑO TITULO PRODUCTOS
        flex: 0.5,
        alignItems: 'flex-end',
        paddingHorizontal: 40
    },
    textIconCard: { //ICONO DE ARRIBA DEL ICONO DE CARRITO DE COMPRAS
        borderRadius: 20,
        paddingHorizontal: 10,
        fontSize: 23,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '95%',
    },
    
    headerInformation: { //DISEÑO DE LAS TERAS DE NUESTROS PRODUCTOS
        color:PRIMARY_COLOR,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 200,
        paddingVertical:5,
        
    },
    textInformation: {
        marginHorizontal: 10,
        color:INPUT_COLOR2
    
    },
    background1: { //DISEÑO DE IMAGEN DE FONDO
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background2: {
        backgroundColor:'blue'
    },
    textTotalPay:{
        marginTop:10,
        fontSize:20,
        fontWeight:'bold',
        color:PRIMARY_COLOR
        
    }

});