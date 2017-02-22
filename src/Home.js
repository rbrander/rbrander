import React from 'react';
import Assets from './assets';

const Home = () => (
  <div className="tc">
    <h1>Welcome to rbrander.com</h1>
    <div className="f4">Where you can learn all about Rob Brander, the developer.</div>
    <div className="flex flex-column pa3">

      {/* TODO: make this a component */}
      <div className="flex">
        <div className="w-20" />
        <div className="w-60 pa2 grow">
          <a className="link black" href="https://github.com/rbrander" target="_blank">
            <div className="dib v-mid">
              <img role="presentation" src={ Assets.github } />
            </div>
            <div className="dib v-mid pl2 f3">rbrander</div>
          </a>
        </div>
        <div className="w-20" />
      </div>


      <div className="flex ">
        <div className="w-20" />
        <div className="w-60 pa2 grow">
          <a className="link black" href="https://ca.linkedin.com/in/rbrander" target="_blank">
            <div className="dib v-mid">
              <img role="presentation" src={ Assets.linkedin } />
            </div>
            <div className="dib v-mid pl2 f3">LinkedIn</div>
          </a>
        </div>
        <div className="w-20" />
      </div>


      <div className="flex ">
        <div className="w-20" />
        <div className="w-60 pa2 grow">
          <a className="link black" href="https://stackoverflow.com/cv/rbrander" target="_blank">
            <div className="dib v-mid">
              <img role="presentation" src={ Assets.stackoverflow } width="32" height="32" />
            </div>
            <div className="dib v-mid pl2 f3">StackOverflow CV</div>
          </a>
        </div>
        <div className="w-20" />
      </div>


      <div className="flex ">
        <div className="w-20" />
        <div className="w-60 pa2 grow">
          <a className="link black" href="https://stackoverflow.com/story/rbrander" target="_blank">
            <div className="dib v-mid">
              <img role="presentation" src={ Assets.stackoverflow } width="32" height="32" />
            </div>
            <div className="dib v-mid pl2 f3">StackOverflow Story</div>
          </a>
        </div>
        <div className="w-20" />
      </div>

    </div>
  </div>
);

export default Home;