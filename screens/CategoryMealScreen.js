import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealScreen = (props) => {


  const catId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) =>
      // Filter array for meals that correspond to the category id
      meal.categoryIds.indexOf(catId) >= 0,
  );

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



export default CategoryMealScreen;
