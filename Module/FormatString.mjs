export default (input,separator)=>{
	let oldString=input.value.split(separator);
	let newString=[];
	let outputLog=[];
	outputLog.push("检测输入栏：");
	oldString.forEach(function (item,index) {
		if (item==="") {
			outputLog.push("数组"+index+"是空数组");
			outputLog.push("该数组的前面是"+oldString[index-1]);
			outputLog.push("该数组的后面是"+oldString[index+1]);
		} else if (item.indexOf("\n")!==-1) {
			outputLog.push("数组"+index+"："+item+"存在换行符");
			let string=item.replace(/\n/g,"");
			if (string!=="") newString.push(string);
		} else {
			newString.push(item);
		}
	});
	outputLog.push("原数组长度："+oldString.length);
	return {
		string: newString,
		output: outputLog
	};
}