import React from 'react'
import { NavLink } from 'react-router-dom';
import cd from './Img/cd2.jpg'
//DSA CSS files in cards.css..!
function DSA() {
  return (
    <div>
      <div className="container">
        <h1 className='heading'><u>Data structure & Algoritham</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>Data Structure Algoritham are two different thing first is Data Structure & Second is Algoritham:-</p>
            <hr className='hrline' />
            <p><b>Data Structure:-</b> Data structure is a way to arrange the data in the main memory for the efficient uses.</p>
            <p>It is a technique or you can say method to know how the data are inter related to each other mathematically or logically.</p>
            <p><b>Algoritham:-</b> An Algoritham is a sequence of step to solve any given problem.</p>
            <p>And also you can say it is a whole process of completing any task.</p>
            <hr className='hrline' />
            <p>@gar simple sabo mai samjho to tm jo mehnat krty ho kisi specific kaam ko krny k liye usi ko Algoritham bolty h.</p>
            <p>ismai mehnat mtlb kya? to tm jo step liye us kaam ko krny mai usi ka starting se ley k ending tk k safar ko you can say Algoritham.</p>
            <p><b>Ek Example lety h🤔:- </b> Hn whi simple example lety h ki supose tmhy chai bnani h (Tea) to chai bnany ka v ek process hota h naa ki sbsy</p>
            <p>Pehly tmhy paani lena padega container mai mtlb bartan uske baad boil krna hoga Ges mai after that tm chaipti, dudh whatever you want to add tmhy dalna hoga usmai phir kuch der k baad tmahara chai bn k ready ho jayega.</p>
            <p>Ab tmhara chai bn gya tm chaho to pi skty ho warna fek do😅</p>
            <p>To chai bnaana hmara ek task hua computer language mai koi v task ko problem bolty h & chai bnany ka jo hmara process tha</p>
            <p>Starting sey ley ending tk ka mtlb bartan mai paani daal k garam krny sey k ley k piny tk ka wo hmara ek process hogya.</p>
            <p>To isi pure process ko Algoritham bola jata mtlb ki hme isi tarha koi task diye rahynge jisko problem bola jayega or ussy hme bnana h.</p>
            <p>Ab ya to problem chai bnai bnany jesa easy v ho skta h ya to chai ka plant ugany sey ley k kaat kr dibby mai pack krny tk jitna hard v ho skta h.</p>
            <p>To Data Structure & Algoritham mai hm yhi janyenge ki kesy complex chizo ki easy bna skty h.</p>
            <p><b>Data Structure:-</b> ko @aap ase samjh skty ho easiest way mai ki @aapny jb 9th 10th class padha tha tb maths k book mai primay kr k dekha hoga aapny agar CBSE se ho to Theoreme hoga usmai </p>
            <p>To Teachers hme Theoreme btaty thy yd h & usi k @ccording bhut se question solve hoty thy same data structure v wesa hi h</p>
            <p>Humme Data Structure bta diye jayega or usi se related question hme milenge ya wesy bahut se question rahynge jo ek data structure janny k baad uspe apply kr skty h and bna skty h </p>
            <p>Ek do Data structure k naam btana chaunga jesy Linked list h, Stack, Queue, Binary search, Hasing, or v bahut sey h jo hm janenge Hn Recursion jismai mera dimag kharab ho jaata tha ismai lekin ab @cha lgta h.</p>
            <p>To yhi tha hmara Data Structure & Algoritham by the way english speling pay mt jaan mainy pehly hi apny bre mai bta chukka h😅</p>
            <p>@gar itny dur tk padh liye hoge to ek feedback de diyo wesy hmko khud mai bharosha h koi nii @aaya hoga itna dur😂😅</p>
            <p className='d'><button className='learn'><NavLink className='feed' to='/contact'>Give your feedback</NavLink></button></p>
            <hr className='hrline' />

          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Classification of Data Structure</u></h1>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-4">
            <div className="">
              <img src={cd} class="card-img-top cardimg" alt="..." />
            </div>
          </div>
          <div className="col-12 col-lg-8 heading">
            <h3>Let us now learn about the classification of data structure. The data structure can be classified into two categories namely - primitive data structure and non-primitive data structure, Primitive data type are those data types which is already defined, it is simply int, float, char, double etc, it is easy so, we will learn about Non-primitive Data types.</h3>
            <h3>Refer to the diagram below to see the visual representation of the various data structure.</h3>
          </div>
          <hr className='hrline' />

        </div>
      </div>





      <div className="container">
        <h1 className='heading'><u>Data and information</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p><b>Data:-</b> Data is a collection of number, alphabet and special symbol. It is a raw fat or you can say anything in digital form is known data.</p>
            <p>Data is an incomplete information means supose i have a parcel and i told you to deliver this parcel to Bunty, So can you deliver, no because I'm only given you the name "Bunty"</p>
            <p>So, when i will give you the all details like:- Full name, Address and city where you have delivered the parcel 📦 Then that time you are able to deliver the pakage.</p>
            <p><b>Now, information:-</b> So, information is collection of data in a particular format. Means, a meaningful collection of data is known as information.</p>
          </div>
        </div>
      </div>

      <hr className='hrline' />

      <div className="container">
        <h1 className='heading'><u>Abstract Data Type</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p><b>Abstraction:- </b>Abstraction is the most important feature of opps which is used to hide the non-essential feature of the program, its show only heighlited set of services.</p>
            <p><b>Abstract Data type:-</b> An abstract data type (ADT) is a mathematical model for data types. </p>
            <p>This data type is special kind of datatype, whose behavior is defined by a set of values and set of operations.</p>
            <p>The keyword “Abstract” is used as we can use these datatypes, we can perform different operations.</p>
            <p>But how those operations are working that is totally hidden from the user. The ADT is made of with primitive datatypes, but operation logics are hidden.</p>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="detail">

          </div>
        </div>
      </div>
















    </div>
  )
}

export default DSA;