# IMPLEXITY SKY

Firebase-powered real-time group and private messaging app.

## Features
- Username/password login through Firebase Authentication (internal alias email; members type only username).
- Everyone group chat and private one-to-one conversations.
- Member directory; admin-only member creation, message deletion and group history clearing.
- Cloud Functions push notifications for direct messages and @mentions.
- Firestore rules limit private thread access to participants and administrators.

## Firebase setup
1. Create a Firebase project and register a Web App.
2. Enable Authentication → Email/Password and create Firestore.
3. Enable Cloud Messaging; generate a Web Push certificate (VAPID public key).
4. Replace the Firebase config placeholders in both `app.js` and `firebase-messaging-sw.js`; replace `YOUR_PUBLIC_VAPID_KEY` in `app.js`.
5. Replace `YOUR_FIREBASE_PROJECT_ID` in `.firebaserc`.
6. Install Firebase CLI (`npm i -g firebase-tools`), run `firebase login` and `firebase use YOUR_FIREBASE_PROJECT_ID`.
7. Deploy rules and backend: `cd functions && npm install && cd .. && firebase deploy --only firestore:rules,functions`.
8. Deploy the website using Firebase Hosting (`firebase deploy --only hosting`) or GitHub Pages (Settings → Pages → main branch, root).

## Create the first administrator
The administrator is provisioned with Firebase Admin SDK; never put admin credentials or service-account keys in public JavaScript or GitHub.
- Generate a service-account key from Firebase Project Settings → Service accounts and store it outside this repository.
- Install the SDK locally: `npm install firebase-admin`.
- Run `GOOGLE_APPLICATION_CREDENTIALS=/secure/service-account.json node scripts/create-admin.js skyadmin "Use-A-Strong-Password"` (PowerShell: set the environment variable first, then run the script).
- Choose your own username and password. The script sets the Firebase custom claim `admin:true`.

## Notes
- Member accounts are created from the admin console; username format: 3–32 letters, numbers, dot, underscore or hyphen. Password minimum 8 characters.
- Firebase Cloud Functions and outbound push may require the Blaze billing plan.
- Push requires HTTPS, browser permission, VAPID configuration and supported browser/OS; priority and delivery are controlled by the platform.
- Session revocation callable is provided as `adminLogoutUser`; add a UI control to invoke it for a selected member if needed.
- Apply Firebase App Check, abuse controls, quotas and operational monitoring before public production use.
- The directory currently allows signed-in users to read usernames. Keep private profile data out of the public user documents.
