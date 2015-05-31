import React from 'react';

export default class ContentPane extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className='content-block'>
        This is a bunch of content in this content pane
      </div>
    );
  }
}