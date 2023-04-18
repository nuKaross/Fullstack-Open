```mermaid
sequenceDiagram
    participant browser
    participant server

    browser-->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->> HTML
    deactivate server

    browser-->> GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->> HTML
    deactivate server

    browser-->> GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->> CSS 
    deactivate server

    browser-->> GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->> JavaScript
    deactivate server

        Note right of the browser: Upon recieving JS file, browser exectutes code which requests JSON file 

    browser-->> GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->> JSON content of notes
    deactivate server

        Note right of browser: Browser renders its contents in presentable way with chrome extension

    browser-->> GET https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server-->> HTML
    deactivate server
```




