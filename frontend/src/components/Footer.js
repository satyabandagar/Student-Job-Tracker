import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5 border-top">
      <p className="mb-0">&copy; {new Date().getFullYear()} Student Job Tracker. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
