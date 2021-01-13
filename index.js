var readlineSync = require("readline-sync");

const gradient = require('gradient-string')

const chalk  = require("chalk")

const chalkAnimation = require('chalk-animation')


var score = 0;

var userName = readlineSync.question(
  chalk.bold.green("Hi friend! What is your name? ")
  )

console.log(
  chalk.strikethrough.cyanBright("\n\nHi "+userName+", Ever heard of flowers?\n\nQuestions here revolve around 🌼 🌷 (flowers).\n\nAll are multiple choice questions. ")
  +
  chalk.strikethrough.bgGrey("\n\nThere are 3 levels: 3 questions each.\n\nAnswer correctly and cross levels. Simple.") 
  +
  chalk.bgMagenta("\n\nLevel 1 will check if you can guess names correctly ")
  +
  chalk.bgBlueBright("\n\nLevel 2 asks questions around medicinal uses of plants ")
  +
  chalk.bgRedBright("\n\nLevel 3 asks questions around types of same flowers existing ")
  +
  console.log(gradient.instagram("\n\nPresenting first level: "))
  )


  
 var options=["Hibiscus","Hebescus","Heibiscus"]
 var questions = readlineSync.keyInSelect(options,"a. That red flower used for prayers by people (choose from options given above): ")
 var answers = options[questions]
  
  if(answers==options[0])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }

  

  options = ["Maregold","Marigold","Mareegold"]
  questions =readlineSync.keyInSelect(options,"b. That orange flower used on many occasions for decorations: ")

   answers = options[questions]
  if(answers==options[1])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }


  options = [ "Ghulab","Ghulhaabh","Gulab"]
  questions = readlineSync.keyInSelect(options,"c. That flower used on 14th February: ")
  answers = options[questions]
  if(answers===options[2])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }

  
if(score == 3 && (readlineSync.keyInYN("Would you like to level up? ")===true))
{
  console.log(gradient.pastel("\n\nPresenting second level!"))

  options = ["Helpful for heart and nerve diseases","Increases urine production","Lowers body temperature","All of above"]
  questions =readlineSync.keyInSelect(options,"d. Medicinal use of Hibiscus: ")

  answers = options[questions]
  if(answers==options[3])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }

  options = ["As repelent","Skin is treated","Both 1 and 2","None of above"]
  questions =readlineSync.keyInSelect(options,"e. How to use marigold for medicinal purposes: ")

   answers = options[questions]
  if(answers==options[2])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }

  options = ["Heals sleep","Great for muscles","Wallah! for skin","All of above"]
  questions =readlineSync.keyInSelect(options,"f. Medicinal use of Rose: ")

  answers = options[questions]
  if(answers==options[3])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }


  if(score == 6 && (readlineSync.keyInYN("Would you like to level up? ")===true))
  {
    console.log(gradient.teen("\n\nWelcome to final level!"))

    options = ["2000","200","20"]
  questions =readlineSync.keyInSelect(options,"g. Number of types of Hibiscus flower: ")

  answers = options[questions]
  if(answers==options[1])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }

  options = ["3","1","2"]
  questions =readlineSync.keyInSelect(options,"h. Number of types of marigold flower: ")

  answers = options[questions]
  if(answers==options[2])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }

  options = ["150","165","234"]
  questions =readlineSync.keyInSelect(options,"h. Number of types of Rose flower: ")

  answers = options[questions]
  if(answers==options[0])
  {
    score = score + 1;
    console.log(chalk.strikethrough.cyanBright("\n\nGOOD JOB! Correct answer. Your current score: "+score))
  }
  else
  {
    score = score - 1;
    console.log(chalk.strikethrough.yellowBright("\n\nFeel free to use Google. ;-) Cheating allowed. Your current score: "+score))
  }
  console.log("\n\nThus, final score is: "+score+"/9.")

console.log(
chalk.bold.hsl(120,30,90)("\nHighest score till now: 9")
+
chalk.bold.hsl(244,50,90)("\n\nIf you have reached till maximum score,\n\nlet me know on Twitter ")
+
chalk.bgMagenta("@simrananand_211 .")
)

  }
  else
{

console.log("\n\nThus, final score is: "+score+"/9.")

console.log(
chalk.bold.hsl(120,30,90)("\nHighest score till now: 9")
+
chalk.bold.hsl(244,50,90)("\n\nIf you have reached till maximum score,\n\nlet me know on Twitter ")
+
chalk.bgMagenta("@simrananand_211 .")
)
}
}
else
{

console.log("\n\nThus, final score is: "+score+"/9.")

console.log(
chalk.bold.hsl(120,30,90)("\nHighest score till now: 9")
+
chalk.bold.hsl(244,50,90)("\n\nIf you have reached till maximum score,\n\nlet me know on Twitter ")
+
chalk.bgMagenta("@simrananand_211 .")
)
}


