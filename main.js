var broj = Math.min(255,233,23,2);
document.write('Min: ' +broj);
var user={
    nom: 'KLAJIC', 
    prenom: 'Vesna', 
    info:function(){
        document.write(user.nom + ' ' + user.prenom);
    }
}
user.info();

var user1={
    nom: 'MILIC', 
    prenom: 'Natasha', 
    info:function(){
        document.write(user1.nom + ' ' + user1.prenom);
    }
}
user1.info();

function Users(nom,prenom){
    this.nom=nom;
    this.prenom=prenom;
    this.info=function(){
        document.write(nom +' '+prenom);
    }
}
var moi1=new Users('Michel','Belle');
var moi2=new Users('Jean','Jarre');
var moi3=new Users('Boby','Fisher');
moi1.info();
moi2.info();
moi3.info();