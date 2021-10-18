/**
 * skirta rasti ilgiausiai gimineje isgyvenusi asmeni
 * @param {Object[]} giminesMedis  Gimines medi aprasantis objektas
 * @returns {number} Ilgiausiai gyvenusio asmens amzius
 */

function kasVyriausias(giminesMedis) {
  let maxAge = 0;


  for (const { age, children } of giminesMedis) {
    if (age > maxAge) {
      maxAge = age;
    }

    const childEnd = kasVyriausias(children);
    if (childEnd > maxAge) {
      maxAge = childEnd;
    }
  }
  return maxAge;
}

module.exports = kasVyriausias;