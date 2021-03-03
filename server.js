const http = require("http");

const server = http.createServer((req, res) => {
    const {headers, url, method} = req;
    // res.setHeader("content-type", "text/plain");
    if (url === "/"){
        // res.setHeader("content-type", "text/plain");
        // res.setHeader("content-type", "application/json")

        res.write("<h1>Manai delguurt tawtai moril?</h1>\n"); 
        res.write(`<br>Login hiihin tuld ta <a href="/login">end</a> darana uu </br>`); 
        
        // uussen holboltiin suwgiig haadag.
        // end iin umnu ywuulah gsn ymaa bugdiig ni bichdeg
        res.end();
    } 
    if (url == "/login") {
        res.write("<h1>Login hiih</h1>\n"); 
        res.write(`<form action="/check" method="POST">`);
        res.write(`<br><input type="text" name="email" />`); 
        res.write(`<br><input type="password" name="pass" />`); 
        res.write(`<br><input type="submit" value="login" />`); 
        res.write(`<form />`);
    } else if (url === "/check" && method === "POST") {
        res.write(`<a>Login hiij baina</a>`); 
        res.end();
    };

})

server.listen(5000, () => {
    console.log("http server 5000 der aslaa");
})


