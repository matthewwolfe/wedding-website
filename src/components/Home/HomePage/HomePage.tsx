import { Typography } from '@mui/material';
import { Flex } from 'components/Flex';

function HomePage() {
  return (
    <Flex
      sx={{
        backgroundColor: '#f3e0da',
        px: { xs: 4, md: 0 },
        height: '100vh',
        minHeight: 400,
        width: 1,
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          width: 1,
        }}
      >
        <Flex sx={{ width: 1 }}>
          <Flex
            sx={{
              color: '#a44812',
              flexDirection: 'column',
              textAlign: 'center',
              width: { xs: 1, md: 0.6 },
            }}
          >
            <Flex sx={{ mb: 4, justifyContent: 'center', width: 1 }}>
              <Typography variant="h1">Save the date</Typography>
            </Flex>

            <Typography variant="h2">April 8th, 2022 | Rockville, MD</Typography>

            <Typography variant="h4">Formal Inviation to Follow.</Typography>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HomePage;
