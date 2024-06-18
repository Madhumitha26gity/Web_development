function display(n)
{
   document.getElementById("res").value +=n;
}

function result()
{
    let x = document.getElementById("res").value;
    let y = eval(x);
    document.getElementById("res").value = y;
}

function back()
{
    let x = document.getElementById("res").value;
    document.getElementById("res").value = x.substring(0, x.length - 1);
}

function erase()
{
    document.getElementById("res").value = " ";
}
