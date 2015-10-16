aurelia-skeleton-tf

This skeleton is a modification of the Aurelia skeleton.

--==modifications==--
Bootstrap is replaced by Foundation
--==modifications==--

--======added======--
typescript support
postcss with nextcss and autoprefixer
--======added======--

--======To Do======--
Testing with karma
--======To Do======--

Information below is borrowed from the official Aurelia skeleton. Same installation applies
-------------------------------------------------------------------------------------------------------------

To keep up to date on Aurelia, please visit and subscribe to the official blog. If you have questions, we invite you to join us on Gitter. If you would like to have deeper insight into our development process, please install the ZenHub Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting the framework board.
Running The App

To run the app, follow these steps.

Ensure that NodeJS is installed. This provides the platform on which the build tooling runs.
From the project folder, execute the following command:

npm install
Ensure that Gulp is installed. If you need to install it, use the following command:

npm install -g gulp
Ensure that jspm is installed. If you need to install it, use the following command:

npm install -g jspm
Note: jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing jspm registry config github and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub Settings > Personal Access Tokens), public_repo access for the token is required.
Install the client-side dependencies with jspm:

jspm install -y
Note: Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing npm install -g unzip and then re-running jspm install.
To run the app, execute the following command:

gulp watch
Browse to http://localhost:9000 to see the app. You can make changes in the code found under src and the browser should auto-refresh itself as you save files.
The Skeleton App uses BrowserSync for automated page refreshes on code/markup changes concurrently accross multiple browsers. If you prefer to disable the mirroring feature set the ghostMode option to false
