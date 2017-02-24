import React from 'react';
import { FIRST_COPYRIGHT_YEAR } from './constants';

const Footer = () => {
  const currYear = new Date().getFullYear();
  const copyrightYear = `${ FIRST_COPYRIGHT_YEAR } ${ currYear === FIRST_COPYRIGHT_YEAR ? '' : '- ' + currYear }`;
  return (
    <div className="pv3 flex flex-column flex-row-ns justify-center items-center left-0 right-0">
      <div className="pv2 f6 tc gray bt w-100">&copy; { copyrightYear } Rob Brander</div>
    </div>
  );
};

export default Footer;