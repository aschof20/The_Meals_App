import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import Colors from '../constants/Colors';
import React from 'react';
import { Platform, Text } from 'react-native';

const defaultStackNavOptions = {
  //mode: 'modal' // Screen slides in from the bottom of the screen
  //mode: 'card', // Default - slide in from right
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  }, headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor:
    Platform.OS === 'android' ? 'white' : Colors.primaryColor,

};



/**
 * Telling the app which screens that will be able to be moved between in the stack
 */
const MealsNavigator = createStackNavigator(
  {
    // Configure the screens we want to navigate between
    // Mapping the screens
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    //mode: 'modal' // Screen slides in from the bottom of the screen
    mode: 'card', // Default - slide in from right

    defaultNavigationOptions: defaultStackNavOptions
  },
);

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen,

}, {
  //mode: 'modal' // Screen slides in from the bottom of the screen
  //mode: 'card', // Default - slide in from right

  defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      }, tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }} >Meals</Text> : 'Meals'
    }
  },
  Favorites: {
    tabBarLabel: 'Favourites',
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => { return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />; }

    }, tabBarColor: Colors.accentColor,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }} >Favorites</Text> : 'Favorites'

  }

};

const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white', shifting: true, barStyle: {
      backgroundColor: Colors.primaryColor
    }
  }) : createBottomTabNavigator(tabScreenConfig,
    {
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'open-sans'
        },
        activeTintColor: Colors.accentColor
      }
    }
  );

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  //mode: 'modal' // Screen slides in from the bottom of the screen
  // mode: 'card', // Default - slide in from right
  /* navigationOptions: {
     drawerLable: "Text"
   },*/
  defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
  // COnfigure the screens
  MealsFav: {
    screen: MealsFavTabNavigator, navigationOptions: {
      drawerLabel: "Meals"
    }
  },
  Filters: {
    screen: FiltersNavigator, navigationOptions: {
      drawerLabel: "Filters"
    }
  }
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});



export default createAppContainer(MainNavigator);;

// defaultNavigationoptions are overridden by specificly defined options for respective elements in the stack
