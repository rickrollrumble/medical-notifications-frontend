/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { styles } from 'styles';
import { hasLocationPermission } from 'system/permissions/LocationPermission';
export function Weather(): React.JSX.Element {
    const [location, setLocation] = useState<GeoPosition | null>(null);
    const [highAccuracy, setHighAccuracy] = useState(true);
    const [forceLocation, setForceLocation] = useState(true);
    const [useLocationManager, setUseLocationManager] = useState(false);
    const [locationDialog, setLocationDialog] = useState(true);

    useEffect(() => {
        async () => {
            const hasPermission = await hasLocationPermission();

            if (!hasPermission) { return true; }

            Geolocation.getCurrentPosition(
                /**
                 * callback function for when fetching current position is successful
                 * @param position
                 */
                (position) => setLocation(position),
                /**
                 * callback function for when fetching current position failed
                 */
                () => setLocation(null),
                /**
                 * calling options
                 */
                {
                    accuracy: { android: 'high' },
                    enableHighAccuracy: highAccuracy,
                    distanceFilter: 0,
                    forceRequestLocation: forceLocation,
                    forceLocationManager: useLocationManager,
                    showLocationDialog: locationDialog,
                }
            );
        };
    }, [forceLocation, highAccuracy, locationDialog, useLocationManager]);

    return <View>
        <Text style={styles.section}>Latitude: {location?.coords?.latitude || ''}</Text>
        <Text style={styles.section}>Longitude: {location?.coords?.longitude || ''}</Text>
        <Text style={styles.section}>Heading: {location?.coords?.heading}</Text>
        <Text style={styles.section}>Accuracy: {location?.coords?.accuracy}</Text>
        <Text style={styles.section}>Altitude: {location?.coords?.altitude}</Text>
        <Text style={styles.section}>Altitude Accuracy: {location?.coords?.altitudeAccuracy}</Text>
        <Text style={styles.section}>Speed: {location?.coords?.speed}</Text>
        <Text style={styles.section}>Provider: {location?.provider || ''}</Text>
        <Text style={styles.section}>
            Timestamp:{' '}
            {location?.timestamp
                ? new Date(location.timestamp).toLocaleString()
                : ''}
        </Text>
    </View>;
}
