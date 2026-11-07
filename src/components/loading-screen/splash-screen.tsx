import { m } from 'framer-motion';
import { useState, useEffect } from 'react';

import { alpha } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import SplashLogo from '../logo/splash-logo ';

// ----------------------------------------------------------------------

export default function SplashScreen({ sx, ...other }: BoxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        right: 0,
        width: 1,
        bottom: 0,
        height: 1,
        zIndex: 9998,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Soft Ambient Glow Pulse */}
        <Box
          component={m.div}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 2.2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            position: 'absolute',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.15),
            filter: 'blur(20px)',
          }}
        />

        {/* Sleek Modern Circular Spinner Ring */}
        <Box
          component={m.div}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.8,
            ease: 'linear',
            repeat: Infinity,
          }}
          sx={{
            width: 104,
            height: 104,
            borderRadius: '50%',
            position: 'absolute',
            border: (theme) => `2px solid ${alpha(theme.palette.primary.main, 0.08)}`,
            borderTopColor: (theme) => theme.palette.primary.main,
            borderRightColor: (theme) => alpha(theme.palette.primary.main, 0.45),
          }}
        />

        {/* Counter Subtle Ring */}
        <Box
          component={m.div}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 3.2,
            ease: 'linear',
            repeat: Infinity,
          }}
          sx={{
            width: 124,
            height: 124,
            borderRadius: '50%',
            position: 'absolute',
            border: (theme) => `1.5px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
          }}
        />

        {/* Logo with gentle pulse */}
        <Box
          component={m.div}
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.92, 1, 0.92],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <SplashLogo disabledLink sx={{ width: 64, height: 64 }} />
        </Box>
      </Box>
    </Box>
  );
}
