import React from 'react'
import fbt from './Img/fbt.png';
import pbt from './Img/pbt.jpg';
import cbt from './Img/cbt.jpg';
import dbt from './Img/dbt.png';
import sbt from './Img/skewedbt.png';



function Tree() {
    return (
        <div>
            <div className="container">
                <h1 className="heading"><u>Tree Data Structure</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p>Tree is a non-linear data structure which organizes data in a hierarchical structure and this is a recursive definition. A Tree can have one node or at most two or two or more nodes which is connected by edges, For N nodes, edges are N-1, In a Tree height of nodes are known as level.</p>

                    <p><b>Q.1 On a level L how many nodes can be there in a binary tree🌲</b></p>
                    <p><b className='main'>Ans:-</b> (2^L) -1; (2 to the powerL (-1));</p>

                    <p><b className="main">2 ^ 1 = 2 - 1 = 1 Node.</b></p>
                    <p><b className="main">2 ^ 2 = 4 - 1 = 3 Nodes.</b></p>
                    <p><b className="main">2 ^ 3 = 8 - 1 = 7 Nodes.</b></p>
                    <p><b className="main">2 ^ 4 = 16 - 1 = 15 Nodes.</b></p>


                    <p><b>Q2. What is the maximum number of nodes in a binary tree of height H?</b></p>
                    <p><b className='main'>Ans:-</b> Ans:- (2^h) -1(Same like questions no.1)
                        Dono questions ek hi h agar attention k sath dekho ge to😂</p>
                </div>
            </div><hr />

            <div className="container">
                <h1 className="heading"><u>Binary Tree</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p>Binary tree is a kind of tree which can have at most two children, The children in binary tree are known as <b className='main'>LEFT CHILD</b> & <b className='main'>RIGHT CHILD.</b></p>

                    <p><b className=''><i class="fa-brands fa-react"></i> TYPES OF BINARY TREE:-</b></p>

                    {/* <div className="row"> */}
                    <div className="col-12 col-lg-8">
                        <p><b className="">1. Full Binary Tree:-</b> Full binary tree is a type of binary tree where each nodes can have either 0 or two child.</p>
                    </div>

                    <div className="col-12 col-lg-4">
                        <img src={fbt} class="card-img-top cardimg" alt="Full Binary Tree" />
                    </div>
                    {/* </div> */}

                    {/* <div className="row"> */}
                    <div className="col-12 col-lg-8">
                        <p><b className="">2.Perfect Binary Tree:-</b> There are two condition to make a perfect binary tree.</p>
                        <p><b className='main'>First is every internal nodes can have two child</b></p>
                        <p><b className='main'>And second is all leaf nodes are on same level </b></p>
                    </div>

                    <div className="col-12 col-lg-4">
                        <img src={pbt} class="card-img-top cardimg" alt="Perfect Binary Tree" />
                    </div>

                    {/* </div> */}
                    <div className="col-12 col-lg-8">

                        <p><b className="">3. Complete Binary Tree:-</b> In complete binary tree all levels are completely filled except possibly the last level</p>
                        <p><b className="main">Last level must have its key as left as possible.</b></p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <img src={cbt} class="card-img-top cardimg" alt="..." />
                    </div>

                    <div className="col-12 col-lg-8">

                        <p><b className="">4. Degenerate Binary Tree:-</b> Every parents node has exactly one child.</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <img src={dbt} class="card-img-top cardimg" alt="Degenerate Binary Tree" />
                    </div>

                    <div className="col-12 col-lg-8">

                        <p><b className="">4. Skewed Binary Tree:-</b> All nodes have only one child except the last one (leaf) which hasn't a child. It divided into two types: left skewed binary tree and right skewed binary tree.</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <img src={sbt} class="card-img-top cardimg" alt="Degenerate Binary Tree" />
                    </div>

                </div>
            </div><hr />

            <div className="container">
                <h1 className="heading"><u>Traversing in Tree:-
                </u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">
                    <p>In computer science, tree traversal is a form of graph traversal and refers to the process of visiting each node in a tree data structure.</p>

                    <p><b className="main">1.Pre Order Traversal</b></p>
                    <p><b className="main">2.Post Order Traversal</b></p>
                    <p><b className="main">3.In Order Traversal</b></p>
                    <p><b className="main">4.Level Order Traversal</b></p>

                    <p><b>1.Pre Order Traversal:-</b> Pre order traversal is a way to traverse the binary tree in which our directions are fixed i.e root ➡️ left ➡️ right. </p>

                    <p>It means first we will traverse the <span className='main'>root</span> of the tree and then go to its <span className='main'>left</span> subtree and after traversing that subtree we will move to its <span className='main'>right</span> part of the <span className='main'>Subtree.</span>.</p>

                    <p><b>Post Order Traversal:-</b> it is a traversing technique, where the left child return first including its all subtree.</p>
                    <p>Then, visit the right child including its entire subtree. And finally return the Node.</p>

                    <p><b className="main">Left child ➡️  Right child ➡️ Root</b></p>

                    <p><b>In Order Traversal:- </b>it is also a traversing technique, where the left child return first including its all subtree.</p>

                    <p>Then,  return the Node.And finally visit the right child including its entire subtree.</p>
                    <p><b className="main">Left child ➡️ Node ➡️ Right child;</b></p>

                    <p><b>4.Level Order Traversal:- </b>It's traverse  all the level of the tree.</p>
                    <p>A Level Order Traversal is a traversal which always traverses based on the level of the tree.</p>
                    <p>So, this traversal first traverses the nodes corresponding to Level 0, and then Level 1, and so on, from the root node. In the example Binary Tree above, the level order traversal will be:</p>
                    <p><b className="main">(Root) 1st level ➡️ 2nd level ➡️ 3rd level ➡️ Same repeat.</b></p>
                </div>
            </div><hr />

            <div className="container">
                <h1 className="heading"><u>Implementation of Tree</u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">

                </div>
            </div>




            {/* After */}

            <div className="container">
                <h1 className="heading"><u></u></h1>
            </div>

            <div className="container-fluid">
                <div className="row detail">

                </div>
            </div>

        </div>
    )
}

export default Tree