import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Alert } from "react-native";
import { Button } from 'react-native-elements';

import Colors from "../../constants/Colors";
import LineChartCardBody from "../lineChartCardBody/view";
import { MonoText } from "./../StyledText";
import { Text, View } from "./../Themed";
import { styles } from "./styles";

export default function LineChartCard({
  title,
  subtitlePeriod,
  value,
}: {
  title: string;
  subtitlePeriod: string;
  value: number;
}) {
  return (
    <View style={[styles.container_card, styles.BoxShadow]}>
      <Text style={styles.Title}>{title}</Text>
      <View style={styles.ButtonsContainer}>
        <Button

          title="Monhtly"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
        <Button
          title="Daily"
          onPress={() => Alert.alert("Simple Button pressed")}
        />

      </View>
      <View style={styles.ButtonsContainer}>
      <LineChartCardBody></LineChartCardBody>
      </View>
      
    </View>
  );
}
