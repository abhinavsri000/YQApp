FROM gitpod/workspace-full
                    
USER gitpod

RUN sudo apt-get -q update && #     sudo apt-get install -yq react-native-cli && #     sudo rm -rf /var/lib/apt/lists/*
