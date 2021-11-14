import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen Screen</Text>
            <Button title="Go Back to Categories" onPress={()=>{
                // Return to the top most screen in the stack - root screen
                props.navigation.popToTop()
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}})
 

export default MealDetailScreen