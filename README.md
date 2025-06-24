# Nonstop 101
Welcome to New to Nonstop's 101. We're looking at 

## See something that's not right?
Edit the site, and show your merged pull request to redeem some merch at our next meeting!

### How to Edit A Page?

![Page Edit](edit-page.png)
1. Go to the Page to be edited, and click on "Edit Page" Button on the bottom
2. Edit and make changes on the Browser
3. Save and "commit"
4. Create a "Merge Pull Request" for the changes to be accepted into the system.


## Making this project yours -
### How to Run
1. Install Packages
npm install

2. Fix Audits
npm audit fix

3. Start Application
npm run start


### Deploy
- edit docusaurus.config.js (line 15)
    url: 'https://github.com',
    baseUrl: '/nonstop101',
    organizationName: 'new2nonstop', // Usually your GitHub org/user name.
    projectName: 'nonstop101', // Usually your repo name.

- set GIT_USER variable
    - macOS - export GIT_USER=<your_username>
    - windows - set GIT_USER=<your_username>

- yarn deploy
