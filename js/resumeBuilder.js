//$("#main").append("Paolo Panzeri");
var formattedName = HTMLheaderName.replace("%data%","Paolo Panzeri");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio = {
"Nome": "Paolo",
"Cognome": "Panzeri",
"Età":45,
"Ruolo":"apprendista imprenditore",
"contacts": {
	"location":"Santa Maria Hoè", 
	"via": "corsia Mercato 20",
	"mobile":"335 5491651",
	"email":"paolo.panzeri@gmail.com",
	"github":"cagliano",
	"twitter":"@cagliano"},
"Foto": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/09d/1c4/1481e4f.jpg",
"Messaggio":"Benvenuti sul mio profilo",
"skills": [
"veloce nell' apprendimento","economia","flessibile"]
}

bio.Foto = "<img src='"+bio.Foto+"'>"

//for (var proprieta in bio) {
//$("#main").append(proprieta + " : " + bio[proprieta] + "<br>")
//console.log(proprieta + " : " + bio[proprieta]);
//};

var work = {
	"jobs":[{
	"employer":"Collead Srl",
	"title": "Ceo",
	"location":"Barzanò",
	"dates":"2007 - today",
	"description": "La mia avventura nel mondo della Lead Generation"
},{
"employer":"Piduemme Srl",
	"title": "Son on the Boss",
	"location":"Santa Maria Hoè",
	"dates":"2007 - today",
	"description": "Braccio destro"
},{
"employer":"Buongiorno Spa",
	"title": "Di tutto",
	"location":"Milano",
	"dates":"2003 - 2008",
	"description": "il mio primo lavoro, non si scorda mai"

// },{
// "employer":"Buongiorno Spa",
// 	"title": "Di tutto",
// 	"location":"Los Gatos",
// 	"dates":"2008 - 2009",
// 	"description": "Una esperienza in California..per certi versi mi manca"
// },{
// "employer":"Buongiorno Spa",
// 	"title": "Di tutto",
// 	"location":"San Paolo",
// 	"dates":"2009 - 2009",
// 	"description": "Alcuni mesi come Country Manager supplente"
}






]}



var education = {
	"schools":[{
	"name":"Scuola Statale Santa Maria Hoè",	
	"location":"Santa Maria Hoè",
	"degree": "Licenza Elementare",
	"majors":"Vari corsi",
	"dates":"1985 - 1990",
	"url": "http://www.icslavallettabrianza.gov.it/images/stories/santamariahoe/plesso%20di%20s.%20maria%20hoe.jpg"
},{
	"name":"Scuola Media Statale Don Piero Pointinger",	
	"location":"Rovagnate",
	"degree": "Licenza Media",
	"majors":"Vari corsi",
	"dates":"1990 - 1993",
	"url": "http://www.icslavallettabrianza.gov.it/"
},{
	"name":"Itcs Francesco Viganò",	
	"location":"Merate",
	"degree": "Maturità",
	"majors":"Vari corsi",
	"dates":"1993 - 1998",
	"url": "http://www.merateonline.it/public/pub_immagini/2011/Giugno/Merate_Ragioneria_Tagli.jpg"
},{
	"name":"Università Luigi Bocconi",	
	"location":"Milano",
	"degree": "Dottore in Economia Aziendale",
	"majors":"Piano Libero",
	"dates":"1998 - 2003",
	"url": "http://s3.amazonaws.com/europaconcorsi/project_images/1874057/BOC_Ed_w_large.jpg"
}],

"onlineCourses":[
{
"title":"Udacity Javascript",
"school":"Udacity",
"dates":"still trying",
"url":"https://www.udacity.com"
}
]
}


//$("#main").append(work["position"]);
//$("#main").append(education.name);


var projects = {
	"projects":[{
	"title":"Macchina da corsa Lego",
	"dates":"non mi ricordo",
	"description":"Una bellissima auto da rally con 4 marce",
	"images":"http://alumni.cse.ucsc.edu/~dulcaoin/reviews/pix/8880.jpg"
},{
	"title":"Telecomunicazione di terza generazione",
	"dates":"non mi ricordo",
	"description":"Tesi di Laurea",
	"images":"http://www.topgear.com/uk/assets/cms/aea85fac-f487-497f-a2eb-4a1268b4ec54/Thumbnail.jpg?p=140324_10:17"
},{
	"title":"Impianto di condizionamento mondiale",
	"dates":"devo ancora finirlo",
	"description":"Lorem Ipsum ",
	"images":"http://www.collead.com/img/homepage/img/collead-logo400.png"
}]}

if ( bio.hasOwnProperty("skills")){
$("#header").append(HTMLskillsStart);
};

if (bio.skills instanceof Array){

for (var i = 0; i < bio.skills.length; i++) {
$("#skills").append(
HTMLskills.replace("%data%",bio.skills[i])

	)	
console.log(bio.skills[i]);
};}

// var Paolo = {};
// Paolo.aspirazione = "fare soldi";

// var ContoInMilioni = 0.5

// var guadagnato = function(){
// console.log("guadagnato un milione");
// }

// while (Paolo.aspirazione === "fare soldi"){
// console.log("il conto in banca ora è di " + ContoInMilioni +" milioni, ma non puoi ancora compare un appartamento a Venezia");
// guadagnato();
// ContoInMilioni= ContoInMilioni+1;

// if (ContoInMilioni>10){

// Paolo.aspirazione = "comprare appartamento a Venezia";
// console.log("il conto in banca ora è di " + ContoInMilioni +" milioni, ORA puoi compare un appartamento a Venezia");

// }

// }

// console.log("Comprato appartamento")


function DisplayWork(){
for (lavori in work.job) {
$("#workExperience").append(HTMLworkStart)
Dovecome = HTMLworkEmployer.replace("%data%",work.job[lavori].employer);
Dovecome = Dovecome + HTMLworkTitle.replace("%data%",work.job[lavori].title);
$(".work-entry:last").append(Dovecome);
$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.job[lavori].dates));
$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.job[lavori].location));
$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.job[lavori].description));
}
};

DisplayWork();

$("#main").append(internationalizeButton)

function inName(dadividere){
var diviso= dadividere.split(" ");
console.log(diviso);
nome=diviso[0];
cognome=diviso[1];

console.log(dadividere.split(" ")[0][0].toUpperCase()+dadividere.split(" ")[0].slice(1).toLowerCase() )


nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
cognome= cognome.toUpperCase();
return nome+" "+cognome
};



projects.display=function(){

$("#projects").append(HTMLprojectStart);
for (progetti in projects.projects){


$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[progetti].title));
$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[progetti].dates));
$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[progetti].description));
$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[progetti].images));


}
$("#mapDiv").append(googleMap);


};

projects.display();
