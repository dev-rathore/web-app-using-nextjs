'use client';

import { useState } from 'react';
import ArtistPage from './artist-page.js';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <ArtistPage
        artist={{
          id: 'the-beatles',
          name: 'The Beatles',
        }}
      />
    );
  } else {
    return (
      <Button onClick={() => setShow(true)}>
        Open The Beatles artist page
      </Button>
    );
  }
}

export default Page;
