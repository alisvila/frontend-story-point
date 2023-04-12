import styled from '@emotion/styled';
import { Box } from '@mui/material';

const DashboardLayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  backgroundColor: '#e6e2eb',
  height: '100svh',
  alignItems: 'center',
}));

const BoxMain = styled(Box)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.shape.borderRadius,
  marginRight: '15px',
}));

export { DashboardLayoutRoot, BoxMain };
