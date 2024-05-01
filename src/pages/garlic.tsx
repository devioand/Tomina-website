import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Description from '../components/Garlic/Description';
import Ratio from '../components/Garlic/Ratio';
import Video from '../components/Garlic/VideoSection';
import Hero from '../components/Recipes/Hero';
import Footer from '../components/Footer';

const GarlicPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero
        title={'40 Clove Garlic Chicken'}
        discription={
          "There's no such thing as 'too much garlic' withour 40 Clove Garlic Chicken."
        }
      />
      <Video />
      <Ratio />
      <Description />
      <Footer />
    </main>
  );
};

export default GarlicPage;

export const Head: HeadFC = () => <title>About Us</title>;
