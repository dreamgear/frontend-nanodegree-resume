function alphabetizer(names) {
	// s gets the sorted array, n is one name, split
	var s = [], n = [];
	// for each name
	for (var i = 0; i < names.length; i++) {
		// split on space into n
		n = names[i].split(/ /);
		// and push back onto s in "last, first" format
		s.push(n[1] + ', ' + n[0]);
	}
	// return s, sorted
	return s.sort();
}