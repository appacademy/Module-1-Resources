# W3D1

## Interpolating String

`Video Lectures`: 10 mins

- [Interpolating Strings Code Demo]

```js
let firstName = "Doctor";
let lastName = "Who";

let greeting = `Hello, ${firstName} ${lastName}!`;

console.log(greeting);
```

## VSCode Debugger Setup

- [Phase 1]

```json
{
  "launch": {
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch",
        "console": "integratedTerminal",
        "program": "${file}"
      },
      {
        "type": "node",
        "request": "launch",
        "name": "Mocha Tests",
        "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
        "args": [
          "-u",
          "bdd",
          "--timeout",
          "999999",
          "--colors",
          "${workspaceFolder}/test"
        ],
        "internalConsoleOptions": "openOnSessionStart",
        "skipFiles": ["<node_internals>/**"]
      }
    ]
  }
}
```

[Interpolating Strings Code Demo]: https://open.appacademy.io/learn/js-py---spet-2021-cohort-1-online/week-3-spet-2021-cohort-1-online/interpolating-strings-code-demo
[Phase 1]: https://open.appacademy.io/learn/js-py---spet-2021-cohort-1-online/week-3-spet-2021-cohort-1-online/vscode-debugger-practice
