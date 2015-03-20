  var email = "dreamgear@gmail.com";
  
  bio = {
		  "name" : "Jeff Dickens",
		  "role" : "IT Manager",
		  "contacts" : {
			  "email" : "dreamgear@gmail.com",
			  "phone" : "978-297-1313",
			  "github" : "dreamgear",
			  "location" : "Winchendon, MA"
		  },		  
		  "bioPic" : "http://www.dreamgearweb.com/images/avatar.jpg",
		  "welcomeMessage" : "Welcome to my Interactive Resume",
		  "skills" : [ "IT Management", "javascript", "jQuery", "PHP",
			"UNIX system administration"]
  };
  
  work = {};
  work.position = "IT Director";
  work.employer = "Seaman Paper";
  work.years = 9;
  work.city = "Gardner, MA";
  
  education = {};
  education["name"] = "Fitchburg State University";
  education["years"] = "2008-2012";
  education["city"] = "Fitchburg, MA";
  
  var name = "Jeff Dickens";
  var role = "IT Manager";
  
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  
  $("#header").append(HTMLheaderName.replace("%data%",bio.name));
  $("#header").append(HTMLheaderRole.replace("%data%",bio.role));
  $("#header").append(HTMLcontactGeneric.replace("%contact%",'phone').replace("%data%",bio.contact));
  $("#header").append(HTMLemail.replace("%data%",bio.email));
  $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
  $("#header").append(HTMLskills.replace("%data%",bio.skills));
 
  $("#main").append(work["position"]);
  $("#main").append(education.name);
  
  
  
  console.log("Email: " + email);
