import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  texto: {
    color: 'white',
    fontSize: 50,
    textAlign: 'right',
  },
  textoResultado: {
    color: '#C3BDBD',
    fontSize: 30,
    textAlign: 'right',
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default styles;
