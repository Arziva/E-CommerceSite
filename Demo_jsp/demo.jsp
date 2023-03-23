<html>
    <head>
        <title>First JSP</title>
    </head>
    <body>
        <%
            double num = Math.random();
            if(num > 0.95){
        %>
            <h2> Harsha is talking about granny</h2><p> (<%= num %>) </p>
        <%
            } else{
        %>
            <h2> Well, Harsha likes to go meet Vishal. </h2><p> (<%= num %>) </p>
        <%
            }
        %>
        
        <a href=" <%= request.getRequestURI() %> " > <h3>Try again! </h3> </a>
    </body>
</html>

