$(function() {
    console.log("document is ready!");

    var userName, nameLength, nameMsg, nameReverse,favAnimal = "";

    $('#btnName').click(function() {
        userName = $('#userName').val();

        nameLength = getStringLength(userName);
        if (nameLength == 0){
           nameMsg = "Please enter your name!";
           $('#nameOutput').append(nameMsg + "<br/>");
        } else {
          nameMsg = "The Length of your name is: ";
          $('#nameOutput').append(nameMsg + nameLength + "<br/>");

          nameReverse = reverseString(userName);
          nameMsg = "Your Name reversed letters is: ";
          $('#nameOutput').append(nameMsg + nameReverse + "<br/>");

          favAnimal = getFavoriteAnimal(userName);
          nameMsg = "Your fav animal is a: ";
          $('#nameOutput').append(nameMsg + favAnimal + "<br/>");
        }
        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");
      })

    function getStringLength(stringVal){
        var stringLength = stringVal.length;
       return stringLength;
    }

    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString;
    }

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html("");
        }
        else if(elementType=="input"){
            $(elementId).val(" ");
        }
    }
    function getFavoriteAnimal(stringVal){
      var animals = ['cow','deer','tiger','cat','dog','lion'];
      var stringLength = stringVal.length;
      var arrayLength = animals.length + 1;
      var index = 0;
      if (arrayLength > stringLength){
        index = arrayLength % stringLength;
      } else {
        index = stringLength % arrayLength;
      }
      return animals[index];
    }
});
