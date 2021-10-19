import React from "react"
import { Container, Header, Content, Text, Left, View } from "native-base"
import { FontAwesome, Feather } from "@expo/vector-icons"
import { screenNames } from "../utils/screens"

import { StyleSheet } from "react-native"

import { colors } from "../utils/colors"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler"
import Button from "../components/Button"

export default function SettingsScreen() {
  const navigation = useNavigation()

  let menu: any = null

  return (
    <Container>
      <Header
        iosBarStyle="light-content"
        androidStatusBarColor={colors.black}
        style={{ backgroundColor: colors.pink }}
      >
        <Left style={{ flexDirection: "row", alignItems: "center" }}>
          <Button
            transparent
            onPress={() => navigation.navigate("TabNavigation")}
          >
            <Feather name="arrow-left" color={colors.white} size={24} />
          </Button>

          <Text
            style={{
              fontWeight: "bold",
              color: colors.white,
            }}
          >
            Settings
          </Text>
        </Left>
      </Header>
      <Content>
        <ScrollView style={{ padding: 5 }}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.UpdateInfo)}
              style={styles.rowBox}
            >
              <Feather
                name="user"
                size={30}
                color={colors.pink}
                style={{
                  width: 50,
                }}
              />
              <Text style={styles.textRow}>Update account information</Text>
            </TouchableOpacity>

            <Feather
              name="chevron-right"
              size={25}
              color={colors.pink}
              style={{}}
            />
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.Billing)}
              style={styles.rowBox}
            >
              <FontAwesome
                name="money"
                size={30}
                color={colors.pink}
                style={{
                  width: 50,
                }}
              />
              <Text style={styles.textRow}>Billing information</Text>
            </TouchableOpacity>
            <Feather
              name="chevron-right"
              size={25}
              color={colors.pink}
              style={{}}
            />
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.ChangePassword)}
              style={styles.rowBox}
            >
              <Feather
                name="lock"
                size={30}
                color={colors.pink}
                style={{
                  width: 50,
                }}
              />
              <Text style={styles.textRow}>Change password</Text>
            </TouchableOpacity>
            <Feather
              name="chevron-right"
              size={25}
              color={colors.pink}
              style={{}}
            />
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.DeleteAccount)}
              style={styles.rowBox}
            >
              <Feather
                name="trash"
                size={30}
                color={colors.pink}
                style={{
                  width: 50,
                }}
              />
              <Text style={styles.textRow}>Delete account</Text>
            </TouchableOpacity>
            <Feather
              name="chevron-right"
              size={25}
              color={colors.pink}
              style={{}}
            />
          </View>
        </ScrollView>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  displayNone: {
    opacity: 0,
    height: 0,
    flex: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.pinkOpact,
    borderRadius: 5,
    shadowColor: colors.pink,
    overflow: "hidden",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 3,
  },
  rowBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textRow: {
    color: colors.blackOpact,
    fontSize: 17,
    fontWeight: "bold",
  },
})
