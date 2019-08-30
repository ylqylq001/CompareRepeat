import FormatString from "./Module/FormatString.mjs";
import CheckRepeat from "./Module/CheckRepeat.mjs";
import CompareRepeat from "./Module/CompareRepeat.mjs";
import OutputString from "./Module/OutputString.mjs";
new Vue({
	el: "#app",
	data: {
		switchBtn: false,
		inputSeparator: " ",
		outputSeparator: " ",
		
		originInput: "",
		compareInput: "",
		output: "",
		behavior: "",
		repeat: ""
	},
	methods: {
		submitFun: function () {
			let oldString1=FormatString(this.originInput,this.inputSeparator);
			let oldString2=FormatString(this.compareInput,this.inputSeparator);
			let newString1=CheckRepeat(oldString1);
			let newString2=CheckRepeat(oldString2);
			let compareString=CompareRepeat(newString1,newString2);
			let outputString=OutputString(oldString1,oldString2,newString1,newString2,compareString);
			if (this.compareInput==="") {
				this.output=compareString.oldString.join(this.outputSeparator);
			}else{
				this.output=compareString.newString.join(this.outputSeparator);
			}
			this.behavior=outputString.behaviorLog.join("\n");
			this.repeat=outputString.repeatLog.join("\n");
		},
		switchFun: function () {
			this.compareInput="";
			this.switchBtn=this.switchBtn===false;
		},
		copyFun: function () {
			alert("已复制到剪贴板！");
		}
	}
});