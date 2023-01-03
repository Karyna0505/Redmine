.......................................###.....................................

Playwright Test runner "REDMINE" project

.......................................###.....................................

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least v18.12.1)
- Clone and checkout the github project 

    ```bash 
    git clone https://github.com/Karyna0505/Redmine.git 
- Go to the terminal and execute inside the checked out folder

    ```bash 
    npm install 
### How to run the tests 

I defined a default configuration (playwright.config.ts)  which will be executed when you run. You can run a single test, a set of tests or all tests.
    
    npx playwright test
More details how to run on the link https://playwright.dev/docs/running-tests#command-line.

### Test structure

I work with the Page Object Pattern described in <https://playwright.dev/docs/pom>. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.
For instance I defined the RegistrationPage, AutorizationPage and SearchPage and the elements as attributes in a class and reuse them in the code.

### How make new allure-report:

More details how to make new allure-report on the link https://testersdock.com/allure-playwright/

### Open Allure Report:
```bash
allure open allure-report

 allure serve allure-results

