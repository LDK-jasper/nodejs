// var template = {     // 변수 선언으로 하게 된다면 하단에 module.exports = template; 를 선언해야함
module.exports = {
    html : function(title, list, body, control){
      return `
      <!doctype html>
                  <html>
                  <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                  </head>
                  <body>
                    <h1><a href="/">WEB</a></h1>
                    ${list}
                    ${control}
                    ${body}                
                    </p>
                  </body>
                  </html> 
      `;
    },
    list : function(filelist){
      var addli = "";
      for(var i = 0 ; i < filelist.length ; i++) addli += ` <li><a href='/?id=${filelist[i]}'>${filelist[i]}</a></li> `;
    
      return addli;
    }
  
  }

//   module.exports = template;