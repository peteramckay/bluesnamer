// "Sweet Meat" Pete's Ultimate Blues Name Generator
// Copyright (c) 2013-2025, Peter A. McKay
// Free to use under MIT license

function generateBluesName () {

  const form = document.getElementById('userForm');
  const responseElement = document.getElementById('response');

  const bluesFirstF = ['Alice', 'Candace', 'Elvira', 'Frances', 'Mary', 'Valerie', 'Ida', 'Fannie', 'Shirley', 'Carolina', 'Georgia', 'Etta', 'Maple', 'Mavis', 'Bonita', 'Susie', 'Helen', 'Anita', 'Rosetta', 'Virginia', 'Sally', 'Koko', 'Bianca', 'Leigh', 'Johnetta', 'Toni', 'Thelma'];

  const bluesMiddleF = ['\"Auntie\"', '\"Washboard\"', '\"Ma\"', '\"Foxy\"', '\"Queen\"', '\"Babygirl\"', '\"Dutchess\"', '\"Sunshine\"', '\"Ladybird\"', '\"Biscuits\"', '\"Lady\"', '\"Empress\"', '\"Pinetop\"', '\"Cadillac\"', '\"Diamonds\"', '\"Sweet Tea\"', '\"Sweetie\"', '\"Dumplings\"', '\"Dimepiece\"', '\"Honey\"', '\"Honey Pie\"', '\"Brown Sugar\"', '\"Luscious\"', '\"Gypsy Mama\"', '\"Louisiana\"', '\"Alabama\"', '\"Mississipi\"', '\"Tennessee\"', '\"Ma\"', '\"Texas\"', '\"Chi-Town\"', '\"Detroit\"', '\"Cutie\"', '\"Sunflower\"', '\"Willow Tree\"', '\"Frenchie\"', '\"Hollywood\"', '\"Hummingbird\"', '\"Mustang\"', '\"Honey Bee\"', '\"Lemonade\"', '\"Grits\"'];

  const bluesFirstM = ['Bill', 'McKinley', 'Junious', 'Sonny', 'Sherman', 'Archie', 'Azariah', 'Appomattox', 'Lennox', 'Buddy', 'J.T.', 'Isaiah', 'Jim', 'Joe', 'Roger', 'Luther', 'John', 'Johnny', 'Sam', 'Junior', 'Kid', 'Melvin', 'Arthur', 'Eddie', 'Albert', 'David', 'Les', 'Charlie', 'Chuck'];

  const bluesMiddleM = ['\"Slick\"', '\"Sweet Lemon\"', '\"Gumbo\"', '\"Slim\"', '\"Fat\"', '\"Big Money\"', '\"Drumsticks\"', '\"Skinny\"', '\"Guitar\"', '\"Harmonica\"', '\"Boogie Woogie\"', '\"Lightning\"', '\"Typhoon\"', '\"Blind Boy\"', '\"Bigfoot\"', '\"Jailhouse\"', '\"Buffalo\"', '\"Hound Dog\"', '\"Hot Sauce\"', '\"Barbecue\"', '\"Beef Ribs\"', '\"Big Head\"', '\"Sleepy\"', '\"Doc\"', '\"Mule Head\"', '\"Rooster\"', '\"Jawbone\"', '\"Ironing Board\"', '\"Jelly Roll\"', '\"Jump\"', '\"Salt Shaker\"', '\"Jukebox\"', '\"Hacksaw\"', '\"Pickaxe\"', '\"Kingfish\"', '\"Catfish\"', '\"Diamondback\"', '\"Smiley\"'];

  const bluesFirstN = ['Chickenfoot', 'Gypsy', 'Sticky', 'Happy', 'Boney', 'Curly', 'J.T', 'Appomattox'];

  const bluesMiddleN = ['\"T-Bone\"', '\"Death Letter\"', '\"Hot Sauce\"', '\"Chicken Coop\"', '\"Mule Head\"', '\"Beef Ribs\"', '\"Barbecue\"', '\"Sleepyhead\"', '\"Lightnin\'\"', '\"Bellyful\"', '\"Lemonade\"', '\"Gumbo\"', '\"Slick\"', '\"Harmonica\"', '\"Guitar\"', '\"Chickensteak\"', '\"Drumsticks\"', '\"Jukebox\"', '\"Grits\"', '\"Flapjack\"'];

  const bluesLast = ['Smith', 'Wilson', 'Johnson', 'King', 'Watkins', 'Jones', 'Jackson', 'Pullman', 'Williams', 'Williamson', 'McHenry', 'Washington', 'Smith', 'Jackson', 'Walker', 'Jenkins', 'Lee', 'Billups', 'Wilkins', 'Parks', 'Watson', 'Jordan', 'Coleman', 'Davidson', 'McLee', 'Nash', 'McWilliams', 'McWilliamson', 'Richards', 'Richardson', 'Murphy', 'Green', 'Burnett'];

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const firstName = formData.get('RnameF');
      const middleName = formData.get('RnameM');
      const lastName = formData.get('RnameL');
      const sex = formData.get('sex');

      const fullName = `${firstName} ${middleName} ${lastName}`;
      let nickname = localStorage.getItem(fullName);

      if (!nickname) {
          // Hardcoded nickname rules
          if (sex === 'male' && firstName === 'Peter' && middleName === 'Andrew' && lastName === 'McKay') {
              nickname = '"Sweet Meat" Pete';
          } else if (sex === 'male' && firstName === 'Wynton' && middleName === 'Learson' && lastName === 'Marsalis') {
              nickname = 'Wynton Marsalis';
          } else {
              let firstNameArray, middleNameArray;
              if (sex === 'male') {
                  firstNameArray = bluesFirstM;
                  middleNameArray = bluesMiddleM;
              } else if (sex === 'female') {
                  firstNameArray = bluesFirstF;
                  middleNameArray = bluesMiddleF;
              } else {
                  firstNameArray = bluesFirstN;
                  middleNameArray = bluesMiddleN;
              }

              const randomFirstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)];
              const randomMiddleName = middleNameArray[Math.floor(Math.random() * middleNameArray.length)];
              const randomLastName = bluesLast[Math.floor(Math.random() * bluesLast.length)];

              // Randomize the placement of the middle name
              const randomPlacement = Math.random() < 0.5 ? 0 : 1;
              if (randomPlacement === 0) {
                  nickname = `${randomMiddleName} ${randomFirstName} ${randomLastName}`;
              } else {
                  nickname = `${randomFirstName} ${randomMiddleName} ${randomLastName}`;
              }
          }

          localStorage.setItem(fullName, nickname);
      }

      responseElement.textContent = `Your nickname is ${nickname}.`;
  });


};

function scrollToTargetBottom(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      window.scrollTo({
        top: rect.top - window.innerHeight / 2 + rect.height / 2,
        behavior: 'smooth'
      });
    } else {
      console.error(`Element with id ${targetId} not found.`);
    }
};
