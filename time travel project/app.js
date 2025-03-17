window.onload=()=>{
    function digital(){
        const date=new Date();
        let hour=date.getHours();
        let minute=date.getMinutes();
        let second=date.getSeconds();
        
        let hr=document.querySelector(".hr");
        let min=document.querySelector(".min");
        let sec=document.querySelector(".sec");
        hr.textContent=hour;
        min.textContent=minute;
        sec.textContent=second;
        setTimeout(digital,1000);
    }
  digital();


}

  

