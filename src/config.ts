export const openGraph = {
	author: "NaoYatayumi",
	defaultDescription: "Totally not a cat...",
	defaultImage: "/assets/open-graph.webp",
	home: {
		pageTitle: "Nao / Home",
		title: "Nao's homepage",
		description: null,
		image: null,
	},
	blog: {
		pageTitle: "Nao / blog",
		title: "Nao's blog",
		postTitlePrefix: "Nao / ",
		description: null,
		image: null,
	},
	projects: {
		pageTitle: "Nao / Projects",
		title: "Nao's projects",
		postTitlePrefix: "Nao / ",
		description: null,
		image: null,
	},
	contact: {
		pageTitle: "Nao / Contact me",
		title: "contact Nao",
		description: "send me a message.",
		image: null,
	},
};

export const contact = {
	workerUrl: "https://portfolio.alfred-68f.workers.dev/",
	// limits are kept under discord's embed limits (title 256, description 4096, field 1024)
	maxSubjectLength: 100,
	maxMessageLength: 2000,
	maxReplyLength: 200,
};

export const giscus = {
	enabled: false,
	repository: "",
	repositoryId: "",
	category: "",
	categoryId: "",
	mapping: "specific",
	strict: true,
	reactionsEnabled: true,
	emitMetadata: false,
	inputPosition: "top",
	theme: "catppuccin_mocha",
	lang: "en"
}

export const profile = [
	{
		"id": "name",
		"text": "Nao",
		"icon": "lucide/user",
	},
	{
		"id": "gender",
		"text": "He/Him",
		"icon": "lucide/venus-and-mars",
	},
	{
		"id": "age",
		"text": "?? Years old",
		"icon": "lucide/cake",
	},
	{
		"id": "language",
		"text": "Danish, English",
		"icon": "lucide/languages",
	},
	{
		"id": "location",
		"text": "Denmark",
		"icon": "lucide/map-pin",
	},
];

export const socials = [
	{
		"text": "Github",
		"link": "https://github.com/NaoYatayumi",
		"icon": "simple-icons/github",
	},
	{
		"text": "Youtube",
		"link": "https://www.youtube.com/@NaoYatayumi",
		"icon": "simple-icons/youtube",
	},
	{
	 	"text": "Itch.io",
	 	"link": "https://naoyatayumi.itch.io/",
	 	"icon": "simple-icons/itchdotio",
	 },
	 {
		"text": "Business information :",
		"link": "https://naoyatayumi.github.io/",
		"icon": "simple-icons/blackmagicdesign"
	 },
	{
		"text": "aefcbusiness@gmail.com",
		"link": "mailto:aefcbusiness@gmail.com",
		"icon": "lucide/mail",
		"copy": "aefcbusiness@gmail.com",
	},
	{
		"text": "Discord",
		"link": "https://discordapp.com/users/1034561298618400798",
		"icon": "simple-icons/discord"
	},
];
