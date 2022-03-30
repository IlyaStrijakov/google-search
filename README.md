# Installation


## Windows

1. Download and install Git for Windows (Git Bash). Link: https://git-scm.com/download/win

2. Setup an SSH Key. This will be used to connect to the git repository. Make sure to add the SSH key to your Bitbucket profile. See below
Install an IDE of choice. Most use Visual Studio Code, but you can use any you like.

3. Install the JAVA 8 JDK - https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html

4. Install NodeJS. Go to the NodeJS website and just download it. Suggested to use the latest v12 or v14.

5. Add JAVA to your PATH variable if not already done automatically
    * Go into the System Properties
    * Select the Advanced tab and click the button marked Environment Variables
    * Under System Variables, Select the Path variable and click Edit
    * Click New and add a route to the java installation (customize this wherever your java actually installed to):
...<javaFolder>\bin

## Mac
1. Search the App Store for Xcode and install. One installed, make sure to run Xcode to finish the install. Close once done.
2. Once installed, Install the XCode command line tools by going to Terminal and running the following command:
```
xcode-select --install
```

3. Setup an SSH Key. This will be used to connect to the git repository, make sure to add the SSH key to your Bitbucket profile. See below
4. Install an IDE of choice. Some use Visual Studio Code, but you can use any you like.
5. Install the JAVA 8 JDK - https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html
6. Install NodeJS. Recommend using NVM:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash 
```

```
nvm install 10.22.0
```

```
nvm alias default 10.22.0
```


Suggested to use the latest v10 of NodeJS

7. Add JAVA to your PATH variable
    * Open Terminal
    * Type 
    ```nano ~/.bash_profile```
    * Add the following to your bash_profile file

    ```export JAVA_HOME=$(/usr/libexec/java_home)```
    ```export PATH=$PATH:$JAVA_HOME/bin```

4. To exit, press Control+X, when asked to save press Y and hit Enter to confirm the file name

## Set Up SSH Key

# Creating SSH Keys

1. Enter ssh-keygen at the command line. 
    *The command prompts you for a file to save the key in:
```$ ssh-keygen ```

2.Accept all of the defaults by simply clicking enter through the prompts and a ssh key will be created.





# To set up and install WDIO/Cucumber
https://webdriver.io/docs/gettingstarted