var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();


// function selectTopic() {
//     if (topics === 'HTML') {
//       console.log("Let's study HTML!");
//     } else if (topics === 'CSS') {
//       console.log("Let's study CSS!");
//     } else if (topics === 'Git') {
//       console.log("Let's study Git!");
//     } else if (topics === 'JavaScript') {
//       console.log("Let's study JavaScript!");
//     } else {
//       console.log('Please try again!');
//     }
//   }
//   selectTopic()




// var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

// function listTopics() {
//  for (var x = 0; x < topics.length; x++) {
//    console.log(topics[x]);
//  }
// }

// function selectTopic() {
//  if (topic === 'HTML') {
//    console.log("Let's study HTML!");
//  } else if (topic === 'CSS') {
//    console.log("Let's study CSS!");
//  } else if (topic === 'Git') {
//    console.log("Let's study Git!");
//  } else if (topic === 'JavaScript') {
//    console.log("Let's study JavaScript!");
//  } else {
//    console.log('Please try again!');
//  }
// }

// listTopics()

// function helloworld(){
//     console.log("Hello world! I am a function")
// }
// helloworld()


// var topics=['html','css','Git','Javascript']

// for (var i=0;i<topics.length;i++){
//     console.log(topics[i])
// }

// var topics = "HTML, CSS, Git, JavaScript";
// console.log(topics);

// var topic = "HTML";

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