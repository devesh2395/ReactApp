import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen } from './Constants'

const Start = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                <Text style={{ color: 'white', fontSize: 40, marginBottom: 40, marginTop: 20 }}>Choose Login Options!</Text>
                <Btn bgColor={darkGreen} textColor='white' btnLabel="Continue with Phone" Press={() => props.navigation.navigate("Phone")} />
                <Btn bgColor={darkGreen} textColor='white' btnLabel="Continue with Truecaller" Press={() => props.navigation.navigate("Truecaller")} />
            </View>
        </Background>
    )
}

export default Start