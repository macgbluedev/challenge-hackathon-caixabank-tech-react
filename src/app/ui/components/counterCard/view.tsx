import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { MonoText } from './../StyledText';
import { Text, View } from './../Themed';
import { Card } from "@rneui/themed";
import { styles } from './styles';

export default function CounterCard({ title, subtitlePeriod, value }: { title: string, subtitlePeriod: string, value: number,  }) {
  return (
    <View>
        <Card>
            <Card.Title>{title}</Card.Title>
            <View>
                <Text style={styles.text_value}>{value}</Text>
            </View>
            <Text>{subtitlePeriod}</Text>
        </Card>
    </View>
  );
}

