document.title = `linker`
document.body.style.background = `#0f1923`
const links = [
    [
        "whatsapp",
        "keep",
        "photos",
        "mail",
        "ytmusic",
        "youtube",
        "accounts",
        "activity",
        // All Links will be hidden
        // google
        "chat",
        "classroom",
        "contacts",
        "calendar",
        "drive",
        "meet",
        "hangouts",
        "duo",
        "docs",
        "slides",
        "forms",
        "sheets",
        "travel",
        "podcats",
        "earth",
        "find my device",
        "studio youtube",
        // microsoft
        //proton
        // wikipedic
        "wikipedia",
        "wiki commons",
        "wiktionary",
        "wikinews",
        "wikiversity",
        "mediawiki",
        "wikispecies",
        "wikivoyage",
        "wikibooks",
        "wikidata",
        "wikiquote",
        "wikisource",
        "metawiki",
        "archieve org",
        "imdb",
        "1lib",
        // profiles
        "github",
        "facebook",
        "instagram",
        "reddit",
        "linkedin",
        "messenger",
        "telegram",
        // "skype",
        "twitter",
        "discord",
        "quora",
        "stackoverflow",
        "pinterest",
        "deviantart",
        // stream
        "spotify",
        "apple music",
        "sound cloud",
        "netflex",
        "hotstar",
        // advanced search
        "bing",
        "google",
        "duckduckgo",
        "norton safe",
        "aol",
        "yahoo!",
        "searx",
        "metager",
        "lycos",
        //open learning
        "mitx",
        "harvardx",
        "mitocw",
        // online tools
        "spark adobe",
        "canva",
        "translate",
        //news
        "wall street journal",
        "news",
        //vpns
        "open vpn",
        "nord vpn",
        //free contents
        "pixabay",
        "unsplash",
        "ncs io",
        // add ones
        "chrome store",
        "add-ones: edge",
        "add-ones: firefox",
        "add-ones: opera"


    ],
    [
        "https://web.whatsapp.com",
        "https://keep.google.com",
        "https://photos.google.com/u/2/albums",
        "https://mail.google.com/mail/u/0/#inbox",
        "https://music.youtube.com",
        "https://www.youtube.com",
        "https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1",
        "https://myactivity.google.com/myactivity?hl=en&utm_source=google-account&utm_medium=web&pli=1",
        // Will be hidden
        // google
        "https://mail.google.com/chat/u/0/",
        "https://classroom.google.com/u/0/",
        "https://contacts.google.com",
        "https://calendar.google.com/calendar/u/0/r?pli=1",
        "https://drive.google.com/drive/u/0/my-drive",
        "https://meet.google.com",
        "https://hangouts.google.com",
        "https://duo.google.com",
        "https://docs.google.com/document/u/0/",
        "https://docs.google.com/presentation/u/0/",
        "https://docs.google.com/forms/u/0/",
        "https://docs.google.com/spreadsheets/u/0/",
        "https://www.google.com/travel/?dest_src=al",
        "https://podcasts.google.com",
        "https://earth.google.com/web/",
        "https://www.google.com/android/find?u=0",
        "https://studio.youtube.com/",
        // microsoft
        // proton
        // wikipedic
        "https://en.wikipedia.org/wiki/Main_Page",
        "https://en.wikipedia.org/wiki/Main_Page",
        "https://en.wikipedia.org/wiki/Main_Page",
        "https://en.wikinews.org/wiki/Main_Page",
        "https://en.wikiversity.org/wiki/Wikiversity:Main_Page",
        "https://www.mediawiki.org/wiki/MediaWiki",
        "https://species.wikimedia.org/wiki/Main_Page",
        "https://en.wikivoyage.org/wiki/Main_Page",
        "https://en.wikibooks.org/wiki/Main_Page",
        "https://www.wikidata.org/wiki/Wikidata:Main_Page",
        "https://en.wikiquote.org/wiki/Main_Page",
        "https://en.wikisource.org/wiki/Main_Page",
        "https://meta.wikimedia.org/wiki/Main_Page",
        "https://archive.org",
        "https://imdb.com/",
        "https://1lib.in",
        //profiles
        "https://github.com",
        "https://m.facebook.com",
        "https://www.instagram.com",
        "https://www.reddit.com",
        "https://www.linkedin.com",
        "https://www.messenger.com",
        "https://web.telegram.org/z",
        "https://twitter.com/home",
        "https://discord.com",
        "https://www.quora.com",
        "https://stackoverflow.com",
        "https://in.pinterest.com",
        "https://www.deviantart.com",
        //strame
        "https://open.spotify.com",
        "https://music.apple.com/in/listen-now",
        "https://soundcloud.com",
        "https://www.netflix.com/in/",
        "https://www.hotstar.com/in",
        // advanced search
        "https://www.bing.com",
        "https://www.google.com",
        "https://duckduckgo.com",
        "https://search.norton.com",
        "https://search.aol.com",
        "https://in.search.yahoo.com",
        "https://searx.thegpm.org",
        "https://metager.de",
        "https://www.lycos.com",
        // open learning
        "https://openlearning.mit.edu/courses-programs/mitx-courses",
        "https://www.edx.org/school/harvardx",
        "https://ocw.mit.edu",
        //online tools
        "https://www.adobe.com/express/",
        "https://www.canva.com",
        "https://translate.google.co.in",
        // news
        "https://www.wsj.com",
        "https://news.google.com/home",
        // vpns
        "https://openvpn.net",
        "https://nordvpn.com",
        //free contents
        "https://pixabay.com",
        "https://unsplash.com",
        "https://ncs.io/music",
        // add ones
        "https://chrome.google.com/webstore/category/extensions",
        "https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home",
        "https://addons.mozilla.org/en-US/firefox/",
        "https://addons.opera.com/en/extensions/",





    ],
    [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
    ]
]

const uw = links[0];
const url = links[1];
const ids = links[2];
const pos = 8;

for (let k = 0; k < uw.length; k++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = url[k];
    a.innerHTML = uw[k];
    a.style.fontSize = `15px`
    a.target = `_blank`
    a.classList = `link f1`
    li.appendChild(a);
    document.getElementById("links").appendChild(li)
}

const input = document.getElementById("search");

const fu = () => {
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("links");
    const li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        const txtValue = a.innerHTML;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
document.getElementById("search").addEventListener(
    "keyup", ()=>{
        document.getElementById("hide_div").classList.remove("hide");
        fu();
    }
);
