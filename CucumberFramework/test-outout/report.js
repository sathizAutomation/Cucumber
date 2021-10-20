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
  "line": 5,
  "name": "Test URl already launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "closing browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintionn.test_URl_already_launched()"
});
formatter.result({
  "duration": 11746887200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintionn.user_enters_login_credentials()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintionn.closing_browser()"
});
formatter.result({
  "duration": 810476700,
  "status": "passed"
});
});