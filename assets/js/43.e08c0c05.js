(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{156:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"setting-up-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-mysql","aria-hidden":"true"}},[a._v("#")]),a._v(" Setting up MySQL")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#creating-a-database-for-pterodactyl"}},[a._v("Creating a database for Pterodactyl")]),t("ul",[t("li",[t("a",{attrs:{href:"#logging-in"}},[a._v("Logging In")])]),t("li",[t("a",{attrs:{href:"#creating-a-user"}},[a._v("Creating a user")])]),t("li",[t("a",{attrs:{href:"#create-a-database"}},[a._v("Create a database")])]),t("li",[t("a",{attrs:{href:"#assigning-permissions"}},[a._v("Assigning permissions")])])])]),t("li",[t("a",{attrs:{href:"#creating-a-database-host-for-nodes"}},[a._v("Creating a Database Host for Nodes")]),t("ul",[t("li",[t("a",{attrs:{href:"#creating-a-user"}},[a._v("Creating a user")])]),t("li",[t("a",{attrs:{href:"#assigning-permissions"}},[a._v("Assigning permissions")])]),t("li",[t("a",{attrs:{href:"#allowing-external-database-access"}},[a._v("Allowing external database access")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"creating-a-database-for-pterodactyl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-database-for-pterodactyl","aria-hidden":"true"}},[a._v("#")]),a._v(" Creating a database for Pterodactyl")]),a._v(" "),t("p",[a._v("MySQL is a core component of Pterodactyl Panel but it can be confusing to setup and use if you've never done so before.\nThis is a very basic tutorial that skims just enough of the surface to set MySQL up and running with the panel.\nIf you're interested in learning more, there are some great tutorials available on the Internet.")]),a._v(" "),t("h3",{attrs:{id:"logging-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-in","aria-hidden":"true"}},[a._v("#")]),a._v(" Logging In")]),a._v(" "),t("p",[a._v("The first step in this process is to login to the MySQL command line where we will be executing some statements to get\nthings setup. To do so, simply run the command below and provide the Root MySQL account's password that you setup when\ninstalling MySQL. If you do not remember doing this, chances are you can just hit enter as no password is set.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql -u root -p\n")])])]),t("h3",{attrs:{id:"creating-a-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-user","aria-hidden":"true"}},[a._v("#")]),a._v(" Creating a user")]),a._v(" "),t("p",[a._v("For security sake, and due to changes in MySQL 5.7, you'll need to create a new user for the panel. To do so, we want\nto first tell MySQL to use the mysql database, which stores such information.")]),a._v(" "),t("p",[a._v("Next, we will create a user called "),t("code",[a._v("pterodactyl")]),a._v(" and allow logins from localhost which prevents any external connections\nto our database. You can also use "),t("code",[a._v("%")]),a._v(" as a wildcard or enter a numeric IP. We will also set the account password\nto "),t("code",[a._v("somePassword")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("USE")]),a._v(" mysql"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{attrs:{class:"token comment"}},[a._v("# Remember to change 'somePassword' below to be a unique password specific to this account.")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'pterodactyl'")]),a._v("@'"),t("span",{attrs:{class:"token number"}},[a._v("127.0")]),t("span",{attrs:{class:"token number"}},[a._v(".0")]),t("span",{attrs:{class:"token number"}},[a._v(".1")]),t("span",{attrs:{class:"token string"}},[a._v("' IDENTIFIED BY '")]),a._v("somePassword'"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"create-a-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-database","aria-hidden":"true"}},[a._v("#")]),a._v(" Create a database")]),a._v(" "),t("p",[a._v("Next, we need to create a database for the panel. In this tutorial we will be naming the database "),t("code",[a._v("panel")]),a._v(", but you can\nsubstitute that for whatever name you wish.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" panel"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"assigning-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assigning-permissions","aria-hidden":"true"}},[a._v("#")]),a._v(" Assigning permissions")]),a._v(" "),t("p",[a._v("Finally, we need to tell MySQL that our pterodactyl user should have access to the panel database. To do this, simply\nrun the command below. If you plan on also using this MySQL instance as a database host on the Panel you'll want to\ninclude the "),t("code",[a._v("WITH GRANT OPTION")]),a._v(" (which we are doing here). If you won't be using this user as part of the host setup\nyou can remove that.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" panel"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'pterodactyl'")]),t("span",{attrs:{class:"token variable"}},[a._v("@'127.0.0.1'")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("OPTION")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nFLUSH "),t("span",{attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"creating-a-database-host-for-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-database-host-for-nodes","aria-hidden":"true"}},[a._v("#")]),a._v(" Creating a Database Host for Nodes")]),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("This section covers creating a MySQL user that has permission to create and modify users. This allows the Panel to create per-server databases on the given host.")])]),a._v(" "),t("h3",{attrs:{id:"creating-a-user-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-user-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Creating a user")]),a._v(" "),t("p",[a._v("If your database is on a different host than the one where your Panel or Daemon is installed make sure to use the IP address of the machine the Panel is running on. If you use "),t("code",[a._v("127.0.0.1")]),a._v(" and try to connect externally, you will receive a connection refused error.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("USE")]),a._v(" mysql"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{attrs:{class:"token comment"}},[a._v("# You should change the username and password below to something unique.")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'pterodactyluser'")]),a._v("@'"),t("span",{attrs:{class:"token number"}},[a._v("127.0")]),t("span",{attrs:{class:"token number"}},[a._v(".0")]),t("span",{attrs:{class:"token number"}},[a._v(".1")]),t("span",{attrs:{class:"token string"}},[a._v("' IDENTIFIED BY '")]),a._v("somepassword'"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"assigning-permissions-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assigning-permissions-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Assigning permissions")]),a._v(" "),t("p",[a._v("The command below will give your newly created user the ability to create additional users, as well as create and destroy databases. As above, ensure "),t("code",[a._v("127.0.0.1")]),a._v(" matches the IP address you used in the previous command.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("*")]),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'pterodactyluser'")]),t("span",{attrs:{class:"token variable"}},[a._v("@'127.0.0.1'")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("OPTION")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nFLUSH "),t("span",{attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"allowing-external-database-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allowing-external-database-access","aria-hidden":"true"}},[a._v("#")]),a._v(" Allowing external database access")]),a._v(" "),t("p",[a._v("Chances are you'll need to allow external access to this MySQL instance in order to allow servers to connect to it. To do this, open "),t("code",[a._v("my.cnf")]),a._v(", which varies in location depending on your OS and how MySQL was installed.")]),a._v(" "),t("p",[a._v("Once opened, you'll want to change "),t("code",[a._v("bind-address=")]),a._v(" to be "),t("code",[a._v("bind-address=0.0.0.0")]),a._v(" which will allow connections on all interfaces, and thus, external connections.")]),a._v(" "),t("p",[a._v("If your Node and Daemon are on the same machine, and you won't be needing external access, you can also use the "),t("code",[a._v("docker0")]),a._v(" interface IP address, rather than "),t("code",[a._v("127.0.0.1")]),a._v(". This IP address can be found by running "),t("code",[a._v("ip addr | grep docker0")]),a._v(", and it likely looks something like "),t("code",[a._v("172.x.x.x")]),a._v(".")])])}],!1,null,null,null);s.default=n.exports}}]);