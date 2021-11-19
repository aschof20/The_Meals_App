import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { View, StyleSheet, Text } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = (props) => {


  const catId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) =>
      // Filter array for meals that correspond to the category id
      meal.categoryIds.indexOf(catId) >= 0,
  );

  if (displayedMeals.length === 0) {
    return <View style={styles.content}>
      <DefaultText>No Meals Found Please Check Your Filters </DefaultText>
    </View>;
  }
  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

// Enables retrieval on information associated with the category id
CategoryMealScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData)

  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});



export default CategoryMealScreen;
