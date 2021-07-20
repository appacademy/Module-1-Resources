#!/bin/bash
# Prompt user to insert inputs (one at a time)
while true
do
    read -p "What is the current WEEK?: " week
    if [ -z "$week" ]
    then 
        echo 'Week cannot be blank please try again!'
        continue
    fi 
    if ! [[ "$week" =~ ^\s*[1-3]{1}\s*$ ]]
    then 
        echo "Week must be number between 1 and 3"
        continue
    else 
        break
    fi
done

while true
do
    read -p "What is the currnet DAY?: " day 
    if [ -z "$day" ]
    then 
        echo 'Day cannot be blank please try again!' 
        continue
    fi 
    if ! [[ "$day" =~ ^\s*[1-4]{1}\s*$ ]] 
    then
        echo "Day must be a number between 1 and 4"
        continue
    else
        break
    fi
done

cd ~/appacademy/Module-1-Resources &&
git reset --hard &&
git pull &&
rm -rf ~/appacademy/w${week}/d${day}/lecture &&
cp -r ~/appacademy/Module-1-Resources/w${week}/d${day} ~/appacademy/w${week}/d${day}/lecture