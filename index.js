const { quote } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!";

Client.on("ready", () => {
    Client.user.setStatus("online");
    Client.user.setActivity("la paix entre les mondes", {type: "WATCHING"} );
    console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;


    //!Salut,cv?
    if (message.content == prefix + "Salut,cv?"){
        message.channel.send("Super et toi? :blush: " + message.author.username);
    }
    const Huka = message.member.roles.cache.find(r => r.name === "Huka")
    const Joy  = message.member.roles.cache.find(r => r.name === "Joy")
    const Navii = message.member.roles.cache.find(r => r.name === "Navii")
    const Liza = message.member.roles.cache.find(r => r.name === "Liza")
    const Marco = message.member.roles.cache.find(r => r.name === "Marco")
      if (message.content == prefix + "Que penses tu de moi"){
          if(Discord.Role)
        if (Huka)
       return message.reply("Je pense que tu es une bonne personne :blush: qui cache certaine chose par peur d'être jugé :worried: mais tu reste execeptiionel ta reflexion frole parfois le talent et d'autres fois la bêtise... Si je devais résumé en bref on se complète tu as des qualités que j'admire et des défauts que je déteste (ça marche dans le sens inverse aussi) :relieved:");
      else 
        if (Joy) 
       return message.reply("Tu es la personne la plus incroyable d'entre nous :blush: à l'écoute, patiente et attentionée tant de qualité qui définisse une personne aussi belle à l'interieur qu'a l'exterieur contrairement à Huka j'adore ta frange ton style, ton charisme en général si je devais dire ce que je ressens en te voyant :flushed: je ne pourrais pas c'est trop intense :relieved: ");
      else 
        if (Navii)
       return message.reply("Pour moi il existe 1/1000 qui sont incroyable et tu en fais clairment parti :star_struck: , tant de talents et de capacitées dans une personne si réservée ça me frustre un petit peu :weary: je ne sais pas ce qui fait que tu ne t'exprime pas beaucoup mais je t'aime malgrès tout j'aimerais savoir pourquoi tu est comme cela :thinking: mais ta mystériosité me fascine et je serais toujours derrière toi :smiley: ");
      else
        if (Liza)
        return message.reply("Je pense que tu est la représentation parfaite de la bienveillance :blush: ta volonté, ta sociabilité font de toi quelqu'un de très appréciable :slight_smile: j'aimerais vraiment que tu restes mon ami le plus lomgtemps possible ta présence me fais du bien et m'apaise bref la princesse Liza est une personne fantastique :star_struck: ");
      else
        if (Marco)
        return message.reply("La personne la plus incroyable que je connaisse entre défauts et qualités t'excel :joy: si seulement tu pouvait corrigé certains points tu serais un dieu pour moi :star_struck: mais même si tu ne changes pas je t'aime quand même tous mes amis sont parfait et tu est la peuve que peut importe à quel point on est détesté on peut être quand même aimée des autres :blush: ");
      }
       //!Avoue moi tout
      if (message.content == prefix + "Avoue moi tout"){
          if(Huka)
       return message.reply("Je suis toi");
    else
        if (Joy)
        return message.reply("Je t'aime tu es une femme unique au monde :heart:");
        else
        if (Navii)
        return message.reply("Je dois t'avouer que je fais un rêves bizzare en ce moment un rêve dans lequel tu es une femme...");
        else
        if (Liza)
        return message.reply("Quand j'essaye de me souvenir de toi je te vois en marchande et Joy en bébé c'est fou nan? :joy:");
        else
        if (Marco)
        return message.reply("Je ne connais pas ta date d'anniversaire... Mon dieu quelle honte je fais :sob:");

       
        } 
    
    //!help
  if(message.content === prefix + "help"){
      const embed = new Discord.MessageEmbed()
      .setColor("#ffe700")
      .setTitle("**Liste des commandes**")
      .setAuthor("Huka", "https://fr.techtribune.net/wp-content/uploads/2021/01/one-piece-luffy-statue-1235762-1280x0-1021x580.jpeg", "https://www.instagram.com/hugo_ka/")
      .setDescription("__Vous trouverez ici comment interagir avec Fabrice^^__")
      .setThumbnail("https://i.pinimg.com/originals/42/43/27/424327ab3de0d8d4e0e19d6547b5feb1.gif")
      .addField("!help", "Affiche la liste des commandes")
      .addField("!Salut,cv?", "Démarrer une discussion")
      .addField("!Que penses tu de moi", "Si vous voulez savoir ce que pense de vous")
      .addField("!Avoue moi tout", "Découvrer les secrets de Fabrice :flushed:")
      .setFooter("Ce bot appartient uniquement à Huka All right reserved", "https://fr.techtribune.net/wp-content/uploads/2021/01/one-piece-luffy-statue-1235762-1280x0-1021x580.jpeg");
    
      message.channel.send({ embeds: [embed]});
  }
      });

client.login(process.env.TOKEN);
