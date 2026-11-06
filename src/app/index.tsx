//นำเข้า  ภาพ  ข้อความ  วิว   จาก  ชื่อไลบรารี่
import { Image, StyleSheet, Text, View } from "react-native";

//ส่งออก เริ่มต้น   ฟังก์ชั่น   ชื่อฟังก์ชั่น
export default function App() {
  return (
    <View style={homeStyle.container}>
      {/* ใส่ข้อความ */}
      <Text style={homeStyle.title}>Phattharaphon</Text>

      {/* ใส่ภาพจากไฟล์ */}
      <Image
        source={require("@/assets/MeiMei.jpeg")}
        style={{
          width: 300, // กว้าง
          height: 300, // สูง
          borderRadius: 16, // มุมโค้ง
          borderWidth: 3, // ขอบหนา
          borderColor: "white", // สีขอบ
        }}
      />
      {/* ใส่รูปจากเว็บ */}
      <Image
        source={{ uri: "https://pbs.twimg.com/media/HVia5j_XgAASkRs?format=webp&name=large" }}
        style={{
          width: 300, // กว้าง
          height: 300, // สูง
          borderRadius: 16, // มุมโค้ง
          borderWidth: 3, // ขอบหนา
          borderColor: "white", // สีขอบ
        }}
      />

        {/* เรียงวัตถุแนวนอน ซ้ายไปขวา */}
        <View style={{flexDirection: "row"}}>
          <Text>Mei Mei</Text>
          <Text> Snow Leopard</Text>
        </View>

    </View>
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  container: {
    backgroundColor: "grey", // สีพื้นหลัง
    flex: 1, //ขยายเต็มที่
    alignItems: "center",
  },
  title: {
    color: "white", //สีอักษร
    fontSize: 32, //ขนาดอักษร
    fontWeight: 700, //ความหนาอักษร 100-900
    fontStyle: "italic", //เอียง
    textAlign: "center", //
  }
})