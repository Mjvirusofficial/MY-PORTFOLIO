import React from 'react'

function DBMS() {
    return (
        <div>
            <div className="container">
                <h1 className="heading"><u> DBMS Concept and Architecture Introdution</u></h1>
            </div>

            <div className="container-fluid">

                <div className="row detail">
                    <h1 className=""><b className='main'>######Concept of DBMS#######</b></h1>
                    <p>(a).Data</p>
                    <p>(b).Database</p>
                    <p>(c).Database management system</p>
                    <p><b className="main">1.Data:-</b> Data is nothing but you can say everything in digital form is know as data.</p>
                    <p>Data can anything it can be a number, a symbol, alphabet, audio, video etc etc everything is known as Data.</p>
                    <p><b className="main">2.Database:-</b> In simple term you can understand database as place where the collection of data are placed.</p>
                    <p>That means Database is a type of place where we strored the set or collection of related data.</p>

                    <p><b className="main">3.DBMS:-</b> DBMS stand for Data Base Management System. It is a software tool or manage system that is used to manage the data.
                    </p>

                    <h1><b className="main">
                        How we can manage the Database:-
                    </b></h1>
                    <p>• We can see all user details.</p>
                    <p>• Pick particular user information</p>
                    <p>• We can update the user like:- his name, his salary, his current location etc whatever we want we can change.
                    </p>
                    <p>• Next is we can delete user</p>
                    <p>• We can add new users</p>
                    <p>• Filter user name wise, salary wise.
                    </p>

                    <p>DBMS first stand for Data Base Management System.

                        it is software tool that is used to manage the Database.


                    </p>
                    <p> Basically it's provide an interface to perform some operations like:-</p>
                    <p>1.Creating and organising database.</p>
                    <p>2.Updating some particular information.</p>
                    <p>3.Finding some information from the database.</p>
                    <p>4. Delete particular information etc.</p>



                    <p><b className="main">#######Best Example########
                    </b></p>

                    <p>Imagine you have a collection of books at home, and you want to keep them organized so that you can easily find any book whenever you need it. </p>

                    <p>Instead of scattering the books randomly, you decide to create a bookshelf and arrange the books in a systematic manner. </p>

                    <p>The bookshelf acts as your "Database," and the way you organize the books on the bookshelf represents the "Data Model".</p>
                    <p>

                        Now, you need a way to manage your bookshelf effectively, like adding new books, removing old ones, or finding a specific book quickly. Here's where the "Database Management System" comes into play. </p>
                    <p>The DBMS is like a helpful librarian who maintains the bookshelf for you and allows you to perform various tasks:-</p>

                    <p>
                        <b className="main">1. **Adding Books**:-</b> When you buy a new book, you hand it over to the librarian (DBMS), and they place it in the appropriate spot on the bookshelf, making sure it's organized.
                    </p>

                    <p>
                        <b className="main"> 2. **Finding Books**:-</b> If you want to find a specific book, you tell the librarian its title (a query), and the librarian goes straight to that book on the bookshelf, so you can pick it up easily.</p>

                    <p>
                        <b className="main">3. **Updating Information**:-</b> Let's say you want to change the title of a book because you found a better one. You inform the librarian, and they update the title on the bookshelf accordingly.</p>
                    <p><b className="main">4. **Removing Books**:-</b>    When a book becomes too old or you no longer need it, you ask the librarian to remove it from the bookshelf, and they do it for you.

                    </p>
                    <p><b className="main">5. **Keeping things organized**:-</b> The librarian ensures that all the books are properly arranged and that there are no duplicates on the bookshelf.</p>

                    <h1><b className="main">In this analogy:-</b></h1>
                    <p>The books are like data entries in a database.</p>
                    <p>The bookshelf represents the database where data is stored.</p>
                    <p>The librarian symbolizes the DBMS that manages and handles data operations.</p>

                    <p>So, A Database Management System (DBMS) is like your personal librarian, taking care of your data, making it easy to access, and ensuring everything stays organized.
                    </p>

                    <p>In other words DBMS first stand for Data Base Management System it is Software tool that is used to manage the Database.</p>
                    <p>Basically it's provide an interface to perform various operations.
                    </p>

                    <p><b className="main">#####Archietecture of DBMS####</b></p>

                    <p>Let's explain the architecture of a Database Management System (DBMS) in simple terms with a relatable example.</p>
                    <p>The Architecture of DBMS is divided into four part:-
                    </p>
                    <p><b className="main">1.User Interface:-</b> This is the part of the DBMS that help you to interact with database.
                    </p>
                    <p>It's like the front door to the database.
                    </p>
                    <p>You can use it to ask questions (queries) or tell the database what to do.
                    </p>
                    <p>Just like you use a search bar on a website to find information, you use the user interface of a DBMS to find and manage data.
                    </p>

                    <p><b className="main">2.Query Processor:-</b> When you ask a question (query) through the user interface, the query processor listens and understands what you want.
                    </p>
                    <p>It figures out the best way to get the answer from the database efficiently.
                    </p>
                    <p>It's like a helpful assistant who makes sure your question is clear and finds the right place to get the information.
                    </p>
                    <p><b className="main">3.Database Engine:-</b> Once the query processor knows what you want, it talks to the database engine.
                    </p>
                    <p>The database engine is like the brain of the DBMS. It knows where all the data is stored and how to get it.
                    </p>
                    <p>It follows the instructions from the query processor and goes to the right place in the database to find the information which you asked.
                    </p>
                    <p><b className="main">4.Data Storage:-</b> This is place where the actual data are placed. It's like a big organized storage room with lots of data.
                    </p>
                    <p>In a DBMS, data is organized into tables, just like how you might organize data in a spreadsheet.
                    </p>
                    <p>Each table contains specific information about data Like:-
                    </p>
                    <p>Supose you have user list then Name of user, Email of user, Website, address etc everything release user.
                    </p>
                    <p><b className="main">Let's see a example of "Library Database management system".
                    </b></p>
                    <p>Imagine you're managing a library, and you want to use a DBMS to organize your books and library members.
</p>
<p><b className="main">1.User Interface:-</b> You use a computer program with buttons and search boxes to interact with the library database.
</p>

<p>This is the user interface where you can search for books, add new books, or check which members borrowed a book.
</p>
<p><b className="main">2.Query Processor:-</b> When you type a book title in the search box the query processor understands your request and decides how best to find the book you're looking for.
</p>
<p><b className="main">3.Database Engine:-</b> The database engine knows exactly where the "books" are placed means in which row data are placed which you looking for. 
</p>
<p><b className="main">4.Data Storage:-</b> In the data storage room, there's a specific shelf (table) for books. Each row on the shelf contains information about a particular book, like the title, author, and availability status.
</p>
<p>By using a DBMS for the library, you can easily find information about books, manage library member data, and keep track of borrowed books. 
</p>
<p><b className="main">The DBMS architecture makes it organized and efficient to handle a large amount of data and helps you get the information you need quickly.</b>
</p>
                </div>
            </div>





            {/* 
   
        
          <div className="container">
                <h1 className="heading"><u>Software Model</u></h1>
            </div>

            <div className="container-fluid">
            
                <div className="row detail">

                </div>
            </div> 
            
            For heading:-
            <h1 className=""><b className='main'>write what do you want</b></h1>
             */}



        </div>
    )
}

export default DBMS