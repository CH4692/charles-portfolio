'use client';

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Icons() {
  return (
    <div className="mt-8 flex gap-4">
      <Link
        href="https://www.linkedin.com/in/charles-heller-068b53233/"
        aria-label="LinkedIn"
        className="focus-ring cursor-pointer rounded-md transition duration-300 ease-in-out hover:scale-110"
      >
        <Linkedin />
      </Link>
      <Link
        href="https://github.com/CH4692"
        aria-label="Github"
        className="focus-ring cursor-pointer rounded-md transition duration-300 ease-in-out hover:scale-110"
      >
        <Github />
      </Link>
    </div>
  );
}

export default Icons;
