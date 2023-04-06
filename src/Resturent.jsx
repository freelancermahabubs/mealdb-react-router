import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ResturantCard from './ResturantCard';
import LoadingSpinner from './components/LoadingSpinner';

const Resturent = () => {
  const navigation = useNavigation();
  // console.log(navigation.state);
  if(navigation.state === 'loading'){
    return <LoadingSpinner/>
  }
  const {meals}= useLoaderData();
  // console.log(meals)

  return (
    <div className='my-container'>
    <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
     {
       meals.map(meal => <ResturantCard meal={meal} key={meal.idMeal}/>)
     }
    </div>
   </div>
  );
};

export default Resturent;