import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Hero from '../components/recipes/Hero';
import Product from '../components/recipes/Product';
import Recipes from '../components/recipes/Recipes';
import RecipesTip from '../components/recipes/RecipesTip';
import Footer from '../components/Footer';

const RecipesPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero
        title={'Our Recipes'}
        discription={'Proudly located in - Fatoum, Egypt'}
      />
      <Product />
      <Recipes />
      <RecipesTip />
      <Footer />
    </main>
  );
};

export default RecipesPage;

export const Head: HeadFC = () => <title>Recipes</title>;
