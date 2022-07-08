import 'dotenv/config';
export default {
    "expo": {
        "name": "blix-stream",
        "slug": "blix-stream",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/LogoAbout.png",
        "splash": {
            "image": "./assets/LogoAbout.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "updates": {
            "fallbackToCacheTimeout": 0
        },
        "assetBundlePatterns": [
            "**/*"
        ],
        "ios": {
            "supportsTablet": true
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#FFFFFF"
            }
        },
        "web": {
            "favicon": "./assets/favicon.png"
        },
        extra: {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
            appId:process.env.REACT_APP_FIREBASE_APP_ID,
            measurementId: process.env.REACT_APP_FIREBASE_MEASUREMEMT_ID,
            stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
            stripeSecretKey: process.env.STRIPE_SECRET_KEY,
            zoomSdkKey: process.env.ZOOM_SDK_KEY,
            zoomSdkSecret: process.env.ZOOM_SDK_SECRET,
            spreadsheetId: process.env.SPREADSHEET_ID,
            sheetId: process.env.SHEET_ID,
            clientEmail: process.env.CLIENT_EMAIL,
            privateKey: process.env.PRIVATE_KEY,
        },
    }
}