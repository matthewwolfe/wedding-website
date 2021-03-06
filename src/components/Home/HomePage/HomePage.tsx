import { Box, Button, Typography } from '@mui/material';
import { Flex } from 'components/Flex';

function HomePage() {
  return (
    <>
      <Flex sx={{ justifyContent: 'center' }} width={1}>
        {/* eslint-disable-next-line */}
        <img alt="Dipping Photo" className="background-image" src="/images/dipping.jpg" />

        <Flex
          sx={{
            px: { xs: 4, lg: 0 },
            py: { xs: 42, lg: 0 },
            flexDirection: 'column',
            justifyContent: 'center',
            height: { xs: 'initial', lg: '100vh' },
            minHeight: 360,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Flex
            sx={{
              mb: 4,
              justifyContent: 'center',
              width: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{ textShadow: '2px 1px #333', textTransform: 'uppercase' }}
            >
              We are getting married
            </Typography>
          </Flex>

          <Flex sx={{ py: 4, textShadow: '2px 1px #333' }}>
            <Typography variant="h1">Matt & Laura</Typography>
          </Flex>

          <Typography variant="h2" sx={{ textShadow: '2px 1px #333' }}>
            <Box display={{ xs: 'block', lg: 'inline' }}>April 8th, 2022</Box>
          </Typography>
        </Flex>
      </Flex>

      <Flex
        sx={{
          backgroundColor: '#f3e0da',
          justifyContent: 'center',
          px: { xs: 4, lg: 8 },
          py: { xs: 4, lg: 16 },
        }}
      >
        <Flex sx={{ flexDirection: 'column', width: { xs: 1, lg: 2 / 3 } }}>
          <Flex sx={{ mb: { xs: 8, lg: 16 }, justifyContent: 'center' }}>
            <Typography variant="h2">Event Details</Typography>
          </Flex>

          <Flex sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Flex
              sx={{
                flexDirection: 'column',
                textAlign: 'center',
                width: { xs: 1, lg: 1 / 3 },
              }}
            >
              <Box mb={4}>
                <Typography sx={{ textDecoration: 'underline' }} variant="h4">
                  Accommodations
                </Typography>
              </Box>

              <Typography variant="h5">Cambria Hotel Rockville</Typography>
              <Typography variant="h5">1 Helen Heneghan Wy, Rockville, MD 20850</Typography>

              <Box sx={{ mt: 6 }}>
                <Button
                  onClick={() =>
                    window.open('https://www.choicehotels.com/reservations/groups/WK37G6', '_blank')
                  }
                  variant="contained"
                >
                  Book a Room
                </Button>
              </Box>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                mt: { xs: 8, lg: 0 },
                textAlign: 'center',
                width: { xs: 1, lg: 1 / 3 },
              }}
            >
              <Box mb={4}>
                <Typography sx={{ textDecoration: 'underline' }} variant="h4">
                  What to Wear
                </Typography>
              </Box>

              <Typography variant="h5">Formal Attire</Typography>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                mt: { xs: 8, lg: 0 },
                textAlign: 'center',
                width: { xs: 1, lg: 1 / 3 },
              }}
            >
              <Box mb={4}>
                <Typography sx={{ textDecoration: 'underline' }} variant="h4">
                  Parking Area
                </Typography>
              </Box>

              <Typography variant="h5">Closest Public Parking - Garage A</Typography>

              <Box sx={{ mt: 6 }}>
                <Button
                  variant="contained"
                  onClick={() => window.open('https://goo.gl/maps/oudcFGyfKtYGXjhs9', '_blank')}
                >
                  Directions
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        sx={{
          backgroundColor: '#f3e0da',
          justifyContent: 'center',
          px: { xs: 4, lg: 8 },
          py: { xs: 4, lg: 16 },
        }}
      >
        <Flex sx={{ flexDirection: 'column', width: { xs: 1, lg: 2 / 3 } }}>
          <Flex sx={{ flexDirection: 'column', mb: { xs: 8, lg: 16 }, textAlign: 'center' }}>
            <Typography variant="h2">When & Where</Typography>

            <Box sx={{ my: 4 }}>
              <Typography variant="h5">
                VisArts
                <br />
                155 Gibbs St, Rockville, MD 20850
              </Typography>
            </Box>
          </Flex>

          <Flex sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Flex
              sx={{
                flexDirection: 'column',
                textAlign: 'center',
                width: { xs: 1, lg: 1 / 3 },
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ textDecoration: 'underline' }} variant="h4">
                  The Ceremony
                </Typography>
              </Box>

              <Typography variant="h5">6pm - Friday, April 8, 2021</Typography>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                mt: { xs: 8, lg: 0 },
                textAlign: 'center',
                width: { xs: 1, lg: 1 / 3 },
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ textDecoration: 'underline' }} variant="h4">
                  Cocktail Hour
                </Typography>
              </Box>

              <Typography variant="h5">7pm</Typography>
            </Flex>

            <Flex
              sx={{
                flexDirection: 'column',
                mt: { xs: 8, lg: 0 },
                textAlign: 'center',
                width: { xs: 1, lg: 1 / 3 },
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ textDecoration: 'underline' }} variant="h4">
                  Dinner & Party
                </Typography>
              </Box>

              <Typography variant="h5">8pm</Typography>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;
