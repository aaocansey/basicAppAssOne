import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import profile from "./assets/bg.png";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
      <TouchableOpacity style={styles.icon}>
        <Feather name="camera" size={20} color="white" />
      </TouchableOpacity>
      <Image source={profile} style={styles.image} />
      </View>
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.labelOne}>School</Text>
          <Text style={styles.info}>Codetrain Africa</Text>
        </View>
        <View>
          <Text style={styles.labelOne}>Email Address</Text>
          <Text style={styles.info}>pjames@codetrainafrica.tech</Text>
        </View>
        <View>
          <Text style={styles.labelTwo}>Name</Text>
          <Text style={styles.info}>Patrick James</Text>
        </View>
        <View>
          <Text style={styles.labelTwo}>Nick Name</Text>
          <Text style={styles.info}>Foster</Text>
        </View>
        <View>
          <Text style={styles.labelTwo}>Emergency Contact</Text>
          <Text style={styles.info}>+1-987654321</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  imageBox:{
    alignItems:"center",
    justifyContent:"center"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 120,
    left: 70,
    backgroundColor: "#3e002f",
  },

  userInfo:{
    marginTop:50,
    paddingLeft:60,
    alignItems:"flex-start",
    justifyContent:"space-around",
    flex:1
  }, 
  info: {
    color:"#3e002f"
  },

  btn: {
    alignSelf:"center",
    marginTop:30,
    marginBottom:50,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
    borderRadius: 60,
    backgroundColor: "#3e002f",
  },
  btnText: {
    color: "white",
  },
});
