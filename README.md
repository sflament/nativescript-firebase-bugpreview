## Installation


git clone https://github.com/sflament/nativescript-firebase-bugpreview.git

to get all necessary directories 
  tns install
  tns build android

uncomment lines in /node_modules/nativescript-plugin-firebase/platforms/android/include.gradle
  // make sure you have these versions by updating your local Android SDK's (Android Support repo and Google repo)
    compile "com.google.firebase:firebase-core:16.0.4"
    compile "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
    compile "com.google.firebase:firebase-auth:16.0.5"
    compile "com.google.firebase:firebase-database:16.0.4"
    compile "com.google.firebase:firebase-firestore:17.1.2"
    compile "com.google.firebase:firebase-config:16.1.0"
    compile "com.google.firebase:firebase-storage:16.0.3"

to get a clean starting point
  tns platform remove android
  tns platform add android

then build and run !
  tns build android
  tns run android

## Versions
got from template-ts-drawer
+ plugin nativescript-firebase, using login mode email/password

## Usage

///// using local build : OK //////
///////////////////////////////////

CONSOLE = 
PS D:\Admin\Documents\Dev\nativescript-firebase-bugpreview> tns run android
Skipping node_modules folder! Use the syncAllFiles option to sync files from this folder.
Searching for devices...
Executing before-liveSync hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-liveSync\nativescript-angular-sync.js
Executing before-watchPatterns hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-watchPatterns\nativescript-dev-sass.js
Executing before-watchPatterns hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-watchPatterns\nativescript-dev-typescript.js
Executing before-watchPatterns hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-watchPatterns\nativescript-dev-webpack.js
Executing before-watch hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-watch\nativescript-dev-sass.js
Found peer node-sass
Executing before-watch hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-watch\nativescript-dev-typescript.js
Found peer TypeScript 3.1.6

00:27:42 - Found 0 errors. Watching for file changes.
Executing before-watch hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-watch\nativescript-dev-webpack.js
Executing before-checkForChanges hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-checkForChanges\firebase-copy-google-services.js
nativescript-plugin-firebase: building for same environment, not forcing prepare.
Executing before-shouldPrepare hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-shouldPrepare\nativescript-dev-webpack.js
Skipping prepare.
Refreshing application on device emulator-5554...
Successfully synced application org.nativescript.wemind on device emulator-5554.
JS: Angular is running in the development mode. Call enableProdMode() to enable the production mode.
JS: firebase.init done
JS: {"loggedIn":false,"user":null}

00:27:50 - Found 0 errors. Watching for file changes.
JS: {"loggedIn":true,"user":{"uid":"04af8515-8236-4d3c-8cde-9d74abf16ccb","name":null,"email":"toto@toto.fr","emailVerified":false,"providers":[{"id":"firebase"},{"id":"password"}],"anonymous":false,"isAnonymous":false,"phoneNumber":null,"profileImageURL":null,"metadata":{"creationTimestamp":"2016-05-18T20:48:22.000Z","lastSignInTimestamp":"2018-11-22T23:26:40.000Z"}}}

///// using tns preview : KO //////
///////////////////////////////////

Executing before-preview-sync hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-preview-sync\nativescript-dev-webpack.js
Local plugin @angular/animations differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin @angular/common differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin @angular/compiler differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin @angular/core differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin @angular/forms differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin @angular/http differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin @angular/platform-browser differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin @angular/platform-browser-dynamic differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin @angular/router differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.1.10. Some features might not work as expected.
Local plugin nativescript-angular differs in major version from plugin in preview app. The local plugin has version ~7.0.0 and the plugin in preview app has version 6.2.0. Some features might not work as expected.
Plugin nativescript-plugin-firebase is not included in preview app on device 3cdd96ef-01d1-4d19-9d92-1ce97e76a680 and will not work.
Local plugin rxjs differs in minor version from plugin in preview app. The local plugin has version ~6.3.0 and the plugin in preview app has version 6.2.2. Some features might not work as expected.
Start syncing changes for platform android.
Executing before-checkForChanges hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-checkForChanges\firebase-copy-google-services.js
nativescript-plugin-firebase: building for same environment, not forcing prepare.
Executing before-shouldPrepare hook from D:\Admin\Documents\Dev\nativescript-firebase-bugpreview\hooks\before-shouldPrepare\nativescript-dev-webpack.js
Skipping prepare.
Successfully synced changes for platform android.
LOG from device Galaxy J5 (2016): com.tns.NativeScriptException:

Error calling module function

Error calling module function

Error calling module function

Error: com.tns.NativeScriptException: Failed to find module: "nativescript-plugin-firebase", relative to: app/tns_modules/
    com.tns.Module.resolvePathHelper(Module.java:146)
    com.tns.Module.resolvePath(Module.java:55)
    com.tns.Runtime.runModule(Native Method)
    com.tns.Runtime.runModule(Runtime.java:553)
    com.tns.Runtime.run(Runtime.java:545)
    com.tns.NativeScriptApplication.onCreate(NativeScriptApplication.java:21)
    android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1032)
    android.app.ActivityThread.handleBindApplication(ActivityThread.java:6010)
    android.app.ActivityThread.-wrap3(ActivityThread.java)
    android.app.ActivityThread$H.handleMessage(ActivityThread.java:1727)
    android.os.Handler.dispatchMessage(Handler.java:102)
    android.os.Looper.loop(Looper.java:154)
    android.app.ActivityThread.main(ActivityThread.java:6816)
    java.lang.reflect.Method.invoke(Native Method)
    com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:1563)
    com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1451)
