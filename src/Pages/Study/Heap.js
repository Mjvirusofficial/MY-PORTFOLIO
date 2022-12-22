import React from 'react'
import ct from './Img/minH.png'
import incT from './Img/incT.png'
import minh from './Img/minHeap.png'
import maxh from './Img/maxHeap.png'

function Heap() {
  return (
    <div>

      <div className="container">
        <h1 className="heading">
          <u>Heap Data structure</u>
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row detail">
          <p className=''>Heap data structure is a complete binary tree that satisfies the heap property, Means every parent node(non-leaf node || internal node) is greater or less than both its children, Its epresented in the form of an Array.</p>

          <p>Before knowing more about the heap data structure, we should know about the complete binary tree.</p>

          <p className="">
            <b className="main">
              Let's understand through an example.
            </b>
          </p>

          <div className="col-12 col-lg-4">
            <img src={ct} class="card-img-top cardimg" alt="Complete Binary Tree" />
          </div>

          <p>In the above figure, we can observe that all the internal nodes are completely filled except the leaf node; therefore, we can say that the above tree is a complete binary tree.</p>

          <div className="col-12 col-lg-4">
            <img src={incT} class="card-img-top cardimg" alt="InComplete Binary Tree" />
          </div>

          <p>The above figure shows that all the internal nodes are completely filled except the leaf node, but the leaf nodes are added at the right part; therefore, the above tree is not a complete binary tree.</p>

        </div>
      </div><hr />

      <div className="container">
        <h1 className="heading">
          <u className=''>There are two types of Heap</u>
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row detail">
          <p><span className="main"><b>1.Min Heap:- </b></span> In Min Heap the parrent node should be less than both its children.
          </p>
          <div className="col-12 col-lg-4">
            <img src={minh} class="card-img-top cardimg" alt="MinHeap" />
          </div>

          <p><span className="main"><b>1.Max Heap:- </b></span> In Max Heap the parrent node should be Greter than both its children.
          </p>
          <div className="col-12 col-lg-4">
            <img src={maxh} class="card-img-top cardimg" alt="MaxHeap" />
          </div>
        </div>
      </div><hr />

      
          <div className="container">
            <h1 className="heading">
              <u className=''>How to find Parrent Node, LeftChild, RightChild</u>
            </h1>
          </div>
       
        <div className="container-fluid">
          <div className="row detail">
          <p><span className="main"><b>1.Parrent Node:- </b></span> (i - 1) devided by 2.
          </p>
          <p><span className="main"><b>2.Left Child:- </b></span> (i X 2 ) + 1.
          </p>
          <p><span className="main"><b>3.Right Child:- </b></span> (i X 2 ) + 2.
          </p>
          </div>
        </div><hr />


        <div className="container">
            <h1 className="heading">
              <u className=''>Some methods in Heap</u>
            </h1>
          </div>
       
        <div className="container-fluid">
          <div className="row detail">
          
          </div>
        </div>

    </div>
  )
}

export default Heap