import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = favData => {
    return {
        headerTitle: "Your Favourites",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    favData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    };
};

export default FavoritesScreen;