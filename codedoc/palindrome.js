
function palindrome(str) {
  let result = str.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '').toLowerCase(); 
//it remove the both non-applicable and blank space, then make it into all lowercase

  let em = ""
  for (let i = result.length -1; i >= 0; i--) {
    em += result[i]
  }
  if (result == em) {
    return true;
  } else
  return false;
}

palindrome("eye");
