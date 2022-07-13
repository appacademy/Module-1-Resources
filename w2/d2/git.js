/*
git

Last week we worked out of the repl, but going forward all projects and tests 
will be done locally through VSCode and Node. Today it will be good practice to
create a repo for your project and push your progress to it. Starting tomorrow,
you'll be working as pairs to get through the day's long practices. In order to
share work and progress with each other, you'll work from the same remote
repository hosted on github. There's some really good reference material in this
day's README.md, but I put together a smaller guide for what we'll be doing

1. First, download and extract the project as normal. 
    a. If you're a Mac or Linux user, please advance to step 2.
    b. Windows users, please right click on the Download Project button and
       Copy link address
    c. Next, using your Ubuntu terminal, navigate to/create the directory that 
       you want your project to live in.
    d. download the project by typing wget and pasting the link to the project
       ex. wget https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/pojo/projects/skeleton.zip
    e. run ls so you can see the name of the zip file you downloaded
    f. In your terminal, type unzip and the name of the zip to get it extracted
       ex. unzip skeleton.zip
2. Use your terminal to navigate into the directory you just unzipped, then type 
   git init into your terminal
3. Next, add all files to the staging area with git add . 
4. Commit your files with git commit -m "commit message"
   a. "initial commit" makes a pretty good message for your initial commit.
5. Next, we'll link it up to a remote repository. Navigate to github.com in your
   browser
6. Click the New button next to the Recent Repositories on the left hand side
7. Give your repository a name, mark as Private and click Create Repository
8. You'll be confronted with Quick Setup screen. Copy the block of code that has
   three lines in it.
9. Paste those three lines into your terminal (push enter if they don't run
   automatically)

And that's pretty much it. You can now use
  git add .
  git commit -m "solved problem x"
  git push
To push your work to the remote repo. We'll cover a bit more tomorrow, but get 
some practice committing and pushing today. 

*/