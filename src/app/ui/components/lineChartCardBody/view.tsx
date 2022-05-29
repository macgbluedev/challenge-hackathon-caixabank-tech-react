import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import {LineChart} from "react-native-chart-kit";
import { Text, View } from '../Themed';
import { styles } from './styles';

const screenWidth = Dimensions.get("window").width/1.5;

const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(105, 121, 248, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Months"] // optional
  };

export default function LineChartCardBody({
  titleAxisX,
  titleAxisY,
}: {
  titleAxisX: string;
  titleAxisY: string;
}) {
  return (
    // <View style={[styles.container_card, styles.BoxShadow]}>
    //         <Text style={styles.Title}>{title}</Text>

            <LineChart
            data={data}
            width={screenWidth}
            verticalLabelRotation={30}
            height={120}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            />
)
}

