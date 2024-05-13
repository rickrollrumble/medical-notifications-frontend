import React, { ReactElement, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'styles';

export type PersonProps = {
    firstName: string,
    middleName: string,
    lastName: string,
    unit: string,
    role: string,
    primaryContact: string,
    dob: Date,
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    zipCode: number,
    emergencyContact: {
        contactName: string,
        contactNumber: string,
        relation: string,
    }[]
}

export function Profile(): ReactElement {
    const [person] = useState({
        firstName:'Jane',
        middleName: 'Person',
        lastName: 'Doe',
        unit: 'Neurology ICU',
        role: 'Nurse',
        dob: '1997-01-02',
    });
    return (
        <View>
            <Text style={styles.section}>
                <Text style={styles.bold}>Name:</Text>{person.firstName} {person.middleName} {person.lastName}
                </Text>
            <Text style={styles.section}>
                <Text style={styles.bold}>Unit:</Text>{person.unit}
                </Text>
            <Text style={styles.section}>
                <Text style={styles.bold}>Role:</Text>{person.role}
                </Text>
            <Text style={styles.section}>
                <Text style={styles.bold}>Date-of-Birth:</Text>{person.dob}
                </Text>
        </View>
    );
}
