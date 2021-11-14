import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen Screen</Text>
            <Button title="Go To Details" onPress={()=> {
                // routeName is from those setup in MealsNavigator.js
                props.navigation.navigate({routeName: 'MealDetail'})
            }}/>
            <Button title="Go Back" onPress={()=>{
                // goBack() can be used in all navigators
                //props.navigation.goBack()

                // Can only be used in a stack navigator
                props.navigation.pop()
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}})
 

export default CategoryMealScreen