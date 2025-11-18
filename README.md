# Strudel React Assignment INFT 2064 SP5 2025

![Strudel Demo](/src/assets/StrudelDemo.png)
---
## Overview
A React-based application that demonstrates the capabilities of [Strudel.cc](https://strudel.cc/); enhanced with a modernised interface and extended features. 

## Features
- __CPM:__ enables users to specify a cycle per minute value; updates and interacts with the music dynamically. 
- __Volume:__ allows the user to interact with a volume slider to control the gain of the music; works dynamically with the music playing.
- __Save/Load JSON:__ utilises [sweetalert2](https://sweetalert2.github.io/) pop-ups to allow users to save and load CPM and volume configurations.
- __Hush Instruments:__ users are able to select a preset of instruments or specify an instrument through the text-prompt input. From this, users can interact with the "ON" or "HUSH" buttons to enable or disable, respectively, the instrument sound. 
- __Gain Visualiser:__ the gain visualiser utilises [D3](https://d3js.org/) to visualise the gain levels of the playing instrument sounds. 
- __Dynamic processing:__ dynamically applies the changes made in the "Text to Process" text area to the "Process Output" editor.

## Quirks, Usages, & Limitations
- Saving and loading JSON files do not directly store them onto the user's computer but rather accesses the brower's local storage. 
- The hush preset instruments are strictly hard-coded and may not address all available instruments.
- The gain visualiser is limited to displaying a maximum integer value of "1", surpassing the value may cause visual spikes outside the scope. 

## Demonstration Video
Below is an unlisted YouTube walkthrough and demonstration of all the web application features and design choices:

[Video Demonstration]()

## Installation & Setup
1. Clone the repository locally through either an IDE or through using the terminal.
2. Install [Node.js](https://nodejs.org/en/download).
3. Navigate to the root folder and install the required modules by running `npm install` in the terminal.
4. After the installation is complete, enter `npm start` into the terminal to run the local web server. 