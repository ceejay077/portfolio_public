import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.700', 'whiteAlpha.900')(props),
      bg: mode('blue.100', '#141214')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('red', '#ffff')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;