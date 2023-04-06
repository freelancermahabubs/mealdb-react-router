import React from 'react';
import { Link } from 'react-router-dom';

const ResturantCard = ({meal}) => {
  console.log(meal)
  return (
     <Link to ={`../../meal/${meal.idMeal}`}>
    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
          <img src={meal.strMealThumb} all="book cover" className='object-cover w-full h-56 md:h-64 xl:h-80'/>
          <div className='bg-black px-6 py-4 text-white bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-200 flex flex-col'>
            <p>{meal.strMeal}</p>
            <br />
            <p>{meal.strInstructions.substring(0, 45)}...</p>
            <br />
            <p className='mt-auto'>Category: {meal.strCategory}</p>
          </div>
        </div>
    </Link>
  );
};

export default ResturantCard;