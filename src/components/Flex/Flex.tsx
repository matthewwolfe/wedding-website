import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {}

function Flex(props: Props) {
  return <Box {...props} display="flex" />;
}

export default Flex;
