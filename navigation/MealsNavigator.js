import { createAppContainer  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealScreen from "../screens/CategoryMealScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import Colors from '../constants/Colors'
import {Platform} from 'react-native'
/**
 * Telling the app which screens that will be able to be moved between in the stack
 */
const MealsNavigator = createStackNavigator({
    // Configure the screens we want to navigate between
    // Mapping the screens
    Categories: {screen: CategoriesScreen, navigationOptions: {
         
    }},
    CategoryMeals: {
        screen: CategoryMealScreen,

    },
    MealDetail: MealDetailScreen, 

},{
    //mode: 'modal' // Screen slides in from the bottom of the screen
    mode: 'card' // Default - slide in from right

,    defaultNavigationOptions:  {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor}
})

export default createAppContainer( MealsNavigator )

// defaultNavigationoptions are overridden by specificly defined options for respective elements in the stack