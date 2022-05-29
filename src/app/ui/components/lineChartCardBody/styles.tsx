import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container_card: {
      //backgroundColor: '#FFFFFF',
      borderRadius: 10,
      width: '100%',
      height: 145,
      shadowColor: 'black',
      margin: 25,
    },
    Chart: {
      textAlign: 'center',

    },
    Title: {
      fontFamily: 'Montserrat',
      color: '#171725',
      textAlign: 'center',
      fontWeight: "700",
      paddingTop: 14,
    },
    BoxShadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    Subtitle: {
      fontFamily: 'Montserrat',
      color: '#999999',
      paddingBottom: 14,
      paddingTop: 14,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: "400",
    },
    Value: {
      fontFamily: 'Montserrat',
      color: '#6979F8',
      textAlign: 'center',
      fontSize: 48,
      fontWeight: "500",
    }
});