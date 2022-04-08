/*let user;
user = 'Jhon';
admin = user;
alert(admin);
let username = prompt('Ваше имя?');
alert('Здравствуйте, '+username+'!');
let count;
count = 0;
let q1;
q1 = prompt('В каком году был подписан Кучюк-Кайнаджирский договор '+'1 - 1774г. '+'2 - 1811г. '+'3 - 1740г. ');
if (q1 == 1) {
    alert('Правильно!');
    count++;
} else {
    alert('Неправильно');
}
let q2 = prompt('Как называется 3-я планета от Солнца '+'1 - Марс'+'2 - Меркурий '+'3 - Земля')
if (q2 == 3) {
    alert('Правильно!');
    count++;
} else {
    alert('Неправильно');
}
alert('Правильных ответов - '+count)
alert('О себе')
let name = prompt('Ваше имя');
let sname = prompt('Ваша фамилия');
let age = prompt('Ваш возраст');
if (age <= 0) {
    alert('Вы слишком молоды');
} else if (age > 120) {
    alert('Вы слишком стары');
} else {
    alert('Вас зовут '+sname+' '+name+'. '+'Вам '+age+' лет.')
}
let n = prompt('Введите число большее нуля');
while (n == 0 || n == null) {
    alert('Вы не ввели число большее нуля');
    n = prompt('Введите число большее нуля');
} 
if ((n % 2) == 0) {
    alert('Число '+n+' чётное');
} else {
    alert('Число '+n+' нечётное');
}*/
/*let n = prompt('Введите число');
if (n == 0)
    {
        alert('0');
} else if (n > 0)
{
    alert('1');
} else
{
    alert('-1');
}*/
/*function GetRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
let user_name = prompt('Введите имя');
alert('Приветствую, ' + user_name + '.');
let difficulty = prompt('Выберите сложность. 1 - легко. 2 - средне. 3 - сложно');
if (difficulty == 1) 
    {
        difficulty = 50;
    } else if (difficulty == 2)
        {
            difficulty = 25;
        } else if (difficulty == 3)
            {
                difficulty = 15;
            }
alert('У вас ' + difficulty + ' здоровья');
let char = prompt('Выберите оружее: 1 - меч (6 урона); 2 - лук (3 урона); 3 - посох (4 урона)');
alert('Удачи!');
if (char == 1)
    {
        char = 6;
    } else if (char == 2)
        {
            char = 3;
        } else
            {
                char = 4;
            }
let lvl = 1;
let hp = 0;
Battle(lvl);
function Battle(lvl)
{
alert('Вы на уровне - ' + lvl);
let enemy_lvl = lvl;
let enemy = GetRandomInt(enemy_lvl, enemy_lvl + 2);
let action = prompt('Вы встретили врага, У врага ' + enemy + ' здоровья, начать сражение(1) или попробовать скрыться(2), 3 - выйти');
hp = difficulty;
let dmg = 0;
let random = 0;
dmg = GetRandomInt(char, char * 2);
if (action == 2)
    {
        random = GetRandomInt(1,10);
        if (random > 5)
            {
                alert('Вам удалось сбежать');
            } else 
                {
                    alert('Враг заметил вас и нанес вам удар');
                    hp = hp - GetRandomInt(enemy, enemy * 2);
                    alert('У вас осталось ' + hp + ' здоровья');
                    return null;
                }
    } else if (action == 1) 
        {
            while (enemy > 0) 
                {
                    alert('Вы нанесли ' + dmg + ' урона');
                    hp = hp - enemy;
                    enemy = enemy - dmg;
                    alert('У вас осталось ' + hp + ' здоровья');
                }
        } else  if(action == 3)
            {
                alert('Вы закончили игру на уровне ' + lvl);
                return null;
            }
alert('Вы прошли уровень - ' + lvl);
char = char + 1;
alert('Уровень вашего оружия - ' + char);
alert('Вы перешли на следующий уровень!');
Exit();
return lvl;
}
function Exit()
{
    let cont = prompt('Продолжить?');
    if (cont > 0)
        {
            lvl = lvl + 1;
            Battle(lvl+1);
        }
    else alert('Спасибо');
}*/
/*for (let i = 2; i < 11; i = i + 2){
    alert(i);
}*/
/*let n = 10;
for (let i = 2; i <= n; i++)
    {
        for (let j = 1; j < i; j++)
        {
          if ((i % j) == 0 && j != i)
              {
                console.log(i);
              } else 
                  {
                        
                  }
        }
    }
*/
// Задание 3 чётное нечётное
// let n = 10;
// console.log('Чётные числа');
// for (let i = 1; i <=n; i++)
//     if ((i % 2) == 0) {
//         console.log(i);
//     }
// // Задание 1 Простые числа
// n = 10;
// console.log('Простые числа');
// for (let i = 2; i <= n; i++) {
//     let m = 1;
//     if (i > 2 && i % 2 != 0)
//     {
//         for (let k = 3; k*k <= i ; k = k+ 2)
//         {
//             if ( i % k == 0)
//             {
//                 m = 0;
//                 break;
//             }
//         }
//     }
//     else if (i != 2) m = 0;
//     if (m == 1) {
//         console.log(i);
//     }
// }
// // Задание 2 Треугольник
// n = 10;
// console.log('Елочка');
// let k = '#';
// console.log(k);
// for (let i = 0; i < n; i++) {
//     k += '#';
//     console.log(k);
// }

function maxn(a, b) {
     if (a > b) {
         alert(a);
     } else {
         alert(b);
     }
 }
function powN(x, n) {
    return x**n;
}
let a = prompt('Введите число');
let b = prompt('Введите степень');
alert(powN(a, b));
function inttostr(a)
{
    return a * 1;
}
let ask = prompt();
alert(typeof(inttostr(ask)));
function delitels(a)
{
    for (let i = 1; i <= a; i++)
    {
        if (a % i == 0)
        {
            alert(i);
        }
    }
}
let h = prompt('Введите число')
delitels(h);