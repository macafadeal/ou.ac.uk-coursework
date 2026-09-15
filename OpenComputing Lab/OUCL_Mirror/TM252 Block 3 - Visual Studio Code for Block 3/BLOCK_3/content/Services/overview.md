# Web Services Overview

Now that you’ve learnt how to store and retrieve data using SQLite, let’s take the next step and explore how to share this data with other applications. Storing data in a database is useful, but in modern web development, applications often need to communicate with other systems—this is where web services come in.

A web service is a way for applications to exchange data over the internet using a commonly used format, such as JSON or XML. Web services allow different applications—regardless of programming language or platform—to communicate with one another.

## Why Use Web Services?

### Web services are used for many reasons, such as:
1. Allowing different applications to exchange data.
2. Enabling mobile apps to fetch data from a web server.
3. Supporting third-party integrations, such as connecting an e-commerce site to a payment gateway.
4. Making data publicly accessible, like an API that provides weather forecasts.

### However, web services also have some drawbacks:
1. They require network access, meaning they won’t work offline.
2. Poorly designed services may have security vulnerabilities.
3. They can slow down an application if not properly optimised.

## REST Basics

When working with web services, you’ll often hear the term RESTful API. REST stands for Representational State Transfer, and it is a set of architectural principles for designing networked applications. A RESTful API follows these principles to enable efficient and scalable communication between clients (like web browsers or mobile apps) and servers.

A RESTful API uses HTTP methods to interact with resources. Some of which we have already covered this week:

- **GET**: Retrieve data.
- **POST**: Submit data to the server, typically to create a new resource.
- **PUT**: Replace an existing resource or create a new one at a specific URL.
- **DELETE**: Remove data, making the intent of the request clear.

Each request targets a specific resource (like {guilabel}`/users`) and follows a standardised structure, making RESTful APIs easy to understand and use. By following REST principles, web services remain simple, efficient, and scalable, making them the preferred choice for modern web development.

This section is a short overview. For the full worked Flask example and activity, continue to the next page: **Building a RESTful Service**.
