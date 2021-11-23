const Http = new XMLHttpRequest();

function receiveTokens(form) {
    var Tokens = form.tokens.value.split(" ");
    var inviteCode = form.invite.value.split("/")[3];

    for(let i = 0; i < Tokens.length; i++) {

        Http.open("POST", `https://discord.com/api/v8/invites/${inviteCode}`);
        Http.setRequestHeader('authorization', Tokens[i]);
        Http.send();

        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    console.log(`[${i+1}/${Tokens.length}] ${Tokens[i]}`);
                } else {
                    console.log(`[${i+1}/${Tokens.length}] ${Tokens[i]} | ${Http.status}`);
                }
            }
        }
    
        console.log(`Token ${i} entrou no servidor`);
    }

    alert("Tokens entrando no servidor...");
}