import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../components/colors";
import LogoSVG from "../svg/SvgLogo";
import { Input, Icon, Button } from "@rneui/themed";

const Tips = () => {
  const [total, setTotal] = useState<string>("0");
  const [people, setPeople] = useState<string>("1");
  const [percent, setPercent] = useState<string>("0");
  const [tip, setTip] = useState<string>("5");
  const [totalPeople, setTotalPeople] = useState<string>("0");

  const calculateTips = () => {
    let _totalTips = parseFloat(total) * (parseFloat(percent) / 100);
    let _tipsPerPerson = _totalTips / parseFloat(people);
    if (isNaN(_tipsPerPerson) || _tipsPerPerson === Infinity) {
      _tipsPerPerson = 1;
    }

    setTip(_tipsPerPerson.toFixed(2).toString());
    let _accountPerPerson = parseFloat(total) / parseFloat(people);
    let totalAccount = _accountPerPerson + _tipsPerPerson;
    setTotalPeople(totalAccount.toFixed(2).toString());
  };

  useEffect(calculateTips, [total, people, percent]);
  const resetData = () => {
    setTotal("0");
    setPeople("1");
  };

  return (
    <View style={styles.background}>
      <View style={styles.svglogo}>
        <LogoSVG />
      </View>
      <View style={styles.body}>
        <Text style={styles.labeltext}>Bill</Text>
        <Input
          keyboardType="numeric"
          placeholder="0"
          defaultValue={total}
          onChangeText={setTotal}
          leftIcon={
            <Icon
              name="ios-logo-usd"
              type="ionicon"
              color="#A5BDBA"
              size={20}
            />
          }
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <Text style={styles.tip_label}>Select Tip %</Text>
        <View style={styles.btn_container}>
          <View style={{ width: "46%" }}>
            <Button
              title="5%"
              onPress={() => setPercent("5")}
              containerStyle={styles.btn}
              buttonStyle={styles.buttons}
              titleStyle={{ fontFamily: "Space-Bold", fontSize: 20 }}
            />
            <Button
              onPress={() => setPercent("15")}
              title="15%"
              containerStyle={styles.btn}
              buttonStyle={styles.buttons}
              titleStyle={{ fontFamily: "Space-Bold", fontSize: 21 }}
            />
            <Button
              onPress={() => setPercent("50")}
              title="50%"
              containerStyle={styles.btn}
              buttonStyle={styles.buttons}
              titleStyle={{ fontFamily: "Space-Bold", fontSize: 21 }}
            />
          </View>
          <View style={{ width: "46%" }}>
            <Button
              onPress={() => setPercent("10")}
              title="10%"
              containerStyle={styles.btn}
              buttonStyle={styles.buttons}
              titleStyle={{ fontFamily: "Space-Bold", fontSize: 21 }}
            />
            <Button
              onPress={() => setPercent("25")}
              title="25%"
              containerStyle={styles.btn}
              buttonStyle={styles.buttons}
              titleStyle={{ fontFamily: "Space-Bold", fontSize: 21 }}
            />
            <Button
              title="Custom"
              containerStyle={styles.btn}
              buttonStyle={[styles.buttons, styles.button_custom]}
              titleStyle={{
                fontFamily: "Space-Bold",
                fontSize: 21,
                color: "#4F6E6B",
              }}
            />
          </View>
        </View>
        <Text style={styles.tip_label}>Number of people</Text>
        <Input
          placeholder="0"
          defaultValue={people}
          onChangeText={setPeople}
          leftIcon={
            <Icon name="user" type="font-awesome" color="#A5BDBA" size={20} />
          }
          inputStyle={styles.inputStyle}
          inputContainerStyle={[styles.inputContainerStyle, styles.margin]}
        />

        <View style={styles.result_container}>
          <View style={{ margin: 10, alignItems: "flex-start" }}>
            <View style={{ margin: 10 }}>
              <Text style={styles.primary_text}>Tip Amount</Text>
              <Text style={styles.secondary_text}>/ person</Text>
            </View>
            <View style={{ margin: 10 }}>
              <Text style={styles.primary_text}>Total</Text>
              <Text style={styles.secondary_text}>/ person</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={styles.first_numbers}>${tip}</Text>
            <Text style={styles.first_numbers}>${totalPeople}</Text>
            <Button
              onPress={() => resetData()}
              title="RESET"
              containerStyle={styles.container_reset}
              buttonStyle={styles.button_reset}
              titleStyle={{
                fontFamily: "Space-Bold",
                fontSize: 24,
                color: "#00474B",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tips;

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.lightgrayishcyan,
  },
  body: {
    backgroundColor: colors.white,
    height: "80%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  svglogo: {
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    paddingTop: 30,
  },
  labeltext: {
    fontFamily: "Space-Bold",
    fontSize: 14,
    paddingLeft: 25,
    paddingTop: 15,
    color: colors.darkgrayishcyan,
  },
  inputContainerStyle: {
    margin: 10,
    backgroundColor: colors.verylightgrayishcyan,
    borderBottomColor: "transparent",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputStyle: {
    textAlign: "right",
    fontFamily: "Space-Bold",
    fontSize: 24,
    color: colors.verydarkcyan,
  },
  tip_label: {
    fontFamily: "Space-Bold",
    paddingLeft: 25,

    color: colors.darkgrayishcyan,
  },
  btn_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    margin: 5,
    borderRadius: 5,
  },
  buttons: {
    backgroundColor: colors.verydarkcyan,
  },
  button_custom: {
    backgroundColor: colors.verylightgrayishcyan,
  },
  margin: {
    marginTop: 0,
  },
  result_container: {
    backgroundColor: colors.verydarkcyan,
    height: "36%",
    width: "90%",
    borderRadius: 30,
    marginLeft: 20,
    flexDirection: "row",
  },
  primary_text: {
    fontFamily: "Space-Bold",
    color: colors.white,
    fontSize: 22,
  },
  secondary_text: {
    color: colors.grayishcyan,
    fontFamily: "Space-Bold",
    fontSize: 14,
  },
  first_numbers: {
    fontSize: 25,
    fontFamily: "Space-Bold",
    margin: 20,
    color: colors.strongcyan,
  },
  container_reset: {
    width: "190%",
  },
  button_reset: {
    backgroundColor: colors.strongcyan,
    borderRadius: 5,
    marginRight: 10,
  },
});
