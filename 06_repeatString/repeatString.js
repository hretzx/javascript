const repeatString = function(s,numb) {
    if(numb<0){
        return "Error";
    }
    else{
        let j=1;
        let string="";
        while(j<=numb){
            string=string+s;
            j++;
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
