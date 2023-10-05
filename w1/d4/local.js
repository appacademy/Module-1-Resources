/*

  Folder Structure

  - Navigate using unix commands
  - common commands located in unix.js

  Mac/Linux/WSL2
  - all unix based
  - allows us to all use the same terminal commands

  ! WSL2 users make sure to use ubuntu terminal!

  ! Use Tiged command to download the project

  ! download local js project
    cd into folder
    check with pwd/ls
    npm i

  * Running the File

  From root
    node problems/filename

  From problems folder
    node filename

    ! need console.log to see

  What is vsCode?
    - Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.

  What is node?
    - runtime environment that allows us to run js outside the browser

  What is node repl?
    - repl you can use to run quick test on your terminal
    ! to exit use .exit

  What is NPM?
    - Node package manager
      * Tool that allows developers to easily install, manage, and share JavaScript libraries and packages with other developers

  What is NVM?
    * Tool that allows us manage and change what version of node we are using

  What is a Package.json?
    * holds all the meta data of your project such as name, versions dependencies
    * Whenever you see a package.json you npm install to install the dependencies

  What is npm install?
    * How we install the dependencies within the package.Jason

    ! When you npm install, two things are generated
      1. Package-lock.json
      2. Node_modules

  Package-lock.json
    * Keep track of dependencies and ensure all who download get the same tree of dependencies stores exact copy version

    * It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

  Node_modules
    * Holds all the dependencies of your project

  What is mocha?
    * A testing framework for running js in node

  How to run mocha
    * when you run mocha, make sure youre at the root so that were able to go into the test folder

  Run a single test file
    * mocha test/filename

  Run all files
    * mocha

  ! Make sure you're at the root of your folder
   * should see test, problems, package-lock.json, package.json
   * check with ls or pwd

  How to read test specs?
  * read test carefully
    - expected vs results

  Submitting and zipping up a folder

  ! Make sure to delete node_modules
  ! compress file


  A relative path describes the location of a file relative to the current (working) directory*. 

  An absolute path describes the location from the root directory.


*/
