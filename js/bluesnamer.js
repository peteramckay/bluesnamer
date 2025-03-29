// "Sweet Meat" Pete's Ultimate Blues Name Generator
// Copyright (c) 2013-2025, Peter A. McKay
// Free to use under MIT license

function generateBluesName () {

  const form = document.getElementById('userForm');
  const responseElement = document.getElementById('response');

  const bluesFirstF = ['Alice', 'Aunty', 'Babygirl', 'Candace', 'Dutchess', 'Elvira', 'Frances', 'Mary', 'Valerie', 'Ida', 'Fannie', 'Shirley', 'Foxy', 'Grandma', 'Carolina', 'Queen', 'Sweetie', 'Missy'];
  const bluesMiddleF = ['\"Pine Tree\"', '\"Washboard\"', '\"Big Money\"'];
  const bluesFirstM = ['Frenchie', 'Red', 'Louisiana', 'Alabama', 'Mississippi', 'Tennessee', 'Skinny', 'Bill', 'Junious', 'Sonny', 'Sherman', 'Slim', 'Archie', '\"Blind Boy\"', 'Fat', 'Buddy', 'Stick'];
  const bluesMiddleM = ['\"Slick\"', '\"Sweet Lemon\"', '\"Gumbo\"', 'Azariah', 'Appomattox', 'Lennox', '\"Slim\"'];
  const bluesFirstN = ['Chickenfoot', 'Gypsy', 'Sticky', 'Happy', 'Boney', 'Curly', '\"Jailhouse\"'];
  const bluesMiddleN = ['Slick', 'Lemonade', 'Gumbo', '\"T-Bone\"', '\"Death Letter\"', '\"Hot Sauce\"', '\"Chickenwire\"', '\"Mule Head\"', '\"Beef Ribs\"', '\"Barbecue\"', '\"Bumblebee\"', '\"Doc\"', '\"Sleepyhead\"', '\"Lightnin\'\"', 'Belly'];
  const bluesLast = ['Smith', 'Wilson', 'Johnson', 'King', 'Watkins', 'Jones', 'Jackson', 'Pullman', 'Williams', 'Williamson', 'McHenry', 'Washington', 'Smith', 'Jackson', 'Walker', 'Jenkins', 'Lee'];

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

              nickname = `${randomFirstName} ${randomMiddleName} ${randomLastName}`;
          }

          localStorage.setItem(fullName, nickname);
      }

      responseElement.textContent = `Your nickname is: ${nickname}`;
  });


};
