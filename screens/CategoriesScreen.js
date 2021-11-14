import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CategoriesScreen = props => {
// Props has a whole lot of information/ objects attached to it
    //console.log(props)

    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title="Go To Meals" onPress={()=> {
            props.navigation.navigate({routeName: 'CategoryMeals'})
               // Use .push to go to the SAME screen
                //props.navigation.push('Categories')
            // Replace current screen in the stack
            //props.navigation.replace(  'CategoryMeals' )
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}})
 

export default CategoriesScreen
