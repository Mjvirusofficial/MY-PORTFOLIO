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


        <p><span className="main">3.Symtric Relation:-</span> A relation R on a Set A is called Symtric, if(a,b) € R and also (b,a) € R,  for every element which is available in set.</p>
            <p>For e.g:- Set A = [1,3]</p>
            <p>1.R = [(1,3) ,(3,1)] :- Symtric </p>
            <p>2.R = [(1,3) ,(3,3)] :- Not Symtric</p>
            <p>Every Reflexive relation also a Symtric but any Symtric Relation is not a Reflexive relation.</p>

            <p><span className="main">4.Asymtric Relation:-</span> A relation R on a Set A is called Asymtric, if(a,b) € R but (b,a) not€ R,  for every element.</p>
            <p>For e.g:- Set A = [1,2,3]</p>
            <p>1.R = [(1,2) ,(2,3)] :- Asymtric </p>
            <p>2.R = [(1,2) ,(2,1)] :- Not Symtric</p>

            <p><span className="main">5.Antisymtric Relation:-</span> A relation R on a Set A is called Antisymtric, if(a,b) € R and also (b,a) € R then a should equal to b ,means a==b, for every element.</p>
            <p>For e.g:- Set A = [1,2,3]</p>
            <p>1.R = [(1,2),(2,1),(3,3)] :- Antisymtric</p>
            <p>2.R = [(1,2) ,(2,1),(3,1)] :- Not Antiymtric</p>

            <p><span className="main">6.Transitive Relation:-</span> A Realation are on a set ais called transitive if (a,b) belong to R and (b,c) belong to R, Then (a,c) should also belong to R for all a,b,c belongs to Set.</p>
            <p>For e.g:- Set a=[1,2,3]</p>
            <p>1.R = [(1,2),(2,1),(1,1),(2,1)] Transitive.</p>
            <p>2.R = [(1,2)] Transitive.</p>
            <p>3.R = [(2,3),(3,2)] = Not Transitive.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Composition of relations</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>== Let A,B and C is the three sets.</p>
            <p>== Let R is the relation from,  Set A  to B</p>
            <p>== i.e:- R € (A*B)</p>
            <p>== And S is the relation from, Set B to C</p>
            <p>== i.e:- S € (B*C)</p>
            <p>So, from AxB which belongs to relation R and BxC which belongs to relation S, We remove common B and take only A and C</p>
            <p>So, the composition of relation is AxC  || RoS € (A*C).</p>
            <p><span className="main">For e.g:- Let set A = [1,2,3,4]</span></p>
            <p>R :- [(1,2),(2,3),(3,1),(4,1)]</p>
            <p>S :- [(1,2),(2,3),(3,4),(4,1)]</p>
            <p>R.S:- [(1,3),(2,4),(3,2),(4,2)]</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Equivalence relation</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>A relations R on a Set S is called Equivalence relations if it is Reflexive, Symtric and Transitive.</p>
            <p>It means when a relations is RST means Reflexive, Symtric and Transitive then this type of relation is called Equivalence relations.</p>
            <p>For e.g:- Set A = [1,2]</p>
            <p>R = [(1,1),(2,2), (1,2),(2,1)]</p>
          </div>
        </div>
      </div>


      <div className="container">
        <h1 className='heading'><u>Partial ordering relation</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>A relations R on a Set S is called Partial ordering relations if it is Reflexive, Antisymtric and Transitive.</p>
            <p>It means when a relations is RAT means Reflexive, Antisymtric and Transitive then this type of relation is called Partial ordering relations.</p>
            <p>For e.g:- Set A = [1,2]</p>
            <p>R = [(1,1),(2,2), (1,2),(2,1)]</p>
          </div>
        </div>
      </div>


      <div className="container">
        <h1 className='heading'><u>Function</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>The relationship from the elements of set X to the elements of another set Y is called as function or maping.</p>
            <p>In other words function is a relationship between element of Set X and Element of Set Y.</p>
            <p>F : X -- Y</p>
            <p>For function F , X is a Domain or preimage and Y is Co-Domain or image.</p>
            <p>Function is a relationship of X & Y such that for each element of X there is a unique value of Y. such that (X,Y) € F.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Types of function</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p><span className="main">1.One to one function (Injective function):-</span> A function f:x-y is said to be one to one function if for each element of X there is exist different element of Y.</p>
            <p>For e.g:- X = [1,2,3] , Y = [4,5,6]</p>
            <p>== [(1,4),(2,5),(3,6)]</p>

            <p><span className="main">2.Many to one function:-</span>A function f:x-y is said to many to one function, if two or more element of X associated with same element of Y.</p>
            <p>For e.g:- X = [1,2,3] , Y = [4,5,6]</p>
            <p>== [(1,4),(2,4),(3,6)]</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Pigeonhole principle</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>According to the pingeon hole principal supose, we have N number of pigeons 🐦 And

              M number of Pigeonholes.</p>

              <p>And we have to placed this N number of pigeon into  M number of pigeonholes but there is condition that <span className="main">N is greter than M</span></p>
              <p>Then, atleast one Pigeonholes must contain more than one pigeon.</p>
              <p>For e.g:- N = 7 and M = 6;</p>
              <p>Since, see here Pigeon is 7 and Pigionholes is 6</p>
              <p>So, here one Pigeonholes contain one more pigeon.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className='heading'><u>Algebric Structure</u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">
            <p>A non- empty sets having one or more than one binary operation is called algebraic structure.</p>
            <p>Here, we use most important line binary operation,</p>
            <p>So, we let's understand what is binary operation.</p>
            <p>Binary operation on set:-</p>
            <p>== Let G is a non-empty set.</p>
            <p>== If f:g*g € G then f is called binary operation function on set G.</p>
            <p><span className="main">For e.g:- Set N of Natural number, And we have to perform addition on this Set.</span></p>
            <p>== 2+2:- 4</p>
            <p>So, Addition is a binary operation on set N of natural number because the addition of two number is also a natural number</p>
            <p>So, this is known binary operation.</p>
            <p>Division ➗ and subtraction is not binary operation because when we perform these binary operation then results is not 🚫 belongs to own Set.</p>
            <p>For e.g:- 2-3 = -1 which is not € to set on N natural number, but if the set is Z means, integer then it's €.</p>
            <p>Star (*) is known as clousre operation.</p>
            <p>Number of binary operation on set.</p>
            <p>Supose, we have set G.</p>
            <p>Cardinality = |G| = n</p>
            <p>f : g*g € G</p> 
            <p>    n  n     n</p>
            <p>So, the total number of binary operation is:- N to the power n square. || n^n^2.</p>
            <p>Example:- |G| = 2</p>
            <p>== 2^2*2</p>
            <p>== 2^4</p>
            <p>== 16 binary operation on this Set.</p>
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

      <div className="container">
        <h1 className='heading'><u></u></h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="detail">

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