#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
	padding : 2,
	width: 74,
	title: "WeepingCoder",
	titleAlignment: "center",
	borderStyle: "double",
	borderColor: "#7D84B2",
};

const intro = chalk.bold("Another stone uncovered on my learning path.\n   Network with me online!\n\n");

const links = [
	 { name: chalk.hex("#fff").bgHex("#0f111a")("Website"), url: "   https://AntonioLoyola.com" },
  {
    name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"),
    url: "    https://github.com/antonioj562",
  },
  {
    name: chalk.hex("#fff").bgHex("#0077b5")("LinkedIn"),
    url: "   http://www.linkedin.com/in/antonio-loyola97",
  },
 {
    name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"),
    url: "   https://twitter.com/weepingCoder",
  }, 
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
