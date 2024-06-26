import { PermissionsAndroid, Platform, ToastAndroid } from 'react-native';

/**
 * checks for whether the AndroidManifest.xml has the ACCESS_FINE_LOCATION permission set.
 * if it does not, it requests permission.
 * @returns a boolean indicating whether the app has location permissions.
 */
export const hasLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android' && Platform.Version < 23) { return true; }
    const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) { return true; }

    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) { return true; }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show(
            'Location permission denied by user',
            ToastAndroid.LONG
        );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show(
            'Location permission revoked by user',
            ToastAndroid.LONG,
        );
    }
    return false;
};
