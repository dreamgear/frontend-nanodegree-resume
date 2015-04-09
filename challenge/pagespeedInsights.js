// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
	// key gets the object key during iteration, a[] gets list of rule names
	var key, a = [];
	// for each element of ruleResult
	for (key in results.formattedResults.ruleResults) {
		// push the localizedRuleName on to a
		a.push(results.formattedResults.ruleResults[key].localizedRuleName);
	}
	// return the array
	return a;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
	// key gets the object key during iteration, t accumulates the byte count
	var key, t = 0;
	// for each element of pageStats
	for (key in results.pageStats) {
		// if the key contains the string "Bytes" add the value to t
		if ((key.indexOf("Bytes")) > 0) {
			t += parseInt(results.pageStats[key], 10);
		}
	}
	// return t
	return t;
}