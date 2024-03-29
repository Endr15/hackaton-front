export const TvChannels = [
	{
		id: 'tnt',
		name: 'ТНТ',
		currentProgram: 'Импровизация',
		currentProgramId: 'improvisation',
		programDesc: 'Импровизация - лучшее шоу современности',
		rating: 4.8,
		commentsCount: 152,
		timetable: [
			{
				time: '17:30',
				name: 'Ночные новости NBC c Лестером Холтом',
				desc: 'Новости, 30 мин, 0+',
				active: false,
				will: false,
			},
			{
				time: '18:30',
				name: 'Импровизация',
				desc: 'Новости, 30 мин, 0+',
				active: true,
				will: false,
			},
			{
				time: '19:30',
				name: 'Ночные новости NBC c Лестером Холтом',
				desc: 'Новости, 30 мин, 0+',
				active: false,
				will: true,
			},
			{
				time: '20:30',
				name: 'Ночные новости NBC c Лестером Холтом',
				desc: 'Новости, 30 мин, 0+',
				active: false,
				will: true,
			},
			{
				time: '21:30',
				name: 'Ночные новости NBC c Лестером Холтом',
				desc: 'Новости, 30 мин, 0+',
				active: false,
				will: true,
			},
		],
		tags: [
			'комедия', 'сериалы',
		],
	},

	{
		id: '1channel',
		name: 'Первый канал',
		currentProgram: 'Новости',
		currentProgramId: 'news',
		programDesc: 'Вечерние новости',
		rating: 4.9,
		commentsCount: 2472,
		timetable: [
			{
				time: '17:30',
				name: 'Сериал',
				desc: 'Сериалы, 60 мин, 0+',
				active: false,
				will: false,
			},
			{
				time: '18:30',
				name: 'Вечерние новости',
				desc: 'Новости, 60 мин, 12+',
				active: true,
				will: false,
			},
			{
				time: '19:30',
				name: 'Умники и умницы',
				desc: 'Позновательное, 60 мин, 0+',
				active: false,
				will: true,
			},
			{
				time: '20:30',
				name: 'Новости',
				desc: 'Новости, 60 мин, 0+',
				active: false,
				will: true,
			},
			{
				time: '21:30',
				name: 'О животных',
				desc: 'животные, 90 мин, 12+',
				active: false,
				will: true,
			},
		],
		tags: [
			'новости', 'научное',
		],
	},

	{
		id: 'ctc',
		name: 'СТС',
		currentProgram: 'Ивановы Ивановы',
		currentProgramId: 'ivanov',
		programDesc: 'Сериал',
		rating: 4.6,
		commentsCount: 1948,
		timetable: [
			{
				time: '17:30',
				name: 'Новости кино',
				desc: 'Новости, 60 мин, 0+',
				active: false,
				will: false,
			},
			{
				time: '18:30',
				name: 'Ивановы Ивановы',
				desc: 'Сериалы, 60 мин, 12+',
				active: true,
				will: false,
			},
			{
				time: '19:30',
				name: 'Полный blackout',
				desc: 'Позновательное, 60 мин, 0+',
				active: false,
				will: true,
			},
			{
				time: '20:30',
				name: 'Сериал',
				desc: 'Сериал, 60 мин, 0+',
				active: false,
				will: true,
			},
			{
				time: '21:30',
				name: 'О животных',
				desc: 'животные, 90 мин, 12+',
				active: false,
				will: true,
			},
		],
		tags: [
			'комедия', 'шоу',
		],
	},

	{
		id: 'hbo',
		name: 'HBO',
		currentProgram: 'Игра престолов',
		currentProgramId: 'gameOfTrons',
		programDesc: 'Сериал',
		rating: 3.9,
		commentsCount: 15783,
		timetable: [
			{
				time: '17:30',
				name: 'Игра престолов',
				desc: 'Сериал, 120 мин, 0+',
				active: true,
				will: false,
			},
			{
				time: '19:30',
				name: 'Сериал',
				desc: 'Сериал, 60 мин, 0+',
				active: false,
				will: true,
			},
			{
				time: '20:30',
				name: 'Удивительное и невероятное',
				desc: 'Позноваиельное, 60 мин, 0+',
				active: false,
				will: true,
			},
			{
				time: '21:30',
				name: 'О животных',
				desc: 'животные, 90 мин, 12+',
				active: false,
				will: true,
			},
		],
		tags: [
			'драконы', 'сериалы',
		],
	},
]