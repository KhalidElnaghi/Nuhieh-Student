import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  enableText?: boolean;
  disabledLink?: boolean;
  fullNav?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ enableText = true, disabledLink = false, fullNav = false, sx, ...other }, ref) => {
    const theme = useTheme();
    const isRtl = theme.direction === 'rtl';

    // The icon mark (always rendered, scales for mini vs full)
    const iconMark = (
      <Box
        component="img"
        src="/favicon/icon.svg"
        alt="Logo"
        sx={{
          width: fullNav ? 40 : 42,
          height: fullNav ? 40 : 42,
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />
    );

    const logoContent = (
      <Box
        ref={ref}
        component="div"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1.5,
          cursor: 'pointer',
          p: 0,
          ...sx,
        }}
      >
        {iconMark}

        {fullNav && enableText && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: isRtl ? 'right' : 'left',
              lineHeight: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: -0.5,
                color: 'text.primary',
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
              }}
            >
              NUHIEH
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                fontSize: 9.5,
                letterSpacing: 1.5,
                color: 'text.secondary',
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
              }}
            >
              STUDENT
            </Typography>
          </Box>
        )}
      </Box>
    );

    if (disabledLink) {
      return logoContent;
    }

    return (
      <Link
        component={RouterLink}
        href="/"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: fullNav ? 'flex-start' : 'center',
          width: fullNav ? '100%' : 'auto',
          px: fullNav ? 2.5 : 0,
          py: fullNav ? 1.5 : 1,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
          ...other,
        }}
      >
        {logoContent}
      </Link>
    );
  }
);

export default Logo;
