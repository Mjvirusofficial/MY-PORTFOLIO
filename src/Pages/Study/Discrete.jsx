import React from 'react'

function Discreate() {
  return (
    <div>
      <div className="container">
        <h1 className='heading'><u>Discrete Structure</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>Discrete Structure is the part of methematic in which we study about discrete object. </p>
            <p>Discrete object means <span className="main">countable seprated distinct.</span></p>

          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Set Theory</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>Set is a collection of well defined object or element.</p>
            <p>These elements can be anything like Numbers, Alphabet etc.</p>
            <p>For ex:- Set A = [1,2,3,4,5], Here "A" is called Notation of set, And 1 to 5 this is elements of Set A.</p>
            <p className='main'>Some standard notation for special set.</p>
            <p>1. N = Set of <span className="main">Natural number</span>, [1,2,3,4,...]</p>
            <p>

              2. W = Set of <span className="main">Whole number</span>, [0,1,2,3,...]</p>
            <p>3. Z or I = Set of all <span className="main">Integer</span>, [1,-2,5,0,..]</p>
            <p>4. Q = set of <span className="main">rational number</span>,
              [p/q,p,q,z,e,x]</p>

            <p>5. E = Set of <span className="main">Even integer</span>, [2,-4,6,8]</p>
            <p>6. O = Set of <span className="main">Odd integer</span>  [1,-3,9,7]</p>
            <p>7. R = Set of <span className='main'>real number</span>, Where x in <span className="main">rational</span> or <span className="main">irrational number</span></p>
          </div>
        </div>
      </div>


      <div className="container">
        <h1 className='heading'><u>Belongs</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>Belong (relationship) between element and set Notation</p>
            <p>Set A = [1,2,3,4] 3 belongs to A ("£" this is known as belongs to)</p>

            <p>Let's 8 is belongs to set A, No se we write "8  not belongs to set A"</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Set are expressed as:-</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>1.Tabular form (raster form)
              Tabular form is simple way to expressed any Set.
              For ex:- A = [1,2,3,4]</p>
            <p>2.Set builder form.
              It is also easy not hard but different from tabular, here we wrote by define set property or you can say it's define by its property</p>


          </div>
        </div>
      </div>



      <div className="container">
        <h1 className='heading'><u>Types of set:-</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p><span className="main">1.Singleton set:-</span> A set consists of only one element. Mj = [1]</p>
            <p><span className="main">2.Finite set:-</span> A set with countable number of elements. Mj = [1,2,3]</p>
            <p><span className="main">3.Infinite set:-</span> A set with uncountable number of elements. Mj = [1,2,3,4,......]</p>
            <p><span className="main">4.Empty set:-</span> A set consists no any elements call Empty set.
              Mj = [];</p>
            <p>It is also called null set or void set.
              It represented by faai</p>
            <p><span className="main">5.Universal set:-</span> A set which is super set of all set.</p>
            <p>It's define by U , Om ()qaw or S.
              For e.g:-</p>
            <p>A = [X : X is a students of class 7]</p>
            <p>B = [X : X is a students of class 8]</p>
            <p>C = [X : X is a students of class 9]</p>
            <p>U = [X : X is the students of school]</p>
            <p><span className="main">6.Equal set:-</span> Two sets A and B having same elements that is called set.</p>
            <p>For e.g:- A = [1,2,3] , B = [1,2,3]</p>
            <p><span className="main">7.Equivalent set:-</span> Two sets A and B having same number of elements that is called set.</p>
            <p>For e.g:- A = [1,2,3] , B = [2,4,3]</p>
            <p>Two equal set is always equivalent set but two equivalent set can be or can not 🚫 be equal set.</p>
            <p>Two empty sets are called equal set.</p>
            <p>Two infinite set is also known equivalent set.</p>
            <p><span className="main">8.Subset:-</span> You can Subset is a part of another set means, if the elements of set "A" is available in set "B" then set A is called subset of B.</p>
            <p>For e.g:- set B = [1,2,3,4] , A = [1,2,3]</p>
            <p>Here, elements of set A = 1,2,3 is available in set B So, you can say set A is a subset of set B.</p>
            <p>Denoted:- A c B  || C ko chapta kr k likhty h, symbol of subset.</p>
            <p><span className="main">9.Super set:-</span> When set A is a subset of set B, Then B is called super set of A.

              For e.g:-
              A = [Alphabet] B = [Vowels] So, here B is a subset of set A , Then A is called super set of set A.</p>
            <p> B is less than A [B is the subset set of A]</p>
            <p>A is greter than B [A is the supper set of B]</p>
            <p><span className="main">10.Proper subset:-</span> if A in a subset of set B. Then set A does not contain every element of set B then A is called proper subset.</p>
            <p>For e.g:- A= [1,2,3] , b = [1,2,3,4,5]</p>
            <p><span className="main">11.Improper subset:-</span> An improper subset is a subset which containing the every element of original set.</p>
            <p>For e.g:- A= [1,2,3,4] , b = [1,2,3,4]</p>
            <p><span className="main">12.Power subset:-</span> The collection of all subsets of set A is called power subset.</p>
            <p>For e.g:- Set A = [1,2,3]</p>
            <p>[1],[2],[3],[1,2],[1,3],[2,3]</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>De Morgan laws</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>According to this law there are two sets || Set A and Set B then, ('):- is for compliment || u:- union || ulta u:- intersection.
</p>
<p><span className="main">1. (AuB)' = A' intersection B'</span></p>
<p><span className="main">2. (A intersection B)' = A' U B'
</span></p>

          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>How to proved De-Morgan law</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>1. (AuB)' = A' intersection B'.</p>
            <p>== Let X € (AuB)' _____(i)</p>
            <p>== X is not € (AuB)</p>
            <p>== X is not € A and X is not € B</p>
            <p>== X € A' and X € B'</p>
            <p>== X € A' ulta u B'______(ii)</p>
            <p>So, in eq(i) X is an element of (AuB)'
and from eq(ii) we proved that X is an element of A' intersection B'.</p>
<p>That means (AuB)' = A' ulta u B'.....!
                                           Proved#</p>

          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Relation</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
        <p>Relation in set theory is a subset of cartitation product, If the element of two set is available in question.</p>
        <p>Relation denoted by R.</p>
        <p>You can write:- </p>
        <p>(aRb) || (a,b) € R || R(a,b)</p>
        <p> <span className="main">There are many types of Relation:-</span></p>
        <p>1. Reflexive Relation</p>
        <p>2. Ireflexive Relation</p>
        <p>3. Symtric Relation</p>
        <p>4.Asymtric Relation</p>

        <p><span className="main">1.Reflexive Relation:-</span> A relation R on a  Set A is called Reflexive, if (a,a) € R holds for every element.</p>
        <p>For e.g:- Set A = [1,2,3]</p>
        <p>1.R = [(1,1) ,(2,2),(3,3)] :- Reflexive</p>
        <p>2.R = [(1,1) ,(1,2),(3,3)] :- Not Reflexive</p>

        <p><span className="main">2.Ireflexive Relation:-</span> A relation R on a Set A is called Ireflexive, if(a,a) not € R for Eve element which is available in set.</p>
        <p>For e.g:- Set A = [1,2,3]</p>
        <p>1.R = [(1,2) ,(1,3),(2,3)] :- Ireflexive</p>
        <p>2.R = [(1,1) ,(2,2),(3,3)] :- not Ireflexiv</p>
        <p>3.R = [(1,2) ,(2,3),(1,3)] :- Ireflexive</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u></u></h1>
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

export default Discreate