
function kilometerToMeter(value){
    //For any negative value
    if(value<0){
        return "Error";
    }
    //For any positive value
    var result;
    result=value*1000;
    return result;
   
}







function budgetCalculator(clock,phone,laptop){
    var totalClock=clock*50;
    var totalPhone=phone*100;
    var totalLaptop=laptop*500;
    var sum=totalClock+totalPhone+totalLaptop;
     return sum;

}




function hotelCost(day){
    //For any negative value
    if(day<0){
        return "Error";
    }

    //For any positive value

    var total=0;
    if (day<=10){
         total=day*100;
    }
    else if(day<=20){
         total= 10*100+(day-10)*80;
    }
    else{
        total=10*100+10*80+(day-20)*50;
    }
    return total;

}







function megaFriend(arrayName){
    var biggestValue=0;
    for(var i=0; i<arrayName.length; i++){
        var length=arrayName[i].length;
        if(biggestValue<length){
            biggestValue=length;
            var longNameIndex=i;
        }
        
    }

    return arrayName[longNameIndex] ;

}
console.log(megaFriend(["hridoy","masud","rana","Paglababa","rahim"]));



