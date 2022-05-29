import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { MonoText } from './../StyledText';
import { Text, View } from './../Themed';
import { styles } from './styles';

export default function CounterCard({ title, subtitlePeriod, value }: { title: string, subtitlePeriod: string, value: number,  }) {
  return (
    <View style={[styles.container_card, styles.BoxShadow]}>
            <Text style={styles.Title}>{title}</Text>
            <View>
                <Text style={styles.Value}>{value}</Text>
            </View>
            <Text style={styles.Subtitle}>{subtitlePeriod}</Text>
    </View>
  );
}

