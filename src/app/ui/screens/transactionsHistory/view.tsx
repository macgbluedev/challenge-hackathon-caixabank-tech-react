import React from "react";
import { styles } from "./styles";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import CounterCard from "../../components/counterCard/view";
import LineChartCard from "../../components/lineChartCard/view";

export default function TransactionsHistoryScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <View style={styles.card_container}>
        <CounterCard
          title="Transactions"
          subtitlePeriod="Last Month"
          value={35}
        ></CounterCard>
        <CounterCard
          title="Transactions"
          subtitlePeriod="Today"
          value={3}
        ></CounterCard>
      </View>
      <View style={styles.card_container}>
        <LineChartCard
        title="Transactions"
        subtitlePeriod="Last Month"
        value={35}></LineChartCard>
      </View>
    </View>
    
  );
}
