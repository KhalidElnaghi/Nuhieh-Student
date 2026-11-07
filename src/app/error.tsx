'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { View500 } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('Global App Error:', error);
  }, [error]);

  return (
    <Container sx={{ textAlign: 'center', py: 8 }}>
      <View500 />
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" onClick={() => reset()}>
          Try Again
        </Button>
      </Box>
    </Container>
  );
}
