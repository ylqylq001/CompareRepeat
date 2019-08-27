export default function (string) {
	let oldString=string.string;
	let newString=[];
	oldString.forEach(function (oldItem) {
		if (newString.length===0) {
			let newItem={
				name: oldItem,
				number: 0
			};
			newString.push(newItem);
		}
		for (let i=0;i<newString.length;i++) {
			if (newString[i].name===oldItem) {
				newString[i].number++;
				break;
			}
			if (i===newString.length-1) {
				let newItem={
					name: oldItem,
					number: 0
				};
				newString.push(newItem);
			}
		}
	});
	return newString;
}