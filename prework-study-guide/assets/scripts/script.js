// script js file 
// var topics = "HTML, CSS, Git, JavaScript";
// console.log(topics);

//
// if (0) {
//    console.log("I'm 0!")
// } else if (null) {
//    console.log("I'm null!")
// } else if (true) {
//    console.log("I'm true!")
// }
// var topic = "HTML";
//
// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }
//
// var shapes = ["triangle", "square", "pentagon", "circle"];
// console.log(shapes[0]);
//
// for(var x = 0; x < shapes.length; x++) {
//  console.log(shapes[x]);
// }

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
for (var x = 0; x < topics.length; x++){
	console.log(topics[x])
};

function listTopics() {
	
	for (x = 0; x < topics.length; x++) {
		console.log(topics[x]);
	}
}

function selectTopic() {
	if (topics[0] === 'HTML'){
		console.log("Let's study HTML!");
	} else if (topics[0] === 'CSS') {
		console.log("Let's study CSS!");
	} else if (topics[0] === 'Git') {
		console.log("Let's study Git!");
	} else if (topics[0] === 'JavaScript') {
		console.log("Let's study JavaScript");
	} else {
		console.log('Please try again!');
	}
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log(listTopics());
console.log('Which topic should we study first?');
selectTopic('HTML');
// selectTopic();
