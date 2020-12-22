function get_para_1(){
    var inputs = [];
    
    inputs.push(document.getElementById("input_1_para_1").value);

    inputs.push(document.getElementById("input_2_para_1").value);

    inputs.push(document.getElementById("input_3_para_1").value);

    inputs.push(document.getElementById("input_4_para_1").value);

    inputs.push(document.getElementById("input_5_para_1").value);

    document.getElementById("display_para_1").innerHTML= inputs.join(" ");
    
}

function get_para_2(){
    var inputs_101 = [];
    
    inputs_101.push(document.getElementById("input_1_para_2").value);

    inputs_101.push(document.getElementById("input_2_para_2").value);

    inputs_101.push(document.getElementById("input_3_para_2").value);

    inputs_101.push(document.getElementById("input_4_para_2").value);

    inputs_101.push(document.getElementById("input_5_para_2").value);

    document.getElementById("display_para_2").innerHTML= inputs_101.join(" ");
    
}