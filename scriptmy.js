function kvadrt()
{
d=document
var a = Number(d.form1.num1.value)//для поля ввода a
var b = Number(d.form1.num2.value)//для поля ввода b
var c = Number(d.form1.num3.value)//для поля ввода c
var diz = eval(Math.pow(b,2)-4*a*c)//расчёт дискримина́нта
var x1 = Number(d.form1.x1.value)//для поля вывода х1
if(a!=0 && b!=0 && c!=0)
{
x1 = eval(diz);
}
d.form1.x1.value=x1;
}

function Srav()
{
    d=document
    var a = Number(d.form2.x1.value)//для поля ввода a
    var b = Number(d.form2.x2.value)//для поля ввода b
    var y2 = Math.max(a,b)//Выбор максимального значения
    d.form2.y2.value=y2;
}

function Imya()
{
d=document
var admin, name; // можно объявить две переменные через запятую
name = "Владислав";
admin = name;
alert( admin ); // "выводит имя админа"
}
