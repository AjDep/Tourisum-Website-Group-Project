
function validation(){
    var name= document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var stauts_1 = document.getElementById("menu1").value;
    var stauts_2 = document.getElementById("menu2").value;
    var comment = document.getElementById("comment").value;

    var res1 = document.getElementById("youtube").checked;
    var res2 = document.getElementById("facebook").checked;
    var res3 = document.getElementById("web_add").checked;
    var res4 = document.getElementById("article").checked;
    var res5 = document.getElementById("linkedIn").checked;

 
    validRadio();
    var isRateValid;

    function validRadio(){
        var valid = false;
        var answers = document.getElementsByName("rate");
            for (var i = 0; i < answers.length; i++) {
                if(answers[i].checked){
                    valid = true;
                    isRateValid = true;
                    break;
                }
            }

        if(valid != true){
             window.alert("Please enter a service rate..!");
            isRateValid = false;   
        }
    }

    var isCommentValid;
	if (comment == '' || comment.length < 5){
        window.alert("Please put a Comment..!");
		isCommentValid= false;
    }else{
		isCommentValid = true;
    }

    var isStauts_1Valid;
	if (stauts_1 == ''){
        window.alert("Please a select Option..!![Question 03]");
		isStauts_1Valid = false;
    }else{
		isStauts_1Valid = true;
    }

    var isStauts_2Valid;
	if (stauts_2 == ''){
        window.alert("Please a select Option..!![Question 04]");
		isStauts_2Valid = false;
    }else{
		isStauts_2Valid = true;
    }

    var isCheckboxValid;
    if(res1){
        isCheckboxValid= true;
    }else if(res2){
        isCheckboxValid= true;
    }else if(res3){
        isCheckboxValid= true;
    }else if(res4){
        isCheckboxValid= true;
    }else if(res5){
        isCheckboxValid= true;
    }else{
        window.alert("Please select a Option..![Question 05]");
        isCheckboxValid= false;
    }

    var isNameValid;
    if (name == '' || name.length < 3){
        window.alert("Please enter a Valid Name..!!");
		isNameValid = false;
    }else{
		isNameValid = true;
    }

    var isEmailValid;
    const mailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!email.match(mailformat)){
        window.alert("Please enter a Valid Email..!!");
		isEmailValid = false;
    }else{
		isEmailValid = true;
    }
    console.log(isNameValid);
    console.log(isEmailValid);
    console.log(isCheckboxValid);
    console.log(isStauts_1Valid);
    console.log(isStauts_2Valid);
    console.log(isCommentValid);
    console.log(isRateValid);

  
    if(isNameValid == true && isEmailValid == true && isCheckboxValid == true && isStauts_1Valid == true && isStauts_2Valid == true && isCommentValid == true && isRateValid == true){ 
        sendMail();
    }

    function sendMail(){
        var params = {
            name : document.getElementById("name").value ,
            email : document.getElementById("email").value ,
            rate : document.querySelector('input[name="rate"]:checked').value,
            comment : document.getElementById("comment").value ,
            stauts_1 : document.getElementById("menu1").value ,
            stauts_2 : document.getElementById("menu2").value ,
            ans : finals
            
            
        } 

        var selected_answers =[];
        var checkboxes = document.getElementsByName('check');
            for (var j = 0; j < checkboxes.length; j++) {
                if(checkboxes[j].checked){
                    selected_answers.push(checkboxes[j].value);
                }
            } 
        var finals = selected_answers.length > 0 ? selected_answers.join(','): 'None selected';
        
    
    const serviceID ="service_3mpb1kn";
    const templateID ="template_d2zfk7d";
    
    emailjs
        .send(serviceID,templateID,params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("comment").value = "";

            var radioButtons = document.getElementsByName("rate");
            for (var i = 0; i < radioButtons.length; i++) {
                radioButtons[i].checked = false;
            }
    
            var checkboxes = document.querySelectorAll('input[type=checkbox]');
            for (var j = 0; j < checkboxes.length; j++) {
                checkboxes[j].checked = false;
            } 
    
            console.log(res);
            openPopup();
           
        })
        .catch((err) => console.log(err));
    }
        
    
}

// wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function() {

    const Dark = document.querySelector('#Dark');  
    Dark.addEventListener('click', () => {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#1c2d31"; 
    });
  
    const Blue = document.querySelector('#Blue');
    Blue.addEventListener('click', () => {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#25011a";

      
    });
    
    const Ima = document.querySelector('#Ima');
    Ima.addEventListener('click', () => {
       document.body.style.backgroundColor = "none";
       document.body.style.backgroundImage = "url('images/student_02/comment_b1.jpg')";
      
    });
  });


