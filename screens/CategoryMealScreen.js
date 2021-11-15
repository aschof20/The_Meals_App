import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'


const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen Screen</Text>
            <Text>{selectedCategory.title}</Text>
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

// Enables retrieval on information associated with the category id
CategoryMealScreen.navigationOptions = (navigationData)=>{
   // console.log(navigationData)
 
   const catId = navigationData.navigation.getParam('categoryId')

   const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
   return {
       headerTitle: selectedCategory.title,
   }

}

const styles = StyleSheet.create({screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}})
 

export default CategoryMealScreen