class setRelation {

  /**
   * Creates an instance of setRelation with a set and members
   * @param  {array} set      An array containing all numbers in the set
   * @param  {array} members  An array of objects containing all members of the set
   * @return {void}
   */
  constructor(set, members) {
    this.set = set;
    this.members = members;
  }

  /**
   * Determines whether the current instance relation set is reflexive
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

      if ( match === false )
        return false;

    }

    return true;

  }

}

module.exports = setRelation;
