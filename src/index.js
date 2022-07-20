module.exports = function check(str, bracketsConfig) {
  let res = [];
  let open = ['(', '[', '{', '|', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let close = [')', ']', '}', '|', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


  for (let i = 0; i < str.length; i++) {
    if(open.includes(str[i])) {
    res.push(str[i]);
    } else {
      if(close.indexOf(str[i]) === open.indexOf(res[res.length-1])) {
        res.pop();
      } else {
        return false;
      }
    }      
}
return res.length === 0;
}
