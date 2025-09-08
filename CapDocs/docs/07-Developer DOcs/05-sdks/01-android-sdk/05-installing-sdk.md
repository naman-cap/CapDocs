---
title: Install SDK
excerpt: This section provides information on how to install SDK.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: endpoint
      slug: sdk-initialisation
      title: SDK initialisation
---
# Installing with version catalog

To install the SDK along with a version catalog, perform the following:

## 1. Enable version catalog

The [version catalog](https://docs.gradle.org/current/userguide/platforms.html) helps in the central declaration of dependencies and helps to improve version management.  By updating the version catalog, the necessary updates to the SDK's components are handled automatically.

1. Enable the version catalog (version 1.4.0). It For Gradle version 7.4 or below the version catalog is a 'featurepreview' and you need to enable the version catalog in your project's `settings.gradle(.kts)`. To enable, use the below code snippet:
   `enableFeaturePreview("VERSION_CATALOGS")`
   For the Gradle version above 7.4, the version catalog is enabled by default

## 2) Add SDK to the project

Capillary recommends using Maven for adding the Capillary SDK to your Android project. Capillary Android SDK is hosted on jcenter maven repository.

To add the SDK to your project,

1. Add `maven` in the repositories section of your project's `settings.gradle(.kts)` file as shown below:
   ```kotlin Groovy
   repositories {
      …
      maven {
          url "<https://maven.pkg.github.com/Capillary/hydra-sdk-android-maven>"
          credentials {
              username props['username’]
    password props['token']
          }
      }
   }
   ```
2. Create a `github.properties` file to access the Capillary SDK maven repository. Use below code snippet below:
   `username="USERNAME"
   token="TOKEN`
   Replace USERNAME and TOKEN with your actual credentials. For information on generating TOKEN from GitHub, refer to the [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) .

## 3) Declare version catalog

Add the desired catalog to your project and assign it a name. This can be done by defining the catalog in the `dependencyResolutionManagement` block of the `settings.gradle(.kts) `file. Once this is done, the `settings.gradle` file appears as follows:

1. ```kotlin Groovy
   enableFeaturePreview("VERSION_CATALOGS")  
   dependencyResolutionManagement {  
      repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)  
      repositories {  
          google()  
          mavenCentral()  
          maven {  
              name "GitHubPackages"  
              url = uri("<https://maven.pkg.github.com/Capillary/hydra-sdk-android-maven">)  
              credentials {  
                  username = props['username’]  
                  password = props['token']  
              }  
          }  
          versionCatalogs {
       create("hydra"){
           from("com.capillary:hydra-catalog:1.9.14") // !code ++
       }
   	}
   }
   ```

## 4) Add dependencies of the SDK

1. Add the required dependency for your module in the `build.gradle(.kts)` file. To do this, you need to use a combination of `catalog_name` defined in the` settings.gradle(.kts)` and alias defined in the catalog.
2. Add AndroidX libraries in the `app/build.gradle` file. The AndroidX libraries make sure that the project has access to the necessary AndroidX components.

Code snippet to add dependencies and AndroidX libraries:

```kotlin build.gradle.kts
dependencies {  
   // AndroidX libraries  
 implementation("androidx.core:core:xxx")  
 implementation("androidx.appcompat:appcompat:xxx")  
 implementation("androidx.lifecycle:lifecycle-process:xxx")  
   // Hydra Sdk  
 implementation(hydra.core)  
  implementation(hydra.pushbase)  
  implementation(hydra.firebase)  
}
```

# Installing without version catalog

You can also install the SDK without a version catalog. To install SDK without a version catalog, perform the following.

1. Capillary recommends using Maven for adding the Capillary SDK to your Android project. Capillary Android SDK is hosted on jcenter maven repository.
   To add the SDK to your project,
   1. Add `maven` in the repositories section of your project's `project/build.gradle` file as shown below:
      ```kotlin Groovy
      repositories {  
         …  
         maven {  
             url "<https://maven.pkg.github.com/Capillary/hydra-sdk-android-maven>"  
             credentials {  
                 username props['username']  
                 password props['token']  
             }  
         }  
      }
      ```
   2. Create a `github.properties` file to access the Capillary SDK maven repository.
      Use below code snippet:
      `username="USERNAME"token="TOKEN`
      Replace USERNAME and TOKEN with your actual credentials.
2. Add the required dependency for your module along with the AndroidX libraries in the `app/build.gradle` file. The AndroidX libraries make sure that the project has access to the necessary AndroidX components.
   Code snippet:
   ```kotlin app/build.gradle
   dependencies {
       // ...
       implementation("com.capillary:hydra-core:1.9.12")
       implementation("com.capillary:hydra-firebase:1.9.12")
       implementation("com.capillary:hydra-pushbase:1.9.12")
   }
   ```
