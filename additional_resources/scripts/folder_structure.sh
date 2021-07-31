#!/bin/bash
cd $HOME
# Creates an appacademy folder if there isn't one already
mkdir -p appacademy
cd appacademy
# Create a Mod1 Resource if it doesn't exist or pull it
if [ ! -d Module-1-Resources ]; then
  git clone -q https://github.com/appacademy/Module-1-Resources.git
else
  cd Module-1-Resources
  git pull -q
  cd ../
fi
# Make the Mod1 Folder Structure
mkdir -p {w1,w2,w3}/{d1,d2,d3,d4,d5}/{projects,homework}
# Find the correct startup file
if [ $SHELL = '/bin/bash' ]; then
    if [ -e $HOME/.bash_profile ]; then
        PROFILE_FILE='.bash_profile'
    elif [ -e $HOME/.profile ]; then
        PROFILE_FILE='.profile'
    else
        PROFILE_FILE='.bashrc'
    fi
    # Check if the .bashrc is loaded in the startup file, if so we'll use the .bashrc
    if [ $PROFILE_FILE != '.bashrc' ]; then
        BASHRC_IN_BASH_PROFILE=$(cat $HOME/$PROFILE_FILE | grep -c 'source $HOME/.bashrc')
        if [ -e $HOME/.bashrc ] && [ $BASHRC_IN_PROFILE > 0 ]; then
            PROFILE_FILE='.bashrc'
        fi
    fi
elif [ $SHELL = '/bin/zsh' ]; then
    PROFILE_FILE='.zshrc'
fi
# Check if the alias already exists
ALIAS_IN_START=$(cat $HOME/$PROFILE_FILE| grep -c 'https://raw.githubusercontent.com/appacademy/Module-1-Resources/main/additional_resources/scripts/update.sh')
# If not append it to the file
if [ $ALIAS_IN_START != 1 ]; then
    echo -e "\nalias aa_update='curl -s https://raw.githubusercontent.com/appacademy/Module-1-Resources/main/additional_resources/scripts/update.sh | bash'" >> $HOME/$PROFILE_FILE
fi