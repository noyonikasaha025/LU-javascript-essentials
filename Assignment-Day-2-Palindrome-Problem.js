 //the Palindrome Problem

s = "madam is speaking in malayalam with my mom "

word = ""
for( t of s){
  
  if(t!=" "){
    word = word +t
  }
  else{
    rev =""
    for(i of word){
      rev = i+rev
    }
    if(rev == word){
      console.log(word)
      
    }
    word = ""
  }
}
