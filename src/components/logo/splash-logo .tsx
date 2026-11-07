import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  enableText?: boolean;
  disabledLink?: boolean;
}

const SplashLogo = forwardRef<HTMLDivElement, LogoProps>(
  ({ enableText, disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="img"
        src="/favicon/icon.svg"
        alt="Logo"
        sx={{
          width: 64,
          height: 64,
          objectFit: 'contain',
          display: 'inline-block',
          cursor: 'pointer',
          p: 0,
          ...sx,
        }}
        {...other}
      />
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link
        component={RouterLink}
        href="/"
        sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {logo}
      </Link>
    );
  }
);

export default SplashLogo;
