import React from 'react'

function Oops() {
  return (
    <div>
      <div className="container heading">
        <h1><u>Object Oriented Programing Language.</u></h1>
      </div>


      <div className="container-fluid">
        <div className="row detail">
          <p>Oops stand for Object Oriented Programing Language, And the main purpose of oops is to deal with real world entities using programing language.</p>
          <p><b>Features of Oops is:- </b></p>
          <p>1.Class</p>
          <p>2.Object</p>
          <p>3.Inheritence</p>
          <p>4.Encapsulation</p>
          <p>5.Abstraction</p>
          <p>6.Polymorphism</p>
        </div>
      </div>

      <div className="container heading">
      <h1><u>Detail description about features of Oops. </u></h1>
      </div>

      <div className="container-fluid">
        <div className="row detail">
          <p><b className='main'>1.Class:- </b>Class is nothing but group of objects is known as class, Class doesn't take any space on memory.</p>
          <p><b>It's two type first is Predefine & 2nd is User defined :- </b></p>
          <p>Predefined, means it allready available & exist in programing language, <b>for example in JAVA:- Scanner,  Console, System, String etc.</b></p>
          <p>Userdeifine. User defined, means it's written by user, <b>for example in JAVA:- Mj, virus, any_name, alphabet, anything etc.</b></p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row detail">
          <p><b className='main'>2.Object:- </b>Object is an instance of class means, Whenever the class is defined in the program, There is no memory allocated but when the object is initialized memory is allocated for the class.</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row detail">
          <p><b className='main'>3.Inheritence:- </b>It is the most important feature in java which is used to provide reused ability of the program.</p>
          <p>In inheritance, one class accessing the all properties of another class, Using extends keyword.</p>
          <p>Iska mtlb @gar aap 4 new new classes bnaty ho kisi program mai to @aapko usey access krny k liye dher sari object bnany ki koi jarurat nii by the help of extend keyword you can all functionality of another class.</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row detail">
          <p><b className='main'>4.Encapsulation </b>Encapsulation is a mechanism, which is used to wrapped all the data & method in a single unit.</p>
         <p>In Encapsulation, Declared the class variable as a private.</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row detail">
        <p><b className='main'>5.Abstraction:- </b>Abstraction is also the most important features in object oriented programing languages.</p>
        <p>It is used to hiding the non-essential features of the program, Show Only the highlighted set of services to the user.</p>
        <p>In other word, it is a process which is used to hiding the implementation details from the user.</p>
        <p><b>Advantages:- </b>First is security & second is Enhancement, Means whenever programmer make changes in code user ko pta hi chalega code k bre mai. </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row detail">
         <p><b className='main'>6.Polymorphism:- </b>Polymorphism came from greak word which mean same object having different behaviour.</p>
         <p>You can visualize like a programmer which is perfect in programing, he is a human being who is also a Boss in any company, when he goes own house the he become brother of own sister, son of his parents etc.</p>
         <p>Now, you can think he is a human being who is a programmer, a Brother, a Boss, Son of his parents</p>
         <p>So, see same object having different behaviour.</p>
        </div>
      </div>

      {/* Some usefull defination      */}

      <div className="container heading">
      <h1><u>Some usefull defination </u></h1>
      </div>


      <div className="container-fluid">
        <div className="row detail">
         <p><b className='main'>Constructor:- </b> Constructor is special type of methods whose name as same as class name, The main purpose of constructor is initialized the object.</p>
         <p>A Constructor is allready called at the time of object creation</p>
         <p><b>Portable and plateform independency:- </b></p>
         <p><span className='main'>Portable</span> is a general word, Whose meaning is easy to carry and <span className='main'>Plateform Independency</span> is the computer science word, Whose meaning is CORA.</p>
         <p>CORA means, Compile Once Run Anywhere, Mtlb ek OS me compile krny ka and kisi v OS me run kr skty ho.</p>
         <p><b>CORA:- <span>COMPILE ONCE RUN ANYWHERE.</span></b></p>
         <p><b>WORA:- <span>WRITE ONCE RUN ANYWHERE.</span></b></p>
        </div>
      </div>

      <div className="container heading">
      <h1><b className='main'>Define Compiled & Interpreted.</b></h1>
      </div>

      <div className="container-fluid">
        <div className="row detail">
         <p><span className='main'>Copmiler </span>scan the entire program first and translate it into machine code</p>
         <p>Error occurs after scanning the whole program.</p>
         <p>Compiler show all errors & warning at a same time.</p>
         <p>Debugging is slow.</p>
         <p>Execution time is less.</p>
         <p>Compiler is used by languages such as C, C++ etc..!</p>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row detail">
         <p><span className='main'>Interpreted </span>scan line by line program and convert into machine code.</p>
         <p>Error occurs after scanning each line of the program.</p>
         <p>Interpreter show one error at a time.</p>
         <p>Debugging is fast.</p>
         <p>Execution time is more.</p>
         <p>Interpreter is used by these languages such as JAVA, PYTHON etc...!</p>
        </div>
      </div>


      <div className="container heading">
      <h1><b className='main'>Define Multithreading.</b></h1>
      </div>

     
      <div className="container-fluid">
        <div className="row detail">
        <p>Multithreading is a process of executing multiple thread at a same time without dependency on other thread.</p>
        <p>Multithreading work on a single program.</p>
        <p>For example devide one single program into different different thread</p>
        <p>Supose ek kaam h like. Ground saaf krna h to 5 se 6 logo k bich agar kaam baat diya jaye to kaam jaldi khatm hoga.</p>
        </div>
      </div>


      <div className="container heading">
      <h1><b className='main'>Exception Handling.</b></h1>
      </div>

      <div className="container-fluid">
        <div className="row detail">
       <p>In exception handling, we should an alternat source that can handle the exception.</p>
       <p>In other words Exception handling is a alternat source in java which is used to handle the exception of the program.</p>
       <p>The object oriented mechanism provides the following techniques to work with exception.</p>
       <p>1.Try</p>
       <p>2.Catch</p>
       <p>3.Throw</p>
       <p>4.Throws</p>
       <p>5.Finally</p>
        </div>
      </div>


    </div>
  )
}

export default Oops