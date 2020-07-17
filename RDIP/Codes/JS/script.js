var reformbuttons;
let count_words=0;
let c=0;
var e="";
var h="";
function select(){
    var language = document.getElementById("select-lang").value;
    
    if(language==='english')
    {
        document.getElementById("intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById('button-select').innerHTML="(select the buttons in proper order)";
        var English=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
        ["some students like to study in the night","at night some students like to study"],
        ["John and Mary went to church","Mary and John went to church"],
        ["John went to church after eating","after eating John went to church","John after eating went to church"],
        ["did he go to market","he did go to market"],
        ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
        ["John goes to the library and studies","John studies and goes to the library"],
        ["John ate an apple so did she","she ate an apple so did John"],
        ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
        ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
    var correctE=["Mary and John went to church","John goes to the library and studies","some students like to study in the night","John ate an apple before afternoon","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"];
    document.getElementById("jumbled-buttons").innerHTML=" ";
        document.getElementById("formed-sentence").innerHTML=" ";
        document.getElementById("selectedWo").innerHTML =" ";
        document.getElementById('reformbutton').innerHTML=" ";
        document.getElementById("check").innerHTML="";
    document.getElementById("right").innerHTML="";
    document.getElementById("answers").innerHTML="";
    document.getElementById("result").innerHTML="";

       
          e=correctE[Math.floor(Math.random() * correctE.length)];
        
        var englishwords=e.split(" ");
        var i=0;
        c=0;
        count_words=englishwords.length;
        for(i=0;i<englishwords.length;i++)
        {
            document.getElementById("jumbled-buttons").innerHTML += "<button type='button ' class='btn' id='btn"+i+"' value='"+englishwords[i]+"' onclick='fun(this.id,this.value);'>"+englishwords[i]+"</button>";
             
           
              



        }
        
       reformbuttons=document.getElementById('jumbled-buttons').innerHTML;


    }
    if(language==='hindi')
    {
        
        document.getElementById("intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById('button-select').innerHTML="(select the buttons in proper order)";
           
        var Hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
        ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
        ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
        ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
        ["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
        ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
        ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
       var correctH=["राम और श्याम गयें बाजार","श्याम सोया और राम भी","मैंने उसे बताया कि राम सो रहा है","राम सोया खाकर","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]

         h=correctH[Math.floor(Math.random() * correctH.length)];
           
            var hindiwords=h.split(" ");
            var k=0;
            c=0;
            count_words=hindiwords.length;
            for(k=0;k<hindiwords.length;k++)
            {
                document.getElementById("jumbled-buttons").innerHTML += "<button type='button' class='btn' id='btn"+k+"' value='"+hindiwords[k]+"' onclick='fun(this.id,this.value);'>"+hindiwords[k]+"</button>";
                document.getElementById("formed-sentence").innerHTML=" ";
                document.getElementById('reformbutton').innerHTML=" ";
               
            }
            reformbuttons=document.getElementById('jumbled-buttons').innerHTML;

    }
    
}
var sentence;
function fun(bid,bvalue)
{   
   
     document.getElementById("formed-sentence").innerHTML="Formed Sentence <span>(after selecting words):</span>";
     document.getElementById("selectedWo").innerHTML +=" "+bvalue;
     c++;
     document.getElementById(bid).style.display="none";
     document.getElementById('reformbutton').innerHTML="<button type='button' class='reform' onclick='reset()' id='reform'>Reform the sentence</button>"
     
    
     if(count_words==c)
     {
        
        document.getElementById("check").innerHTML="<button type='button' id='checkcorrect' onclick='result()'>check the correctness of sentence</button>";
        sentence=document.getElementById('selectedWo').innerHTML;
     }
     else{
         document.getElementById('check').innerHTML=" ";
     }
    
}
function reset(){
    document.getElementById('jumbled-buttons').innerHTML=reformbuttons;
    document.getElementById('formed-sentence').style.display="none";
    document.getElementById('selectedWo').style.display="none";
    document.getElementById('reformbutton').style.display="none";
    c=0;
    document.getElementById("check").innerHTML="";
    document.getElementById("right").innerHTML="";
    document.getElementById("answers").innerHTML="";
    document.getElementById("result").innerHTML="";
}
let answerKeyValue = ['John ate an apple before afternoon',
'before afternoon John ate an apple',
'John before afternoon ate an apple',
'some students like to study in the night',
'at night some students like to study'
    ,'John and Mary went to church',
    'Mary and John went to church',
    'John went to church after eating',	
    'after eating John went to church',
    'John after eating went to church',
    'did he go to market',
    'he did go to market',
    'the woman who called my sister sells cosmetics',
    'the woman who sells cosmetics called my sister',
    'my sister who sells cosmetics called the woman',
    'my sister who called the woman sells cosmetics',
    'John goes to the library and studies',	'John studies and goes to the library',
    'John ate an apple so did she',	'she ate an apple so did John',
    'the teacher returned the book after she noticed the error',
    'the teacher noticed the error after she returned the book',
    'after the teacher returned the book she noticed the error',
    'after the teacher noticed the error she returned the book',
    'she returned the book after the teacher noticed the error',
    'she noticed the error after the teacher returned the book',
    'after she returned the book the teacher noticed the error',	
    'after she noticed the error the teacher returned the book',
    'I told her that I bought a book yesterday',	
    'I told her yesterday that I bought a book',
    'yesterday I told her that I bought a book', 
    'I bought a book that I told her yesterday',
    'I bought a book yesterday that I told her',
    'yesterday I bought a book that I told her',
    'राम और श्याम बाजार गयें',
    'राम और श्याम गयें बाजार',
    'बाजार गयें राम और श्याम',
    'गयें बाजार राम और श्याम',
    'राम सोया और श्याम भी',
    'श्याम सोया और राम भी',
    'सोया श्याम और राम भी',
    'सोया राम और श्याम भी',
    'मैंने उसे बताया कि राम सो रहा है',
    'मैंने उसे बताया कि सो रहा है राम',
    'उसे मैंने बताया कि राम सो रहा है',
    'उसे मैंने बताया कि सो रहा है राम',
    'मैंने बताया उसे कि राम सो रहा है',
    'मैंने बताया उसे कि सो रहा है राम',
    'उसे बताया मैंने कि राम सो रहा है',
    'उसे बताया मैंने कि सो रहा है राम',
    'बताया मैंने उसे कि राम सो रहा है',
    'बताया मैंने उसे कि सो रहा है राम',
    'बताया उसे मैंने कि राम सो रहा है',
    'बताया उसे मैंने कि सो रहा है राम',
    'राम खाकर सोया',
    'खाकर राम सोया',
    'राम सोया खाकर',
    'खाकर सोया राम',
    'सोया राम खाकर',
    'सोया खाकर राम',
    'बिल्लियों को मारकर कुत्ता सो गया',
    'मारकर बिल्लियों को कुत्ता सो गया',
    'बिल्लियों को मारकर सो गया कुत्ता',
    'मारकर बिल्लियों को सो गया कुत्ता',
    'कुत्ता सो गया बिल्लियों को मारकर',
    'कुत्ता सो गया मारकर बिल्लियों को',
    'सो गया कुत्ता बिल्लियों को मारकर',
    'सो गया कुत्ता मारकर बिल्लियों को',
    'एक लाल किताब वहाँ है',
    'एक लाल किताब है वहाँ',
    'वहाँ है एक लाल किताब',
    'है वहाँ एक लाल किताब',
    'एक बड़ी सी किताब वहाँ है',
    'एक बड़ी सी किताब है वहाँ',
    'बड़ी सी एक किताब वहाँ है',
    'बड़ी सी एक किताब है वहाँ',
    'वहाँ है एक बड़ी सी किताब',
    'वहाँ है बड़ी सी एक किताब',
    'है वहाँ एक बड़ी सी किताब',
    'है वहाँ बड़ी सी एक किताब'
     ];
function result(){
   var final=sentence.trim();
   var i=0;
   
   
   
   var j=0;
   
    var a=2;
    var b=3;
       
   
   for(i=0;answerKeyValue.length;i++)
   {
     var temp=answerKeyValue[i];
       var local = temp.localeCompare(final)
          if(local==0)
     {
        document.getElementById("right").innerHTML="Right answer!!!";
        document.getElementById("right").style.color="green";
        document.getElementById("answers").innerHTML="";
        return document.getElementById("right").innerHTML="Right answer!!!";
     }  
     else if(local!=0){
        document.getElementById("right").innerHTML="Wrong answer!!!";
        document.getElementById("right").style.color="red";
      
        document.getElementById("answers").innerHTML="<button type='button' id='getcorrect' onclick='toggle()'>Get Correct Sentence</button>"
     
        
        
     }  
    
    
    }
   
}
function toggle(){
    
    
    var English=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
    ["some students like to study in the night","at night some students like to study"],
    ["John and Mary went to church","Mary and John went to church"],
    ["John went to church after eating","after eating John went to church","John after eating went to church"],
    ["did he go to market","he did go to market"],
    ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
    ["John goes to the library and studies","John studies and goes to the library"],
    ["John ate an apple so did she","she ate an apple so did John"],
    ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
    ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
var correctE=["Mary and John went to church","John goes to the library and studies","some students like to study in the night","John ate an apple before afternoon","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


var Hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var correctH=["राम और श्याम गयें बाजार","श्याम सोया और राम भी","मैंने उसे बताया कि राम सो रहा है","राम सोया खाकर","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]



var x=correctE.indexOf(e);
var y=correctH.indexOf(h);

var temp=English[x-1];
var flag=Hindi[y-1];
var i=0;
var j=0;
if(document.getElementById("english").selected)
{
for(i=0;i<temp.length;i++)
  {
    document.getElementById("result").innerHTML += temp[i]+"<br>";
    document.getElementById("answers").innerHTML = "<button type='button' id='getcorrect' onclick='erase()'>Hide Correct Sentence</button>"
   }
}
else if(document.getElementById("hindi").selected)
{
  for(j=0;j<flag.length;j++)
  {
    document.getElementById("result").innerHTML += flag[j]+"<br>";
    document.getElementById("answers").innerHTML = "<button type='button' id='getcorrect' onclick='wipe()'>Hide Correct Sentence</button>"
  }
}

}
function erase(){
    document.getElementById("result").innerHTML =" ";
    document.getElementById("answers").innerHTML = "<button type='button' id='getcorrect' onclick='toggle()'>Get Correct Sentence</button>"
}
function wipe(){
    document.getElementById("result").innerHTML =" ";
    document.getElementById("answers").innerHTML="<button type='button' id='getcorrect'>Get Correct Sentence</button>"
}