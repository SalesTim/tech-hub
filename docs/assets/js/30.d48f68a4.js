(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{579:function(s,t,a){"use strict";a.r(t);var e=a(26),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"install-microsoft-teams-for-linux-using-ubuntu-on-wsl2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-microsoft-teams-for-linux-using-ubuntu-on-wsl2"}},[s._v("#")]),s._v(" Install Microsoft Teams for Linux using Ubuntu on WSL2")]),s._v(" "),a("BlogHeadline"),s._v(" "),a("h2",{attrs:{id:"why-would-you-do-that"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-would-you-do-that"}},[s._v("#")]),s._v(" Why would-you do that?")]),s._v(" "),a("p",[s._v("Well, first, just because it's fun!"),a("br"),s._v("\nSecond, it's a nice technical challenge that may lead you to learn some new stuff, and you may be interested in testing Microsoft Teams for Linux."),a("br"),s._v("\nThird, of course, you could install a full-blown Linux VM using Hyper-V or VirtualBox, but as you probably already have WSL installed, it makes sense to reuse this resource and keep your CPU/RAM consumption low.")]),s._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[s._v("#")]),s._v(" Prerequisites")]),s._v(" "),a("p",[s._v("For this tutorial, I'll assume your configuration matches the following requirements (even if you could probably follow a similar procedure in a different configuration, with WSL v1 for instance):")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/whats-new/whats-new-windows-10-version-2004",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows 10 v2004"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("WSL 2 with an Ubuntu distro (18.04 TLS or 20.04 LTS)")])]),s._v(" "),a("p",[s._v("If you need to upgrade your config to WSL 2, just follow "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel",target:"_blank",rel:"noopener noreferrer"}},[s._v("this tutorial"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"setup-wsl-2-to-support-gui-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-wsl-2-to-support-gui-apps"}},[s._v("#")]),s._v(" Setup WSL 2 to support GUI apps")]),s._v(" "),a("p",[s._v("To run GUI apps from WSL, we'll use an X server on windows that will act as a remote display for your linux distro. To do so, you'll have to update your "),a("code",[s._v("DISPLAY")]),s._v(" environment variable in WSL with your IP using this command:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Set "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("DISPLAY")]),s._v("\n")])])]),a("p",[s._v("But as it may change frequently, here is a script that you may include in your "),a("code",[s._v(".bashrc")]),s._v(" config file that will update it automatically during your session initialization.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Open your .bashrc config file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v("  ~/.bashrc\n")])])]),a("p",[s._v("Add the following to your ~/.bashrc:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set the DISPLAY environment variable dynamically")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/nameserver / {print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("; exit}'")]),s._v(" /etc/resolv.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(":0\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIBGL_ALWAYS_INDIRECT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("p",[s._v("As WSL is by default command-line only, it doesn't includes all the necessary required packages to execute GUI apps. Depending on the app, you may need some other packages, but as far as I know, for Microsoft Teams, you'll only need "),a("code",[s._v("d-bus")]),s._v(", as many Linux GUI apps use the D-Bus for inter-process communication (IPC).\nInstall it using:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install d-bus")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dbus-x11\n")])])]),a("h2",{attrs:{id:"install-an-x-server-on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-an-x-server-on-windows"}},[s._v("#")]),s._v(" Install an X server on Windows")]),s._v(" "),a("p",[s._v("You have multiple options on the market, but from my experience, the best choice so far is VcxSrv that you can "),a("a",{attrs:{href:"https://sourceforge.net/projects/vcxsrv/files/latest/download",target:"_blank",rel:"noopener noreferrer"}},[s._v("download here"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[s._v('Once installed, create a new configuration, choose the "Multiple windows" option and '),a("code",[s._v("-1")]),s._v(" as a display number (automatic detection):")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/vcxsrv-1.png",alt:""}})]),s._v(" "),a("p",[s._v('Then "Start no client":')]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/vcxsrv-2.png",alt:""}})]),s._v(" "),a("p",[s._v('Enable "Disable access control":')]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/vcxsrv-3.png",alt:""}})]),s._v(" "),a("p",[s._v("Refer to "),a("a",{attrs:{href:"https://stackoverflow.com/questions/61110603/how-to-set-up-working-x11-forwarding-on-wsl2",target:"_blank",rel:"noopener noreferrer"}},[s._v("this thread"),a("OutboundLink")],1),s._v(" to learn why you need to disable access control.")]),s._v(" "),a("p",[s._v("Save your configuration and launch the VcxSrv server.")]),s._v(" "),a("h2",{attrs:{id:"use-your-first-gui-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-your-first-gui-app"}},[s._v("#")]),s._v(" Use your first GUI app")]),s._v(" "),a("p",[s._v("You should now be ready to use your first GUI app. As we'll have to download the Microsoft Teams for Linux Ubuntu package, and that the download page only shows the download link for Linux when using a linux box, let's install and start firefox:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" firefox\nfirefox\n")])])]),a("p",[s._v("Firefox should be opened as a new window in your host Windows. Now open the Microsoft Teams download page "),a("a",{attrs:{href:"https://aka.ms/getteams.",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://aka.ms/getteams"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/firefox-teams.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"download-microsoft-teams-insiders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-microsoft-teams-insiders"}},[s._v("#")]),s._v(' Download Microsoft Teams "Insiders"')]),s._v(" "),a("p",[s._v("Download the "),a("code",[s._v(".deb")]),s._v(" package in your "),a("code",[s._v("downloads")]),s._v(" folder, and install it:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Open your downloads folder")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/Downloads\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install teams-insiders")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ./teams-insiders_1.3.00.16851_amd64.deb\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v('Doing the install this way is useful to test your X server configuration. But you can also download the latest "non-insiders" version from an official repo using the following commands:')]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://packages.microsoft.com/keys/microsoft.asc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo \"deb [arch=amd64] https://packages.microsoft.com/repos/ms-teams stable main\" > /etc/apt/sources.list.d/teams.list'")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" teams\n")])])])]),s._v(" "),a("p",[s._v("Once teams-insiders is installed, just launch it from the command-line:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("teams-insiders\n")])])]),a("p",[s._v("You should now have a fully functional Microsoft Teams client for Linux running on Windows!")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/teams-linux-windows.png",alt:""}})]),s._v(" "),a("p",[s._v("If you have any issue with this tutorial, you can refer to these useful links:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://wiki.ubuntu.com/WSL#Running_Graphical_Applications",target:"_blank",rel:"noopener noreferrer"}},[s._v("Running graphical apps on Ubuntu for WSL"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoftteams/get-clients#linux",target:"_blank",rel:"noopener noreferrer"}},[s._v("Get Microsoft Teams client for Linux"),a("OutboundLink")],1)])]),s._v(" "),a("Comments")],1)}),[],!1,null,null,null);t.default=n.exports}}]);