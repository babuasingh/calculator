let string=""
let btns=document.getElementsByTagName("button")
let dis=document.getElementsByClassName("input")[0]
let audio=new Audio("click.wav")
// console.log(dis)
// console.log(btns)
Array.from(btns).forEach((button)=>{
    // button.setAttribute("style)
    button.addEventListener("click",(e)=>{
        audio.play()
        let val=e.target.innerHTML
        if(val=="="){
            try{
            string=eval(string)
            }
            catch (err){
                string=err
            }
            if(Number.parseInt(string)<0)
            {
                let num=Number.parseInt(string)*-1;
                dis.value=`${num}-`
            }
            else dis.value=string
        }
        else if(val=="AC")
        {
            string=""
            dis.value=""
            // temp=""
        }
        else if(val=="&lt;=")
        {
            if(string.length>0)
            string=string.substring(0,string.length-1)
            let temp=Array.from(string).reverse().join(" ")
            temp=temp.trim()
            dis.value=temp
        }
        else{
        string+=e.target.innerHTML
        let temp=Array.from(string).reverse().join(" ")
        temp=temp.trim()
        dis.value=temp
        }
       
    })
})