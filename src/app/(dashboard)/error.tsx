'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('Dashboard Route Error:', error);
  }, [error]);

  return (
    <Container sx={{ py: 10, textAlign: 'center' }}>
      <Box sx={{ maxWidth: 480, mx: 'auto' }}>
        <Iconify
          icon="solar:danger-triangle-bold"
          width={64}
          height={64}
          sx={{ color: 'error.main', mb: 2 }}
        />

        <Typography variant="h4" sx={{ mb: 1 }}>
          Something went wrong!
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          An unexpected error occurred while loading this section. You can try refreshing the view.
        </Typography>

        <Button variant="contained" color="primary" onClick={() => reset()}>
          Try Again
        </Button>
      </Box>
    </Container>
  );
}
