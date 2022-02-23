function Timer ()
{
    let count = 30;

    let counter=setInterval(timer, 1000);

    function timer()
    {
    count=count-1;
    if (count <= 0)
    {
        clearInterval(counter);
        ScoreLayer();
    }
    document.getElementById("timer").innerHTML=count; 
    } 
    timer();
}