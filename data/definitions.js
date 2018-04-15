var definitions = {
  "ring": "a ring is a set R and two binary operations, called plus and times, which satisfy the following conditions. R1, \
          the set R and the plus operation is an abelian group with identity 0. R2, times is associative. R3, times is distributive \
          over plus. And R4, there exists an element 1 in R, different from 0, that is an identity for times.",
  "subring": "let R be a ring, and S be a subset of R, Then S is a subring of R if it is a ring in its own right with respect to the \
             same addition and multiplication as in R, and S contains 1.",
  "subring test": "let R be a ring, and S be a subset of R, then S is a subring of R if and only if, 1 is in S, S is closed under addition \
                  and multiplication, and each element in S has an additive inverse.",
  "polynomial ring": "let R be a ring, the ring of polynomials R[X] in the indeterminate X is defined as expected, with the zero element \
                     being the zero polynomial, and the one is one.",
  "degree": "simon says the degree of a polynomial is the largest i, such that the coefficient AI is not equal to 0, and we let the degree \
            be negative infinity if we have the zero polynomial."
};

module.exports = definitions;