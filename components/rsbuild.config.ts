import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  tools: {
    rspack: (config, { appendPlugins }) => {
      // Set a unique value for the federation provider
      config.output!.uniqueName = 'federation_provider';
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'federation_provider',
          exposes: {
            './button': './src/Button.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: 'http://localhost:3000',
  },
  plugins: [pluginReact(), pluginSvgr()],
  html: {
    favicon: './favicon.png',
    title: 'React, Tailwind and RSBuild Boilerplate',
  },
});
