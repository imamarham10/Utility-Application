const readlineSync = require('readline-sync');
const chalk = require('chalk');
const crypto = require('crypto');
function urlEncoder(url)
{
  const encode= encodeURIComponent(url).replace('.','$');
  return encode;
}
function urlDecoder(encoded_url)
{
  const decode= decodeURIComponent(encoded_url).replace('$','.');
  return decode;
}
function urlEncodeDecode()
{
  console.log(chalk.yellowBright.bold('\n-----URL Encoder Decoder-----'));
  console.log(`Please select the tool given below you want to use.`);
  console.log(`[1] URL Encoder\n[2] URL Decoder\n[3] Exit\n`);
  let userChoice = parseInt(readlineSync.question(`Please enter a valid choice : `));
  while(userChoice!=3){
    if(userChoice == 1)
    {
      console.log(chalk.yellowBright.bold(`\n----URL ENCODER UTILITY APP----\n`))
      let str = (readlineSync.question(`Please enter a url to encode : \n`));
      const base64 = urlEncoder(str);
      console.log(base64);
    }
    else if(userChoice == 2)
    {
      console.log(chalk.yellowBright.bold(`\n----URL DECODER UTILITY APP----`))
      let encoded_str = (readlineSync.question(`Please enter an encoded url to decode : \n`));
      const original = urlDecoder(encoded_str);
      console.log(original);
    }
    else if(userChoice == 3)
    {
      break;
    }
    else
    {
      console.log(`You have entered a wrong choice.`);
      userChoice = parseInt(readlineSync.question(`Please select a valid option(1/2/3): `));
    }
    if(userChoice !=3)
    {
      const choice = parseInt(readlineSync.question(chalk.green.bold("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice == 1)
      {
        userChoice = parseInt(readlineSync.question(`Please enter a valid choice (1/2/3): `));
      }
      else if(choice == 2)
      {
        break;
      }
    }
  }
}

function base64Encoder(str)
{
  const base64 = Buffer.from(str).toString('base64');
  return base64;
}
function base64Decoder(encoded_str)
{
  const original = Buffer.from(encoded_str,'base64').toString('ascii');
  return original;
}
function base64EncodeDecode()
{
  console.log(chalk.yellowBright.bold('\n-----Base64 Encoder Decoder-----'));
  console.log(`What do you want?`);
  console.log(`(1) Base64 Encoder\n(2) Base64 Decoder\n(3) Exit\n`);
  let userChoice = readlineSync.question(`Please enter a valid choice (1/2/3) : `);
  while(userChoice!=3){
    if(userChoice == 1)
    {
      console.log(chalk.yellowBright.bold(`\n----BASE64 ENCODER UTILITY APP----\n`));
      let str = (readlineSync.question(`Please enter a string to encode : \n`));
      const base64 = base64Encoder(str);
      console.log(base64);
    }
    else if(userChoice == 2)
    {
      console.log(chalk.yellowBright.bold(`\n----BASE64 DECODER UTILITY APP----\n`));
      let str = (readlineSync.question(`Please enter a string to encode : \n`));
      const original = base64Decoder(encoded_str);
      console.log(original);
    }
    else
    {
      console.log(`You have entered a wrong choice.`);
      userChoice = parseInt(readlineSync.question(`Please select a valid option(1/2/3): `))
    }
    if(userChoice !=3)
    {
      const choice = parseInt(readlineSync.question(chalk.green.bold("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice == 1)
      {
        userChoice = readlineSync.question(`Please enter a valid choice (1/2/3): `);
      }
      else if(choice == 2)
      {
        userChoice = 3;
      }
    }
  }
}
function md5Encoder(str)
{
  const algo = 'md5';
  const md5_hash = crypto.createHash(algo).update(str).digest('hex');
  return md5_hash;
}
function sha1Encoder(str)
{
  const algo = 'sha1';
  const sha1_hash = crypto.createHash(algo).update(str).digest('hex');
  return sha1_hash;
}
function sha256Encoder(str)
{
  const algo = 'sha256';
  const sha256_hash = crypto.createHash(algo).update(str).digest('hex');
  return sha256_hash;
}
function sha512Encoder(str)
{
  const algo = 'sha512';
  const sha512_hash = crypto.createHash(algo).update(str3).digest('hex');
  return sha512_hash;
}

function stringHashing(){
  console.log(chalk.yellowBright.bold("\n------STRING HASHING UTILITY APP------\n\n\n"));
  console.log(("What do you want ? \n\n[1] MD5 Encoder \n\n[2] SHA1 Encoder\n\n[3] SHA256 \n\n[4] SHA512 Encoder \n\n[5] Exit\n\n"));
  
  let option = parseInt(readlineSync.question(chalk.red("Enter your choice ? Press (1/2/3/4/5)\n")));

  while(option!==5)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.yellowBright.bold("\n----MD5 ENCODER----\n\n"));
        const str = readlineSync.question(("Enter the string to encode?\n"));
        const md5_str = md5Encoder(str);
        console.log(chalk.red("The encoded string is: ",md5_str +'\n\n'));
        break;

      case 2:
        console.log(chalk.yellowBright.bold("\n----SHA1 ENCODER----\n\n"));
        const str1 = readlineSync.question(("Enter the string to encode?\n"));
        const sha1_str = sha1Encoder(str1);
        console.log(chalk.red("The encoded string is: ",sha1_str +'\n\n'));
        break;

      case 3:
        console.log(chalk.yellowBright.bold("\n----SHA256 ENCODER----\n\n"));
        const str2 = readlineSync.question(("Enter the string to encode?\n"));
        const sha256_str = sha256Encoder(str2);
        console.log(chalk.red("The encoded string is: ",sha256_str +'\n\n'));
        break;

      case 4:
        console.log(chalk.yellowBright.bold("\n----SHA512 ENCODER----\n\n"));
        const str3 = readlineSync.question(("Enter the string to encode?\n"));
        const sha512_str = sha512Encoder(str3);
        console.log(chalk.red("The encoded string is: ",sha512_str +'\n\n'));
        break;

      case 5:
        option = 5;
        break;

      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }

    if(option!==5)
    {
      const choice = parseInt(readlineSync.question(chalk.green.bold("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readlineSync.question(chalk.red("Enter your choice ? Press (1/2/3/4/5)\n")));
      }
      else if(choice===2)
      {
        option = 5;
      }
    }
  }

}
function epochToDate(epoch_time)
{
  const date = parseInt(epoch_time); 
  const dateNew = new Date(date);
  return dateNew.toLocaleString();
}
function dateToEpoch(year,month,date,hours,minutes,seconds)
{
  const new_date = new Date(year, month, date, hours, minutes, seconds);
  const epoch = new_date.getTime()/1000.0;
  return epoch;
}
function epochConverter(){
console.log(chalk.yellowBright.bold("\n------EPOCH DATE CONVERTER UTILITY APP------\n\n\n"));
  console.log(chalk.redBright("What do you want ? \n\n\n[1] EPOCH TO HUMAN DATE \n\n[2] HUMAN DATE TO EPOCH\n\n[3] Exit\n\n"));
  
  let option = parseInt(readlineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
while(option!==3)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.yellowBright.bold("\n----EPOCH TO HUMAN DATE CONVERTER----\n\n"));
        const epoch_time = readlineSync.question(("Enter the epoch time?\n"));
        const date = epochToDate(epoch_time);
        console.log(chalk.red("The human date is: ",date +'\n\n'));
        break;
      case 2:
        console.log(chalk.yellowBright.bold("\n----HUMAN DATE TO EPOCH CONVERTER----\n\n"));
        const year = readlineSync.question(("Enter the year ?\n"));
        const month = readlineSync.question(("Enter the month ?\n"));
        const new_date = readlineSync.question(("Enter the date ?\n"));
        const hours = readlineSync.question(("Enter the hours ?\n"));
        const minutes = readlineSync.question(("Enter the minutes ?\n"));
        const seconds = readlineSync.question(("Enter the seconds ?\n"));
        const epoch = dateToEpoch(year,month-1,new_date,hours,minutes,seconds);
        console.log(chalk.red("The epoch is: ",epoch+'\n\n'));
        break;
      case 3:
        option = 3;
        break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }
    
    if(option!=3)
    {
      const choice = parseInt(readlineSync.question(chalk.green.bold("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readlineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
      }
      else if(choice===2)
      {
        option = 3;
      }
    }
  }
}
function binDecHexOct()
{
  console.log(chalk.yellowBright.bold("\n------NUMBER CONVERTER UTILITY APP------\n\n\n"));
  console.log(("What do you want ? \n(1) BINARY TO DECIMAL\n(2) BINARY TO HEX\n(3) BINARY TO OCTAL \n(4) DECIMAL TO HEX\n(5) DECIMAL TO BINARY \n(6) DECIMAL TO OCTAL\n(7) HEX TO BINARY \n(8) HEX TO DECIMAL\n(9) HEX TO OCTAL \n(10) OCTAL TO BINARY\n(11) OCTAL TO DECIMAL \n(12) OCTAL TO HEX \n(13) EXIT\n\n\n"));

  let option = parseInt(readlineSync.question(("Enter your choice ? Press (1/2/3/4/5/6/7/8/9/10/11/12/13)\n")));
  while(option!=13)
  {
    switch(option){
    case 1 :
    console.log(chalk.yellowBright.bold(`\n----BINARY TO DECIMAL CONVERTER----\n`));
    const binary = readlineSync.question(`Enter the binary number.\n`);
    const ans = parseInt(binary,2);
    console.log(ans);
    break;
    case 2:
    console.log(chalk.yellowBright.bold("\n----BINARY TO HEX CONVERTER----\n"));
    const binary1 = readlineSync.question("Enter the binary number\n");
    const ans1 = parseInt(binary1, 2).toString(16);
    console.log(ans1);
    break;
    case 3:
    console.log(chalk.yellowBright.bold("\n----BINARY TO OCTAL CONVERTER----\n"));
    const binary2 = readlineSync.question(`Enter the binary number.`);
    const ans2 = parseInt(binary2, 2).toString(8);
    console.log(ans2);
    break;
    case 4:
    console.log(chalk.yellowBright.bold("\n----DECIMAL TO HEX CONVERTER----\n"));
    const decimal = readlineSync.question("Enter the decimal number.\n");
    const ans3 = Number(decimal).toString(16);
    console.log(ans3);
    break;
    case 5:
    console.log(chalk.yellowBright.bold("\n----DECIMAL TO BINARY CONVERTER----\n\n"));
    const decimal1 = readlineSync.question("Enter the decimal number.\n");
    const ans4 = Number(decimal1).toString(2);
    console.log(ans4);
    break;
  case 6:
    console.log(chalk.yellowBright.bold("\n----DECIMAL TO OCTAL CONVERTER----\n\n"));
    const decimal2 = readlineSync.question(chalk.yellowBright.bold("Enter the decimal number?\n"));
    const ans5 = Number(decimal2).toString(8);
    console.log(ans5);
    break;
    case 7:
    console.log(chalk.yellowBright.bold("\n----HEX TO BINARY CONVERTER----\n\n"));
    const hex1 = readlineSync.question("Enter the hex number.\n");
    const ans6 = (parseInt(hex1, 16).toString(2)).padStart(8, '0');
    console.log(ans6);
    break;
    case 8:
    console.log(chalk.yellowBright.bold("\n----HEX TO DECIMAL CONVERTER----\n\n"));
    const hex2 = readlineSync.question("Enter the hex number.\n");
    const ans7 = (parseInt(hex2, 16).toString(10));
    console.log(ans7);
    break;
    case 9:
    console.log(chalk.yellowBright.bold("\n----HEX TO OCTAL CONVERTER----\n\n"));
    const hex3 = readlineSync.question(("Enter the hex number.\n"));
    const ans8 = (parseInt(hex3, 16).toString(8));
    console.log(ans8);
    break;
    case 10:
    console.log(chalk.yellowBright.bold("\n----OCTAL TO BINARY CONVERTER----\n\n"));
    const octal1 = readlineSync.question(("Enter the octal number.\n"));
    const ans9 = (parseInt(octal1, 8).toString(2)).padStart(8, '0');
    console.log(ans9);
    break;
    case 11:
    console.log(chalk.yellowBright.bold("\n----OCTAL TO DECIMAL CONVERTER----\n\n"));
    const octal2 = readlineSync.question(("Enter the octal number.\n"));
    const ans10 = (parseInt(octal2, 8).toString(10));
    console.log(ans10);
    break;
    case 12:
    console.log(chalk.yellowBright.bold("\n----OCTAL TO HEX CONVERTER----\n\n"));
    const octal3 = readlineSync.question(("Enter the octal number.\n"));
    const ans11 = (parseInt(octal3, 8).toString(16));
    console.log(ans11);
    break;
    case 13:
    option = 13;
    break;
    default:
    console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
    break;
    }
     if(option!=13)
    {
      const choice = parseInt(readlineSync.question(chalk.green.bold("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readlineSync.question(chalk.red("Enter your choice ? Press (1/2/3/4/5/6/7/8/9/10/11/12/13)\n")));
      }
      else if(choice===2)
      {
        option = 13;
      }
    }
  }
}

function rgbToHex(red,green,blue)
{
  const hex1 = Number(red).toString(16);
  const hex2 = Number(green).toString(16);
  const hex3 = Number(blue).toString(16);
  return hex1+hex2+hex3;
}
function hexToRgb(hex)
{
  const hexValue=hex.match(/.{1,2}/g);
  const red=parseInt(hexValue[0],16);
  const green=parseInt(hexValue[1],16);
  const blue=parseInt(hexValue[2],16);
  return [red,green,blue];
}
function rgbHexConverter()
{
  console.log(chalk.yellowBright.bold("\n------RGB HEX CONVERTER UTILITY APP------\n\n\n"));
  console.log(("What do you want ? \n\n\n[1] RGB TO HEX \n\n[2] HEX TO RGB\n\n\[3] Exit\n\n\n"));
  let option = parseInt(readlineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
  while(option!==3)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.yellowBright.bold("\n----RGB TO HEX CONVERTER----\n\n"));
        const red = readlineSync.question("Enter the red value(0-255)\n");
        const blue = readlineSync.question("Enter the blue value(0-255)\n");
        const green = readlineSync.question("Enter the green value(0-255)\n");
        const hexCode = rgbToHex(red,blue,green);
        console.log(hexCode);
        break;
      case 2:
        console.log(chalk.yellowBright.bold("\n----HEX TO RGB CONVERTER----\n\n"));
        const  hex = readlineSync.question("Enter the hex code.\n");
        const rgb = hexToRgb(hex);
        console.log(rgb);
        break;
      case 3:
        option = 3;
        break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }
    
    if(option!=3)
    {
      const choice = parseInt(readlineSync.question(chalk.green.bold("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readlineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
      }
      else if(choice===2)
      {
        option = 3;
      }
    }
  }
}
function unitConverter()
{
  console.log(chalk.yellowBright.bold(`\n----UNIT CONVERTER UTILITY APP----\n`));
  console.log(("What do you want ? \n\n\n[1] Celcius to Kelvin \n\n[2] Celcius to Fahrenheit\n\n[3] Kelvin to Fahrenheit\n\n[4] Exit\n\n"));
  let option = parseInt(readlineSync.question(chalk.red(`Enter you choice. Press (1/2/3/4)\n`)));
  while(option!=4)
  {
    switch(option)
    {
      case 1 :
      console.log(chalk.yellowBright.bold(`\n----CELCIUS TO KELVIN CONVERTER----\n`));
      let celciusTemp = readlineSync.question(`Enter the temperature in celcius.\n`);
      let kelvinTemp =  (celciusTemp+273.5);
      console.log(kelvinTemp);
      break;
      case 2 :
      console.log(chalk.yellowBright.bold(`\n----CELCIUS TO FAHRENHEIT CONVERTER----\n`));
      let celcius = readlineSync.question(`Enter the temperature in celcius.\n`);
      let fahrenheitTemp = ((celcius * (9/5)) + 32);
      console.log(fahrenheitTemp);
      break;
      case 3 :
      console.log(chalk.yellowBright.bold(`\n----KELVIN TO FAHRENHEIT CONVERTER\n`));
      let kelvin = readlineSync.question(`Enter the temperature in kelvin.\n`);
      let fahrenheit = ((kelvin - 273.15) * (9/5) + 32);
      console.log(fahrenheit);
      break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }

    if(option!==4)
    {
      const choice = parseInt(readlineSync.question(chalk.green.bold("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readlineSync.question(chalk.red("Enter your choice ? Press (1/2/3/4)\n")));
      }
      else if(choice===2)
      {
        option = 4;
      }
    }
  }
}

function utility()
{
  console.log(chalk.bgRedBright.bold(`\t\t\t\t-----Welcome to the Utility App.-----\n\n`));
  console.log(`Please select an option to use the tools given below\n`);
  console.log(`(1) URL Encoder/Decoder\n(2) Base64 Encoder/Decoder\n(3) String Hashing\n(4) Epoch Converters\n(5) Binary/Decimal/Hex/Octal Converters \n(6) RGB ⇔ Hex\n(7) Unit Converters\n(8) Exit`);
  let userOption = parseInt(readlineSync.question(`Please enter a valid option : `));
  while(userOption!=8)
  {
    switch(userOption)
    {
      case 1 :
      urlEncodeDecode();
      break;
      case 2 :
      base64EncodeDecode();
      break;
      case 3 :
      stringHashing();
      break;
      case 4 :
      epochConverter();
      break;
      case 5 :
      binDecHexOct();
      break;
      case 6 :
      rgbHexConverter();
      break;
      case 7 :
      unitConverter();
      break;
      case 8 :
      break;
      default :
      console.log(`You entered a wrong choice.\n`);
      userOption = readlineSync.question(`Please enter a valid option : `);
      break;
    }
    userOption = 8;
    
  }
}
  utility();
  console.log(chalk.bgCyan.bold(`\n\nThank You!`));