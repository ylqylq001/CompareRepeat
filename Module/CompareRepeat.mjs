export default (string1,string2)=>{
	let newString=[];
	let repeatString=[];
	string1.forEach(function (item1) {
		string2.forEach(function (item2) {
			if (item1.name===item2.name) {
				repeatString.push(item2.name);
			}
		})
	});
	if (repeatString.length===0) {
		string1.forEach(function (item) {
			newString.push(item.name);
		});
	}else{
		string1.forEach(function (item) {
			for (let i=0;i<repeatString.length;i++) {
				if (item.name===repeatString[i]) break;
				if (i===repeatString.length-1) {
					newString.push(item.name);
				}
			}
		});
	}
	return {
		newString: newString,
		repeatString: repeatString
	};
}