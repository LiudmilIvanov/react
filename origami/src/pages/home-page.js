import React from 'react';
import PageLayout from '../components/page-wrapper';
import Title from '../components/title';
import Origamis from '../components/origamis';

const HomePage = () => {

  return (
    <PageLayout>
      <Title title="Publications" />
      <Origamis />
    </PageLayout>
  )
}

export default HomePage;
