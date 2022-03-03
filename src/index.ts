//---------------------------------------
//task 1
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].
//---------------------------------------
//task 2
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
// Дополни объект квартиры свойством owner, значением которого будет объект
// с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".
//---------------------------------------
//task 3
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

// Change code below this line
//   const aptRating = apartment;
//   const aptDescr = apartment;
//   const aptPrice = apartment;
//   const aptTags = apartment;
// Change code above this line
// Дополни код присвоив объявленным переменным выражения обращения
// к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
//---------------------------------------
//task 4
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

// Change code below this line
//   const ownerName = apartment;
//   const ownerPhone = apartment;
//   const ownerEmail = apartment;
//   const numberOfTags = apartment;
//   const firstTag = apartment;
//   const lastTag = apartment;
// Change code above this line
// Дополни код присвоив объявленным переменным выражения обращения
// к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.
//---------------------------------------
//task 5
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

// Change code below this line
//   const aptRating = apartment;
//   const aptDescr = apartment;
//   const aptPrice = apartment;
//   const aptTags = apartment;
// Change code above this line
//   Дополни код присвоив объявленным переменным выражения обращения
//   к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

//   aptRating - рейтинг;
//   aptDescr - описание;
//   aptPrice - цена;
//   aptTags - теги.
//---------------------------------------
//task 6
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".
//---------------------------------------
//task 7
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".
//---------------------------------------
//task 8
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
// Change code below this line

// Change code above this line
// };
// Дополни код объявления объекта так, чтобы у него были
// свойства name, price, image и tags со значениями из переменных
// с аналогичными именами. Обязательно используй синтаксис коротких свойств.
//---------------------------------------
//task 9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
// Change code below this line

// Change code above this line
// };
// Дополни код объявления объекта
// credentials так, чтобы в результате у
// него были два свойства: email и password,
// имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть
// строка "henry.carter@aptmail.com", а значением
// свойства password - строка "jqueryismyjam".
//---------------------------------------
//task 10
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   Перебери объект apartment используя цикл for...in и
//   запиши в массив keys все его ключи, а в массив values все значения его свойств.
//---------------------------------------
//task 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// Change code below this line

//   keys.push(key);
//   values.push(apartment[key]);

// Change code above this line
// }
// Выполни рефакторинг решения предыдущего задания
// добавив в цикл for...in проверку на собственное свойство.
//---------------------------------------
//task 12
// function countProps(object) {
// let propCount = 0;
// Change code below this line

// Change code above this line
// return propCount;
//   }
// Напиши функцию countProps(object),
// которая считает и возвращает количество собственных свойств
// объекта в параметре object. Используй переменную propCount
// для хранения количества свойств объекта.
//---------------------------------------
//task 13
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
// Change code below this line
//   const keys = apartment;
// Перебери объект apartment используя метод Object.keys()
// и цикл for...of. Запиши в переменную keys массив ключей
// собственных свойств объекта apartment, и добавь в массив
// values все значения его свойств.
//---------------------------------------
//task 14
// function countProps(object) {
// Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// Change code above this line
// }
// Выполни рефакторинг функции countProps(object)
// используя метод Object.keys() и, возможно, цикл for...of.
//---------------------------------------
//task 15
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
// Change code below this line
//   const keys = apartment;
//   const values = apartment;
// Запиши в переменную keys массив ключей собственных свойств
// объекта apartment, а в переменную values массив всех значений
// его свойств. Используй методы Object.keys() и Object.values().
//---------------------------------------
//task 16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
// Change code below this line

// Change code above this line
//     return totalSalary;
//   }
// Напиши функцию countTotalSalary(salaries)
// которая принимает объект зарплат, где имя
// свойства это имя сотрудника, а значение свойства это
// зарплата. Функция должна рассчитать общую сумму зарплат
// сотрудников и вернуть её. Используй переменную totalSalary
// для хранения общей суммы зарплаты.
//---------------------------------------
//task 17
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   Перебери массив объектов colors используя цикл for...of.
//   Добавь в массив hexColors значения свойств hex, а в массив
//   rgbColors значения свойств rgb из всех объектов массива colors.
//---------------------------------------
//task 18
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
// Change code below this line

