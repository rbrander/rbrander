import React from 'react';
import EmbeddedGist from './EmbeddedGist';

const Snippets = () => (
  <div>
    <h1>Code Snippets</h1>
    <div className="f5">Snippets are small pieces of code that may work on their own; or may be a fragment used for illustration purposes.</div>
    <div className="mt4">
      <div className="f3">Fetch</div>
      <div className="f5 mb2">A simple HTTP fetch in Node.js using http.get()</div>
      <EmbeddedGist gist="rbrander/73fc675027a70a03a1382c3080c07663" />
    </div>
  </div>
);

export default Snippets;