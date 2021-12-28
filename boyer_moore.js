let fs = require('fs');
let arg = process.argv;

string = fs.readFileSync(arg[2]).toString();
substring = arg[3];

answer = new Array();
for (let i = 0; i < substring.length; i++){
	first = substring.slice(substring.length - i, substring.length);
	badsym = substring[substring.length - i - 1]
	flag = 0;
	k = i;
	for (let j = 1; j < substring.length - first.length; j++){
		if ((substring.slice(j, j + first.length) == first) && (substring[j - 1] != badsym)){
			k = j;
			flag = 1;
		}
	}
	if (flag == 0){
		lensuf = 0;
		for (let g = 0; g <= first.length; g++){
			second = first.slice(first.length - g, first.length);
			if (substring.slice(0, second.length) == second){
				lensuf = second.length;
			}
		}
		k = 0 - (first.length - lensuf);
	}
	k += 1;
	shift = substring.length - k - first.length + 1;
	answer[i] = shift;
}
lensuf = 0;
for (let i = 1; i < substring.length; i++){
	first = substring.slice(substring.length - i, substring.length);
	if (first == substring.slice(0, first.length)){
		lensuf = first.length;
	}
}
k = 1 - (substring.length - lensuf);
shift = - k + 1;
answer[substring.length] = shift;



i = 0
while (i < string.length - substring.length + 1){
	right = i + substring.length - 1;
	count = 0;
	ind = substring.length - 1;
	for (let j = right; j > right - substring.length; j--){
		if (string[j] != substring[ind]){
			break
		}
		else{
			count++;
		}
		ind -= 1;
	}
	if (count == substring.length){
		console.log(right - substring.length + 2);
	}
	i += answer[count];
}