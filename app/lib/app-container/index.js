import React from 'react';
import HeaderBlock from 'lib/header-block';
import FooterBlock from 'lib/footer-block';

import SidePane from 'lib/side-pane';
import ContentPane from 'lib/content-pane';


export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <HeaderBlock></HeaderBlock>
        <SidePane></SidePane>
        <ContentPane></ContentPane>
        <FooterBlock></FooterBlock>
      </div>
    );
  }
};