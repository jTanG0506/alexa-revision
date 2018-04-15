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
            be negative infinity if we have the zero polynomial.",

  "characteristic": "the characteristic of a ring is the least positive integer n, such that, n dot 1 equals 0. if there is no such n, then the \
                    characteristic of R is defined to be 0.",
  "zero divisor": "a non zero element r of a ring R is a zero divisor if there is a non zero element s of a ring R with R S equals 0 or S R equals 0.",
  "domain": "the ring R is a domain if, for all r and s in a ring R, R S equals 0 implies that, either r equals 0, or s equals 0, so a domain is a ring with no zero divisors.",
  "integral domain": "a integral domain is a commutative domain.",
  "division ring": "a division ring is a ring in which every non zero element has a right and left inverse, so for every element r in a ring R, there is an element s in a ring R\
                   such that R S equals 1, and there is t in R, such that T R equals 1, in this case, s equals t and we write r to the power minus 1 for this inverse of r, and say\
                   that r is invertible, or that r is a unit.",
  "left invertible": "an element r in R is left invertible, if there is s in R, such that S R equals 1.",
  "right invertible": "an element r in R is right invertible, if there is s in R, such that R S equals 1.",
  "unit": "a unit is an invertible element.",
  "field": "a field is a commutative division ring",
  "nilpotent": "an element r of a ring R is nilpotent, if there is some natural number n, with r to the power of n equals 0, and the least such n is the index of nilpotence of r.",
  "index of nilpotence": "the index of nilpotence of an element r of a ring R, is the least such natural number n such that r to the power of n equals 0.",
  "idempotent": "an element r of a ring R is idempotent if r squared equals r."
};

module.exports = definitions;