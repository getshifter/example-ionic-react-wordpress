import React from 'react';
import { useParams } from 'react-router';
import Layout from '../components/Layouts'
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <Layout name={name}>
        <ExploreContainer name={name} />
      </Layout>
  );
};

export default Page;
