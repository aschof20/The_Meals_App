import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from "../screens/FavoritesScreen";

import Colors from '../constants/Colors';
import React from 'react';
import { Platform } from 'react-native';

/**
 * Telling the app which screens that will be able to be moved between in the stack
 */
const MealsNavigator = createStackNavigator(
  {
    // Configure the screens we want to navigate between
    // Mapping the screens
    Categories: { screen: CategoriesScreen, navigationOptions: {} },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    //mode: 'modal' // Screen slides in from the bottom of the screen
    mode: 'card', // Default - slide in from right

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  },
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      }, tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    tabBarLabel: 'Favourites',
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => { return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />; }

    }, tabBarColor: Colors.accentColor
  }

};

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: 'white', shifting: true
}) : createBottomTabNavigator(tabScreenConfig,
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);



export default createAppContainer(MealsFavTabNavigator);;

// defaultNavigationoptions are overridden by specificly defined options for respective elements in the stack