File: "<unknown>, line: 1, column: 265

StackTrace:
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/app/app.component.js', line: 9, column: 16
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/app/app.module.js', line: 7, column: 23
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/main.js', line: 5, column: 20
        Frame: function:'require', file:'', line: 1, column: 266


Error: com.tns.NativeScriptException: Failed to find module: "nativescript-plugin-firebase", relative to: app/tns_modules/
    com.tns.Module.resolvePathHelper(Module.java:146)
    com.tns.Module.resolvePath(Module.java:55)
    com.tns.Runtime.runModule(Native Method)
    com.tns.Runtime.runModule(Runtime.java:553)
    com.tns.Runtime.run(Runtime.java:545)
    com.tns.NativeScriptApplication.onCreate(NativeScriptApplication.java:21)
    android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1032)
    android.app.ActivityThread.handleBindApplication(ActivityThread.java:6010)
    android.app.ActivityThread.-wrap3(ActivityThread.java)
    android.app.ActivityThread$H.handleMessage(ActivityThread.java:1727)
    android.os.Handler.dispatchMessage(Handler.java:102)
    android.os.Looper.loop(Looper.java:154)
    android.app.ActivityThread.main(ActivityThread.java:6816)
    java.lang.reflect.Method.invoke(Native Method)
    com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:1563)
    com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1451)
File: "<unknown>, line: 1, column: 265

StackTrace:
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/app/app.component.js', line: 9, column: 16
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/app/app.module.js', line: 7, column: 23
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/main.js', line: 5, column: 20
        Frame: function:'require', file:'', line: 1, column: 266


Error: com.tns.NativeScriptException: Failed to find module: "nativescript-plugin-firebase", relative to: app/tns_modules/
    com.tns.Module.resolvePathHelper(Module.java:146)
    com.tns.Module.resolvePath(Module.java:55)
    com.tns.Runtime.runModule(Native Method)
    com.tns.Runtime.runModule(Runtime.java:553)
    com.tns.Runtime.run(Runtime.java:545)
    com.tns.NativeScriptApplication.onCreate(NativeScriptApplication.java:21)
    android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1032)
    android.app.ActivityThread.handleBindApplication(ActivityThread.java:6010)
    android.app.ActivityThread.-wrap3(ActivityThread.java)
    android.app.ActivityThread$H.handleMessage(ActivityThread.java:1727)
    android.os.Handler.dispatchMessage(Handler.java:102)
    android.os.Looper.loop(Looper.java:154)
    android.app.ActivityThread.main(ActivityThread.java:6816)
    java.lang.reflect.Method.invoke(Native Method)
    com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:1563)
    com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1451)
File: "<unknown>, line: 1, column: 265

StackTrace:
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/app/app.component.js', line: 9, column: 16
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/app/app.module.js', line: 7, column: 23
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/main.js', line: 5, column: 20
        Frame: function:'require', file:'', line: 1, column: 266


Error: com.tns.NativeScriptException: Failed to find module: "nativescript-plugin-firebase", relative to: app/tns_modules/
    com.tns.Module.resolvePathHelper(Module.java:146)
    com.tns.Module.resolvePath(Module.java:55)
    com.tns.Runtime.runModule(Native Method)
    com.tns.Runtime.runModule(Runtime.java:553)
    com.tns.Runtime.run(Runtime.java:545)
    com.tns.NativeScriptApplication.onCreate(NativeScriptApplication.java:21)
    android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1032)
    android.app.ActivityThread.handleBindApplication(ActivityThread.java:6010)
    android.app.ActivityThread.-wrap3(ActivityThread.java)
    android.app.ActivityThread$H.handleMessage(ActivityThread.java:1727)
    android.os.Handler.dispatchMessage(Handler.java:102)
    android.os.Looper.loop(Looper.java:154)
    android.app.ActivityThread.main(ActivityThread.java:6816)
    java.lang.reflect.Method.invoke(Native Method)
    com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:1563)
    com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1451)
File: "<unknown>, line: 1, column: 265

StackTrace:
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/app/app.component.js', line: 9, column: 16
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/app/app.module.js', line: 7, column: 23
        Frame: function:'require', file:'', line: 1, column: 266
        Frame: function:'', file:'file:///data/data/org.nativescript.preview/files/app/main.js', line: 5, column: 20
        Frame: function:'require', file:'', line: 1, column: 266


        at com.tns.Runtime.runModule(Native Method)
        at com.tns.Runtime.runModule(Runtime.java:553)
        at com.tns.Runtime.run(Runtime.java:545)
        at com.tns.NativeScriptApplication.onCreate(NativeScriptApplication.java:21)
        at android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1032)
        at android.app.ActivityThread.handleBindApplication(ActivityThread.java:6010)
        at android.app.ActivityThread.-wrap3(ActivityThread.java)
        at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1727)
        at android.os.Handler.dispatchMessage(Handler.java:102)
        at android.os.Looper.loop(Looper.java:154)
        at android.app.ActivityThread.main(ActivityThread.java:6816)
        at java.lang.reflect.Method.invoke(Native Method)
        at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:1563)
        at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1451)


