FROM gitpod/workspace-full-vnc

# Install Electron dependencies.
RUN sudo apt-get update \
 && sudo apt-get install -y \
  libasound2-dev \
  libgtk-3-dev \
  libnss3-dev \
  react-native-cli\
 && sudo rm -rf /var/lib/apt/lists/*