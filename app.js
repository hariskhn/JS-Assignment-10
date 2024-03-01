function format(){
    var value = document.getElementById("text-area").value;
    var arr = [];
    var obj = {};
    var temp = '';
    var optionCount = 0;
    var questionCount = 0;

    for(var i = 0; i < value.length; i++){
        if(value[i] === '\n'  && value[i+1] === '\n'){
            arr.push(obj);
            obj = {};
            temp = '';
            optionCount = 0;
        }else{
            if(value[i] == '?'){
                questionCount += 1;
                var key = "Question " + questionCount;
                obj[key] = temp;
                temp = '';
            }else if(value[i] == '.' && value[i+1] == '\n'){
                optionCount += 1;
                var key = "Option "+optionCount;
                obj[key] = temp;
                temp = '';
            }else{
                if(value[i] != '\n'){
                    temp += value[i];
                }
            }
        }
    }
    arr.push(obj);
    console.log(arr);
}