// Change code above this line
//   }
// Напиши функцию getProductPrice(productName)
// которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем (свойство name) в массиве
// products и возвращает его цену (свойство price). Если продукт с таким
// названием не найден, функция должна возвращать null.
//---------------------------------------
//task 19
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   function getAllPropValues(propName) {
// Change code below this line

// Change code above this line
//   }
// Напиши функцию getAllPropValues(propName) которая
// принимает один параметр propName - имя (ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким
// именем из каждого объекта в массиве products. Если в объектах нет
// свойства с таким именем, функция должна вернуть пустой массив.
//---------------------------------------
//task 20
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   function calculateTotalPrice(productName) {
// Пиши код ниже этой строки

// Пиши код выше этой строки
//   }
// Напиши функцию calculateTotalPrice(productName)
// которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость (цена * количество) товара
// с таким именем из массива products.
//---------------------------------------
//task 21
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
// Change code below this line

//   const yesterday = highTemperatures.yesterday;
//   const today = highTemperatures.today;
//   const tomorrow = highTemperatures.tomorrow;

// Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
// Пришел трёхдневный прогноз максимальных температур и мы считаем
// среднюю температуру за три дня (meanTemperature).
// Замени объявления переменных yesterday, today и tomorrow одной
// операцией деструктуризации свойств объекта highTemperatures.
//---------------------------------------
//task 22
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
// Change code below this line

//   const yesterday = highTemperatures.yesterday;
//   const today = highTemperatures.today;
//   const tomorrow = highTemperatures.tomorrow;
//   const icon = highTemperatures.icon;

// Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
// В прогнозе максимальных температур также может быть необязательное
// свойство icon - иконка погоды. Замени объявления переменных
// yesterday, today, tomorrow и icon одной операцией деструктуризации
// свойств объекта highTemperatures. Задай значение по
// умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//---------------------------------------
//task 23
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
// Change code below this line

//   const highYesterday = highTemperatures.yesterday;
//   const highToday = highTemperatures.today;
//   const highTomorrow = highTemperatures.tomorrow;
//   const highIcon = highTemperatures.icon;

// Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon
// одной операцией деструктуризации свойств объекта highTemperatures.
// Задай значение по умолчанию
// для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//---------------------------------------
//task 24
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
// Change code below this line

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
//---------------------------------------
//task 25
// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
// Change code below this line

//   const highToday = forecast.today.high;
//   const lowToday = forecast.today.low;
//   const todayIcon = forecast.today.icon;

//   const highTomorrow = forecast.tomorrow.high;
//   const lowTomorrow = forecast.tomorrow.low;
//   const tomorrowIcon = forecast.tomorrow.icon;
// Мы получили прогноз погоды на два дня, с минимальными и
// максимальными температурами, а также необязательными иконками.
// Замени объявления всех переменных одной операцией деструктуризации
// свойств объекта forecast. Задай значение по умолчанию для иконок,
// переменных todayIcon
// и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//---------------------------------------
//task 26
// Change code below this line
// function calculateMeanTemperature(forecast) {
//     const todayLow = forecast.today.low;
//     const todayHigh = forecast.today.high;
//     const tomorrowLow = forecast.tomorrow.low;
//     const tomorrowHigh = forecast.tomorrow.high;

// Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }
// Функция calculateMeanTemperature(forecast) принимает один параметр
// forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh,
// tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.
//---------------------------------------
//task 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
// const bestScore = scores;
// const worstScore = scores;
// В переменной scores хранится массив результатов тестирования.
// Используя распыление и методы Math.max() и Math.min() дополни код так,
// чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
//---------------------------------------
//task 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
// const allScores = [];
// const bestScore = allScores;
// const worstScore = allScores;
// В переменных firstGroupScores, secondGroupScores и
// thirdGroupScores хранятся результаты тестирования отдельных групп.
// Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
//---------------------------------------
//task 29
// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
// Change code below this line
//   const finalSettings = {};
// В конструкторе можно создавать новые тесты, для которых есть
// настройки по умолчанию которые хранятся в переменной defaultSettings.
// Во время создания теста, все или часть настроек можно переопределить,
// они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять
// настройки по умолчанию и поверх них применить переопределённые настройки.
// Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
//---------------------------------------
//task 30
// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
// Change code below this line

// Change code above this line
//   }
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой
// локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два,
// category и priority, могут отсутствовать. Тогда, в новом объекте задачи,
// в свойствах category и priority должны быть значения по умолчанию,
// хранящиеся в одноимённых локальных переменных.
//---------------------------------------
//task 31
// function add() {
// Change code above this line
//   }
// Используя операцию rest дополни код функции add() так,
// чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
//---------------------------------------
//task 32
// function addOverNum(...args) {
//     let total = 0;

//     for (const arg of args) {
//       total += arg;
//     }

//     return total;
// Change code above this line
//   }
// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов,
// которые больше чем заданное число. Это число должно быть первым параметром функции.
//---------------------------------------
//task 33
// function findMatches() {
// const matches = []; // Don't change this line

// Change code above this line
//     return matches;
//   }
// Функция findMatches() принимает произвольное количество аргументов.
// Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches,
// в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть
// массив [1, 2], потому что только они есть в массиве первого аргумента.
//---------------------------------------
//task 34
// const bookShelf = {
// Change code below this line
// books: ['The last kingdom', 'The guardian of dreams'],
// getBooks() {
//   return 'Returning all books';
// },
// addBook(bookName) {
//   return `Adding book ${bookName}`;
// },
// Change code above this line
//   };
// Добавь объекту bookShelf ещё два метода,
// которые пока что будут возвращать просто
// строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.
// Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять
// название книги на новое. Возвращает
// строку "Updating book <старое имя> to <новое имя>",
// где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.
//---------------------------------------
//task 35
// const bookShelf = {
// books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
// updateBook(oldName, newName) {
// Change code below this line

// Change code above this line
//     },
//   };
// Дополни метод updateBook(oldName, newName) так,
// чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива,
// и splice() для того чтобы заменить этот элемент
//---------------------------------------
//task 36
// const atTheOldToad = {
// Change code below this line
// Change code above this line
//   };
// К нам обратилась владелица лавки зелий «У старой жабы» и
// заказала программу для ведения инвентаря - добавления, удаления,
// поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions,
// значением которого сделай пустой массив.
//---------------------------------------
//task 37
// const atTheOldToad = {
// Change code below this line
// potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// Change code above this line
//   };
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
//---------------------------------------
//task 38
// const atTheOldToad = {
// potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// addPotion(potionName) {
// Change code below this line
// Change code above this line
//     },
//   };
// Дополни метод addPotion(potionName) так,
// чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
//---------------------------------------
//task 39
// const atTheOldToad = {
// potions: ["Speed potion", "Dragon breath", "Stone skin"],
// removePotion(potionName) {
// Change code below this line

// Change code above this line
//     },
//   };
// Дополни метод removePotion(potionName) так,
// чтобы он удалял зелье potionName из массива зелий в свойстве potions.
//---------------------------------------
//task 40
// const atTheOldToad = {
// potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// updatePotionName(oldName, newName) {
// Change code below this line

// Change code above this line
//     },
//   };
//   Дополни метод updatePotionName(oldName, newName) так,
//   чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
//---------------------------------------
//task 41
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
// Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       if (this.potions.includes(newPotion)) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }

//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);

//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }

//       this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);

//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }

//       this.potions.splice(potionIndex, 1, newName);
//     },
// Change code above this line
//   };
// Заказчица хочет чтобы каждое зелье было представлено не только именем,
// но и ценой, а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так,
// чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект)
// в массив в свойстве potions, но только если такого зелья еще нет в инвентаре.
// В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья
// с названием oldName на newName в массиве potions.
