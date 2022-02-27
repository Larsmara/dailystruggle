# SQL tables

**Expenses**

-   Id
-   UserId
-   ExpenseName
-   CategoryId
-   Amount
-   Date

**Categories**

-   Id
-   CategoryName
-   UserId
-   Date

**User - Columns**

-   UserId
-   Name
-   Username
-   Email
-   Picture
-   Date joined

# Project structure

-   src
    -   api
    -   components - shared across the app
    -   sharedStore
        -   index.js
    -   modules
        -   views
        -   store
            -   actions.js
            -   getters.js
    -   router
