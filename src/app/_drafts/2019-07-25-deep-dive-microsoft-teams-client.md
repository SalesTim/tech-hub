---
permalink: /_drafts/deep-dive-microsoft-teams-client
title: Deep Dive into the Microsoft Teams Client
description: A journey into the architecture, source code and technologies of the Microsoft Teams client. 
image: /img/blog/deep-dive-microsoft-teams-client.png
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-07-18
tags:
  - teams
  - client
  - code
  - architecture
  - technologies
---

# Deep Dive into the Microsoft Teams Client
<BlogHeadline />

## Motivations
In my previous article, I described [how to install the Microsoft Teams client for Linux using Ubuntu on WSL 2](/blog/install-microsoft-teams-linux-wsl-ubuntu/). As part of this journey, I thought that we may learn a little bit more about the architecture and technologies used by Microsoft to create this client.

## What do we know so far?
As far as I can tell, for a long period of time, the only details we had about the Teams architecture was this high-level schema:
![Microsoft Teams architecture overview](/img/blog/teams-architecture.png)  

Quite light about the Teams client ;-)  

Then later during a Microsoft Build conference, some additional details started to surface about the client architecture:

![Microsoft Teams client architecture](/img/blog/teams-client-architecture.png)  

and more specifically about the calling stacks:

![Microsoft Teams client calling stacks](/img/blog/teams-client-calling-stacks.png)  

Some articles were written relaying these new infos, but maybe the only article that really tried to delve into the details is [Under the Hood of the Microsoft Teams Desktop Application](https://blog.thoughtstuff.co.uk/2017/04/under-the-hood-of-the-microsoft-teams-desktop-application/) written by a Microsoft MVP for Microsoft Teams [Tom Morgan](https://www.thoughtstuff.co.uk/). This is a good starting point, but I'm pretty sure we can go further.  

In this article, we'll discover how to access part of the Microsoft Teams client source code and see what we can learn from it.

## Extracting the Microsoft Teams package
First, refer to my [previous article](/blog/install-microsoft-teams-linux-wsl-ubuntu/) to download the Microsoft Teams desktop client for linux.

Once you have downloaded the `*.deb` file, extract it to see how the electron app is organized.
```sh
dpkg -x ~/Downloads/teams-insiders_1.3.00.16851_amd64.deb ~/teams-insiders-src
cd ~/teams-insiders-src
```

Now list the top level 5 folder structure to see what's inside:
```sh
tree -d -L 5
```
Here is a macroscopic view of the different folders:
```sh
usr                               # Target folder where teams will be deployed
├── bin                           # Teams executable startup script (Linux specific) as a `.sh` file
└── share
    ├── applications              # Shortcut `.desktop` file that enables Teams to be visible in the desktop application menu
    ├── pixmaps                   # Teams app icon
    └── teams-insiders            # Electron runtime and some binaries such as ffmpeg
        ├── locales               # Teams locale files as `.pak` with various translations in different languages
        ├── resources
        │   ├── app.asar.unpacked # Binary electron native modules as `.node` files
        │   ├── assets            # Pictures, icons and sounds files
        │   ├── locales           # Teams locale files as `.json` with various translations in different languages
        │   └── tmp               # Temporary files, probably from the ThirdPartyNotice generator
        └── swiftshader           # Binary dependency to the SwiftShader graphic api
```

What can we learn from this:

1. Teams in a **standard electron app** (OK nothing new here 😉)

2. The **startup script** is a standard bash `.sh` script:
- It's made "executable" by a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) character sequence: `#!/bin/sh`
- It loads the main electron app and defines the location of the logs folder and startup log file

3. **Binary dependencies**: Aside from the main electron app (That will download its required dependencies from the npm package registry), the package includes some additional binary dependencies, in different formats:
  - `.so` files: `so` stands for shared object (a library format commonly used in C/C++ development), and mostly includes electron base libraries and dependencies such as the [SwiftShader](https://github.com/google/swiftshader) graphic api.
  - `.node` files: [Electron native node modules](https://www.electronjs.org/docs/tutorial/using-native-node-modules), that enables Teams to access some lower-level features than what you could't use directly in a hybrid web app, or to perform resource-intensive operations faster, such as the `slimcore` library, which operates the telephony features in Teams.

## Accessing Microsoft Teams client source code
It's time to go down the rabbit hole Alice! (or Neo depending on your references)

![Alice going down the rabbit hole](/img/blog/alice-rabbit-hole.gif)  

Let's look at the `resources` folder. This is where the sources are packaged in `asar` files. `asar` files is just a tar-like archive format, that we can hopefully unarchive easily.
Teams client source code is in the `app.asar` file (the other one should be meaningless as they're the default electron packages). Let's unarchive it:

```sh
# Install the asar engine globally
npm install -g --engine-strict asar
# Unarchive app.asar in an src folder
asar extract ./usr/share/teams-insiders/resources/app.asar ./usr/share/teams-insiders/resources/src
```

:::tip
If you're curious, you can also list contents of an asar archive directly without extracting it, for instance:
```sh
asar list ./usr/share/teams-insiders/resources/electron.asar
```
:::

Now let's launch VSCode from this new `src` folder to have an overview of the source code:
```sh
code ./usr/share/teams-insiders/resources/src
```
Now you should see the electron app source code:

![Microsoft Teams client source code](/img/blog/teams-client-source-code.png)

## What can we learn from that?
I've only spent a few minutes analyzing the source code so far, therefore I know I've only scratched the surface. But we still can see some very interesting stuffs here.

**A limited set of the codebase**  
As a hybrid app, of course you'll not see here any server-side code. But more than this, a lot of client-side code is dynamically loaded at runtime from Microsoft's servers. Still, we have access to:
- The shell that controls and executes all the Microsoft Teams apps (first-party, secondt-party or third-party)
- Some interesting configuration information
- Most of the direct app dependencies

**Package file**  
From the `package.json` file, we can see that the project was started in 2016




https://www.npmjs.com/package/keytar
manage system keychain (securely storing credentials cross-platform)
utility-keytar.js
For instance, `keytar` gives a native access to os-level password managers that are used by Teams to securely store authentication tokens and other various data.


Language detector:
    "@microsoft/fasttext-languagedetector": "1.0.7",
https://fasttext.cc/
languageDetectionService.js

"@microsoft/electron-windows-interactive-notifications"

**Configuration file**
From the `env_config.json` file, we can see some interesting stuff:





Fun stuff

TypeScript
preload_window_sandbox.js
// HACK: Since TypeScript inherits static properties too, we have to
// fight against TypeScript here so Subject can have a different static create signature

references to teamspace (windowmanager.js)

TODO: Remove eval
- Implementation of a new `sandbox.js` module that encapsulates the [vm2](https://www.npmjs.com/package/vm2) npm package which seems the most secure


Who is Alphonso?
env_config.json
"enableAlphonso": true,
https://www.npmjs.com/package/alphonso


<Comments />
