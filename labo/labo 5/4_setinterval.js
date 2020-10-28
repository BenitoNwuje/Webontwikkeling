let time = () =>{
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    console.log( h + ":" + m + ":" + s);
  }

  setInterval(time, 1000 );
