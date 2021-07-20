#!/bin/bash
while true
  do
      read -n 1 -p "What is the current WEEK?: `echo $'\n> '`" week < /dev/tty
      if [ -z "$week" ]
      then 
          echo "Week cannot be blank please try again! `echo $'\n '`"
          continue
      fi 
      if ! [[ "$week" =~ ^\s*[1-3]{1}\s*$ ]]
      then 
          echo
          echo "Week must be number between 1 and 3 `echo $'\n '`"
          continue
      else 
          break
      fi
done
echo 
while true
  do
      read -n 1 -p "What is the current DAY?: `echo $'\n> '`" day < /dev/tty

      if [ -z "$day" ]
      then 
          echo "Day cannot be blank please try again! `echo $'\n '`" 
          continue
      fi 
      if ! [[ "$day" =~ ^\s*[1-4]{1}\s*$ ]] 
      then
          echo
          echo "Day must be a number between 1 and 4 `echo $'\n '`"
          continue
      else
          break
      fi
done
echo
cd ~/appacademy/Module-1-Resources
git reset --hard -q
git pull --quiet
cd ~
if [ -d "./appacademy/w${week}/d${day}/lecture" ] 
then
  read -p "Lecture folder exists! Overwrite? y/n `echo $'\n> '`" yn < /dev/tty
  if ! [[ "$yn" =~ ^([yY][eE][sS]|[yY])$ ]]
    then
      exit 0
    else
    echo "Overwriting..."
    rm -rf ~/appacademy/w${week}/d${day}/lecture
  fi
fi
echo "Copying Files..."
cp -r ~/appacademy/Module-1-Resources/w${week}/d${day} ~/appacademy/w${week}/d${day}/lecture
echo "Done."