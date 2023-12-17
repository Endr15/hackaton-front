export const Programs = [
	{
		id: 'improvisation',
		name: 'Импровизация',
		subName: 'Шоу, 60 мин, 12+',
		description: 'Непредсказуемое комедийное шоу от Comedy Club Production. Здесь нет сценария и все, происходящее на сцене, придумывается участниками на ходу. Под управлением ведущего Павла Воли четыре комика и один звездный гость оказываются в самых странных ситуациях — и выбираются из них с юмором.',
		rating: 4.9,
		countRating: 1152,
		season: [
			[
				{
					id: 1,
					name: 'Пилот',
					desc: '1 серия',
					srcImage: '/program/improvisation.jpg',
				},
			],
			[
				{
					id: 2,
					name: 'Регина Тодоренко',
					desc: '1 серия',
					srcImage: '/program/improvisation.jpg',
				},
			],
			[
				{
					id: 3,
					name: 'Слава Комиссаренко',
					desc: '1 серия',
					srcImage: '/program/improvisation.jpg',
				},
			],
		],
		comments: [
			{
				srcImage: '/avatar/1.png',
				userName: 'Сергей Иванов',
				date: '17.02.2022',
				description: 'Обожаю импровизация',
			},
			{
				srcImage: '/avatar/2.png',
				userName: 'Людмила',
				date: '02.11.2023',
				description: 'Пацаны, я вас люблю',
			},
		],
		similar: [
			{
				name: 'Comedy Club',
				channel: 'ТНТ',
				time: '18:00 - 19:00',
				srcImage: '/program/comedy.jpg',
			},
		],
	},

	{
		id: 'news',
		name: 'Новости',
		subName: 'Новости, 60 мин, 12+',
		description: 'Последние новости за этот день',
		rating: 4.3,
		countRating: 14152,
		season: [
			[
				{
					id: 1,
					name: 'Утро 15.12',
					desc: 'утро',
					srcImage: '/program/news.jpg',
				},
			],
			[
				{
					id: 2,
					name: 'День 16.12',
					desc: 'День',
					srcImage: '/program/news.jpg',
				},
			],
			[
				{
					id: 3,
					name: 'День 17.12',
					desc: 'день',
					srcImage: '/program/news.jpg',
				},
			],
		],
		comments: [
			{
				srcImage: '/avatar/1.png',
				userName: 'Сергей Иванов',
				date: '17.02.2022',
				description: 'Ведущий огонь',
			},
			{
				srcImage: '/avatar/2.png',
				userName: 'Людмила',
				date: '02.11.2023',
				description: 'Опять цены подскочили...',
			},
		],
		similar: [
			{
				name: 'Вечер с Владимиром Соловьевым',
				channel: '1 канал',
				time: '23:00 - 24:00',
				srcImage: '/program/ivanov.jpg',
			},
		],
	},

	{
		id: 'ivanov',
		name: 'Ивановы Ивановы',
		subName: 'Сериалы, 60 мин, 12+',
		description: 'Две семьи разного достатка узнают о том, что в роддоме у каждой из них случайно перепутали детей. Спустя 16 лет взрослые решают восстановить историческую справедливость. Теперь Ваня вынужден учиться выживать в доме у своих бедных биологических родителей, а Данила — знакомиться с правилами поведения в светском обществе.',
		rating: 4.4,
		countRating: 1452,
		season: [
			[
				{
					id: 1,
					name: 'Подмена',
					desc: '1 серия',
					srcImage: '/program/ivanov.jpg',
				},
			],
			[
				{
					id: 2,
					name: 'Переезд',
					desc: '1 серия',
					srcImage: '/program/ivanov.jpg',
				},
			],
			[
				{
					id: 3,
					name: 'Новое начало',
					desc: '1 серия',
					srcImage: '/program/ivanov.jpg',
				},
			],
		],
		comments: [
			{
				srcImage: '/avatar/1.png',
				userName: 'Сергей Иванов',
				date: '17.02.2022',
				description: 'Даня с Элей, поженитесь ужеы',
			},
			{
				srcImage: '/avatar/2.png',
				userName: 'Людмила',
				date: '02.11.2023',
				description: 'Дед огонь',
			},
		],
		similar: [
			{
				name: 'Игра престолов',
				channel: 'HBO',
				time: '22:00 - 24:00',
				srcImage: '/program/gameOfTrons.jpg',
			},
		],
	},

	{
		id: 'gameOfTrons',
		name: 'Игра престолов',
		subName: 'Сериалы, 60 мин, 18+',
		description: '"Игра престолов" - американский фантастический драматический телесериал, созданный Дэвидом Бениоффом и Д. Б. Вайсом. Сериал основан на серии фантастических романов Джорджа Р. Р. Мартина "Песнь льда и огня". Действие сериала происходит на вымышленных континентах Вестерос и Эссос и повествует о борьбе за власть между благородными семьями, борющимися за контроль над Железным троном Семи Королевств.',
		rating: 4.6,
		countRating: 158452,
		season: [
			[
				{
					id: 1,
					name: 'Новый король',
					desc: '1 серия',
					srcImage: '/program/gameOfTrons.jpg',
				},
			],
			[
				{
					id: 2,
					name: 'Война Севера',
					desc: '1 серия',
					srcImage: '/program/gameOfTrons.jpg',
				},
			],
			[
				{
					id: 3,
					name: 'Ходоки',
					desc: '1 серия',
					srcImage: '/program/gameOfTrons.jpg',
				},
			],
		],
		comments: [
			{
				srcImage: '/avatar/1.png',
				userName: 'Сергей Иванов',
				date: '17.02.2022',
				description: 'Даня с Элей, поженитесь ужеы',
			},
			{
				srcImage: '/avatar/2.png',
				userName: 'Людмила',
				date: '02.11.2023',
				description: 'Дед огонь',
			},
		],
		similar: [
			{
				name: 'Ивановы Ивановы',
				channel: 'СТС',
				time: '23:00 - 24:00',
				srcImage: '/program/ivanov.jpg',
			},
		],
	},
]