let positionLongitude = prompt('Введите текущее местоположение долгаты');
let positionLatitude = prompt('Введите текущее местоположение широты');

let destinationLongitude = prompt(
	'Введите местоположение точки назначения долгаты'
);

let destinationLatitude = prompt(
	'Введите местоположение точки назначения широты'
);

positionLongitude = Number(positionLongitude);
positionLatitude = Number(positionLongitude);
destinationLatitude = Number(destinationLatitude);
destinationLongitude = Number(destinationLongitude);

const answerLongitude = alert(
	`До пункта назночения долгаты осталось ${
		destinationLongitude - positionLongitude
	}`
);

const answerLatitude = alert(
	`До пункта назночения долгаты осталось ${
		destinationLatitude - positionLatitude
	}`
);
