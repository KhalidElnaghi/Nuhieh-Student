'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useTranslate } from 'src/locales';

import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export default function MainPage() {
  const settings = useSettingsContext();
  const { t } = useTranslate();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'} sx={{ px: 1, py: 2 }}>
      <Typography variant="h4">{t('SIDEBAR.MAIN')}</Typography>
    </Container>
  );
}
