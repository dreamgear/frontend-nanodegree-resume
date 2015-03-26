var bio = {
	"name" : "Jeff Dickens",
	"role" : "IT Manager",
	"contacts" : {
		"mobile" : "978-297-2323",
		"email" : "dreamgear@gmail.com",
		"github" : "dreamgear",
		"twitter" : "dreamgear61",
		"location" : "Massachusetts, USA"
	},
	"welcomeMessage" : "Welcome to my Interactive Resume",
	"skills" : [ "IT Management", "javascript", "jQuery", "PHP",
			"UNIX system administration" ],
	"bioPic" : "http://www.dreamgearweb.com/images/avatar.jpg",
	"display" : function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts").append(
				HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(
				HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(
				HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(
				HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(
				HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i += 1) {
				$("#skills")
						.append(HTMLskills.replace("%data%", bio.skills[i]));
			}
		}
	}
};

var education = {
	"schools" : [ {
		"name" : "Fitchburg State University",
		"location" : "Fitchburg, MA, USA",
		"degree" : "BS",
		"majors" : [ "Computer Science" ],
		"dates" : 2012,
		"url" : "http://www.fitchburgstate.edu",
		"honors" : "Summa cum Laude, Alpha Sigma Lambda"
	} ],
	"onlineCourses" : [ {
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud804"
	} ],
	"display" : function() {
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);
		}
		for (var i = 0; i < education.schools.length; i++) {
			$(".education-entry:last").append(
					HTMLschoolName.replace("%data%", education.schools[i].name)
							+ HTMLschoolLocation.replace("%data%",
									education.schools[i].location)
							+ HTMLschoolDegree.replace("%data%",
									education.schools[i].degree)
							+ HTMLschoolDates.replace("%data%",
									education.schools[i].dates))
			for (var j = 0; j < education.schools[i].majors.length; j++) {
				$(".education-entry:last").append(
						HTMLschoolMajor.replace("%data%",
								education.schools[i].majors[j]));
			}
		}
		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
		}
		for (var i = 0; i < education.onlineCourses.length; i++) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(
					HTMLonlineTitle.replace("%data%",
							education.onlineCourses[i].title)
							+ HTMLonlineSchool.replace("%data%",
									education.onlineCourses[i].school)
							+ HTMLonlineDates.replace("%data%",
									education.onlineCourses[i].dates)
							+ HTMLonlineURL.replace("%data%",
									education.onlineCourses[i].url))
		}
	}
};

var work = {
	"jobs" : [
			{
				"employer" : "Seaman Paper Company",
				"title" : "IT Manager",
				"dates" : "2006-Present",
				"location" : "Gardner, MA",
				"description" : "Built Infrastructure for Growing Manufacturer"
			},
			{
				"employer" : "Self-Employed",
				"title" : "Web Designer/Programmer",
				"dates" : "2002-2005",
				"location" : "Winchendon, MA",
				"description" : "Learned Linux, Apache, MySQL & PHP; Deployed Content Management Systems"
			},
			{
				"employer" : "ERS International",
				"title" : "Software Tools Engineer",
				"dates" : "1999-2001",
				"location" : "Boxborough, MA",
				"description" : "Managed UNIX/Windows toolchains for startup."
			},
			{
				"employer" : "Digital Equipment Corporation",
				"title" : "Software Tools Engineer",
				"dates" : "1980-1998",
				"location" : "Littleton, MA",
				"description" : "Held several engineering support positions during DEC's heyday"
			} ],
	"display" : function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(
					HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
							+ HTMLworkTitle.replace("%data%",
									work.jobs[job].title)
							+ HTMLworkDates.replace("%data%",
									work.jobs[job].dates)
							+ HTMLworkLocation.replace("%data%",
									work.jobs[job].location)
							+ HTMLworkDescription.replace("%data%",
									work.jobs[job].description));
		}
	}
};

var projects = {
	"projects" : [
			{
				"title" : "Roll Labeling Workstation",
				"dates" : "2012-2014",
				"description" : "A jQuery-based shop-floor automation system which records production data in the NetSuite ERP system",
				"images" : [ "images/rlws_screenshot_1.jpg",
						"images/rlws_screenshot_2.jpg" ]
			},
			{
				"title" : "Roll Labeling System Middleware Layer",
				"dates" : "2014-2015",
				"description" : "A node.js based middleware layer that presents a RESTful interface to client applications",
				"images" : [ "", "" ]
			},
			{
				"title" : "Transfer Order Handheld Application",
				"dates" : "2014-2015",
				"description" : "A PHP based client application that consumes the middleware layer",
				"images" : [ "", "" ]
			} ],
	"display" : function() {
		// console.log(projects);
		for ( var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(
					HTMLprojectTitle.replace("%data%",
							projects.projects[project].title)
							+ HTMLprojectDates.replace("%data%",
									projects.projects[project].dates)
							+ HTMLprojectDescription.replace("%data%",
									projects.projects[project].description));
			for ( var image in projects.projects[project].images) {
				$(".project-entry:last").append(
						HTMLprojectImage.replace("%data%",
								projects.projects[project].images[image]));
			}
		}
	}
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(
				HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
						+ HTMLworkTitle.replace("%data%", work.jobs[job].title)
						+ HTMLworkDates.replace("%data%", work.jobs[job].dates)
						+ HTMLworkLocation.replace("%data%",
								work.jobs[job].location)
						+ HTMLworkDescription.replace("%data%",
								work.jobs[job].description));
	}
}

function inName() {
	var nameArray = bio.name.split(" ");
	return nameArray[0] + " " + nameArray[1].toUpperCase();
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
