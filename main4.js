let username = prompt("Input your Account");
if ( username == "admin"){
    let password = prompt("Input your password");
    if(password == "The master"){
        if( username== ""|| username == "Esc"){
            console.log("Canceled");
        }else{
            console.log("I dont know who u are");
        }
    }else if ( username=="MindX"){
        console.log("Chào mừng");
    }else{
        console.log("Mật khẩu sai");
    }
}