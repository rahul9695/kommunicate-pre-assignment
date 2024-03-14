// Solution of Question 2:

function getUrlParameterValue(url, parameter) {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
  //   console.log(params)
    return params.get(parameter);
  }
  
  var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
  
  console.log(getUrlParameterValue(url, "utm_medium")); 
  console.log(getUrlParameterValue(url, "utm_campaign"));
  
  
  // Solution of Question 3:
  
  function reverseNumber(number) {
    const numberStr = String(number);
    const reversedStr = numberStr.split('').reverse().join('');
    const reversedNumber = parseInt(reversedStr, 10);
    console.log(reversedNumber);
  }
  reverseNumber(149); // Will print 941