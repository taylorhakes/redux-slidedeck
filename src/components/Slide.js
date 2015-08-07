import React from 'react';
import './Slide.less';

export default class Slide {
  render() {
    return (
      <div className='Slide'>
        <div className='Slide-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
