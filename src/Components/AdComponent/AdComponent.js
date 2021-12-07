import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <ins class="adsbygoogle"
        style={{ display: 'block', minHeight: '90px' }}
        data-ad-client='ca-pub-9061009934750007'
        data-ad-slot='1256806030'
        data-full-width-responsive='true'/>
    );
  }
}