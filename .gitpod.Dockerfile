FROM gitpod/workspace-full-vnc

# Install Electron dependencies.
RUN sudo add-apt-repository universe \
 && sudo apt-get update \
 && sudo apt-get install -y \
  android-tools-adb \
  android-tools-fastboot \
  libasound2-dev \
  libgtk-3-dev \
  libnss3-dev \
 && sudo rm -rf /var/lib/apt/lists/*