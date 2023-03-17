import React from 'react';
function ReactJS() {
    return (
        <div>
            <div className="container">
                <div className="heading"><u><h1>React JS</h1></u></div>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p>React is a free and open-source front-end JavaScript library which is used for building user interfaces especially for single-page applications.</p>
                    <p>React was created by Jordan Walke, He is a software engineer working for Facebook.</p>
                    <p>React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012. It is also known as React.js or ReactJS.</p>
                    <p><b className="main">What are the major features of React?</b></p>
                    <p>The major features of React are:-</p>
                    <p>It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.</p>
                    <p>Supports server-side rendering And follows Unidirectional data flow or data binding.</p>
                    <p>Uses reusable / composable UI components to develop the view.</p>

                    <p>Virtual Dom is nothing but you can say the virtual representation of Dom Mean, Document object model.</p>
                    <hr />
                    <p><b className="main">DOM:-</b> Dom stand for Document object model it is made by 3 word Document object and model.</p>
                    <p> Here, Document means not text document it is a html syntaxes, And object is a particular element of html syntaxes.</p>
                    <p>And model is whole HTML syntaxes that that makes a structure.</p>

                    <p><b>When you want to create element in javascript:-</b></p>
                    <div className="overflow-scroll mb-4">
                        <p><b className="main">Let element = object.create("h2")</b></p>
                        <p><b className="main">element.textContent = "Hello world"</b></p>
                        <p><b className="main">Document.querySelector("body").appendChild(ele)</b></p>
                    </div>
                    <hr />
                    <p><b>JSX:-</b> JSX stands for JavaScript XML.</p>
                    <p>JSX allows us to write HTML in React.</p>
                    <p>JSX makes it easier to write and add HTML in React.</p>
                    <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and appendChild() methods.</p>
                    <p>Basically it just provides syntactic sugar for the React.createElement() function</p> <hr />
                    <p><b className="main">AJAX:-</b> AJAX stand for Asynchronous javascript And XML which is use to send the HTTP request in background that means,</p>
                    <p>When we click on particular button then AJAX is capable to send the HTTP request without reloading the webpage.</p>
                    <p>For example:- Facebook, Youtube, Instagram etc etc.</p>
                    <p>When we click on the <span className="main">like</span> button ✅ page doesn't refresh after clicking</p>
                    <hr />

                    <p><b className="main">Rest API:- </b> Rest API is a standard in which we makes API, API is nothing but you can say it works like a midater that means,</p>
                    <p>When we want to fetch some data from the server then we can connect with particular API that's help to perform crud operation from Server. </p><hr />
                    <p><b className="main">State:-</b> The state is a built-in React object that is used to contain data or information about the component.</p>
                    <p><b className="main">Component:-</b> Components is nothing but you can say it is a kind of function that is reusable.</p>
                    <p><b className="main">Pure Component:-</b> Pure component is a specical type of component that used to stop the rendering.</p>
                    <p><b className="main">Props:-</b> Props is a property in React which is used to pass data from one component to another (from a parent component to a child component).</p>
                    <p>Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic.</p>
                    <p>It follows the data in unidirectionaly.</p>
                    <hr />
                    <p><b className="main">Differences between props and state:-</b></p>
                    <p>Props are used to pass data, whereas state is for managing data.</p>
                    <p>Data from props is read-only, and cannot be modified by a component that is receiving it from outside.</p>
                    <p>State data can be modified by its own component, But its private (cannot be accessed from outside)</p>
                    <p><span className="main">Props</span> are read only While <span className="main">States</span> are not.</p><hr />
                    <p><b className="main">Redux:-</b> Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries.</p>
                    <p>Such as React or Angular for building user interfaces.</p>
                    <p><b className="main">Redux have three Components or you can say three thing that makes Redux:- </b></p>
                    <p><b className="main">Action:-</b> Action that tell us what you want to do.</p>
                    <p><b className="main">Reducer:-</b> Reducer tell us how to do whatever you want to do.</p>
                    <p><b className="main">Store:-</b> Store is a centralize place where we can stored multiple reducer.</p><hr />
                </div>
            </div>

            <div className="container">
                <div className="heading"><u><h1>Hooks in React JS</h1></u></div>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p> Hooks are the new feature in React JS that is introduced in React 16.8 version, It allows to use states and other react feature without writing a class component.</p>

                    <p><b className="main">There are 3 rules for hooks:-</b></p>
                    <p>1.Hooks can only be called inside React functional components.</p>
                    <p>2.Hooks can only be called at the top level of a component.</p>
                    <p>3.Hooks cannot be conditional</p><hr />
                    <p><b className="main">1.UseState:-</b> UseState is a type of Hooks which is nothing but same as state of class component.</p>
                    <p>When we have to use state in class components we use state and setState to store and update the data.</p>
                    <p>But we can not use state and setState in functional components so, instead of using state and setState we are using UseState to store the data and information in functional components.</p>
                    <p><b className="main">UseState takes two thing in Array:-</b></p>
                    <p>First is State that store the data and information.</p>
                    <p>Second is SetState that is capable for update the data and information.     <a className="nav-link active " aria-current="page" href='https://github.com/Mjvirusofficial/Relevel-by-unacadamy/blob/master/MODULE%202/React/JeevendraSir/src/Hooks/UseState/Hooks.jsx'><h2 className='learn'>See code</h2></a>
</p><hr />
                    <p><b className="main">UseEffect:-</b> The useEffect Hook allows you to perform the side effects in your components.</p>
                    <p><b className="main">Some examples of side effects are:-</b> fetching data, directly updating the DOM, and timers etc etc.</p>
                    <p>When we use this effect then we have to confirmed that the UseEffect code must be writeen in the top level of the component</p>
                    <p>By using this hook, you can tell React that your component needs to do something after render.</p>
                    <p>UseEffect can work only in functional component.</p>
                    <p>UseEffect accepts two arguments. The second argument is optional. <a className="nav-link active " aria-current="page" href='https://github.com/Mjvirusofficial/Relevel-by-unacadamy/blob/master/MODULE%202/React/JeevendraSir/src/Hooks/UseEffect/UseEffect.jsx'><h2 className='learn'>See code</h2></a></p><hr />
                    <p><b className="main">UseContext:-</b> UseContext is a part of React's contextAPI that is used to pass the data throughout your app without manully paasing props down the tree.
                    </p>
                    <p>The Context API helps to share data between components which you can't easily share with props, for example, complex data objects.</p> 
                    <p> React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
                    <p>In ContextAPI we have three things first is context second is provider and third is consumer.</p>
                    <p>Implement Context and provider is easy but writing consumer code is very lengthy so, insted of Consumer we can use UseContext.</p>
                    <p>That is nothing but you can say reduce version of Consumer which is available in ContextAPI. <a className="nav-link active " aria-current="page" href='https://github.com/Mjvirusofficial/Relevel-by-unacadamy/tree/master/MODULE%202/React/JeevendraSir/src/Hooks/UseContext'><h2 className='learn'>See code</h2></a></p><hr />
                    <p><b className="main">UseMemo:-</b> UseMemo is a pure component that used to stop the rendering in functional component. </p>

                    <p>The UseMemo hook only runs when one of its dependencies update.</p>
                    <p>This can improve the performance.</p>
                    <p>If you have two or more states and you don't want to render all states then you can use UseMemo & make the pure. <a className="nav-link active " aria-current="page" href='https://github.com/anil-sidhu/react-17/blob/useMemo/src/App.js'><h2 className='learn'>See code</h2></a></p>
                    <hr />

                    <p><b className="main">UseRef:-</b> UseRef hook is simply a Ref feture which is available in class component so, insted of using ref we use UseRef in functional component.</p>
                    <p>UseRef is used in DOM manipulations, means if we have to access the data from input or render something when we clicked on button without using state in then we can use UseRef. <a className="nav-link active " aria-current="page" href='https://github.com/Mjvirusofficial/Relevel-by-unacadamy/blob/master/MODULE%202/React/JeevendraSir/src/Hooks/UseRef/UseRef.jsx'><h2 className='learn'>See code</h2></a></p>

                </div>
            </div>




        </div>
    )
}

export default ReactJS