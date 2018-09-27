## Address Book Angular



### To Run e2e test with debugger
```
$ node --inspect-brk ./node_modules/.bin/protractor e2e/protractor.conf.js
```

Go to `chrome://inspect/devices` in the chrome browser
Click on `Open dedicated DevTools for Node`
Another browser should be opened and it stops before the execution of the app, just click `Resume execution`

If you want to run the e2e test without the debugger then modify protractor.conf.js (instructions in there) and the run in the terminal

```
$ ng e2e
```