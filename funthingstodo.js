function checkAccessOfPerson(){
  let name = document.getElementById("Name").value
  let pass = document.getElementById("Password").value
  if(name == "SEcREt_usernaMe" && pass == "1001101"){
    alert("Access granted!");
    const secretWindow = window.open('about:blank', 'blank_window');

    const secretContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body{
      background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FnoDkVYUeiajaUqzKSj-8s7rpaBz6uwXL5ymR08iFQ&s=10");
      background-repeat: no-repeat;
      background-size: cover;
    }
    h1{
      text-align: center;
    }
  </style>
  <script>
    function spawnMc(){
      let mcCard = document.getElementById("mcCard")
      let alreadyMcIframe = document.getElementById("MinecraftIframe")
      if(alreadyMcIframe){
       alert("dont click again")
      }else{
      let mcIframe = document.createElement("iframe")
      mcIframe.src="Eaglercraft_1.8.8.html"
      mcIframe.id="MinecraftIframe"
      mcCard.appendChild(mcIframe)
      }
    }
    function fullScreenMc(){
      let mcIframe = document.getElementById("MinecraftIframe")
      if(mcIframe){
       mcIframe.requestFullscreen()
      }else{
      alert("No eaglercraft in sight you didn't do it")
      }
    }

    function spawnCmg(){
      let cmgCard = document.getElementById("cmgCard")
      let alreadyCmgIframe = document.getElementById("CoolmathgamesIframe")
      if(alreadyCmgIframe){
       alert("dont click again")
      }else{
      let cmgIframe = document.createElement("iframe")
      cmgIframe.src="https://www.coolmathgames.com/"
      cmgIframe.id="CoolmathgamesIframe"
      cmgCard.appendChild(cmgIframe)
      }
    }
    function fullScreenCmg(){
      let cmgIframe = document.getElementById("CoolmathgamesIframe")
      if(cmgIframe){
       cmgIframe.requestFullscreen()
      }else{
      alert("No cool math games in sight you didn't do it")
      }
    }

   function spawnItch(){
      let itchCard = document.getElementById("itchCard")
      let alreadyItchIframe = document.getElementById("ItchdotioIframe")
      if(alreadyItchIframe){
       alert("dont click again")
      }else{
      let itchIframe = document.createElement("iframe")
      itchIframe.src="https://api.allorigins.win/raw?url=https://itch.io/"
      itchIframe.id="ItchdotioIframe"
      itchCard.appendChild(itchIframe)
      }
    }
    function fullScreenItch(){
      let itchIframe = document.getElementById("ItchdotioIframe")
      if(itchIframe){
       itchIframe.requestFullscreen()
      }else{
      alert("No itch.io in sight you didn't do it")
      }
    }
    function spawnCg(){
      let cgCard = document.getElementById("cgCard")
      let alreadyCgIframe = document.getElementById("CrazygamesIframe")
      if(alreadyCgIframe){
       alert("dont click again")
      }else{
      let cgIframe = document.createElement("iframe")
      cgIframe.src="https://nettleweb.pages.dev/"
      cgIframe.id="CrazygamesIframe"
      cgCard.appendChild(cgIframe)
      }
    }
    function fullScreenCg(){
      let cgIframe = document.getElementById("CrazygamesIframe")
      if(cgIframe){
       cgIframe.requestFullscreen()
      }else{
      alert("No nettle web in sight you didn't do it")
      }
    }

  </script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>
<body>
  <br><br>
<h1>Shh...</h1>
<div class="d-flex justify-content-around">
<div class="card" style="width: 18rem;">
  
  <div class="card-body" id="mcCard">
    <h5 class="card-title">Minecraft</h5>
    <button class="btn btn-primary" onclick="spawnMc()">Load Mc</button>
    <button onclick="fullScreenMc()">Fullscreen</button>
  </div>
</div>
<div class="card" style="width: 18rem;">
  
  <div class="card-body" id="cmgCard">
    <h5 class="card-title">Cool math games</h5>
    <button class="btn btn-primary" onclick="spawnCmg()">Load Cmg</button>
    <button onclick="fullScreenCmg()">Fullscreen</button>
  </div>
</div>
<div class="card" style="width: 18rem;">
  
  <div class="card-body" id="itchCard">
    <h5 class="card-title">Itch.io</h5>
    <button class="btn btn-primary" onclick="spawnItch()">Load Itch</button>
    <button onclick="fullScreenItch()">Fullscreen</button>
  </div>
</div>
<div class="card" style="width: 18rem;">
  
  <div class="card-body" id="cgCard">
    <h5 class="card-title">Nettle web</h5>
    <button class="btn btn-primary" onclick="spawnCg()">Load Nw</button>
    <button onclick="fullScreenCg()">Fullscreen</button>
  </div>
</div>
</div>
</body>
</html>
    `;
    secretWindow.document.open();
    secretWindow.document.write(secretContent);
    secretWindow.document.close();
  }else{
    alert("Wrong!");
  }
}
