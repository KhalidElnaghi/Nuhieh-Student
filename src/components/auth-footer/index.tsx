import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { paths } from 'src/paths';

// ----------------------------------------------------------------------

export default function AuthFooter() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        py: { xs: 1.5, md: 2 },
        px: { xs: 2, md: 3 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center', sm: 'space-between' },
        alignItems: 'center',
        gap: { xs: 0.5, sm: 0 },
        zIndex: 1000,
        bgcolor: '#F6F8FA',
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: '#9CA3AF',
          fontSize: '12px',
        }}
      >
        © {new Date().getFullYear()} All rights reserved.
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <Link
          component={RouterLink}
          href={paths.auth.privacyPolicy}
          sx={{
            color: '#9CA3AF',
            textDecoration: 'none',
            fontSize: '12px',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          Privacy Policy
        </Link>

        <Box
          sx={{
            width: 3,
            height: 3,
            borderRadius: '50%',
            bgcolor: '#9CA3AF',
          }}
        />

        <Link
          component={RouterLink}
          href={paths.auth.termsAndConditions}
          sx={{
            color: '#9CA3AF',
            textDecoration: 'none',
            fontSize: '12px',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          Terms & Conditions
        </Link>
      </Stack>
    </Box>
  );
}
