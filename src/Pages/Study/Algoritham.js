import React from 'react'

function Algoritham() {
    return (
        <div>
            <div className="container">
                <h1 className="heading"><u>Algoritham</u></h1>
            </div>

            {/* Algoritham */}
            <div className="container-fluid">
                <div className="row detail">
                    <p>Algoritham is an compulsory combination of sequence of finate step 🪜 to solve any problem.</p>
                    <p><b className="main">For e.g:-</b> A function AddTwoNumber()</p>
                    <p>1. That takes two input let a = 4 , b = 2;</p>
                    <p>2. And stored the result in c;</p>
                    <p>3. Such that c = a + b;</p>
                    <p>4. And print output;</p>
                    <p><b className="main">See, here all steps are compulsory & it's combination of a finite step.
                    </b></p>
                </div>
            </div>

            {/* Properties of an algiritham */}

            <div className="container">
                <h1 className="heading"><u>Properties of an algorithm</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p>It should termimate also at a finite time.</p>
                    <p>It should produced 1 output after terminating.</p>
                    <p>It should take at least 0 or more input.</p>
                    <p>It should be deterministic.
                        Mtlb agar a = 2 or b = 3 h and answer stored in c , to a = 3, ya c = 2 , ya phir output c ke jagha b mai nii @aana chahiye.
                    </p>
                </div>
            </div>


            <div className="container">
                <h1 className="heading"><u>Step required to write an Algorithm</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p>1. Know the  problem definition.</p>
                    <p>2. Select Algo or Design Algo. <li>Divide & Conquer.</li><li>Gredy Technique.</li><li>Binary search.</li><li>Back tracking.</li><li>Dynamic Programming.</li></p>
                    <p>3. Design a flow chart.</p>
                    <p>4. Testing posible test cases.</p>
                    <p>5. Implementation.</p>
                    <p>6. Analysing it's time & space.</p>


                </div>
            </div>


            <div className="container">
                <h1 className="heading"><u>Most important topics is:</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p><b className="main">1. Analysing it's Time & Space complexity</b></p>
                    <p><b className="main">2. Select Algo or Design Algo.</b></p>
                </div>
            </div>



            <div className="container">
                <h1 className="heading"><u>Analysing algorithm</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p><b className="">1.Time complexity:-</b> Time complexity is based on two factor first is:-
                        Compiled time of a program and 2nd is Run time of a program.</p>

                    <p>Program Compile by compiler which is a software and Run by C.P.U which is a hardware.</p>

                    <p>So, compiler time is less when it's written in some fast programming language like python or don't know what ever.</p>

                    <p>And Rum tym is less when C.P.U or Hardware ya Processor is fast.</p>
                </div>
            </div>

            <div className="container">
                <h1 className="heading"><u>Analysing algorithm according to two factor Aposteriori analysis and Apriori analysis:- </u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p><b className="main"><u>Aposteriori Analysis:-</u></b></p>
                    <p>(a) It is dependent on language of a compiler and type of hardware (C.P.U)</p>
                    <p>(b) It will give exact answer.</p>
                    <p>(c) System to system time complexity change.</p>
                    <p>(d) Its rarely used in some company.</p>
                    <p>(e) It is also known as Relative analysis.</p>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row detail">
                    <p><b className="main"><u>Apriory Analysis:-</u></b></p>
                    <p>(a) It is independent on language of a compiler and type of hardware (C.P.U)</p>
                    <p>(b) It will give approx answer.</p>
                    <p>(c) System to system time complexity doesn't change.</p>
                    <p>(d) Its widly used in company.</p>
                    <p>(e) It is also known as Absolute analysis.</p>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row detail">
                    <p><b className="main"><u>Finding Time complexity:-</u></b></p>
                    <p>Finding time complexity is nothing but the place where C.P.U spending more time, which is nothing but finding loop,</p>
                    <p>Because loop is the place where C.P.U spends lot of time , it's run until a particular condition doesn't reached.</p>
                </div>
            </div>
            <hr />
            <div className="container">
                <h1 className="heading"><u>Asymptotic Notation</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p><b className="main">1.Big Oh Notation:-</b></p>
                    <p>Big Oh Notation is nothing but proved the right greater after taking C help where C is use for constant.</p>
                    <p>Supose we, have two functions</p>
                    <p>f(n) and g(n) then,</p>
                    <p>Big Oh Notation says that f(n) = g(n) if and only if  f(n) {'<='} g(n), for all N, N {'>'} N<sub>0</sub>  means function of the right side is greater or equal to the left side.</p>
                    <p><b>Where,</b></p>
                    <p><b>f(n) {'<'}= c.g(n) or c.g(n) {'>'}= f(n), for all N, N {'>'} N<sub>0</sub></b></p>
                    <hr />
                    <p>1.UB:- Upper Bond</p>
                    <p>2.TUB:- Tight Upper Bond</p>
                    <p>3.NTUB:- Not Tight Upper bond</p>
                    <p><b className="main"><u>For Big O() Notation:-</u></b></p>
                    <p><b>(N<sup>2</sup>) = O(N<sup>2</sup>) TUB</b></p>
                    <p><b style={{ marginLeft: '55px' }}>= O(N<sup>3</sup>) UB</b></p>
                    <p><b style={{ marginLeft: '55px' }}> = O(N<sup>10</sup>)NTUB</b></p>
                    <p><b style={{ marginLeft: '55px' }}>= O(N) Fail🚫</b></p>

                    <p><b className="main"><u>For Small o() Notation:-</u></b></p>
                    <p><b>(N<sup>2</sup>) = O(N<sup>2</sup>) Fail🚫</b></p>
                    <p><b style={{ marginLeft: '55px' }}>= o(N<sup>3</sup>) UB</b></p>
                    <p><b style={{ marginLeft: '55px' }}> = o(N<sup>10</sup>) NTUB</b></p>

                    <p><b className="main">Q1.What is the difference between Small o() and Big O() Notation.</b></p>
                    <p>There is only one difference Big O() may or may not be Tightest Upper bond but small o() have no any TUB means Tightest Upper Bond.</p>
                    <p>Means, Big O contain O({'<='}) but small o contain only o({'<'}).
                    </p>




                    <p><b className="main">2.Omega W() Notation:- </b></p>

                    <p>Omega Notation is nothing but proved the left greater after taking C help where C is use for constant.</p>
                    <p>Supose we, have two functions</p>
                    <p>f(n) and g(n) then,</p>
                    <p>Omega Notation says that f(n) = g(n) if and only if  f(n) {'>='} g(n), for all N, N {'>'} N<sub>0</sub>  means function of the right side is greater or equal to the left side.</p>
                    <p><b>Where,</b></p>
                    <p><b>f(n) {'>'}= c.g(n) or c.g(n) {'>'}= f(n), for all N, N {'>'} N<sub>0</sub></b></p>
                    <hr />
                    <p>1.LB:- Lower Bond</p>
                    <p>2.TLB:- Tight Lower Bond</p>
                    <p>3.NTLB:- Not Tight Lower bond</p>
                    <p><b className="main"><u>For Omega W() Notation:-</u></b></p>
                    <p><b>(N<sup>3</sup>) = W(N<sup></sup>) NTUB</b></p>
                    <p><b style={{ marginLeft: '55px' }}>= W(N<sup>2</sup>) LB</b></p>
                    <p><b style={{ marginLeft: '55px' }}> = W(N<sup>3</sup>)TLB</b></p>
                    <p><b style={{ marginLeft: '55px' }}>= W(N<sup>4</sup>) Fail🚫</b></p>

                    <p><b className="main"><u>For Omega w() Notation:-</u></b></p>
                    <p><b>(N<sup>3</sup>) = w(N<sup></sup>) NTUB</b></p>
                    <p><b style={{ marginLeft: '55px' }}>= w(N<sup>2</sup>) LB</b></p>
                    <p><b style={{ marginLeft: '55px' }}> = w(N<sup>3</sup>)Fail🚫</b></p>

                    <p><b className="main">Q1.What is the difference between Small w() and Big W() Notation.</b></p>
                    <p>Here also,</p>
                    <p> There is only one difference Big W() have may or may not be Tightest lower bond but small o() have no any TLB means Tightest Lower Bond.</p>


                    <p><b className="main">3.Thetha Notation:-</b></p>
                    <p>The meaning of theta notation is using constant proved that left bigger sometimes and also proved right bigger sometimes.</p>
                    <p>In other words Thetha notation says that proved right greater by taking C/1 help and also proved left greater by taking C/2 help.</p>
                    <p><b>Where,</b></p>
                    <p><b>f(n) {'<'}= c/1.g(n) and f(n) {'>'}= c/2.g(n)
                    </b></p>
                    <hr />
                    <p><b className="main">Complexity classes:-</b></p>
                    <p>1.Constant  <span style={{ marginLeft: '40px' }}>  = </span>&nbsp; &nbsp; O(1)</p>
                    <p>2.Logarithmic  <span style={{ marginLeft: '10px' }}>= &nbsp; &nbsp; O(logN)</span> </p>
                    <p>3.Linear       <span style={{ marginLeft: '71px' }}>= &nbsp; &nbsp; O(logN)</span> </p>
                    <p>4.Quadratic  <span style={{ marginLeft: '32px' }}>= &nbsp; &nbsp; O(N<sup>2</sup>)</span> </p>
                    <p>6.Polynomial   <span style={{ marginLeft: '18px' }}>= &nbsp; &nbsp; O(N<sup>c</sup>) where, C {'>'} 0</span> </p>
                    <p>7.Exponential   <span style={{ marginLeft: '10px' }}>= &nbsp; &nbsp; O(C<sup>n</sup>) where, C {'>'} 1</span> </p>

                </div>
            </div>
            <hr />
            <div className="container">
                <h1 className="heading"><u>Basic of Divide and Conquer
                </u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p><b className='main'>Topic we have to covered in BDC:-</b></p>
                    <p>1.Recursion</p>
                    <p>2.Recurrence Relation</p>
                    <p>3.Recurrence Relation solving</p>
                    <p><ul>
                        <li>Substitution Method</li>
                        <li>Recurrsive Tree 🌲</li>
                        <li>Master Theorem</li>
                    </ul></p>
                    <p><b className="main">1.Recursion:-</b> Repeatedly doing same task to solve any given problem is called Recursion. Or you can say A function calling that itself again and again to solve a particular problem is known as Recursion.</p>
                    <p>In other words Recursion is nothing but solving the big problems in terms of small problems.</p>
                    <p><b className="">For Example:-</b></p>
                    <p>Supose, you have to find the factorial of 6.</p>
                    <p>then, if you make function to find the factorial the you have write the algoritham in those way where function called itself to find answer of given problem.</p>
                    <p>function fact(n){' {'}</p>
                    <p>&nbsp;  if(n == 1) return 1;</p>
                    <p>&nbsp; return n * fact(n-1)</p>
                    <p>{'}'}</p>

                    <p><b className="main">See here function fact() that calling itself again and again to find the factorial.</b></p>
                    <hr />
                    <div className="container">
                        <h1 className="heading"><u>Some more thing about Recursion</u></h1>
                    </div>
                    <p>One thing is Recursion work on Stack means, LIFO that is nothing but Last in first out.</p>
                    <p>When function is called and not be excuted then value going to wating stage and wait to excute.</p>
                    <p>So, here in first call value pushes on stack and occupied space and when the function is excuted means its poped from stack.</p>
                    <p>Then we can say LOFO Means "Last in first out".</p>
                    <p>For example factorial function when called it pused on Stack because factorial(6) is waiting for factorial (5) and factorial (5) is waiting for factorial (4) and.............. But when reached in factorial (1) not wait for result it's directly executed because factorial (1) is 1.</p>
                    <p>Every Recursive program should have termination condition, otherwise the stack overflow error message will come.</p>
                    <p>To execute recursive program we are using stack data structures.</p>
                    <p><b className="main">Q.1 When Recursion is calling from one function to another then what will be change?</b></p>
                    <p><ul>
                        <li>Name of the function</li>
                        <li>Recurrence relation </li>
                        <li>Value of Parameters</li>
                    </ul></p>
                    <p>Only value of parameters will change when one function call to another function.</p>
                    <p>The number of stack unit utilised while recursive program is running is known as Depths.</p>
                    <p>In other words Depth is a occupied space of the stack unit while recursive program is running means calling again and again.</p>
                    <p>Recursive program are beneficial to user but not to computer.</p>
                    
                </div>
            </div>


            {/* 
            <hr />
            <div className="container">
                <h1 className="heading"><u>Basic of Divide and Conquer
                </u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                 
                </div>
            </div> */}



        </div>
    )
}

export default Algoritham;