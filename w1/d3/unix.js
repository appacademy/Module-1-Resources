/*******************************************************************************
 * - ls
 *      - list stuff
 *      - shows all of the files and directories where you're currently at
 *      - won't show hidden files, need to add the -a flag
 *      - try ls -a
 *
 * - cd
 *      - change directory
 *      - input the path you'd like to change your current location to
 *      - can be relative given your location, or absolute
 *      - cd ~/appacademy/Module-1-Resources
 *      - cd w1/d1
 *      - cd .. will take you up one level
 *      - cd with no argument will take you to your home (~) folder
 *
 * - clear
 *      - clears output in your terminal
 *      - can also use cmd k as a shortcut on MacOS
 *
 * - pwd
 *      - print working directory
 *      - this will show the full path to where you currently are
 *      - some terminals will show a relatively complete path by default (notice
 *        mine in lecture) however others will only show the current named
 *        directory.
 *      - this command is helpful for getting your bearings
 *
 * - touch fileName
 *      - creates a file
 *      - easiest and most certain way to create files where you want them
 *      - use with pwd to ensure you're in the directory you want to create the
 *        file in
 *      - sometimes the folder structure of VSCode will be less helpful than we
 *        want it to be, touch provides peace of mind of creating the file right
 *        where we want it to be
 *
 * - mkdir directoryName
 *      - make directory
 *      - creates a new directory (or folder) in the current working directory
 *      - benefits are similar to touch, gives you certainty of knowing exactly
 *        where you want it to be
 *
 * - <tab>
 *      - not a command, but a _really_ _really_ useful key
 *      - tab will auto-complete if it finds a single match, or list matches
 *        when pressed multiple times given a sample command
 *      - really useful for finishing long strings that you don't want to type
 *
 * - ⬆
 *      - access command cache and find last command
 *      - your terminal will keep a history of your commands which may sometimes
 *        persist through sessions. You can look through your history with ⬆
 *      - this is the up arrow on your arrow keys.
 *
 * - code <targetDirectory>
 *      - opens VSCode in the supplied target directory
 *      - code .    will open VSCode in the current working directory
 *
 * - .
 *      - kind of a shortcut meaning "right here"
 *      - when we do .. , we're asking for the antecedent directory of "here"
 *      - in MacOS you can open finder with open . , on WSL try explorer.exe .
 *
 * node fileName.js
 *      - executes code within the specified javascript file
 *      - if no file is supplied as an argument, opens a handy node repl to test
 *        code and expressions
 *
 * * * * * * * ADVANCED * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * - wget <url>
 *      - useful for downloading files
 *      - is a recursive function that can follow redirects to get the desired
 *        payload
 *
 * - unzip <zipFile.zip>
 *      - typically used in conjunction with wget
 *      - once you have your zip file, use this command to extract it's contents
 *
 * - mv oldFilename newFilename
 *      - can be read as move
 *      - frequently used to rename things, frequently you'll have files and
 *        folders that don't have names you like. use this command to fix that
 *      - mv oldDirectory/ newDirectory/
 *
 * - rm -rf directory
 *      - remove -recursively -forced directorySuppliedAsArgument
 *      - sometimes you'll need to delete directories, this command will allow
 *        you to delete any directory from terminal and _all_ subdirectories and
 *        files
 *
 ******************************************************************************/
