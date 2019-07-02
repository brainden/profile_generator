const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let newBio = "";

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);

  rl.question('What\'s an activity you like doing?', (verb) => {
    console.log(`Thank you for your valuable feedback: ${verb}`);
    
    rl.question('What do you listen to while doing that?', (music) => {
      console.log(`Thank you for your valuable feedback: ${music}`);
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        console.log(`Thank you for your valuable feedback: ${meal}`);

        rl.question('Which sport is your absolute favourite?', (sports) => {
          console.log(`Thank you for your valuable feedback: ${sports}`);
    
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
            console.log(`Thank you for your valuable feedback: ${superpower}`);
            console.log(`hi my name is ${name}, I enjoy ${verb} while listening to ${music}. My favorite meal is ${meal}, I enjoy ${sports}. If i had to chose my super power would be ${superpower}`);
            rl.close();
                        
          });
        });
      });
    });
  });
});