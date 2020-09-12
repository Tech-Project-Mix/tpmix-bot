const Discord = require("discord.js");
const moment = require("moment");
const Event = require("../models/Event");
const Canvas = require("canvas");

function getImages() {
  var images = [
	"https://media.discordapp.net/attachments/753660284077604994/753982211635675216/FB_IMG_1599833390577.jpg?width=538&height=667",
    "https://i.imgur.com/GOhVdZm.jpg",
    "https://i.imgur.com/CMplD96.jpg",
    "https://i.imgur.com/qu205qE.jpg",
    "https://i.imgur.com/1D5HnFW.jpg",
    "https://i.redd.it/a2ewhergumi51.jpg",
    "https://i.imgur.com/BStkWo8.png",
    "https://i.redd.it/tgu8jba8hle51.jpg",
    "https://media.discordapp.net/attachments/675019280311386131/675040931648372747/aqn150mcbcn01.png",
    "https://media.discordapp.net/attachments/675019280311386131/693150587226947694/uySVm3M.jpg?width=655&height=666",
    "https://media.discordapp.net/attachments/675019280311386131/675067117934215207/IuKuleC.jpg?width=667&height=667",
    "https://media.discordapp.net/attachments/675019280311386131/675032307274481742/is6dq2962hx01.jpg",
    "https://media.discordapp.net/attachments/675019223399006218/714418097561403414/3dc66ac.jpg?width=1185&height=666",
    "https://media.discordapp.net/attachments/675019223399006218/675253984100876288/7r5poet0j9n21.jpg?width=671&height=666",
    "https://media.discordapp.net/attachments/675019223399006218/675080508308324362/fkns5rztgflz.png?width=667&height=667",
    "https://media.discordapp.net/attachments/675019223399006218/675064806805602327/x3au68u7y6b21.jpg?width=1185&height=666",
    "https://media.discordapp.net/attachments/675019223399006218/675061239453581326/58e9865.png?width=667&height=667",
    "https://media.discordapp.net/attachments/675019223399006218/675050793677619211/1da5cc4a2b7.gif",
    "https://media.discordapp.net/attachments/675019223399006218/675048520696463371/bf1s1ycv70g11.png",
  ];

  return images;
}

module.exports = {
  name: "meme",
  usage: "meme",
  description: "gives you memes",
  run: async ({ client, msg, args }) => {
    const images = getImages();
    console.log(images);
    const random = Math.floor(Math.random() * images.length);
    const image = await Canvas.loadImage(`${images[random]}`);
    canvas = Canvas.createCanvas(1000, 600);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.font = "60px Georgia";
    ctx.fillStyle = "white";

    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "tpm-meme.png"
    );

    msg.channel.send(attachment);
  },
};
