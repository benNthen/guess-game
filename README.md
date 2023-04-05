# Guess Game
A mobile game that lets the user play against the a CPU called the Opponent by prompting the user to enter a number at the start. The Opponent will make guesses on what the number is and the user has to tell if the number is higher or lower. The game ends once the oppponent has correctly guessed the number.

## Using this repository
You can run the app on your local computer and/or by connecting your mobile phone. 
For more information on how to run a React Native app, [go here](https://reactnative.dev/docs/environment-setup).

The following pre-requisites are listed below.
## Pre-requisites:

To use this repository you need the following:
 - Windows 10 / macOS 10  or higher
 - Visual Studio Code
 One of the following
 - [Android Studio](https://developer.android.com/studio)
 - Android or iOS phone

In addition, these packages need to be installed before the app can be run locally:
 - [npm - a JavaScript package manager](https://www.npmjs.com/package/npm)
 - [Node Js](https://nodejs.org/en/)
 - [React JS](https://reactjs.org/)
 - [React Native](https://reactnative.dev/)
 - [Expo CLI](https://docs.expo.dev/bare/installing-expo-modules/)
 
 ## How to download this repository:

Clone this repository by copying its HTTPS code and using the git command: `git clone https://github.com/benNthen/guess-game.git`.

## How to Run this App in your own phone:

Download the Expo CLI on Play Store(Android only) or App Store(iOS only).

Open VSCode or the command line. Then cd into the working directory of where this repository was downloaded into.

Run this command: `npm start`. Wait until it has finished loading and QR Code has been displayed on the command line.

Open the Camera app on your mobile phone and scan the QR Code displayed on your computer screen's command line.

Expo Go will load and open the app on your phone.
 
 ## How to Run this app on your own computer:
 
 Follow the documentation [here](https://developer.android.com/studio/intro/update#sdk-manager) in order to create a mobile emulator / virtual environment through Android Studio's AVD Manager.
 
 Open the command line and type ` C:\Users\<your-user-name-here>\AppData\Local\Android\Sdk\emulator)`
 
 Then type `emulator -list-avds`. Copy-paste the emulator name of your choice (that you set-up in Android Studio's AVD Manager).
 
 Now enter `emulator -avd <paste-emulator-name-here>`. Then wait for the emulator to start-up.
 
 Open the app's project folder in Visual Studio Code and type in the command terminal `npx react-native run-android`.
 
 ## How to Use This App:

 Enter any number and press Confirm.
 
![20230405_003336000_iOS](https://user-images.githubusercontent.com/53241776/229952805-29ccce75-bbe5-479e-9db8-fe72013f35b9.jpg)
 
 The Opponent will make a Guess on what number it is. The User's role is to tell the opponent whether the number displayed is either lower or higher by pressing either '-' or '+' buttons. 
 
 The Opponent will continue to make guesses until it matches the number that the user entered, which will eventually the program to a 'Game Over' (Note: if the User lies, the program can pick this up and a message prompt will appear asking the user to state the correct button.)
 
 ![20230405_003411000_iOS](https://user-images.githubusercontent.com/53241776/229952786-ee6db8a4-fc59-4756-92bf-9460ab5c850d.jpg)


 On the Game Over screen, the number of rounds along with the number that the user entered will be displayed.
 
 ![20230405_003421000_iOS](https://user-images.githubusercontent.com/53241776/229952656-481870d9-8de8-49c3-bb44-59db4f01eb33.jpg)

 
