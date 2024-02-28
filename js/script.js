function getInfo() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;

    let sex_value = document.getElementById('sex').value;
    if(document.getElementById('sex1').checked) {
        sex_value = document.getElementById('sex1').value;
    }else if(document.getElementById('sex2').checked) {
        sex_value = document.getElementById('sex2').value;
    }

    let batch = document.getElementById("batch");
    let selectedBatch = batch.options[batch.selectedIndex].text;
    
    let section = document.getElementById("section");
    let selectedSection = section.options[section.selectedIndex].text;

    let userInfo = {
        firstName: fname,
        middleName: mname,
        lastName: lname,
        sex: sex_value,
        batch: selectedBatch,
        section: selectedSection
    }
    console.log(userInfo);
}
