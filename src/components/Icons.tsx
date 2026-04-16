'use client';

import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Icons() {
  return (
    <div className="mt-8 flex gap-4">
      <Link
        href="https://www.instagram.com/ch_46/"
        aria-label="Instagram"
        className="cursor-pointer transition duration-400 ease-in-out hover:scale-120"
      >
        <Instagram />
      </Link>
      <Link
        href="https://www.linkedin.com/in/charles-heller-068b53233/"
        aria-label="LinkedIn"
        className="cursor-pointer transition duration-400 ease-in-out hover:scale-120"
      >
        <Linkedin />
      </Link>
      <Link
        href="https://github.com/CH4692"
        aria-label="Github"
        className="cursor-pointer transition duration-400 ease-in-out hover:scale-120"
      >
        <Github />
      </Link>
    </div>
  );
}

export default Icons;
