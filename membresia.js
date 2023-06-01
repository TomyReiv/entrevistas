function openOrSenior(data){
    let resp = [];
  data.forEach(element => {
    if(element[0] >= 55 && element[1] > 7){
        resp.push("Senior");
    }else{
        resp.push("Open");
    }
  });
  return resp;
}

let input = [[45, 7], [60, 15], [67, 2] ]

console.log(openOrSenior(input))