import { mergeConfig } from "vite";

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    // console.log('config', config.server);
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      server:{
        port: 3000
      }
    })
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
