import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/recipes/Hero";
import Product from "../components/recipes/Product";
import RecipesTip from "../components/recipes/RecipesTip";
import Recipes from '../components/recipes/Recipes'

const RecipesPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Hero title={"Our Recipes"} discription={'Proudly located in - Fatoum, Egypt'} />
            <Product />
            <Recipes />
            <RecipesTip />
        </main>
    );
};

export default RecipesPage;

export const Head: HeadFC = () => <title>Recipes</title>;