  function insert(num){
      document.form.textViews.value=document.form.textViews.value + num;
  }
  
  function equal(){
    let exp = document.form.textViews.value;
    if(exp){
      document.form.textViews.value=eval(exp);
    }
   
  }
  function clean(){
    document.form.textViews.value='';
  }
  function back(){
    let exp = document.form.textViews.value;
    document.form.textViews.value=exp.substring(0,exp.length-1);
  }

  
 /* document.querySelector('#btn').addEventListener("click", function(){
    let a=document.querySelector('.inputNumber').value;
    document.getElementById('demo').innerText= eval(a);

  }) */