const baseCdnUrl = "https://cdn.discordapp.com/";

export const getGuildIcon = (guild: Guild) =>
  `${baseCdnUrl}icons/${guild.id}/${guild.icon}.png`;
