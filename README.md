# Hey there, welcome aboard 👋🏾

Everse is a daily companion right in your browser you can try it out by downloading the extension [here](https://danju4rizzl.github.io/everse/) .

## 🤝 For Collaborations

To get strted with first you need to [clone the repo](https://github.com/danju4rizzl/react-everse-web-extension.git)
or run this command from the GitHub CLI:

    gh repo clone danju4rizzl/react-everse-web-extension

After you have cloned the repo you need to create a **your development branch** , you can run the following command in your terminal to do this

    git checkout -b myNewBranch

Now you are ready to setup your development environment! Install the initial dependencies with the command

    yarn (recommended)
    or
    nmp install

Once all the dependencies are installed, you'll need to build and install the application in your browser.

    yarn run build-prod

The above command will build a production ready version of the app you can now install to your browser ie chrome based (google chrome, vivaldi, brave) or firefox browser.

Once the extension is installed locally on your browser you can now start your development server with the following command 👩‍💻

    yarn start

It starts a development server and lunches your default browser for you now you can start coding and seeing your changes on save live.

After you are satisfied with your work. you can make your PR and we will review your code before merging to the main branch 🔥.

##### Working with Offline Data

If you want to work with offline data you can! To do this you have to install json-server

    npm install -g json-server

You can now work with offline data using the db.json file located in the root directory, feel free to edit it by adding your own data as you wish.

When you are ready it's time to fire off local server, in your terminal, run the following command to lunch and watch the server

    json-server --watch db.json <Your Json data file name>

Make sure the server is running in another process/terminal.

Check out the documentation for more information on: https://github.com/typicode/json-server
