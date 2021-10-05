import React from 'react';
import PageLayout from '../components/page-wrapper';
import Title from '../components/title';
import Origamis from '../components/origamis';
import UserContext from '../Context';

class HomePage extends React.Component {
  static contextType = UserContext

  render() {
    return (
      <PageLayout>
        <Title title="Publications" />
        <Origamis />
      </PageLayout >
    )
  }

}

export default HomePage;
