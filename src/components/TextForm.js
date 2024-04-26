import React,{useState} from 'react';


export default function TextForm(props) {
  const HandleOnClick = () =>{
    console.log("uppercase button was clicked");
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("converte to uppercase","success");
  }
  const HandleOnChange = (event) =>{
    console.log("uppercase is handled");
    setText(event.target.value);
  }
  const HandleLoClick = () =>{
    console.log("Lowercase button was clicked");
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  }
  const vowelCount =()=>{
    let vowels = 0;
    for(let character of Text){
      if(character==="a"||character==="e"||character==="i"||character==="o"||character==="u"){
        vowels += 1;
      }
    };
    setVowel(vowels);
    
  }



  const [Text, setText] = useState("enter text here");
  const [vowel,setVowel] = useState(" ");
  
  

  return (
    <>
    <div className='container' style={{color: props.Mode === 'dark'?'white':'#152f49'}}>
      <h2>{props.heading} </h2>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <textarea  type="email" className="form-control" id="exampleFormControlInput1" rows="8" value={Text} onChange={HandleOnChange} style={{backgroundColor: props.Mode === 'dark'?'grey':'white',color: props.Mode === 'dark'?'white':'#152f49'}}/>
  <button class="btn btn-primary mx-2" disabled={Text.length===0} onClick={HandleOnClick} >change to upperCase</button>
  <button class="btn btn-primary mx-2" disabled={Text.length===0} onClick={HandleLoClick} >change to LowerCase</button>
  <button class="btn btn-primary mx-2" disabled={Text.length===0} onClick={vowelCount}  >CLick to find number of vowels</button>
  
</div>
</div>
<div className="container my-3" style={{color: props.Mode === 'dark'?'white':'#152f49'}}>
  <h1>Summary of your text</h1>
  <p>{Text.split(/\s+/).length } words  & {Text.length} characters </p>
  <p>{0.08*Text.split(" ").filter((element)=>{return element.length!=0}).length}  time taken to read</p>
  <h2>Preview of the text  </h2>
  <p>{Text}</p>
  <h3>Vowels</h3>
  <p>{vowel}</p>
</div>
</>

  );
}
