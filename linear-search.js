//Linear Search- Has Linear Time Complexity.The absence of an element is shown as -1=
var linearSearch = function(list,item){
    let index= -1,elementCount = 0;
    list.forEach(function(listItem,i){
      if(listItem === item){
        index = i;
        elementCount++;
      }
    });
    if(index === -1){
      return "No element found";
    }else{
      return {
        searchIndex: index,
        count: elementCount
      }
    }
  }
  
  linearSearch([2,6,7,90,120],90);