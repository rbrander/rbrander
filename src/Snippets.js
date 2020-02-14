import React from 'react';
import EmbeddedGist from './EmbeddedGist';

const Snippets = () => (
  <div>
    <h1>Code Snippets</h1>
    <div className="f5">Snippets are small pieces of code that may work on their own; or may be a fragment used for illustration purposes.</div>
    <div className="mt4">
      <div className="f3">isDeeplyEqual</div>
      <div className="pb2"><small className="gray">Created: Feb 14, 2020</small></div>
      <div className="f5 mb2">A function to compare two objects recursively</div>
      <EmbeddedGist gist="rbrander/35b9789de567cd6bc967709f200240dd" />
    </div>
    <div className="mt4">
      <div className="f3">String.prototype.repeat polyfill</div>
      <div className="pb2"><small className="gray">Created: Apr 28, 2017</small></div>
      <div className="f5 mb2">A simple polyfill for String.prototype.repeat</div>
      <EmbeddedGist gist="rbrander/d6c04f96a9a212deec96163ff4e63db5" />
    </div>
    <div className="mt4">
      <div className="f3">Fetch</div>
      <div className="pb2"><small className="gray">Created: Feb 24, 2017</small></div>
      <div className="f5 mb2">A simple HTTP fetch in Node.js using http.get()</div>
      <EmbeddedGist gist="rbrander/73fc675027a70a03a1382c3080c07663" />
    </div>
  </div>
);

export default Snippets;