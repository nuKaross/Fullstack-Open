```mermaid
sequenceDiagram
   

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>-Browser:HTML 
    

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    
    Server-->>-Browser:CSS 
    

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    
    Server-->>-Browser:JavaScript
    

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    
    Server-->>-Browser: JSON
    

    Browser->>+Server: GET https://studies.cs.helsinki.fi/favicon.ico
    
    Server-->>-Browser: HTML
    
    
```