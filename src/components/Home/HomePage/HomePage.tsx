import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Flex } from 'components/Flex';

function HomePage() {
  return (
    <Flex sx={{ backgroundColor: '#f3e0da', flexDirection: { xs: 'column', lg: 'row' } }} width={1}>
      <Flex
        sx={{
          px: { xs: 4, md: 0 },
          flexDirection: 'column',
          justifyContent: 'center',
          height: { xs: 'initial', lg: '100vh' },
          minHeight: 360,
          color: '#a44812',
          textAlign: 'center',
          width: { xs: 1, lg: 0.6 },
        }}
      >
        <Flex
          sx={{
            mb: 4,
            justifyContent: 'center',
            width: 1,
          }}
        >
          <Typography variant="h1">Save the date</Typography>
        </Flex>

        <Typography variant="h2">
          <Box display={{ xs: 'block', lg: 'inline' }}>April 8th, 2022</Box>{' '}
          <Box display={{ xs: 'none', lg: 'inline' }}>|</Box> Rockville, MD
        </Typography>

        <Typography variant="h4">Formal Inviation to Follow.</Typography>
      </Flex>

      <Flex
        sx={{
          justifyContent: 'center',
          width: { xs: 1, lg: 0.4 },
        }}
        justifyContent="center"
      >
        <Box
          sx={{
            height: { xs: 'auto', lg: '100vh' },
            pt: { xs: 4, lg: 16 },
            px: { xs: 8, sm: 24, md: 40, lg: 4 },
          }}
        >
          {/* eslint-disable-next-line */}
          <img alt="Holding hands" src="/images/holding-hands-lg.png" height="100%" width="100%" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default HomePage;
