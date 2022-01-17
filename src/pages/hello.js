import React from 'react';
import Link from 'next/link';

export default function hello() {
  return (
    <div className="text-center p-10">
      Helllo Gess
      <p>
        back to <Link href="/">Home</Link>{' '}
      </p>
    </div>
  );
}
