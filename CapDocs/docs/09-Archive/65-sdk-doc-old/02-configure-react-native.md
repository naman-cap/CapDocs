---
title: Configure React Native
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
For the methods we added in the Native Android module and exposed them to React Native, we need to add them to the React Native side for the React Native apps to start using those.

### React Native Bridge methods

Create a new RnHydra.tsx and types.ts files in your React Native’s root directory and add the following (eg - projectName/scr/RnHydra.tsx)-

````javascript
import {
 NativeModules,
 Platform,
} from 'react-native';
import {
 type HydraConfigParams,
 type PushUserParams,
 type UserPreferences,
} from './types';


/**
* Error message displayed when the 'react-native-capillary' package is not linked.
*/
const LINKING_ERROR =
 `The package 'Hydra SDK' doesn't seem to be linked. Make sure: \n\n` +
 Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
 '- You rebuilt the app after installing the package\n'


const RnHydraSdk = NativeModules.RnHydraSdk
 ? NativeModules.RnHydraSdk
 : new Proxy(
   {},
   {
     get() {
       throw new Error(LINKING_ERROR);
     },
   }
 );


/**
* Initializes the Hydra SDK with the provided configuration parameters.
* This method should be called before any other method in the SDK.
* The SDK should be initialized only once in the app lifecycle.
* Subsequent calls to this method will have no effect.
* The SDK will not be initialized if the configuration parameters are invalid, if the configuration
* parameters are not provided or if the configuration parameters are not provided in the correct format.
*
* @param hydraConfig - The configuration parameters for the Hydra SDK.
* @returns A promise that resolves when the SDK is successfully initialized.
*
* @example
* ```tsx
* init({
*   accountId: 'account-id',
*   baseURL: 'https://api.your-domain.in/',
*   sslPublicKey: 'ssl-public',
*   customerId: 'customer-id',
*   country: 'India',
*   city: 'Pune',
*   countryCode: '91',
*   captureViewPortDetails: true,
*   isDisableAppLaunchedEvent: false,
*   debugLevel: 2,
*   fcmConfig: {
*     isFCMRegistrationEnabled: false,
*   },
*   notificationConfig: {
*     isNotificationEnabled: true,
*     ...
*   }
* });
*/
export function init(hydraConfig: HydraConfigParams): Promise<any> {
 return RnHydraSdk.initSdk(hydraConfig);
}


/**
* Pushes user sign up data to the Hydra SDK.
*
* @param params - The parameters for user sign up.
* @returns A promise that resolves when the user sign up data is successfully pushed.
*
* @example
* ```tsx
* pushUserSignUp({
*   username: 'username',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserSignUp({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }


 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user sign up data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserSignUp(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserSignUp(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData
   );
 }
}


/**
* Pushes user sign in data to the Hydra SDK.
*
* @param params - The parameters for user sign in.
* @returns A promise that resolves when the user sign in data is successfully pushed.
*
* @example
* ```tsx
* pushUserSignIn({
*   customerId: 'customerId',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserSignIn({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }


 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user sign in data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserSignIn(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserSignIn(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData
   );
 }
}


/**
* Pushes user update data to the Hydra SDK.
*
* @param params - The parameters for user update.
* @returns A promise that resolves when the user update data is successfully pushed.
*
* @example
* ```tsx
* pushUserUpdate({
*   customerId: 'customerId',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserUpdate({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
 subscriptions
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }
 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user update data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserUpdate(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData,
       subscriptions
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserUpdate(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData,
     subscriptions
   );
 }
}


/**
* Pushes user sign out data to the Hydra SDK.
*
* @param cuid - The customer ID of the user.
* @returns A promise that resolves when the user sign out data is successfully pushed.
*/
export function pushUserSignOut(cuid: string): Promise<any> {
 return RnHydraSdk.pushUserSignOut(cuid);
}


/**
* Pushes an event to the Hydra SDK.
*
* @param eventName - The name of the event.
* @param attributes - Additional attributes associated with the event.
* @returns A promise that resolves when the event is successfully pushed.
*
* @example
* ```tsx
* pushEvent('event-name', {
*  key: 'value',
* });
*/
export function pushEvent(
 eventName: string,
 attributes?: Record<string, any>
): Promise<any> {
 return RnHydraSdk.pushEvent(eventName, attributes);
}


