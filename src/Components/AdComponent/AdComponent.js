import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <ins class="adsbygoogle"
        style={{display:"block"}}
        data-ad-format="fluid"
        data-ad-layout-key="-f5+4w+7r-eg+48"
        data-ad-client="ca-pub-9061009934750007"
        data-ad-slot="7645899843"/>
    );
  }
}