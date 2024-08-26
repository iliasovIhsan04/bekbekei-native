import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SettingsPage from "./SettingsPage";
import AdditionalInformation from "./AdditionalInformation";
import HelpToPage from "./HelpToPage";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexDirection: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.profile_block}>
          <Text style={[styles.header_name_profile, styles.container]}>
            Добро пожаловать,
          </Text>
          <View style={styles.profile_box}>
            <View style={styles.container}>
              <View style={styles.profile_grid_block}>
                <View style={styles.grid_item}>
                  <MaterialIcons name="person" size={24} color={"#94D36D"} />
                  <Text style={styles.text16}>Мои данные</Text>
                </View>
                <View style={styles.grid_item}>
                  <MaterialIcons
                    name="location-pin"
                    size={24}
                    color={"#12C6EE"}
                  />
                  <Text style={styles.text16}>Мои адреса</Text>
                </View>
                <View style={styles.grid_item}>
                  <MaterialIcons
                    name="shopping-bag"
                    size={24}
                    color={"#FE65AE"}
                  />
                  <Text style={styles.text16}>История {"\n"} покупок</Text>
                </View>
                <View style={styles.grid_item}>
                  <MaterialIcons name="favorite" size={24} color={"#F9671C"} />
                  <Text style={styles.text16}>Избранные товары</Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", gap: 20, marginTop: 20 }}>
                <SettingsPage />
                <AdditionalInformation />
                <TouchableOpacity
                  onPress={() => navigation.navigate("WhoSalesPage")}
                >
                  <Text style={styles.block_title}>Оптовая продажа</Text>
                  <View style={styles.application_person_box}>
                    <Text style={styles.settings_all_title}>
                      Стать контрагентом
                    </Text>
                    <Image
                      source={require("../assets/image/more-left.svg")}
                      style={styles.image_addtional}
                    />
                  </View>
                </TouchableOpacity>
                <HelpToPage />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
