import FormatString from "./Module/FormatString.mjs";
import CheckRepeat from "./Module/CheckRepeat.mjs";
import CompareRepeat from "./Module/CompareRepeat.mjs";
import OutputString from "./Module/OutputString.mjs";

let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let input2Label=document.getElementById("input2Label");

let output=document.getElementById("output");
let behaviorLog=document.getElementById("behaviorLog");
let repeatLog=document.getElementById("repeatLog");

let submitButton=document.getElementById("submit");
let switchButton=document.getElementById("switch");
let copyButton=document.getElementById("copy");

let inputSeparator=document.getElementById("inputSeparator");
let outputSeparator=document.getElementById("outputSeparator");

submitButton.addEventListener("click",function () {
	let oldString1=FormatString(input1,inputSeparator.value);
	let oldString2=FormatString(input2,inputSeparator.value);
	let newString1=CheckRepeat(oldString1);
	let newString2=CheckRepeat(oldString2);
	let compareString=CompareRepeat(newString1,newString2);
	let outputString=OutputString(oldString1,oldString2,newString1,newString2,compareString);
	if (input2.value==="") {
		output.value=compareString.oldString.join(outputSeparator.value);
	}else{
		output.value=compareString.newString.join(outputSeparator.value);
	}
	behaviorLog.value=outputString.behaviorLog.join("\n");
	repeatLog.value=outputString.repeatLog.join("\n");
});

switchButton.addEventListener("click",function () {
	input2.value="";
	let attribute=switchButton.getAttribute("class");
	if (attribute==="switchOff") {
		switchButton.className="switchOn";
		input2.style.display="";
		input2Label.style.display="";
	}else{
		switchButton.className="switchOff";
		input2.style.display="none";
		input2Label.style.display="none";
	}
});

copyButton.addEventListener("click",function () {
	output.removeAttribute("disabled");
	output.select();
	document.execCommand("copy");
	output.setAttribute("disabled","");
});