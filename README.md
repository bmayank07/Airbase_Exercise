Required Node version : v16.20.1
It will automatically download the stable chrome version and the required chromedriver to run the testcases. It has been handled in the wdio.amazon.conf.js file in the capabilities.
https://googlechromelabs.github.io/chrome-for-testing/
It has the capability to run parallel testcases, just set maxInstances to 2 or 3, to invoke 2 or 3 chrome browsers parallely and each browser will cater a separate spec file.
After the testcases have run, hit allure open in the command line, allure html report will open in the browser.
