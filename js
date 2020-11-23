<!DOCTYPE html>
<html>
<head>
<title>Happy New Year</title>
<style>

body{
text-align:center;
background-color:#08FFAB;
font-size:18px;
font-style:italic ;
}



.a{
font-family:cursive;
margin-top:102px;
color:purple;
font-size:40px;

-webkit-animation-name:first;
-webkit-animation-duration:4s;
-webkit-animation-iteration-count:infinite;

animation-name:first;
animation-duration:4s;
animation-iteration-count:infinite;}


@-webkit-keyframes first{
0%{transform:translate(30px,0px);}
20%{transform:translate(-90px,-10px);}
40%{transform:translate(70px,0px);}
60%{transform:translate(-40px,0px);}
80%{transform:translate(120px,10px);}
}

@keyframes first{
0%{transform:translate(30px,0px);}
20%{transform:translate(-90px,-10px);}
40%{transform:translate(70px,0px);}
60%{transform:translate(-40px,0px);}
80%{transform:translate(120px,10px);}
}

.b{
border:5px dashed purple;
padding:4px;}



.yes{
border:10px solid #0000FF;
border-radius:60%;
background-color:#0000FF;
color:#FFF;
}

.no{
border:10px solid red;
border-radius:60%;
background-color:red;
color:#FFF;}

#p1{
font-style:italic;}

function no(){
alert("Wish them now!");


</style>
</head>
<body>

<div class="box">
<h1 class="a"><span class="b">Happy New Year</span></h1>


</div>


<p>Have you wished your friend??? Choose one.<br><br>
<span class="yes" onclick="yes()">Yes</span>
<span class="no" onclick="no">No</span>
<p>if not wish them now! </p>

</p>

<p id="p1"></p>

</body>
</html>

