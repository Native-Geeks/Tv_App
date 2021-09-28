CONFIG = {
	locale: "EN",
	versionSDK: "2.1.292 [17.02.2017]", // SDK version  (format: X.Y.SDK_SVN_Revision_number)
	version: "1.0.0 [18.10.2013]", // application version - put your own
	appName: "applicationName",
	developer: {
	  debug: true,
	  active: false,
	  console: null,
	},
	player: {
	  muted: true,
	  Audio: [
        {
            id: 1,
            title: "audio 1",
        },
        {
            id: 2,
            title: "audio 1",
        },
        {
            id: 3,
            title: "audio 3",
        },
    ],
    Subtitles: [
        {
            id: 1,
            title: "sub 1",
        },
        {
            id: 2,
            title: "sub 1",
        },
        {
            id: 3,
            title: "sub 3",
        },
    ],
	},
	ajax: {
	  timeout: 60000,
	},
	keyboard: {
	  oneLayout: false,
	},
	GA: {
	  account: "", // account number for Google Analytics
	  ssl: true,
	},
	profiles: {
	  response: "true",
	  code: "000",
	  message: "Remote Account Info Seccussfully fetched",
	  accounts: {
		129036: {
		  name: "To remove",
		  server: "xxxxx",
		  port: "25461",
		  username: "xxxxx",
		  password: "xxxx",
		  type: "xtream",
		  id: "129036",
		  provider: "4",
		},
		174231: {
		  name: "Demo",
		  server: "xxxxxx",
		  port: "8000",
		  username: "xxxx",
		  password: "xxxxx",
		  type: "demo",
		  id: "174231",
		  provider: "4",
		},
		178765: {
		  name: "M3U",
		  server: "xxxxxx",
		  port: "8000",
		  username: "xxxx",
		  password: "xxxxx",
		  type: "m3u",
		  id: "178765",
		  provider: "4",
		},
		109876: {
		  name: "Xtream",
		  server: "xxxxxx",
		  port: "8000",
		  username: "xxxx",
		  password: "xxxxx",
		  type: "xtream",
		  id: "109876",
		  provider: "4",
		},
		176544: {
		  name: "AUDIO",
		  server: "xxxxxx",
		  port: "8000",
		  username: "xxxx",
		  password: "xxxxx",
		  type: "xtream",
		  id: "176544",
		  provider: "4",
		},
		165433: {
		  name: "AUDIO",
		  server: "xxxxxx",
		  port: "8000",
		  username: "xxxx",
		  password: "xxxxx",
		  type: "xtream",
		  id: "165433",
		  provider: "4",
		},
		198765: {
		  name: "AUDIO",
		  server: "xxxxxx",
		  port: "8000",
		  username: "xxxx",
		  password: "xxxxx",
		  type: "xtream",
		  id: "198765",
		  provider: "4",
		},
		196473: {
		  name: "Demo and like this",
		  server: "xxxxxx",
		  port: "8000",
		  username: "xxxx",
		  password: "xxxxx",
		  type: "demo",
		  id: "196473",
		  provider: "4",
		},
	  },
	},
	profile_buttons: [
	  {
		class: "bi bi-arrow-clockwise",
		i18n: "btn_restart",
		action: "restart",
	  },
	  {
		class: "bi bi-gear",
		i18n: "btn_settings",
		action: "settings",
	  },
	  {
		class: "bi bi-arrow-repeat",
		i18n: "btn_reset",
		action: "reset",
	  },
	],
	underProfilesButtons: [
	  {
		class: "bi bi-info",
		action: "info",
	  },
	  {
		class: "bi bi-x",
		action: "delete",
	  },
	],
	settings_menu: [
	  {
		action: "language",
		class: "fas fa-language",
		i18n: "settings_menu_language",
		
	  },
	  {
		action: "color",
		class: "fas fa-palette",
		i18n: "settings_menu_color",
	  },
	  {
		action: "timezone",
		class: "fas fa-clock",
		i18n: "settings_menu_timezone",
	  },
	  {
		action: "epginfo",
		class: "fas fa-calendar",
		i18n: "settings_menu_epginfo",
	  },
	  {
		action: "about",
		class: "fas fa-info-circle",
		i18n: "settings_menu_about"
	  },
	  {
		action: "info",
		class: "fas fa-desktop",
		i18n: "settings_menu_info"
	  },
	  {
		action: "reset",
		class: "fas fa-undo-alt",
		i18n: "settings_menu_reset"
	  },
	  {
		action: "back",
		class: "fas fa-arrow-circle-left",
		i18n: "settings_menu_back"
	  },
	],
	settings_language: [
	  {
		id: "AR",
		name: "Arabe",
	  },
	  {
		id: "FR",
		name: "Frensh",
	  },
	  {
		id: "EN",
		name: "English",
	  },
	  {
		id: "ES",
		name: "Spain",
	  },
	  {
		id: "GM",
		name: "German",
	  },
	  {
		id: "POR",
		name: "Portugues",
	  },
	],
	colors_list: [
	  {
		id: "red",
		color: "red"
	  },
	  {
		id: "blue",
		color: "blue"
	  },
	  {
		id: "yellow",
		color: "yellow"
	  },
	  {
		id: "green",
		color: "green"
	  },
	],
	timeZone_list: [
	  {
		id: "-12",
		value: "GMT-12:00",
	  },
	  {
		id: "-11",
		value: "GMT-11:00",
	  },
	  {
		id: "-10",
		value: "GMT-10:00",
	  },
	  {
		id: "-9",
		value: "GMT-09:00",
	  },
	  {
		id: "-8",
		value: "GMT-08:00",
	  },
	  {
		id: "-7",
		value: "GMT-07:00",
	  },
	  {
		id: "-6",
		value: "GMT-06:00",
	  },
	  {
		id: "-5",
		value: "GMT-05:00",
	  },
	  {
		id: "-4",
		value: "GMT-04:00",
	  },
	  {
		id: "-3",
		value: "GMT-03:00",
	  },
	  {
		id: "-2",
		value: "GMT-02:00",
	  },
	  {
		id: "-1",
		value: "GMT-01:00",
	  },
	  {
		id: "0",
		value: "GMT",
	  },
	  {
		id: "+0",
		value: "UTC",
	  },
	  {
		id: "+1",
		value: "GMT+01:00",
	  },
	  {
		id: "+2",
		value: "GMT+02:00",
	  },
	  {
		id: "+3",
		value: "GMT+03:00",
	  },
	  {
		id: "+4",
		value: "GMT+04:00",
	  },
	  {
		id: "+5",
		value: "GMT+05:00",
	  },
	  {
		id: "+6",
		value: "GMT+06:00",
	  },
	  {
		id: "+7",
		value: "GMT+07:00",
	  },
	  {
		id: "+8",
		value: "GMT+08:00",
	  },
	  {
		id: "+9",
		value: "GMT+09:00",
	  },
	  {
		id: "+10",
		value: "GMT+10:00",
	  },
	  {
		id: "+11",
		value: "GMT+11:00",
	  },
	  {
		id: "+12",
		value: "GMT+12:00",
	  },
	],
	about_section:[
		{
			id:"ab",
			content:"this section is reserved to about information"
		}
	],
	info_section:[
		{
			id:"if",
			content:"this section is reserved to the information about the application"
		}
	],
	sidebar: {
	  center: [
		{
		  class: "bi bi-search",
		  label: "Search",
		},
		{
		  class: "bi bi-broadcast",
		  label: "Live",
		},
		{
		  class: "bi bi-film",
		  label: "Films",
		},
		{
		  class: "bi bi-tv",
		  label: "Series",
		},
	  ],
	  bottom: [
		{
		  class: "bi bi-gear",
		  label: "Settings",
		},
		{
		  class: "bi bi-arrow-left",
		  label: "Quit",
		},
	  ],
	},
	LIVE: [
	  {
		category_id: "2",
		category_name: "CHANNELS",
		parent_id: 0,
	  },
	  {
		category_id: "3",
		category_name: "Live List 2",
		parent_id: 0,
	  },
	],
	LIVE_LIST_X: [
	  {
		num: 1,
		name: "Sample Channel 1",
		stream_type: "live",
		stream_id: 2001,
		stream_url: "http://google.com:44444/20202021test4sam/11086",
		stream_icon: "https://a-static.besthdwallpaper.com/oblivion-movie-poster-wallpaper-11407_L.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "2",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
	  },
	  {
		num: 2,
		name: "Sample Channel 2",
		stream_type: "live",
		stream_id: 2002,
		stream_url: "http://google.com:44444/20202021test4sam/11086",
		stream_icon: "https://google.com/plugins/images/icons/channel_2.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "2",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
	  },
	  {
		num: 3,
		name: "Sample Channel 3",
		stream_type: "live",
		stream_id: 2003,
		stream_url: "http://iptv.irdetto.com:44444/20202021test4sam/11086",
		stream_icon: "https://google.com/images/icons/channel_3.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "2",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
	  },
	],
	VOD: [
	  {
		category_id: "1",
		category_name: "Category 1",
		parent_id: 0,
	  },
	  {
		category_id: "2",
		category_name: "Category 2",
		parent_id: 0,
	  },
	  {
		category_id: "3",
		category_name: "Category 3",
		parent_id: 0,
	  },
	],
	VOD_LIST_X: [
	  {
		num: 1,
		name: "Big Buck Bunny",
		stream_type: "movie",
		stream_id: 1001,
		stream_icon: "https://m.media-amazon.com/images/M/MV5BYzZhZWVkNzYtZjZmOS00MTE1LWFkZTQtYzViYWU0MDU3MDIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1080_.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "1",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://www.fxnowcanada.ca/wp-content/uploads/2021/08/wwdits-s3-24-hero.png",
			backdrop_path: [
			  "https://google.com/images/backdrop/bird1.jpg",
			  "https://google.com/images/backdrop/rodents.png",
			],
			youtube_trailer: "yUQM7H4Swgw",
			genre: "Animation, Short, Comedy ",
			plot: "Follow a day of the life of Big Buck Bunny when he meets three bullying rodents: Frank, Rinky, and Gamera. The rodents amuse themselves by harassing helpless creatures by throwing fruits, nuts and rocks at them.",
			cast: "",
			director: "Sacha Goedegebure",
			rating: "6.2",
			releasedate: "2008-04-10",
			tmdb_id: "10378",
			duration_secs: "635",
			duration: "00:10:35",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1001,
			name: "Big Buck Bunny",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		  },
		},
	  },
	  {
		num: 2,
		name: "Elephant Dream",
		stream_type: "movie",
		stream_id: 1002,
		stream_icon: "https://cps-static.rovicorp.com/2/Open/Disney_Media_Distribution/Program/37403911/_derived_jpg_q90_310x470_m0/Black_Widow_3x4_6_1628074323937_8.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "1",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://www.letsott.com/assets/uploads/posts/BlackWidow_H.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/elephants_dream_both.jpg",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Science fiction",
			plot: "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo.",
			cast: "Tygo Gernandt, Cas Jansen",
			director: "Bassam Kurdali",
			rating: "5.9",
			releasedate: "2006-03-24",
			tmdb_id: "9761",
			duration_secs: "655",
			duration: "00:11:00",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1002,
			name: "Elephant Dream",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		  },
		},
	  },
	  {
		num: 3,
		name: "Sintel",
		stream_type: "movie",
		stream_id: 1003,
		stream_icon: "https://cps-static.rovicorp.com/2/Open/Sony_Pictures_Television/Program/45277438/_derived_jpg_q90_310x470_m0/DontBreathe2_Sony_3x4_6_1629809206860_4.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "3",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://images.livemint.com/img/2021/08/29/600x338/Dont_Breathe_1630217582114_1630217610958.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/sintel_blender.jpg",
			  "https://www.cheeky.fr/blog/wp-content/uploads/2014/07/dragon-enfant-femme-jouent_animation-3d-sintel-blender-foundation_le-blog-de-cheeky.jpg?x66969",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Fantasy",
			plot: "A wandering warrior finds an unlikely friend in the form of a young dragon. The two develop a close bond, until one day the dragon is snatched away.",
			cast: "Halina Reijn, Thom Hoffman",
			director: "Colin Levy",
			rating: "7.6",
			releasedate: "2010-09-30",
			tmdb_id: "45745",
			duration_secs: "890",
			duration: "00:14:50",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1003,
			name: "Sintel",
			stream_url:
			  "https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd",
		  },
		},
	  },{
		num: 1,
		name: "Big Buck Bunny",
		stream_type: "movie",
		stream_id: 1001,
		stream_icon: "https://m.media-amazon.com/images/M/MV5BYzZhZWVkNzYtZjZmOS00MTE1LWFkZTQtYzViYWU0MDU3MDIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1080_.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "1",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://www.fxnowcanada.ca/wp-content/uploads/2021/08/wwdits-s3-24-hero.png",
			backdrop_path: [
			  "https://google.com/images/backdrop/bird1.jpg",
			  "https://google.com/images/backdrop/rodents.png",
			],
			youtube_trailer: "yUQM7H4Swgw",
			genre: "Animation, Short, Comedy ",
			plot: "Follow a day of the life of Big Buck Bunny when he meets three bullying rodents: Frank, Rinky, and Gamera. The rodents amuse themselves by harassing helpless creatures by throwing fruits, nuts and rocks at them.",
			cast: "",
			director: "Sacha Goedegebure",
			rating: "6.2",
			releasedate: "2008-04-10",
			tmdb_id: "10378",
			duration_secs: "635",
			duration: "00:10:35",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1001,
			name: "Big Buck Bunny",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		  },
		},
	  },
	  {
		num: 2,
		name: "Elephant Dream",
		stream_type: "movie",
		stream_id: 1002,
		stream_icon: "https://cps-static.rovicorp.com/2/Open/Disney_Media_Distribution/Program/37403911/_derived_jpg_q90_310x470_m0/Black_Widow_3x4_6_1628074323937_8.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "1",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://www.letsott.com/assets/uploads/posts/BlackWidow_H.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/elephants_dream_both.jpg",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Science fiction",
			plot: "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo.",
			cast: "Tygo Gernandt, Cas Jansen",
			director: "Bassam Kurdali",
			rating: "5.9",
			releasedate: "2006-03-24",
			tmdb_id: "9761",
			duration_secs: "655",
			duration: "00:11:00",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1002,
			name: "Elephant Dream",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		  },
		},
	  },
	  {
		num: 3,
		name: "Sintel",
		stream_type: "movie",
		stream_id: 1003,
		stream_icon: "https://cps-static.rovicorp.com/2/Open/Sony_Pictures_Television/Program/45277438/_derived_jpg_q90_310x470_m0/DontBreathe2_Sony_3x4_6_1629809206860_4.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "3",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://images.livemint.com/img/2021/08/29/600x338/Dont_Breathe_1630217582114_1630217610958.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/sintel_blender.jpg",
			  "https://www.cheeky.fr/blog/wp-content/uploads/2014/07/dragon-enfant-femme-jouent_animation-3d-sintel-blender-foundation_le-blog-de-cheeky.jpg?x66969",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Fantasy",
			plot: "A wandering warrior finds an unlikely friend in the form of a young dragon. The two develop a close bond, until one day the dragon is snatched away.",
			cast: "Halina Reijn, Thom Hoffman",
			director: "Colin Levy",
			rating: "7.6",
			releasedate: "2010-09-30",
			tmdb_id: "45745",
			duration_secs: "890",
			duration: "00:14:50",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1003,
			name: "Sintel",
			stream_url:
			  "https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd",
		  },
		},
	  },{
		num: 1,
		name: "Big Buck Bunny",
		stream_type: "movie",
		stream_id: 1001,
		stream_icon: "https://m.media-amazon.com/images/M/MV5BYzZhZWVkNzYtZjZmOS00MTE1LWFkZTQtYzViYWU0MDU3MDIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1080_.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "1",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://www.fxnowcanada.ca/wp-content/uploads/2021/08/wwdits-s3-24-hero.png",
			backdrop_path: [
			  "https://google.com/images/backdrop/bird1.jpg",
			  "https://google.com/images/backdrop/rodents.png",
			],
			youtube_trailer: "yUQM7H4Swgw",
			genre: "Animation, Short, Comedy ",
			plot: "Follow a day of the life of Big Buck Bunny when he meets three bullying rodents: Frank, Rinky, and Gamera. The rodents amuse themselves by harassing helpless creatures by throwing fruits, nuts and rocks at them.",
			cast: "",
			director: "Sacha Goedegebure",
			rating: "6.2",
			releasedate: "2008-04-10",
			tmdb_id: "10378",
			duration_secs: "635",
			duration: "00:10:35",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1001,
			name: "Big Buck Bunny",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		  },
		},
	  },
	  {
		num: 2,
		name: "Elephant Dream",
		stream_type: "movie",
		stream_id: 1002,
		stream_icon: "https://cps-static.rovicorp.com/2/Open/Disney_Media_Distribution/Program/37403911/_derived_jpg_q90_310x470_m0/Black_Widow_3x4_6_1628074323937_8.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "1",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://www.letsott.com/assets/uploads/posts/BlackWidow_H.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/elephants_dream_both.jpg",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Science fiction",
			plot: "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo.",
			cast: "Tygo Gernandt, Cas Jansen",
			director: "Bassam Kurdali",
			rating: "5.9",
			releasedate: "2006-03-24",
			tmdb_id: "9761",
			duration_secs: "655",
			duration: "00:11:00",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1002,
			name: "Elephant Dream",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		  },
		},
	  },
	  {
		num: 3,
		name: "Sintel",
		stream_type: "movie",
		stream_id: 1003,
		stream_icon: "https://cps-static.rovicorp.com/2/Open/Sony_Pictures_Television/Program/45277438/_derived_jpg_q90_310x470_m0/DontBreathe2_Sony_3x4_6_1629809206860_4.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "3",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://images.livemint.com/img/2021/08/29/600x338/Dont_Breathe_1630217582114_1630217610958.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/sintel_blender.jpg",
			  "https://www.cheeky.fr/blog/wp-content/uploads/2014/07/dragon-enfant-femme-jouent_animation-3d-sintel-blender-foundation_le-blog-de-cheeky.jpg?x66969",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Fantasy",
			plot: "A wandering warrior finds an unlikely friend in the form of a young dragon. The two develop a close bond, until one day the dragon is snatched away.",
			cast: "Halina Reijn, Thom Hoffman",
			director: "Colin Levy",
			rating: "7.6",
			releasedate: "2010-09-30",
			tmdb_id: "45745",
			duration_secs: "890",
			duration: "00:14:50",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1003,
			name: "Sintel",
			stream_url:
			  "https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd",
		  },
		},
	  },{
		num: 1,
		name: "Big Buck Bunny",
		stream_type: "movie",
		stream_id: 1001,
		stream_icon: "https://m.media-amazon.com/images/M/MV5BYzZhZWVkNzYtZjZmOS00MTE1LWFkZTQtYzViYWU0MDU3MDIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1080_.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "1",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://www.fxnowcanada.ca/wp-content/uploads/2021/08/wwdits-s3-24-hero.png",
			backdrop_path: [
			  "https://google.com/images/backdrop/bird1.jpg",
			  "https://google.com/images/backdrop/rodents.png",
			],
			youtube_trailer: "yUQM7H4Swgw",
			genre: "Animation, Short, Comedy ",
			plot: "Follow a day of the life of Big Buck Bunny when he meets three bullying rodents: Frank, Rinky, and Gamera. The rodents amuse themselves by harassing helpless creatures by throwing fruits, nuts and rocks at them.",
			cast: "",
			director: "Sacha Goedegebure",
			rating: "6.2",
			releasedate: "2008-04-10",
			tmdb_id: "10378",
			duration_secs: "635",
			duration: "00:10:35",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1001,
			name: "Big Buck Bunny",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		  },
		},
	  },
	  {
		num: 2,
		name: "Elephant Dream",
		stream_type: "movie",
		stream_id: 1002,
		stream_icon: "https://cps-static.rovicorp.com/2/Open/Disney_Media_Distribution/Program/37403911/_derived_jpg_q90_310x470_m0/Black_Widow_3x4_6_1628074323937_8.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "1",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://www.letsott.com/assets/uploads/posts/BlackWidow_H.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/elephants_dream_both.jpg",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Science fiction",
			plot: "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo.",
			cast: "Tygo Gernandt, Cas Jansen",
			director: "Bassam Kurdali",
			rating: "5.9",
			releasedate: "2006-03-24",
			tmdb_id: "9761",
			duration_secs: "655",
			duration: "00:11:00",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1002,
			name: "Elephant Dream",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		  },
		},
	  },
	  {
		num: 3,
		name: "Sintel",
		stream_type: "movie",
		stream_id: 1003,
		stream_icon: "https://cps-static.rovicorp.com/2/Open/Sony_Pictures_Television/Program/45277438/_derived_jpg_q90_310x470_m0/DontBreathe2_Sony_3x4_6_1629809206860_4.jpg",
		epg_channel_id: null,
		added: "1546743885",
		category_id: "3",
		custom_sid: "",
		tv_archive: 0,
		direct_source: "",
		tv_archive_duration: 0,
		data: {
		  info: {
			movie_image: "https://images.livemint.com/img/2021/08/29/600x338/Dont_Breathe_1630217582114_1630217610958.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/sintel_blender.jpg",
			  "https://www.cheeky.fr/blog/wp-content/uploads/2014/07/dragon-enfant-femme-jouent_animation-3d-sintel-blender-foundation_le-blog-de-cheeky.jpg?x66969",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Fantasy",
			plot: "A wandering warrior finds an unlikely friend in the form of a young dragon. The two develop a close bond, until one day the dragon is snatched away.",
			cast: "Halina Reijn, Thom Hoffman",
			director: "Colin Levy",
			rating: "7.6",
			releasedate: "2010-09-30",
			tmdb_id: "45745",
			duration_secs: "890",
			duration: "00:14:50",
			bitrate: "",
		  },
		  movie_data: {
			stream_id: 1003,
			name: "Sintel",
			stream_url:
			  "https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd",
		  },
		},
	  },
	],
	VOD_FILM: {
	  info: {
		movie_image: "google.com/images/movies/big_buck_bunny.jpg",
		backdrop_path: [
		  "https://google.com/plugins/images/backdrop/bird1.jpg",
		  "https://google.com/plugins/images/backdrop/rodents.png",
		],
		youtube_trailer: "yUQM7H4Swgw",
		genre: "Animation, Short, Comedy ",
		plot: "Follow a day of the life of Big Buck Bunny when he meets three bullying rodents: Frank, Rinky, and Gamera. The rodents amuse themselves by harassing helpless creatures by throwing fruits, nuts and rocks at them.",
		cast: "",
		director: "Sacha Goedegebure",
		rating: "6.2",
		releasedate: "2008-04-10",
		tmdb_id: "10378",
		duration_secs: "635",
		duration: "00:10:35",
		bitrate: "",
	  },
	  movie_data: {
		stream_id: 1001,
		name: "Big Buck Bunny",
		stream_url:
		  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
	  },
	},
	SERIES: [
	  {
		category_id: 1,
		category_name: "Category 1",
		parent_id: 0,
	  },
	],
	SERIES_LIST_X: [
	  {
		num: 1,
		name: "Elephant Dream",
		stream_type: "movie",
		series_id: 1001,
		cover:
		  "https://a-static.besthdwallpaper.com/oblivion-movie-poster-wallpaper-11407_L.jpg",
		plot: "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo.",
		cast: "Tygo Gernandt, Cas Jansen",
		director: "Bassam Kurdali",
		rating: "5.9",
		releasedate: "2006-03-24",
		youtube_trailer: "YE7VzlLtp-4",
		category_id: 1,
		data: {
		  info: {
			cover: "https://google.com/images/movies/elephants_dream.jpg",
			backdrop_path: [
			  "https://google.com/images/backdrop/elephants_dream_both.jpg",
			],
			youtube_trailer: "8vac9r4WPQI",
			genre: "Animation, Short, Science fiction",
			plot: "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo.",
			cast: "Tygo Gernandt, Cas Jansen",
			director: "Bassam Kurdali",
			rating: "5.9",
			releasedate: "2006-03-24",
			tmdb_id: "9761",
			duration_secs: "655",
			duration: "00:11:00",
			bitrate: "",
			series_id: "2002",
			name: "Elephant Dream",
		  },
		  seasons: [
			{
			  air_date: "2016-11-25",
			  episode_count: 2,
			  id: 10011,
			  name: "Season 1",
			  overview: "",
			  season_number: 0,
			  cover:
				"https://google.com/images/backdrop/elephants_dream_both.jpg",
			  cover_big:
				"https://google.com/images/backdrop/elephants_dream_both.jpg",
			},
			{
			  air_date: "2017-11-24",
			  episode_count: 4,
			  id: 10012,
			  name: "Season 2",
			  overview: "",
			  season_number: 1,
			  cover:
				"https://google.com/images/backdrop/elephants_dream_both.jpg",
			  cover_big:
				"https://google.com/images/backdrop/elephants_dream_both.jpg",
			},
		  ],
		  episodes: [
			[
			  {
				id: 1,
				episode_num: 1,
				title: "Episode 1",
				stream_url:
				  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
				info: {
				  movie_image:
					"https://google.com/images/backdrop/elephants_dream_both.jpg",
				  plot: "The lioness Matsumi has ascended the throne to become Queen of the Marsh Pride, but her power is threatened by another alpha female in the Savage Kingdom: Saba the leopard.",
				  releasedate: "2016-11-25",
				  rating: 0,
				  name: "Clash of Queens",
				  duration_secs: 2639,
				  duration: "00:43:59",
				  bitrate: 1642,
				},
				custom_sid: "",
				added: "1546721958",
				season: 0,
				direct_source: "",
			  },
			  {
				id: 2,
				episode_num: 2,
				title: "Episode 2",
				stream_url:
				  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
				info: {
				  movie_image:
					"https://google.com/images/backdrop/elephants_dream_both.jpg",
				  plot: "It\u2019s a clash of queens as Matsumi and Saba fight for the survival of their bloodlines.",
				  releasedate: "2016-11-25",
				  rating: 0,
				  name: "Clash of Queens",
				  duration_secs: 2639,
				  duration: "00:43:59",
				  bitrate: 1642,
				},
				custom_sid: "",
				added: "1546721958",
				season: 0,
				direct_source: "",
			  },
			],
		  ],
		},
	  },
	],
	SERIES_INFO_X: {
	  info: {
		cover: "https://google.com/images/movies/elephants_dream.jpg",
		backdrop_path: [
		  "https://google.com/images/backdrop/elephants_dream_both.jpg",
		],
		youtube_trailer: "8vac9r4WPQI",
		genre: "Animation, Short, Science fiction",
		plot: "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo.",
		cast: "Tygo Gernandt, Cas Jansen",
		director: "Bassam Kurdali",
		rating: "5.9",
		releasedate: "2006-03-24",
		tmdb_id: "9761",
		duration_secs: "655",
		duration: "00:11:00",
		bitrate: "",
		series_id: "2002",
		name: "Elephant Dream",
	  },
	  seasons: [
		{
		  air_date: "2016-11-25",
		  episode_count: 2,
		  id: 10011,
		  name: "Season 1",
		  overview: "",
		  season_number: 0,
		  cover: "https://google.com/images/backdrop/elephants_dream_both.jpg",
		  cover_big:
			"https://google.com/images/backdrop/elephants_dream_both.jpg",
		},
		{
		  air_date: "2017-11-24",
		  episode_count: 4,
		  id: 10012,
		  name: "Season 2",
		  overview: "",
		  season_number: 1,
		  cover: "https://google.com/images/backdrop/elephants_dream_both.jpg",
		  cover_big:
			"https://google.com/images/backdrop/elephants_dream_both.jpg",
		},
	  ],
	  episodes: [
		[
		  {
			id: 1,
			episode_num: 1,
			title: "Episode 1",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
			info: {
			  movie_image:
				"https://google.com/images/backdrop/elephants_dream_both.jpg",
			  plot: "The lioness Matsumi has ascended the throne to become Queen of the Marsh Pride, but her power is threatened by another alpha female in the Savage Kingdom: Saba the leopard.",
			  releasedate: "2016-11-25",
			  rating: 0,
			  name: "Clash of Queens",
			  duration_secs: 2639,
			  duration: "00:43:59",
			  bitrate: 1642,
			},
			custom_sid: "",
			added: "1546721958",
			season: 0,
			direct_source: "",
		  },
		  {
			id: 2,
			episode_num: 2,
			title: "Episode 2",
			stream_url:
			  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
			info: {
			  movie_image:
				"https://google.com/images/backdrop/elephants_dream_both.jpg",
			  plot: "It\u2019s a clash of queens as Matsumi and Saba fight for the survival of their bloodlines.",
			  releasedate: "2016-11-25",
			  rating: 0,
			  name: "Clash of Queens",
			  duration_secs: 2639,
			  duration: "00:43:59",
			  bitrate: 1642,
			},
			custom_sid: "",
			added: "1546721958",
			season: 0,
			direct_source: "",
		  },
		],
	  ],
	},
  };
  