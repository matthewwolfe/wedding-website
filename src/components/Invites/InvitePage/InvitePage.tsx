import { Button, Link, Typography } from '@mui/material';
import { Flex } from 'components/Flex';
import { RSVP_LINKS } from 'constants/rsvp';

import { Props } from './invitePage.types';

function InvitePage({ name, rsvpCount }: Props) {
  return (
    <Flex
      sx={{
        backgroundColor: '#f3e0da',
        color: 'primary.main',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'center',

        minHeight: '100vh',
        width: 1,
      }}
    >
      <Flex
        sx={{
          my: { xs: 16, lg: 32 },
          px: 4,
          textAlign: 'center',
          width: { xs: 1, lg: 0.6 },
        }}
      >
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Flex sx={{}}>
            <Typography style={{ fontSize: 128 }} variant="h2">
              RSVP
            </Typography>
          </Flex>

          <Flex sx={{ mt: 8 }}>
            <Typography variant="h3">Hi {name}!</Typography>
          </Flex>

          <Flex sx={{ mt: 8 }}>
            <Typography variant="h4">
              Matthew and Laura invite you to share their wedding day on April 8th, 2022 from 6pm to
              12.
            </Typography>
          </Flex>

          <Flex sx={{ mt: 8 }}>
            <Typography variant="h4">Please respond by February 25th, 2022</Typography>
          </Flex>

          <Flex sx={{ mt: 16 }}>
            <Button
              variant="contained"
              onClick={() => {
                const rsvpLink = RSVP_LINKS.get(rsvpCount);

                if (rsvpLink) {
                  window.location.href = rsvpLink;
                }
              }}
            >
              Click to RSVP
            </Button>
          </Flex>

          <Flex sx={{ mt: { xs: 16, lg: 24 }, mb: 16 }}>
            <Typography variant="h3">Additional Information</Typography>
          </Flex>

          <Flex sx={{ flexDirection: { xs: 'column', lg: 'row' }, width: 1 }}>
            <Flex
              sx={{
                justifyContent: 'center',
                mb: { xs: 8, lg: 0 },
                width: { xs: 1, lg: 1 / 2 },
              }}
            >
              <Flex sx={{ flexDirection: 'column' }}>
                <Typography sx={{ mb: 6 }} variant="h4">
                  Venue
                </Typography>

                <Typography fontWeight="bold" variant="h5">
                  VisArts - <Link href="https://www.visartscenter.org">Website</Link>
                </Typography>
                <Typography variant="h5">155 Gibbs St, Rockville, MD 20850</Typography>
              </Flex>
            </Flex>

            <Flex
              sx={{
                justifyContent: 'center',
                width: { xs: 1, lg: 1 / 2 },
              }}
            >
              <Flex sx={{ flexDirection: 'column' }}>
                <Typography sx={{ mb: 6 }} variant="h4">
                  Hotel
                </Typography>

                <Typography fontWeight="bold" variant="h5">
                  Cambria Rockville - <Link href="https://www.cambriarockville.com">Website</Link>
                </Typography>

                <Typography variant="h5">1 Helen Heneghan Wy, Rockville, MD 20850</Typography>

                <Flex sx={{ flexDirection: 'column' }}>
                  <Flex sx={{ justifyContent: 'center', my: 6 }}>
                    <Button
                      variant="contained"
                      onClick={() =>
                        window.open(
                          'https://www.choicehotels.com/reservations/groups/WK37G6',
                          '_blank',
                        )
                      }
                    >
                      Book a Room
                    </Button>
                  </Flex>

                  <Typography fontWeight="bold">
                    **We have blocked rooms with a special discount for our guests. Make sure to
                    book before February 28th to get the discounted rate.** If you have any issues
                    please email Matt - matthew.wolfe2@gmail.com
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default InvitePage;
