function SignUpForm(event){ 

    var elements = event.currentTarget;
      
    var a = elements[0].value; //Email
    var b = elements[1].value; //Username
    var c = elements[2].value; //Pass
    var d = elements[3].value; //ConfimrPass
    var e = elements[4].value; //DoB
   
    
    var result = true;    
        
    //Verifiers
    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var Uname_v = /^[a-zA-Z0-9_-]+$/;
    var pswd_v = /^(\S*)?\d+(\S*)?$/;
    var DoB_v = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
   
   
    document.getElementById("email_msg").innerHTML ="";
    document.getElementById("uname_msg").innerHTML ="";
    document.getElementById("pswd_msg").innerHTML ="";
    document.getElementById("pswdr_msg").innerHTML ="";
    document.getElementById("DoB_msg").innerHTML ="";
    
    if (a==null || a==""||!email_v.test(a))
        {	   
	   document.getElementById("email_msg").innerHTML="Email is empty or invalid(example: cs215@uregina.ca)";
           result = false;
        }


    if (b==null || b =="" || !Uname_v.test(b))
    	{
    	document.getElementById("uname_msg").innerHTML="Username is empty or invalid";
        	result = false;
    	}


    if (c==null || c =="" || c.length !=8	|| !pswd_v.test(c))
	{
    	document.getElementById("pswd_msg").innerHTML="Password is empty or invalid(example: CompS215)";
       		result = false;
	}


    if (d != c)
	{
    	document.getElementById("pswdr_msg").innerHTML="Passwords do not match";
        	result = false;
	}
    
    if (e==null || e =="" || !DoB_v.test(e))
	{
    	document.getElementById("DoB_msg").innerHTML="Date of Birth is empty or invalid(example: dd/mm/yyyy)";
       		result = false;
	}

    
    //prevent form to be submitted if one of above field is invalid		
    if(result == false )
        {    
            event.preventDefault();
        }
}

function ResetForm(event)
{
    document.getElementById("email_msg").innerHTML ="";
    document.getElementById("uname_msg").innerHTML ="";
    document.getElementById("pswd_msg").innerHTML ="";
    document.getElementById("pswdr_msg").innerHTML ="";
    document.getElementById("DoB_msg").innerHTML ="";
}

function ResetLogin(event)
{
    document.getElementById("email_msg").innerHTML ="";
    document.getElementById("pswd_msg").innerHTML ="";
}

function LoginForm(event){ 

    var elements = event.currentTarget;
      
    var a = elements[0].value; //Email
    var b = elements[1].value; //Password

   
    
    var result = true;    
        
    //Verifiers
    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var pswd_v = /^(\S*)?\d+(\S*)?$/;

   
   
    document.getElementById("email_msg").innerHTML ="";
    document.getElementById("pswd_msg").innerHTML ="";

    
    if (a==null || a==""||!email_v.test(a))
        {	   
	   document.getElementById("email_msg").innerHTML="Email is empty or invalid(example: cs215@uregina.ca)";
           result = false;
        }


    if (b==null || b =="" || b.length !=8	|| !pswd_v.test(b))
	{
    	document.getElementById("pswd_msg").innerHTML="Password is empty or invalid(example: CompS215)";
       		result = false;
	}


    //prevent form to be submitted if one of above field is invalid		
    if(result == false )
        {    
            event.preventDefault();
        }
}

function postForm(event){
	
	var a = document.getElementById("message").value;
	 
	document.getElementById("post_msg").innerHTML ="aa";
	 
	var result = true;
	
	if (a ==null || a=="" || a.length > 250){
		
    	document.getElementById("post_msg").innerHTML="Post field is empty or too long";
   		result = false;
		
	}
	
	
    if(result == false )
    {    
        event.preventDefault();
    }
	
}
