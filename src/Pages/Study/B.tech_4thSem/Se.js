import React from 'react'

function Se() {
    return (
        <div>
            <div className="container">
                <h1 className="heading"><u>Software Engineering</u></h1>
            </div>
            <div className="container-fluid">
                <div className="row detail">
                    <p>Software Engineering is a programing in which we developed the software for the computer system or any other E-devices.</p>
                    <p>Software engineering is a detailed study about the software product from design to development and maintenance of the software product.</p>
                    <h1><b className='main'>1.Software products and software process</b></h1>

                    <p><b className='main'>1.1 Software Product:-</b> </p>
                    <p>The final software that is delivered to the customer is called the software products.</p>

                    <p>It is the outcome of the entire software development process or you can say the result of SDLC </p>
                    <p>It may include source code, data, user guide, reference manuals, installation manuls, specifications documentation and other documentation etc.</p>
                    <p>The software products does not have any information regarding the software process.</p>
                    <p>
                        Like:- How it works schedule, how many people worked on in , How the work was devided etc.</p>
                    <p>It only consists of the final application that full filled customers requirements.</p>

                    <p><b className='main'>1.2 Software Process:-</b> </p>
                    <p>The  Software process is the entire way in which we produce a software.</p>
                    <p>It is the entire journey from the idea 💡 to the final release of it.</p>
                    <p>It includes all the activities that are performed to form the final application or software.</p>
                    <p>
                        Like:- The requirements analysis, designing of the software, coding, testing, documentation, maintenance etc.
                    </p>
                    <p>Hence, the software process can also be defined as the collection of all the activities that the result lead to formation of the software product.</p>
                    <p>The software product may not contain the details about software process but the software process have every detail about the final product from the idea to the final release of the of it.</p>

                </div>
            </div>

            <div className="container">
                <h1 className="heading"><u>Software Model</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <h1><b className='main'>2.1 1.Waterfall model / Linear sequence model:-</b> </h1>

                    <p>It is a simple & basic model of software designing in this models software designing life cycle flow linearly so, that's why the name becomes linear sequential model.</p>
                    <p>Here, All ways are mentioned in systematic way.</p>
                    <p>This model is not fexible that means one what is done in one phase. Then it will go in next phase only no value will go in back phases.</p>

                    <h1 className=""><b className='main'>These are many phases in this model:-</b></h1>
                    <p><b>1.Feasiblity study:- </b>That means it should be financially or technically feasible.</p>

                    <p><b>2.Requirement analysis specifications:- </b>All requirements first analysis, In this phase makes SRS documentation which include complete description about the software product.</p>

                    <p><b>3.Design:- </b>Designing the UI & UX </p>

                    <p><b>4.Coding:- </b>Implement the UI & UX in programmatic way.</p>

                    <p><b>5.Levels of Testing:- </b>Unit testing || Integration testing ||System testing like:- Alpha, Beta, Acceptance || Next testing in Maintanance phase.</p>

                    <p><b>6.Maintainance:- </b>The meaning of maintainance phase is if any problem comes or any bug comes developer have to fixed that each and every whatever problems is coming technical or non-technical developer team have to fixed all of them.</p>

                    <h1 className=""><b className='main'>Advantages of this model:-</b></h1>
                    <p>1.Base model for all model.</p>
                    <p>2.Simple and easy model.</p>
                    <p>3.For small projects.</p>

                    <h1 className=""><b className='main'>Disadvantages of this model:-</b></h1>
                    <p>1.No feedback.</p>
                    <p>2.No experiment.</p>
                    <p><b>3.No parallelism:- </b>Parallelism means that at time multiple teams can work. So here no parallelism.</p>
                    <p>3.High risk</p>
                    <p>4.60% efforts in Maintainance phase</p>

                    <h1><b className="main">Waterfall model devided into two types:-
                    </b></h1>
                    <p><b>1.Classic waterfall model:-</b> There is no feedback.</p>
                    <p><b>2.Iterative waterfall model:-</b> Ya, Here is feedback, But S.R.S document will not change that means feasibility study that is used to gather the information about software product will not change.
                    </p>

                    <p><h1><b className="main">Increment model:-</b></h1> It is used to create your software product in part wise that means supose you want to create a software for any school or University.
                    </p>

                    <p>Then your functionality for the application is like attendence, fee, students login, HOD login, Director login etc.
                    </p>

                    <p>Then if you want to create application using this model, Software engineer first implement some part of your software then, Give you and repeat this step until your products in not complete.
                    </p>

                    <h1><b className="main">V shaped Model:-</b></h1>
                    <p>This is also known as Verification & validation model.
                    </p>

                    <p>It is a extension of waterfall model.
                    </p>

                    <p>That means in waterfall model one by one cycle we complete the SDLC
                    </p>

                    <p>Over here also it  is same we will complete all the steps one by one like that, But over here one more thing is extra that I will make a diagram and show.
                    </p>

                    <p>Over here first of all we have done requirement analysis after that we did Designing phase and after coming to the implementation and coding phase.
                    </p>

                    <h1><b className="main">Prototype Model:-</b></h1>
                    <p>In this model the review and update option is upgraded that means in this model:-
                    </p>

                    <p>A prototype of your software is designed first means you can think as a dummy model of your software.
                    </p>

                    <h1><b className="main">Phases in this model:-</b></h1>
                    <p>1.Requirement analysis</p>
                    <p>2.Quick Designing</p>
                    <p><b>3.Build prototype:-</b></p>
                    <p>A.Customer Evaluation</p>
                    <p><b className='main'>B.Review and update / Refinement suggestion incorporating:-</b>  if customer want to any update that again go to the Build prototype phase.</p>

                    <p>4.Coding & testing.</p>
                    <p>5.Testing.</p>
                    <p>6.Maintanance.</p>

                    <h1><b className="main">RAD Model:-</b></h1>
                    <p>RAD stand for Rapid Application Development.</p>

                    <p>It is a high speed adaptation of waterfall model.</p>

                    <p>It is a example of increament software process model.</p>

                    <p>The RAD model is only designed to produce a good quality product in very short duration of time.</p>

                    <p>Here, software product divided into team and after making some part then combining the all parts and make products.
                    </p>

                    <h1 className=""><b className='main'>Advantages of this model:-</b></h1>
                    <p>It required very less time to develop the product.</p>

                    <p>Product may be produced before it's delivery.</p>

                    <h1 className=""><b className='main'>Disadvantages of this model:-</b></h1>

                    <p>Large projects required sufficient or more human resource.</p>
                    <p>It's also doesn't work in high technical risk.</p>

                    <h1><b className="main">Phases in this model:-</b></h1>
                    <p><b>1.Business model:-</b> Gather information.</p>

                    <p><b>2.Data modeling:-</b> Show the flow of data using some techniques like DFD (data flow diagram).</p>

                    <p><b>3.Process modeling:-</b> Here you can see the process of DFD Like how data flow.</p>

                    <p><b>4.Application modeling:- </b> Making design of the software product and implementing.</p>

                    <p><b>5.Testing turnover:-</b> Test product.</p>

                    <h1><b className="main">Evolutionary model:-</b></h1>

                    <p>It is a combination of Iterative model and increment model</p>

                    <p>Increament model first implementat the few basic features of the software and deliver to customer.</p>

                    <p>Then build the next part and deliver it again and repeat this step until the Desired system is fully released.</p>

                    <p>No long-term plan are made.</p>

                    <p>Iterative model main advantage is its feedback process in every phase.</p>

                    <p>Also known as design a little, build a little, test a little, deploy a little model.</p>

                    <h1><b className="main">Spiral Model:-</b></h1>
                    <p>Spiral model have risk handling features.</p>
                    <p>If the radius of the spiral is increase then the cost of the product will also increase.</p>

                    <p>Angular dimensions of the spiral represent the progress of the software product.</p>

                    <p>This is a meta model that means this model is prepared from the advantage of different different models.</p>

                    <h1><b className="main">Spiral model have four phases that makes a risk analysis software product:-</b></h1>

                    <p>1.Objective determination and identify alternative solution.</p>

                    <p>2.Identify and resolve risks.</p>

                    <p>3.Develop next version of product.</p>

                    <p>4.Review and plan for next phase.</p>


                    <h1 className=""><b className='main'>Advantages of this model:-</b></h1>

                    <p>Best for the risk handling.</p>
                    <p>Best for the large projects.</p>
                    <p>It's a flexible model.</p>
                    <p>It's provided customer satisfaction.</p>

                    <h1 className=""><b className='main'>Disadvantages of this model:-</b></h1>

                    <p>Very complex model.</p>
                    <p>Too risk handling.</p>
                    <p>More time to develop.</p>
                    <p>It's very expensive as compared other models.</p>


                    <h1><b className="main">Agile model:-</b></h1>

                    <p>The Agile model is an iterative and incremental approach for software development that emphasizes flexibility, customer collaboration, and continuous improvement.</p>

                    <p>It was created as a response to the limitations of traditional, linear software development methodologies such as the Waterfall model.</p>

                    <p>The Agile model involves breaking down the software development process into small, manageable chunks called "sprints". Each sprint typically lasts two to four weeks and involves a cross-functional team of developers, designers, testers, and other stakeholders working collaboratively to deliver a working software increment.</p>

                    <p>The Agile model has gained popularity in recent years due to its flexibility and ability to deliver working software quickly and efficiently. However, it is important to note that the Agile model may not be suitable for all projects, and choosing the right development methodology for a given project requires careful consideration of various factors such as project size, complexity, and team composition.
                    </p>

                    <h1><b className="main">Some models that come under Agile technology:- </b></h1>

                    <p>1.Scrum.</p>
                    <p>2.Crystal.</p>
                    <p>3.FDD.</p>
                    <p>4.XP etc.</p>



                    <h1 className=""><b className='main'>Advantages of this model:-</b></h1>
                    <p>Frequently delivery.</p>
                    <p>Face to face communication with clients.</p>
                    <p>Frequently changes.</p>
                    <p>Time constraints.</p>


                    <h1 className=""><b className='main'>Disadvantages of this model:-</b></h1>
                    <p>1.Less documentation.</p>
                    <p>2.Maintainance problem.</p>


                    <h1><b className="main">Scrum model:-</b></h1>
                    <p>It is one of the software development model that comes under Agile technology.</p>

                    <p>Agile methodologies is an iterative and increment approach to develop a software product.</p>

                    <p>Scrum model is a lightweight iterative and incremental framework.</p>

                    <p>Scrum breakdown the phases into stages and cycle called sprints.</p>

                    <p>Sprint is a duration of time and one who are working in it.</p>

                    <p>We took genral time of sprint from 2 week to 1 month, that means the minimum time duration of the sprint is 2 week and maximum is 1 month.</p>

                    <p>The idea of the scrum is taken from the rugby 🏉 game. Like in rugby one formation is created in such a way the opponent, the team by doing their head down in such a way they are in position so, that we can take the ball like this,</p>

                    <p>One way the developer, the developer are in  such a formation by doing their head down means kind of idea that we are took from here, they are going to solve a complex formation.</p>

                    <p>They are going create a big project, by one type this idea has been taken.</p>
                    <hr />
                    <div className="container">
                        <h1 className="heading"><u>Software Requirements Specification</u></h1>
                    </div>


                    <p>Software requirement is the discription about the features and functionalities of the software product.</p>

                    <p>It is the complete discription of what the system should do.</p>

                    <p>It is also known as R.E that means Requirements engineering.</p>

                    <h1><b className="main">There are four steps in R.E which includes:-
                    </b></h1>

                    <p>1.Feasibility Study</p>
                    <p>2.Requirements Gathering / Elicitation.</p>
                    <p>3.Software Requirement specifications (SRS)</p>
                    <p>4.Software Requirement Validation (SRV)</p>

                    <h1><b className="main">Tools support for R.E:-</b></h1>

                    <p>1.Oversation support / User Oversation</p>
                    <p>2.Use cases</p>
                    <p>3.User stories</p>
                    <p>4.Requirement workshop </p>
                    <p>5.Mind maping</p>
                    <p>6.Role playing</p>
                    <p>7.Prototype</p>

                    <h1><b className="main">Software Requirement Specification Structure:-</b></h1>
                    <p><b className="main">1.Introduction:-</b></p>
                    <p>Purpose</p>
                    <p>Intended Audience</p>
                    <p>Scope</p>
                    <p>Definition</p>
                    <p>Refference</p>

                    <p><b className="main">2.Overall description:-</b></p>
                    <p>User interfaces</p>
                    <p>System interfaces</p>
                    <p>Constraints assumption and dependencies</p>
                    <p>User characteristics</p>

                    <p><b className="main">3.System features and requirements:-
                    </b></p>

                    <p>Functional requirements</p>
                    <p>Use cases</p>
                    <p>External interface requirement, Like for payment you use paypal or rozaro pay etc.</p>
                    <p>Logical database requirement.</p>
                    <p><b className="">Non-Functional Requirements:-</b> safety, security, availability, Realiblity etc.</p>
                    <p>Then approval for Deliver.</p>

                    <h1><b className="main">User requirements:-</b></h1>
                    <p>1.Easy to use / simple to operate.</p>
                    <p>2.Quick response.</p>
                    <p>3.Effectively handling operational error.</p>
                    <p>4.Customer support.</p>
                    <hr />
                    <div className="container">
                        <h1 className="heading"><u>Functional and Non-functional Requirements</u></h1>
                    </div>

                    <p>Requirements which are releted to functional working aspect of the software.</p>

                    <p>Functional requirements tell us that how the system or software product will work that means it's working and operations all comes under the functional requirements.</p>

                    <p>In Non-Functional Requirements are expected characteristics  of target product or particular software.(Security, storage, configuration performance, feasibility etc)</p>

                    <p>A Non-Functional Requirements is What are the expected characteristics that means others than that working </p>

                    <p>In other words in Non-Functional Requirements mainly come security that means weather you create a app or website you need to put a security check on it.</p>

                    <p>It should not happen that you launch the system and next day someone hacked your system. </p>

                    <p>So, security checked is very important in Non-Functional Requirements.
                    </p>

                    <hr />

                    <div className="container">
                        <h1 className="heading"><u>DFD</u></h1>
                    </div>

                    <p>DFD stand for Data Flow Diagram. It is a graphical representation of data that moved in backend.</p>

                    <p>We can understand the Data Flow Diagram in some few step:- </p>

                    <p><b>Step1:-</b>
                        When you register in any software then you fill your data like username, email, password 🔑 etc. </p>

                    <p><b>Step2:-</b> After completion of your registration you will be redirected on some other pages like login or landing pages.</p>

                    <p>Supose you redirected on login page then what happened?, After redirected on login page you can authenticate yourself by entering your data which you are added in registration page.</p>

                    <p><b>Step3:-</b>
                        When you completed your login then you will be redirected on landing / homepage page.
                    </p>

                    <p>So, what happened during the completion of your registration, login and entering in homepage.</p>

                    <p>There only your data moved in different different pages but you didn't able to see that because data travel / moved in backed.</p>

                    <p>So, because of this reason this is called DFD that means Data Flow Diagram.</p>

                    <p>Data flow diagram is useful for communicating with user, manager and other personnel.</p>

                    <p>It is also known as bubble chart.</p>

                    <h1><b className="main">DFD elements:-</b></h1>
                    <p><b>1.Source sinks (user / external entities):-</b>
                        A rectangle represents an external entities.</p>
                    <p>They either supply or received  data.</p>
                    <p>They do not process data.</p>
                    <p>Source:- Entity that supply the data to the system.</p>
                    <p>Sink:- Entity that received the data to the system.</p>

                    <p><b>2.Data flow.</b></p>
                    <p><b>3.Process / work.</b></p>
                    <p><b>4.Data stored.</b></p>

                    <h1><b className="main">Rules of Data flow:-</b></h1>

                    <p><b>1.Data can flow from:- </b></p>
                    <p>External entity to process.</p>
                    <p>Process to external entity.</p>
                    <p>Process to store and back.</p>
                    <p>Process to process.</p>


                    <p><b>2.Data can not flow from:-</b></p>
                    <p>External entity to external entity.</p>
                    <p>External entity to store.</p>
                    <p>Store to external entity.</p>
                    <p>Store to store.</p>

                    <hr />
                    <div className="container">
                        <h1 className="heading"><u>Software Design Approach</u></h1>
                    </div>
<p>It is a approach which design software product or you can say application.</p>

<h1><b className="main">Two approaches for designing software:-
</b></h1>

<p><b className="">1.Function oriented design:-</b></p>

<p>System is designed from a functional viewport.</p>

<p>Top Down composition.</p>

<p>Divided and conquer approach.</p>

<p>DFD used.</p>

<p><b>2.Object oriented disign:-</b></p>
<p>System is viewed as a collection of objects (i.e entities).</p>
<p>Bootom up approach.</p>
<p>UML is used.</p>


<hr />

<div className="container">
                        <h1 className="heading"><u>SPM</u></h1>
                    </div>

<p>SPM stand for Software Project Management, it is an art and science 🔭 of planing and leading the software project.</p>

<p>That, means in software project management we talk about how to plan the entire project, and then excute.</p>

<p>It is complete planning that how to develop the software product, like In the journey to develop product how many people will work together, when we will complete the product, how we will face 👀 the risk, what is complete cost to develop the product everything related to the software product is managed by software product manager.</p>

<p>The Software Project Manager is the administrative leader of the team.</p>

<p>The main goal of SPM is work with professional so, that software product developed effectively and efficiently.</p>

<p>Various factor make this job very complex for e.g:- changeability, complexity, uniqueness, possibility of multiple solution etc.</p>

<p>Changeability:- Make changes latest version.</p>
































































































































































                </div>
            </div>


            {/* <div className="container">
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

export default Se