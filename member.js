function skillsMember(){
    var member = document.getElementById('member').value;
    var skills = document.getElementById('skills').value;
    var skill = skills.split(',');
    var i;
    for(i=0; i<skill.length; i++){
        if(member == skill[i]){
            document.getElementById('result').innerHTML = "Found";
            return;
        }
    }
    document.getElementById('result').innerHTML = "Not Found";
}