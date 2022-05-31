import React, {useState} from "react";
import {View, TextInput} from "react-native";


export default function search () {

    const [city, setCity] = useState('Rennes')

    return (
        <View>
            <TextInput style={{borderColor: 'gray', borderWidth: 1, marginTop: 5}}
            value={city}
            onChangeText={setCity} />
        </View>
    )
}