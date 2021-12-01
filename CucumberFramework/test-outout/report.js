$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login Validation",
  "description": "",
  "id": "login;login-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Test URl already launched",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "closing browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintionn.test_URl_already_launched()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefintionn.user_enters_login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefintionn.closing_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 8,
  "name": "Login Validation",
  "description": "",
  "id": "login;login-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Test URl already launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "closing browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintionn.test_URl_already_launched()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefintionn.user_enters_login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefintionn.closing_browser()"
});
formatter.result({
  "status": "skipped"
});
});