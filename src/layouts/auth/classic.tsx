import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { useTranslate } from 'src/locales';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthClassicLayout({ children }: Props) {
  const { t } = useTranslate();
  const theme = useTheme();

  const renderContent = (
    <Stack
      flexGrow={1}
      sx={{
        width: 1,
        mx: 'auto',
        maxWidth: '600px',
        px: { xs: 2, sm: 3, md: 0 },
        py: { xs: 4, sm: 6 },
        justifyContent: 'center',
      }}
    >
      {children}
    </Stack>
  );

  return (
    <Stack
      component="main"
      direction="column"
      sx={{
        minHeight: '100vh',
        direction: theme.direction === 'rtl' ? 'rtl' : '',
        textAlign: theme.direction === 'rtl' ? 'left' : '',
        bgcolor: '#F6F8FA',
      }}
    >
      {renderContent}
    </Stack>
  );
}
