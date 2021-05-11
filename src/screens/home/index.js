import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Icon name='home' color='#414141' size={24} />
        </View>
    );
}

export default memo(Home);