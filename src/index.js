module.exports = function longestConsecutiveLength(array) {
	let sortedArr = array.sort( (a,b) => a - b );
	let longestConsecutive = 0;
	let curLongest = 1;
	let arrLength = sortedArr.length;
  
	for ( let i = 0; i < arrLength; i++ )
	{	
		if ( ( sortedArr[i] ) == sortedArr[i + 1] ) continue;

		if ( ( sortedArr[i] + 1 ) == sortedArr[i + 1] )
		{
			curLongest++;
		}
		else if ( curLongest > longestConsecutive )
		{
			longestConsecutive = curLongest;
			curLongest = 1;
		}
		else
		{
			curLongest = 1;
		}
	}
	
	return longestConsecutive;
}
