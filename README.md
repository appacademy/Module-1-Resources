# Module 1 Resources

Before looking at this repo, please read all of the README, especially the `Setup` and `How to Use` sections.

---

## Welcome to Module 1

Welcome to App Academy! Your first stop is here in Module 1. We will be covering the fundamentals of JavaScript.

Here you will find all resources that are associated to your cohort during your time in Module 1!

---

## Contents

* [Setup][Setup]
* [How to Use][How to Use]
* [Module 1 Content][Content]
* [Additional Resources][Additional Resources]

---

## Setup
To clone this repo, `cd` into the directory of your choice and run:
```bash
git clone <remote-repo-url>
```

We recommend you create an `appacademy` folder in your root directory and cloning the repo into that directory like this:
```bash
mkdir appacademy
cd appacademy
```
Then run the command to clone the repo.

If you are using a Personal Access Token (PAT) the exact command will be:
```bash
git clone https://github.com/appacademy/Module-1-Resources.git
```

If you are using SSH to clone, the command will be:
```bash
git clone git@github.com:appacademy/Module-1-Resources.git
```

---

## How to Use
First, complete the `Setup` section if not already done.

This repo is set up to contain each days lecture material. The `README.md` file included for each day contains the topics, with some notes, and the schedule for the day. The `notes.js` file is to be used to follow along in lecture every day and code along with the lecturer while taking notes. The `lecture.js` file is going to be used by the person lecturing and not to be filled out by anybody else. Once the lecture is finished, the following command should be run to get the contents of the `lecture.js` file:
```bash
git pull
```
Make sure that you are in the root directory of the `Module-1-Resources` repo so that you recieve the most up to date version of the directory.

In the `code-it-out` folders, there are files that contain the examples from the video lectures. You can complete those examples, but they are not mandatory to do. It is just for extra practice.

When the cohort you are in moves on from Module 1, we will archive your cohort's lectures and extra resources. This will be achieved by us creating a new branch. If you ever delete the repo and need a new copy after your cohort has moved on to the next module, you can use the following command:
```bash
git clone -b <your-cohort-branchname> --single-branch <remote-repo-url>
```

  * The cohort branch name will follow the format: `Year-Month-Cohort` (e.g., 2022-12-19).
  * The remote repo url will depend on which method you use to access GitHub, SSH or PAT. Use the examples above in the `Setup` section to help determine.

---

## Module 1 Content

### Week 1 - Intro to JavaScript
* Problem Solving
* Expressions
* Number Data Type
* Boolean Data Type
* Comparison Operators
* Variables
* String Data Type
* Functions
* Conditionals
* Loops
* Array Data Type
* Array Methods
* Helper Functions
* Terminal Basics
* Node

### Week 2
* Advanced Array Methods
* Object Data Type
* Callbacks
* Pair Programming
* Git
* Scope
* Arrow Functions
* Closure

### Week 3
* String Interpolation
* VSCode Debugger
* Call Stack
* Recursion
* IIFEs
* Hoisting
* Falsey Values
* Event Loop and Message Queue
* Asynchronous Code
* setTimeout and setInterval
* User Input and Readline (optional)

---

## Additional Resources
- [How to Setup an Image on Progress Tracker][Image Setup]
- [Terminal Command Cheatsheet][Terminal]
- [WSL Workflow][WSL]
- [Git Flow][Git]

<!-- Internal Links -->
[Setup]: README.md#setup
[How to Use]: README.md#how-to-use
[Content]: README.md#module-1-content
[Additional Resources]: README.md#additional-resources

<!-- Redirect Links -->
[Image Setup]: ./additional_resources/week1/setup_image_on_PT.md
[Terminal]: ./additional_resources/terminal_command_cheatsheet.md
[WSL]: ./additional_resources/week1/wslWorkflow.md
[Git]: ./additional_resources/week2/gitflow/README.md
