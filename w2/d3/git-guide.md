
# GIT GUD Guide
### Table of Contents:
- [*To get a local repo & remote repo connected:*](#to-get-a-local-repo--remote-repo-connected)
    - [DOWNLOAD WAY](#download-way)
    - [GIT CLONE WAY](#git-clone-way)
- [*For pair programming:*](#for-pair-programming)
    - [Person Creating the Remote Repo](#person-creating-the-remote-repo)
    - [Other Partner](#52-other-partner)
    - [Git Workflow](#git-workflow)
- *[Extra Git Help](#extra-git-help)*
    - [To git rid of staged changes](#to-git-rid-of-staged-changes)
    - [Oops! Commited node_modules!](#oops-commited-node_modules)
​
## To get a local repo & remote repo connected:
#### DOWNLOAD WAY:
***Mac Users** - should be able to download directly
***Window Users** - Downloading a zipped folder via Ubuntu:
- [ ] Open up your Ubuntu and run these 2 commands.
	- `sudo apt install zip`
	- `sudo apt-get install wget`
- [ ] Head over to the GitHub project repo that you want to download.
- [ ] Click the green dropdown box labeled “<> Code”
- [ ] Look for “Download ZIP” and RIGHT click it. Then select “Copy link address”
- [ ] Head back over to your Ubuntu terminal and type the following command “wget” then paste
 the link address after it.
     - It should look something like this: “wget linkAddress”.

**UNZIP**
> Now that you have the zip folder downloaded, unzip it!
- [ ] Use the `ls` command to see your directories contents. You should see a new zipped folder.
- [ ] Type `unzip folderName.zip` to unzip its contents.
- [ ] Use the `ls` command again to see your new project folder.
- [ ] You can now delete the .zip folder by using the command `rm -rf folderName.zip` now that everything
 is unpacked.
 ----
### GIT CLONE WAY:
- [ ] `git clone <a/A repo url>`
- [ ] `cd <folder name>`
- [ ] `git remote set-url origin <your repo url>`
- [ ] `git push`
​
--------
## For pair programming:
▶
### Person Creating the Remote Repo:
> Can do this two ways - download vs clone the project
> Make sure to communicate with your pair about who makes the repo!
​
#### 1.1 If you git clone:
If you clone you can use `rm -rf .git` to delete the .git then follow the normal steps to initialize a repo or set the url origin to a new link:
​
 - [ ] `git remote set-url origin <github link>`
 - [ ] `git add .`
 - [ ] `git commit -m ‘initial commit’`
 - [ ] `git push`
​
#### 1.2 If you download:
- [ ] download the zip, in a location you would like
- [ ] unzip the file
- [ ] cd into the file
​
⏩
#### 2. Creating the repo
- [ ] Click "Create New Repo" on GitHub
- [ ] Select owner and give the repo a name
- [ ] Make repo *private*
- [ ] Click create repo
#### 3. Adding the files to the repo
> GitHub will also have these steps listed too if you forget!
- [ ] `ls`
- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m ‘first commit’`
- [ ] `git branch -M main`
- [ ] `git remote add origin <github link>`
- [ ] `git push -u origin main`
#### 4. Add .gitignore file
- [ ] `npm i` / `npm install`
- [ ] Create .gitignore file
- [ ] Add "node_modules" to .gitgnore
- [ ] `git add .`
- [ ] `git commit -m ‘added gitignore’`
- [ ] `git push`
#### 5.1 Invite Collaborator
-  Go to settings > Collaborators
    - [ ] Add people - enter partners name/GitHub handle
#### 5.2 Other Partner:
- Go to your email and find email from Github
    - [ ] Accept invitation
    - [ ] `git clone` the repo to make your local repo!
​
​
### Git Workflow
- Anytime you add something to the repo!
    - [ ] you must `git add .`
	- [ ] `git commit -m ‘brief description’`
	- [ ] `git push`
- If you want your partners changes, use:
     - [ ] git pull
- Do not work on the files at the same time without pulling or you will end up with a git conflict!
​
# Extra Git Help:
**To git rid of staged changes:**
- `git reset --hard` and then `git pull`
or
- `git stash` and then `git pull`
​
#### Oops! Commited node_modules!
> If you happen to commit the node_modules directory to your history before adding the .gitignore file, then we can do this to remove it from our commit history:
- [ ] Run `git rm -r --cached node_modules`
- [ ] Add .gitignore file with "node_modules" in it like the example above if you haven’t yet.
- [ ] `git add .`
- [ ] `git commit -m “message here”`
- [ ] `git push`
​
