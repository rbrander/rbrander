import React from 'react';
import { FIRST_COPYRIGHT_YEAR } from './constants';

const Footer = () => {
  const currYear = new Date().getFullYear();
  const copyrightYear = `${ FIRST_COPYRIGHT_YEAR } ${ currYear === FIRST_COPYRIGHT_YEAR ? '' : '- ' + currYear }`;
  return (
    <div className="pa4 flex flex-column flex-row-ns justify-center items-center fixed left-0 right-0">
      <div className="pv2 pl5 f6 tc gray bt w-80">&copy; { copyrightYear } Rob Brander</div>
    </div>
  );
};

export default Footer;