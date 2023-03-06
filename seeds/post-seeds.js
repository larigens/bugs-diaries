const { Post } = require('../models'); // Imports the models.

const postsData = [
    {
        title: 'Features and Benefits of Node.js.',
        content: `1. Scalability: Node.js is highly scalable, making it ideal for building large-scale web applications. It uses an event-driven, non-blocking I/O model that allows it to handle a large number of simultaneous connections with minimal resource usage.
        \n2. Fast Performance: Node.js is known for its fast performance. It uses the V8 engine to execute JavaScript code, which compiles JavaScript into machine code and executes it directly, resulting in faster performance.
        \n3. Easy to Learn: Node.js is easy to learn, especially if you already have experience with JavaScript. It has a simple and consistent API that makes it easy to build web applications quickly.
        \n4. Large Community: Node.js has a large and active community of developers who contribute to the development of Node.js and its ecosystem. This means that there are plenty of resources and tools available to help developers build applications with Node.js.
        \n5. Rich Ecosystem: Node.js has a rich ecosystem of modules and packages that make it easy to extend its functionality.
        \nThere are thousands of modules available in the Node.js package manager, npm, which can be easily installed and used in your projects.`,
        user_id: 1,
    },
    {
        title: 'Essential technologies for building modern websites.',
        content: `HTML:\n
        - HTML is the backbone of the web. It's the language used to structure and format content on web pages.
        - HTML is a markup language, meaning that it uses tags to define the structure and meaning of content. This makes it easy for both humans and machines to understand.
        - HTML is constantly evolving. The latest version, HTML5, has introduced many new features and elements, such as video and audio support, new input types, and the ability to create more semantically meaningful documents.
        \nCSS:\n
        - CSS is used to style and format HTML content. It's what gives web pages their visual appeal.
        - CSS allows you to separate the presentation of your web pages from their structure and content, which makes it easier to maintain and update your site.
        - CSS is incredibly powerful and flexible. It allows you to create complex layouts, animations, and interactive features on your web pages.
        - CSS can be used in conjunction with other web technologies like JavaScript and SVG to create even more advanced web applications and experiences.
        \nTogether, HTML and CSS form the foundation of the web. By mastering these technologies, you can create beautiful, functional, and responsive web pages that will engage your users and help you achieve your goals.`,
        user_id: 8,
    },
    {
        title: 'Unique aspect of HTML.',
        content: `One unique aspect of HTML (Hypertext Markup Language) is that it is a markup language specifically designed for creating and structuring content on the web.
        Unlike programming languages such as Python or Java, which are used to create complex software applications, HTML is primarily used to create web pages and documents that are meant to be viewed in a web browser.
        \nHTML uses a set of tags and attributes to define the structure and content of a web page, including headings, paragraphs, lists, links, images, and more. This allows web developers to create rich, interactive content that can be easily displayed and navigated by users in a web browser.
        \nAnother unique aspect of HTML is its ongoing evolution and development. HTML has undergone several major revisions since its initial release in 1993, with the most recent version being HTML5. Each new version of HTML introduces new features and capabilities, reflecting the changing needs and expectations of web users and developers.
        \nThis continuous evolution helps to ensure that HTML remains a relevant and effective tool for creating engaging and innovative web content.`,
        user_id: 2,
    },
    {
        title: 'A powerful and flexible templating engine.',
        content: `Handlebars is a popular templating engine for JavaScript that allows developers to create dynamic HTML templates with minimal effort. It is often used in web development frameworks like Node.js.
        \nAt its core, Handlebars provides a simple syntax for creating templates that can be rendered with different data.
        \nA Handlebars template consists of HTML code and placeholders, called "partials," that are replaced with actual data at runtime. These placeholders can include variables, expressions, and custom helpers that extend the functionality of the template.
        \nHandlebars also provides a number of built-in helpers that can be used to manipulate data, conditionally display content, and iterate over arrays. For example, the "if" and "unless" helpers allow developers to conditionally display content based on a value, while the "each" helper allows them to iterate over an array and render a template for each item. Custom helpers can also be created to extend the functionality of the template.
        \nOverall, Handlebars is a powerful and flexible templating engine that simplifies the process of creating dynamic HTML templates in JavaScript. With its intuitive syntax and extensive documentation, it is a great choice for web developers looking to improve their front-end development workflows.`,
        user_id: 2,
    },
    {
        title: 'Have you heard about Git?',
        content: `Git is a powerful version control system that has revolutionized the way software developers collaborate and manage their code.
        \nDeveloped by Linus Torvalds in 2005, Git has quickly become one of the most popular and widely used version control systems in the world. At its core, Git is a distributed version control system, which means that every developer has their own copy of the codebase, allowing them to work independently and merge their changes together when ready. This distributed approach makes it easy for developers to work on different parts of the codebase simultaneously and collaborate on large projects.
        \nOne of the key features of Git is its ability to track changes to files over time. Every time a change is made to a file, Git records it as a new version of the file, which can be easily tracked and rolled back if necessary. This allows developers to experiment with different approaches to a problem without fear of losing their work.
        \n Git also includes powerful branching and merging capabilities, which allow developers to create separate branches of the codebase for testing new features or fixing bugs. Once changes have been thoroughly tested and reviewed, they can be merged back into the main branch, ensuring that the codebase remains stable and functional.
        \nOverall, Git has made it easier than ever for developers to collaborate and manage their code. Its distributed approach, version tracking, and branching and merging capabilities make it an essential tool for any software development team.`,
        user_id: 7,
    },
    {
        title: `SQL -  managing databases.`,
        content: `SQL was first introduced by IBM in the 1970s and has since then evolved to become the most widely used language for managing databases. It is a declarative language, which means that users specify what they want to achieve without specifying how to achieve it. The language is designed to be easy to use, with a straightforward syntax that is similar to natural language.
        \nSQL is used to retrieve, store, update, and manage data in a relational database. The language enables users to create, alter, and delete database objects, such as tables, views, and indexes. SQL also provides operators and functions to perform various tasks, such as aggregating data and filtering records.
        \nOne of the significant benefits of using SQL is its ability to manage large datasets. With SQL, users can quickly sort, filter, and analyze large amounts of data, making it a valuable tool for data-driven organizations.
        \nSQL also supports transactions, ensuring that multiple updates to the database occur atomically, ensuring the consistency and reliability of the database.
        \nIn conclusion, SQL is an essential tool for managing databases and is widely used in businesses and organizations worldwide. Its ability to manage large datasets, perform complex queries, and provide a scalable solution makes it a valuable tool for data-driven organizations. Whether you're a data analyst, software developer, or business owner, SQL is an essential language to learn for managing and manipulating relational databases.`,
        user_id: 3,
    },
    {
        title: `The world is made of APIs!`,
        content: `APIs, or Application Programming Interfaces, have become increasingly popular in the world of technology. In simple terms, an API is a set of protocols, routines, and tools that developers use to build software applications. APIs are essentially a way for different software systems to communicate with each other, allowing for the exchange of data and functionality.
        \nAPIs have many advantages for software developers. They allow developers to leverage existing code and functionality, saving time and resources. They also make it easier to build complex software applications by breaking them down into smaller, more manageable components. Additionally, APIs enable developers to create more secure and reliable applications by isolating different parts of the system and controlling access to them.
        \nAPIs are used in a wide variety of applications, from social media platforms to financial systems. For example, Facebook provides APIs that allow developers to integrate Facebook data and functionality into their applications. This enables developers to build applications that can post updates, share content, and connect with Facebook users.
        \nHowever, APIs also present some challenges. For example, different APIs may have different protocols and data structures, making it difficult to integrate them into a single application. Additionally, APIs may be subject to changes, updates, and deprecation, which can cause problems for developers who rely on them.
        \nDespite these challenges, APIs have become an essential tool for software developers. They enable developers to build complex applications quickly and efficiently, while also enabling them to integrate different systems and services into a single application. As technology continues to evolve, it is likely that APIs will play an even greater role in the development of software applications in the future.`,
        user_id: 9,
    },
    {
        title: `Let me Express JS!`,
        content: `Express.js is a popular web application framework built on top of Node.js. It is designed to simplify the development of web applications by providing a set of powerful tools and features that make it easier to build scalable and robust applications.
        \nOne of the key benefits of Express.js is its simplicity. It provides a minimalist approach to web application development, with a focus on building small, modular, and reusable components. This makes it easy to create and maintain complex applications, without having to worry about the underlying details of the web server.
        \nAnother advantage of Express.js is its flexibility. It allows developers to build web applications using a wide range of programming languages, including JavaScript, TypeScript, and CoffeeScript. It also provides a range of middleware and third-party modules that can be used to extend its functionality, such as security features, authentication, and database connectivity.
        \nExpress.js is also known for its excellent performance. It is built on top of Node.js, which is known for its high performance and scalability. This means that applications built with Express.js can handle a large number of concurrent requests without experiencing any slowdowns or performance issues.
        \nOverall, Express.js is an excellent choice for developers who want to build scalable, modular, and high-performance web applications. Its simplicity, flexibility, and performance make it a popular choice for both small and large-scale projects, and its active community of developers and contributors ensure that it will continue to evolve and improve in the future.`,
        user_id: 4,
    },
    {
        title: `Let's talk about Sequelize!`,
        content: `Sequelize is an open-source Object-Relational Mapping (ORM) library for Node.js, that provides an easy-to-use interface for managing SQL databases. It supports a variety of SQL databases including MySQL, PostgreSQL, SQLite, and MSSQL.
        \nUsing Sequelize, developers can work with databases using JavaScript objects and methods, rather than writing SQL queries directly. This makes it easier to develop database-driven applications, as it reduces the amount of time spent on manual database configuration and management.
        \nOne of the key benefits of Sequelize is its ability to define database models using JavaScript classes. This allows developers to easily map tables in their database to models in their Node.js application, and to define relationships between those models.
        \nSequelize also provides a powerful query builder, which simplifies the process of creating complex SQL queries.
        \nSequelize also offers support for database migrations, which allows developers to make changes to the database schema in a safe and automated way. This means that developers can easily make changes to their database without having to manually update the schema, which can save a lot of time and effort.
        \nAnother useful feature of Sequelize is its support for transactions. Transactions allow developers to group multiple database operations together, and ensure that they are all executed together, or not at all. This can be useful for tasks like transferring money between bank accounts, where multiple database operations need to be executed as a single unit of work.
        \nIn summary, Sequelize is a powerful and easy-to-use ORM library for Node.js, that provides a wide range of features for managing SQL databases. Whether you are building a small application or a large-scale enterprise system, Sequelize can help you streamline your database management and simplify your code.`,
        user_id: 6,
    },
    {
        title: `The coolest things about JavaScript!`,
        content: `JavaScript is a versatile and powerful programming language that can be used for a wide range of applications.
        \nOne of the coolest things about it is its ability to run on both the client and server sides of web applications, which makes it an essential tool for building dynamic, interactive websites and web applications.
        \nJavaScript has also become increasingly popular for building mobile and desktop applications using frameworks like React Native and Electron. It is even used in robotics and IoT (Internet of Things) projects, enabling developers to control physical devices using JavaScript code.
        \nIn addition to its versatility, JavaScript has a vast and active community of developers who create libraries, frameworks, and tools that make it even easier to build complex applications. This community also provides a wealth of resources for learning and troubleshooting, making it a great language for both beginners and experienced developers.
        \nOverall, JavaScript's flexibility, versatility, and community make it a cool and essential language for modern web development and beyond.`,
        user_id: 5,
    },
    {
        title: `MongoDB or MySQL?`,
        content: `MongoDB and MySQL are both popular database management systems, but they have different strengths and use cases.
        \nMongoDB is a document-oriented database that uses a flexible schema format called BSON, which allows for more dynamic and scalable data storage. It is designed to handle large amounts of unstructured or semi-structured data, making it a good choice for applications that need to manage data that is not easily represented in tables or rows.
        \nMySQL, on the other hand, is a relational database management system that uses a structured schema format. It is designed to handle structured data with predefined schemas, making it a good choice for applications that require strict data consistency and transactional support.
        \nHere are some reasons why you might choose MongoDB over MySQL:
        - Flexible schema: MongoDB's flexible schema allows for more dynamic data storage, which can be useful when dealing with unstructured or semi-structured data.
        - Scalability: MongoDB is designed to handle large amounts of data, making it a good choice for applications that need to scale horizontally.
        - Performance: MongoDB can provide faster read and write performance than MySQL, particularly when dealing with large amounts of data.
        - Geospatial data: MongoDB has built-in support for geospatial data, making it a good choice for applications that need to manage location-based data.
        \nHowever, there are also some reasons why you might choose MySQL over MongoDB:
        - Data consistency: MySQL provides strong support for transactional operations, which ensures that data is consistent and accurate.
        - Relational data: MySQL is designed to handle structured data with predefined schemas, making it a good choice for applications that require strict data consistency and relationships between tables.
        - Mature technology: MySQL has been around for a long time and is a mature technology with a large community of developers and users.
        \nIn summary, the choice between MongoDB and MySQL depends on the specific needs of your application. If you are dealing with unstructured or semi-structured data and need flexibility and scalability, MongoDB may be the better choice. If you are dealing with structured data that requires strong consistency and transactional support, MySQL may be the better choice. `,
        user_id: 10,
    },
    {
        title: `Core concepts of Sequelize.`,
        content: `One of the core concepts of Sequelize is the concept of models, which represent database tables in the application code.\n
        In Sequelize, a model is defined as a JavaScript class that extends the base Model class provided by Sequelize. Each model represents a table in the database, and the properties of the class define the schema of the table. This includes the table name, column names, data types, and any constraints or indexes.\n
        Sequelize supports a wide range of data types that can be used to define the schema of a table. These data types include the standard SQL data types such as INTEGER, STRING, BOOLEAN, DATE, and TEXT, as well as additional data types specific to Sequelize, such as JSON, UUID, and ENUM.\n
        For example, to define a model for a simple blog post table with columns for title, body, and publishedDate, you could write:\n
        const { Model, DataTypes } = require('sequelize');
        const sequelize = new Sequelize('sqlite::memory:');

        class Post extends Model {}
        Post.init({
            title: DataTypes.STRING,
            body: DataTypes.TEXT,
            publishedDate: DataTypes.DATE
        }, { sequelize, modelName: 'post' });\n
        In this example, we define a Post model that extends the base Model class provided by Sequelize. We then define the schema for the table using the init method, specifying the data types for each column.\n
        Once a model is defined, it can be used to perform database operations such as creating, reading, updating, and deleting records. Sequelize provides a powerful query API that allows developers to perform complex database operations with ease.\n
        Overall, Sequelize's support for models and data types makes it easy to define database schemas in Node.js applications and interact with them in a simple and intuitive way.\n`,
        user_id: 1,
    },
    {
        title: `Common MySQL command lines.`,
        content: `1. mysql -u [username] -p: This command connects to the MySQL server with the specified username and prompts for a password.\n
        2. show databases;: This command displays a list of all the databases on the server.\n
        3. use [database_name];: This command selects the specified database as the default database for subsequent commands.\n
        4. show tables;: This command displays a list of all the tables in the currently selected database.\n
        5. describe [table_name];: This command displays information about the structure of the specified table, including column names, data types, and indexes.\n
        6. select [column_names] from [table_name];: This command retrieves data from the specified table and displays it on the screen.\n
        7. insert into [table_name] ([column_names]) values ([values]);: This command inserts a new row of data into the specified table.\n
        8. update [table_name] set [column_name]=[value] where [condition];: This command updates one or more rows of data in the specified table.\n
        9. delete from [table_name] where [condition];: This command deletes one or more rows of data from the specified table.\n
        These are just a few examples of the many commands that can be used with MySQL. For a full list of commands, you can refer to the MySQL documentation.`,
        user_id: 4,
    },
    {
        title: `Handlebars and partials.`,
        content: `Handlebars is a popular templating language used for creating dynamic HTML pages. It allows you to insert dynamic content into your HTML pages by using placeholders or variables that get replaced with real values at runtime. Handlebars also allows you to define reusable blocks of code called "partials" that can be included in multiple templates.\n
        Partials in Handlebars are reusable templates that can be included within other templates. They are defined using the {{> partialName}} syntax, where partialName is the name of the partial file. Partial files are typically stored in a separate directory, and their name is prefixed with an underscore, such as _header.hbs or _footer.hbs.\n
        To include a partial in a template, you simply use the {{> partialName}} syntax, where partialName is the name of the partial file without the underscore. For example, if you have a partial file named _header.hbs, you would include it in a template using {{> header}}.\n
        Using partials can make your templates more modular and easier to maintain, since you can define reusable blocks of code that can be included in multiple templates.`,
        user_id: 8,
    },
    {
        title: `Fun fact about Git!`,
        content: `One fun fact about Git is that its creator, Linus Torvalds, initially created it for managing the development of the Linux kernel. He was frustrated with the limitations of the existing version control systems at the time, and decided to create his own. He named it "Git" as a pun on the British slang term "git," which is roughly equivalent to "idiot." Torvalds has said that he chose the name because he didn't want something that sounded too serious or important, and because he wanted to make it clear that he wasn't taking himself too seriously. Despite its playful name, Git has become one of the most widely used and respected version control systems in the world, used by developers of all kinds for managing their code.`,
        user_id: 2,
    },
    {
        title: `Front-End Development Rocks!`,
        content: `Front-end development is important for several reasons:\n
        User experience: Front-end development plays a crucial role in creating a positive user experience. A well-designed and intuitive user interface can make it easy for users to navigate a website or application, find what they need, and accomplish their goals.\n
        Mobile responsiveness: With the increasing use of mobile devices to access the internet, it is important for websites and applications to be responsive and mobile-friendly. Front-end developers ensure that websites and applications are optimized for different screen sizes and devices.\n
        Performance: Front-end development can affect the performance of a website or application. For example, if the code is not optimized, the website or application may load slowly, which can negatively impact the user experience.\n
        Accessibility: Front-end developers ensure that websites and applications are accessible to people with disabilities, such as those who are visually impaired or have motor disabilities. This includes using proper markup, adding alt text to images, and designing interfaces that are easy to navigate using assistive technology.\n
        Branding and aesthetics: Front-end development also plays a role in creating a consistent branding and aesthetic for a website or application. By using appropriate color schemes, typography, and imagery, front-end developers can create a look and feel that reflects the brand and appeals to users.\n
        Overall, front-end development is important because it directly impacts the user experience and can make or break the success of a website or application.`,
        user_id: 9,
    },
    {
        title: `Node and its built-in module system.`,
        content: `Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript code outside of a web browser. One thing you need to learn about Node.js is its built-in module system.\n
        Node.js has a built-in module system that allows you to organize your code into reusable modules. Each module can have its own variables, functions, and classes, and can expose a public API to other modules. This makes it easier to manage and scale large projects, and encourages code reuse and modularity.\n
        To create a module in Node.js, you can simply create a JavaScript file with the code you want to export, and use the module.exports object to define what parts of your module should be publicly available to other modules. For example, you can create a module called myModule with a function called myFunction like this:\n
        // myModule.js
        function myFunction() {
            console.log('Hello, world!');
        }

        module.exports = { myFunction };\n
        To use this module in another file, you can use the require function to import it:
        // index.js
        const myModule = require('./myModule');

        myModule.myFunction(); // logs "Hello, world!"\n
        This is just a basic example, but Node.js modules can be much more complex and can include external dependencies, asynchronous code, and other advanced features. By using Node.js modules, you can write modular, maintainable, and scalable code that can be easily reused in other projects.`,
        user_id: 5,
    },
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;