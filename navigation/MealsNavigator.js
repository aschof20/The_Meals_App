import { createAppContainer  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealScreen from "../screens/CategoryMealScreen"
import MealDetailScreen from "../screens/MealDetailScreen"


/**
 * Telling the app which screens that will be able to be moved between in the stack
 */
const MealsNavigator = createStackNavigator({
    // Configure the screens we want to navigate between
    // Mapping the screens
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen

})

export default createAppContainer( MealsNavigator )