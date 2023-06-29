import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myApp',
  appName: 'myApp',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
