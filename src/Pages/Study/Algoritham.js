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
                  <p>(d) Its widly used in some company.</p>
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






        </div>
    )
}

export default Algoritham;