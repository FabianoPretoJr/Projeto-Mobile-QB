import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#581C79',
    },

    gradient: {
        flex: 1,
        padding: 200,
        height:300,
    },

    bgImage: {
        flex: 1,
        marginLeft:-10
    },

    text:{
      color: '#D9AE02',
      fontSize:24,
      marginTop:100,
      marginLeft:30
    },

    input: {
        height: 54,
        width:360,
        backgroundColor: 'transparent',
        borderColor: '#4e4',
        borderTopColor:'#4e4',
        borderBottomColor:'#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 45,
        marginLeft:30,
        marginBottom: 10,
    },

    button:{
      backgroundColor:'#D9AE02',
      height:70,
      width:350,
      justifyContent:'center',
      marginLeft:45,
      marginTop:200,
      borderRadius:6,
      opacity: 10,
    },

    textButton:{
      fontSize:20,
      marginLeft:130,
      color:'#FFFFFF',
    },

    logo:{
      justifyContent:'center',
      width:100,
      height:100,
      marginLeft:165,
      marginTop:30
    }

    // inputGroup: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },

    // inputBlock: {
    //     width: '48%',
    // },

    // input: {
    //     height: 54,
    //     backgroundColor: '#FFF',
    //     borderRadius: 8,
    //     justifyContent: 'center',
    //     paddingHorizontal: 16,
    //     marginTop: 4,
    //     marginBottom: 16,
    // },
});

export default styles;