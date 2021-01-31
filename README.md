# GOTcha

## Overview

- GOTcha was a project that was developed by Sam Stegall, Josh Waterman, and Karli Kessler for TAMUhack 2021.

- The premise of the app is to level up your emoji "creature" by scanning barcodes on items around the house, as well as playing our Battle game.

- This project took inspiration from the Scannerz line of toys that were popular in the 2000's, but moved this concept to a smartphone, with plans to incorporate Gacha game elements in the future.

## Setup

### Requirements

- `docker-compose`

- `docker`

- `node`

- `npm`

- `yarn`

- Expo Go (iOS and Android)

### Database

1. To launch the database and server, create a file named `.env` from the `.env-template` file supplied in the project root. Fill all empty fields with the values that would be correct for your environment. Note that `POSTGRES_USER` is already set. This is intentional and should not be changed because of `.sql` dumps performed for table initialization. Be sure and set the `REACT_APP_SERVER_HOST` variable to the broadcasing IP address for your server host, since your phone will connect to the server over a local network.

2. To launch the database, ensure that you have `docker` and `docker-compose` installed, and that `docker` is logged in to an account on Docker Hub.

3. Navigate to the project root, and run `docker-compose up`. This may require `sudo`.

### Server

1. In a new terminal, navigate to the `server` directory, and run `yarn`. This may require `sudo`. This will gather all dependencies for the server.

2. Run `yarn start` to launch the server. If you get errors, check your connection settings to your database.

### GOTchaApp

1. In a new terminal, navigate to the `GOTchaApp` directory, and run `yarn`. This may require `sudo`. This will gather dependencies for the server.

2. Navigate to the `util` folder. In here is a file named `constantsTemplate.js`. Copy this to a file named `constants.js`. Fill the host and port values with those of the host for the server. Keep in mind that this should be the broadcasting IP address for your server host, since your phone will connect to the server over a local network.

3. Run `yarn start` to launch the app with expo. Expo allows you to develop and test applications before releasing them to a target device. We hope you enjoy our app!

## Credits

- Sam Stegall: Fullstack, Barcode reader.

- Josh Waterman: Fullstack, Game programming.

- Karli Kessler: Frontend, Social and Purchase.