const { execSync } = require('child_process');

function installPeerDeps() {
  try {
    console.log('Installing peer dependencies: react-native-video and react-native-video-controls...');

    // Detect package manager: yarn or npm
    const userAgent = process.env.npm_config_user_agent || '';
    const pkgManager = userAgent.includes('yarn') ? 'yarn add' : 'npm install';

    // Run install
    execSync(`${pkgManager} react-native-video react-native-video-controls`, {
      stdio: 'inherit',
    });

    console.log('Peer dependencies installed successfully.');
  } catch (err) {
    console.warn('Failed to install peer dependencies automatically.', err);
  }
}

installPeerDeps();
