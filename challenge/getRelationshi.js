function getRelationship(x, y) {
	// z gets one bad number, numBad counts bad numbers, xBad is true if x is
	// bad
	var z, numBad = 0, xBad = false;

	// if x is not a number then set xBad=True and increment numBad;
	if (isNaN(parseInt(x, 10))) {
		xBad = true;
		numBad++;
	}
	// if y is not a number then just increment numBad;
	if (isNaN(parseInt(y, 10))) {
		numBad++;
	}

	// if there are no bad numbers return the string indicating relationship
	if (numBad === 0) {
		if (x > y)
			return ">";
		if (x < y)
			return "<";
		return "=";
	}

	// if both numbers are bad, then return the proper message
	if (numBad === 2) {
		return "Can't compare relationships because " + x + " and " + y
				+ " are not numbers";
	}

	// else only one number is bad. Set z to the number that is bad.
	if (xBad) {
		z = x;
	} else {
		z = y;
	}

	// and return the message indicating this
	return "Can't compare relationships because " + z + " is not a number";
}