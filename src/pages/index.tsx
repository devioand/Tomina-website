import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Reciepies from '../components/home/Reciepies';
import Field from '../components/home/Field';
import FeatureredReciepes from '../components/home/FeaturedReciepies';
import OurProduct from '../components/home/OurProducts';
import Header from '../components/home/Header';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Header />
      <Field />
      <OurProduct />
      <FeatureredReciepes />
      <Reciepies />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
