import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    padding: (width*6)/100,//width
  },

  topBar: {
    marginTop: (height*20)/100,//height
    padding: (width*6)/100,//width
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header: {
    marginTop: -(height*2)/100,//height

    padding: (width*6)/100,//width

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    // fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 24,
    lineHeight: (height*4)/100 ,//32,//height
    maxWidth: (width*40)/100,//160,//width
    marginVertical: (height*3)/100//40,//height
  },
});

export default styles;