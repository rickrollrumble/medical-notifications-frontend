import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'styles';
import { appLogger } from 'tools/logger';

const API_KEY = '<api-key>';
const [MKE_LAT, MKE_LON] = [43.053289, -87.891151];

export function Weather(): React.JSX.Element {
    const [weather, setWeather] = useState<null | any>({});

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather',
            {
                params: {
                    lat: MKE_LAT,
                    lon: MKE_LON,
                    appid: API_KEY,
                    units: 'imperial',
                },
            }
        ).then((resp) => {
            console.log(resp.data);
            setWeather(resp.data);
        }).catch((error) => appLogger.error(error));
    }, []);

    return <View>
        <Text style={styles.section}>Temp: {weather.main?.temp}</Text>
        <Text  style={styles.section}>Feels like: {weather.main?.feels_like}</Text>
    </View>;
}
