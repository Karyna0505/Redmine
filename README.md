.......................................###.....................................

Playwright Test runner "REDMINE" project

.......................................###.....................................

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least v18.12.1)
- Install Visual Studio Code
- Clone and checkout the github project (git clone ) https://github.com/Karyna0505/Redmine.git
- Open folder (cd redmine)
- Go to the terminal and execute "npm install" inside the checked out folder 

### How to run the tests 

I defined a default configuration (playwright.config.ts)  which will be executed when you run "npx playwright test".

### Test structure

I work with the Page Object Pattern described in <https://playwright.dev/docs/pom>. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.
For instance I defined the RegistrationPage, AutorizationPage and SearchPage and the elements as attributes in a class and reuse them in the code.

### Open Allure Report:
```bash
allure open allure-report

