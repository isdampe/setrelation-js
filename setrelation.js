class setRelation {

  /**
   * Creates an instance of setRelation with a set and members.
   * @param  {array} set      An array containing all numbers in the set.
   * @param  {array} members  An array of objects containing all members of the set.
   * @return {void}
   */
  constructor(set, members) {
    this.set = set;
    this.members = members;
    this.error = false;
  }

  /**
   * Determines whether the current instance relation set is reflexive.
   * @return {bool} True if it's reflexive, otherwise false.
   */
  reflexive() {

    var i = 0, smax = this.set.length;
    var x = 0, mmax = this.members.length;
    var num, match = false;

    for ( i=0; i<smax; i++ ) {
      num = this.set[i];
      match = false;

      for ( x=0; x<mmax; x++ ) {
        if ( this.members[x].a == num && this.members[x].b == num )
          match = true;
      }

      if ( match === false ) {
        this.error = "(" + num + "," + num + ") is not in R.";
        return false;
      }

    }

    return true;

  }

  /**
   * Determines whether the current instance relation set is symmetric.
   * @return {bool} True if it's symmetric, otherwise false.
   */
  symmetric() {

    var i = 0, mmax = this.members.length;
    var match = false;
    var matchPairs = {};

    for ( i=0; i<mmax; i++ ) {
      if ( this.members[i].a == this.members[i].b )
        continue;
      matchPairs[this.members[i].a + "-" + this.members[i].b] = {
        a: this.members[i].b,
        b: this.members[i].a
      };
    }

    for ( var key in matchPairs ) {
      match = false;
      for ( i=0; i<mmax; i++ ) {
        if ( this.members[i].a === matchPairs[key].a &&
             this.members[i].b === matchPairs[key].b )
          match = true;
      }
      if ( match === false ) {
        this.error = "(" + matchPairs[key].b + "," + matchPairs[key].a +
                      ") is in R, but (" + matchPairs[key].a + "," +
                      matchPairs[key].b + ") is not in R.";
        return false;
      }
    }

    return true;

  }

  /**
   * Determines whether the current instance relation set is anti-symmetric.
   * @return {bool} True if it's anti-symmetric, otherwise false.
   */
  antisymmetric() {

    var i = 0, mmax = this.members.length;
    var match = false;
    var matchPairs = {};

    for ( i=0; i<mmax; i++ ) {
      if ( this.members[i].a == this.members[i].b )
        continue;
      matchPairs[this.members[i].a + "-" + this.members[i].b] = {
        a: this.members[i].b,
        b: this.members[i].a
      };
    }

    for ( var key in matchPairs ) {
      match = false;
      for ( i=0; i<mmax; i++ ) {
        if ( this.members[i].a === matchPairs[key].a &&
             this.members[i].b === matchPairs[key].b )
          match = true;
      }
      if ( match === true ) {
        this.error = "(" + matchPairs[key].b + "," + matchPairs[key].a +
                      ") is in R and (" + matchPairs[key].a + "," +
                      matchPairs[key].b + ") is in R, but " + matchPairs[key].a +
                      " does not equal " + matchPairs[key].b;
        return false;
      }
    }

    return true;

  }

  /**
   * Returns the last error of the instance.
   * @return {string} The last error description.
   */
  getError() {
    return this.error;
  }

}

module.exports = setRelation;
