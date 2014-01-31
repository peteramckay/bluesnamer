/*
"Sweet Meat" Pete's Ultimate Blues Name Generator
Copyright Peter McKay, 2014
Open Source under MIT License

*/



var RnameF,
    RnameM,
    RnameL;

var BnameFM = ['Fat', 'Buddy', 'Sticky', 'Old', 'Texas', 'Mississippi', 'Ugly', 'Brown', 'Happy', 'Boney', 'Curly', 'Prettyboy', 'Jailhouse', 'Peg Leg', 'Red', 'Sweet', 'Bald', 'Skinny', 'Blind', 'Big', 'Yella', 'Toothless', 'Slick', 'Fat Boy', 'Washboard', 'Sleepy'];

var BnameFF = ['Foxy', 'Gypsy', 'Sticky', 'Grandma', 'Louisiana', 'Alabama', 'Queen', 'Brown', 'Happy', 'Boney', 'Curly', 'Pretty', 'Jailhouse', 'Frenchie', 'Red', 'Sweet', 'Clean', 'Skinny', 'Miss', 'Big', 'Yella', 'Half-moon', 'Slick', 'Pine Tree', 'Washboard', 'Sleepy'];

var BnameMM = ['Meat', 'Money', 'Harp', 'Legs', 'Eyes', 'Lemon', 'Killer', 'Hips', 'Lips', 'Fingers', 'Boy', 'Liver', 'Gumbo', 'Foot', 'Papa', 'Back', 'Earl', 'Dog', 'Buddy', 'Baby', 'Chicken', 'Pickles', 'Sugar', 'Willie', 'Tooth', 'Smokey'];

var BnameMF = ['Meat', 'Money', 'Harp', 'Legs', 'Eyes', 'Lemon', 'Girl', 'Hips', 'Lips', 'Fingers', 'Lady', 'Liver', 'Gumbo', 'Foot', 'Mama', 'Back', 'Dutchess', 'Dog', 'Mary', 'Babygirl', 'Chickenfoot', 'Pickles', 'Sugar', 'Janie', 'Tooth', 'Suzie'];

var BnameFN = ['Ashy', 'City', 'Country', 'Deacon', 'Doctor', 'Downtown', 'Dusty', 'Fast-Talkin\'', 'Fraidy-Cat', 'Good ol\'', 'Hollerin\'', 'Lazy', 'Little', 'Mighty', 'No-', 'Preachin\'', 'Raggedy', 'Screamin\'', 'Silver', 'Smilin', 'Surly', 'Testifyin\'', 'The Reverend', 'Travelin\'', 'Uptown', 'Wailin\''],

    BnameMN = ['Belly', 'Blue', 'Crotch', 'Downtown', 'Knees', 'Knuckles', 'Mess', 'Nose', 'Pants', 'Shoes', 'Teeth', 'Toes']; 

var BnameLast = ['Jackson', 'McGee', 'Haskins', 'Dupree', 'Green', 'Brown', 'Jones', 'Rivers', 'Wilson', 'Washington', 'Smith', 'Parker', 'Lee', 'Thompkins', 'King', 'Bradley', 'Hawkins', 'Jefferson', 'Davis', 'Franklin', 'White', 'Jenkins', 'Bailey', 'Johnson', 'Henderson', 'Allison', 'Carruthers']; 

var BnameFull 

function generateBname (){

  RnameF = document.bngform.RnameF.value;
  RnameM = document.bngform.RnameM.value;
  RnameL = document.bngform.RnameL.value;
  Sex = document.bngform.sex.value


} ;

