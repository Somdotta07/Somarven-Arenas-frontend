import React from 'react';
import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';

const SignedOutNav = () => (
  <div>
    <aside className="p-3 d-sm-block d-none">
      <h1 className="fw-bolder fst-italic">Somarven Arenas</h1>
      <div className="sidebar-footer">
        <div className="sidebar-icons">
          <span className="p-2">
            <BsTwitter />
          </span>
          <span className="p-2">
            <FaFacebookF />
          </span>
          <span className="p-2">
            <FaGooglePlus />
          </span>
          <span className="p-2">
            <BsVimeo />
          </span>
          <span className="p-2">
            <GrPinterest />
          </span>
        </div>
        <div className="text-wrap">© 2022 Final capstone project</div>
      </div>
      <div />
    </aside>
  </div>
);

export default SignedOutNav;
