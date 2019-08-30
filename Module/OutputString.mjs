export default (oldString1,oldString2,newString1,newString2,compareString)=>{
	let repeatLog=[];
	let repeatNumber1=0;
	let repeatNumber2=0;
	function pushLog (newString,repeatNumber) {
		newString.forEach(function (item) {
			if (item.number>1) {
				repeatLog.push(item.name+"出现了"+item.number+"次");
				repeatNumber+=item.number-1;
			}
		});
		behaviorLog.push("移除"+repeatNumber+"个重复项目");
		behaviorLog.push("新数组长度："+newString.length);
	}
	
	let behaviorLog=oldString1.output;
	repeatLog.push("检测自身重复：");
	pushLog(newString1,repeatNumber1);
	
	behaviorLog=behaviorLog.concat(oldString2.output);
	repeatLog.push("检测自身重复：");
	pushLog(newString2,repeatNumber2);
	
	behaviorLog.push("检测对比重复：");
	behaviorLog.push("移除"+compareString.repeatString.length+"个对比重复字段");
	behaviorLog.push("新数组长度："+compareString.newString.length);
	
	repeatLog.push("检测对比重复：");
	compareString.repeatString.forEach(function (item) {
		repeatLog.push(item+"存在对比重复");
	});
	
	return {
		repeatLog: repeatLog,
		behaviorLog: behaviorLog
	};
}