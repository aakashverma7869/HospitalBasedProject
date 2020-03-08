var fs = require("fs");
console.log("start");
fs.readFile("file.txt", function(error, data) {
  if (error) { throw error; }
  data.toString().split("\n").forEach(function(line, index, arr) {
    // if (index === arr.length - 1 && line === "") { return; }
    var s =" ";
    var arr = [];
    for(var i=0;i<line.length;i++)
    {
        if(line[i]=="{")
        {
            count = i;
            while(1)
            {
                 s = line[count].toString();
                    arr.push(s);
                 
                     count++;
               
                if(line[count]=="}")
                {
                    break;
                }
            }
            let xyz = arr.join("");
            // for(var j=0;j<arr.length;j++)
            // {
            //     console.log(arr[j]);
            // }
            const a =  xyz+"}\n";
            console.log(" \n", xyz+"}");
            fs.appendFile('Output.txt',a, (err) => { 
                if (err) throw err; 
            }) 
            
            
        }
      
    }
   
  });
  console.log("end");
});