/**
* Passes user preferences to the Hydra SDK.
*
* @param cuId - The customer ID of the user.
* @param userPreferences - The user preferences to be passed.
* @returns A promise that resolves when the user preferences are successfully passed.
*
* @example
* ```tsx
* passUserPreferences('customer-id', {
*  promPushOpted: true,
* transPushOpted: false,
* });
*/
export function passUserPreferences(
 cuId: string,
 userPreferences: UserPreferences
): Promise<any> {
 // TODO: This needs to be fixed for iOS, we need to call
 // set preferences first before updating preferences
 return Platform.OS === 'android'
   ? RnHydraSdk.passUserPreferences(cuId, userPreferences)
   : RnHydraSdk.passUserPreferences();
}

````

### Types

Add type.ts in projectName/src/types.ts

```typescript
import type { FcmConfig } from './FcmConfig';


export interface PushUserParams {
 customerId: string;
 firstName?: string | null;
 lastName?: string | null;
 email?: string | null;
 phone?: string | null;
 customData?: Record<string, any> | null;
 subscriptions?: any[];
}

/**
* Notification Configuration object.
*
* @param smallIcon Resource-Id for the Notification Small icon.
*
* Guideline: Notification small icon should be flat, pictured face on, and must be white on
* a transparent background.
*
* @param notificationColor Set the icon color for notification.
*
* @param isMultipleNotificationInDrawerEnabled By default,Sdk will show multiple notifications
* i.e. isMultipleNotificationInDrawerEnabled is true, if the app wants
* to show a single notification then they should pass
* isMultipleNotificationInDrawerEnabled as false
*/
export interface NotificationConfig {
  // small icon resource for push-notification. Give the string name of the icon
  // you added in android drawable without extension.
  // @example
  // If you added small_notification.xml in the android/app/res/drawable/ folder, then
  // give the string name as small_notification
 
 smallIcon: string;


 // Color resource for push-notification icon. Give the string name of the icon
 // you added in android drawable without extension.
 // @example
 // If you added notification_color as a color property in the android/app/res/colors/colors.xml,
 // then give the string name as notification_color


 notificationColor: string;
  //If true show multiple notification in the drawer, else show single notification.
 isMultipleNotificationInDrawerEnabled: boolean;
}


/**
* InApp Configuration object
* @param defaultImage Resource-Id for fallback image for in app message
*/
export interface InAppConfig {
 defaultImage: string;
}


/**
* NotificationCenterConfig Configuration object
* @param defaultImage Resource-Id for fallback image for the inbox messages in the notification center
*/
export interface NotificationCenterConfig {
 defaultImage: string;
 notificationCenterOffset: number;
}

/**
* This class is responsible for handling instance configuration info of Hydra SDK.
*/
export type HydraConfigParams = {
 accountId: string
 baseURL?: string
 sslPublicKey?: string
 customerId?: string
 country?: string
 city?: string;
 countryCode?: string
 captureViewPortDetails: boolean;
 isDisableAppLaunchedEvent: boolean;
 debugLevel: number;
 fcmConfig: FcmConfig;
 notificationConfig?: NotificationConfig;
 inAppConfig?: InAppConfig;
 notificationCenterConfig?: NotificationCenterConfig;
}


/**
* This class is responsible for handling user preferences info of Hydra SDK.
*/
export type UserPreferences = {
 promPushOpted: boolean;
 transPushOpted: boolean;
}

```

## Initializing Hydra Core

You need to create an instance of the Hydra SDK to use SDK APIs, this api needs to be called in from your App’s initial file (e.g. App.tsx) of the application with the HydraConfig.

```javascript
import {init} from './HydraModule';
useEffect(() => {
   init({
     accountId: 'ACCOUNT_ID_PROVIDED_BY_CAPILLARY,
     baseURL:
       'https://baseurl.com/new/',
     sslPublicKey: 'Qfmq8ouVRhwcHdl0piZPcWtYvJmHhoRPhmdadowsmla=',
     country: 'India',
     city: 'Pune',
     countryCode: '91',
     captureViewPortDetails: true,
     isDisableAppLaunchedEvent: false,
     debugLevel: 2,
     fcmConfig: {
       isFCMRegistrationEnabled: false,
     },
   })
 }, []);

```

At this point, your Hydra SDK is initialized and you can use the Hydra core APIs.
