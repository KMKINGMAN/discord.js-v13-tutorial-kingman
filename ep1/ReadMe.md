# الدرس الاول 
**Note: يجب عليك تعلم اساسايات الجافاسكربت قبل دخول الدورة**
### Link
* 1- **يجب عليك نشاء بوت جديد من موقع ديسكورد [Discord Developers](https://discord.com/developers/applications)**
* 2- **يجب عليك تحميل NodeJs V16 [NodeJS](https://nodejs.org/en/)**
* 3- **يجب عليك تحميل احد محررات الاكواد انصحك بتجربة vscode [VSCode](https://code.visalstudio.com/)**

### install packages - تحميل البكجات 


اكتب هذه الاوامر في التيرمنال


<details>
	<summary>اضغط هنا لمعرفة الاوامر</summary>
	<details>
		<summary>لانشاء بكج جيسون اضغط هنا</summary>
		<code>
		npm init -y
		</code>
	 </details>
	<details>
		<summary>لتحميل بكج الديسكورد</summary>
		<code>
		npm install discord.js
		</code>
	</details>
	<details>
		<summary>لتحميل dotenv</summary>
		<code>
		npm install dotenv
		</code>
	</details>
</details>


```js
//استدعاء مكتبة الديسكورد
const discord = require("discord.js");
//استدعاء Inrents من المكتبة مباشرة
const { Intents } = require("discord.js");
//لاستدعاء مكتبة dotenv
const envdot = require("dotenv");
envdot.config();
//انشاء كلاينت جديد
const client = new discord.Client({
    intents: [
        //Intents Form Discord.js.org or discord.com/developers
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})
//الاستماع لحدث Ready
client.on("ready", ()=>{
    console.log("Ready:) ")
})
//الاستماع لحدث انشاء الرسائل
client.on("messageCreate", (kmsg)=>{
  // لمنع الاستماع لمسجات البوت
    if(kmsg.author.bot) return;
    //انشاء امر بسيط
    if(kmsg.content.startsWith("hi")){
        kmsg.channel.send({content: "hi"})
    }
})
//لتسجيل الدخول الى توكن البوت
client.login(process.env.TOKEN)
```
