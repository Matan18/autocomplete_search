type Props = { guild: Guild };

const baseCdnUrl = "https://cdn.discordapp.com/";

const getGuildIcon = (guild: Guild) =>
  `${baseCdnUrl}icons/${guild.id}/${guild.icon}.png`;

export const GuildItem = ({ guild }: Props) => (
  <li
    key={guild.id}
    className="flex gap-4 items-center justify-between"
    title={guild.name}
  >
    <img src={getGuildIcon(guild)} alt="" className="h-10 w-10 rounded-lg" />
    <main className="flex-1">
      <h4 className="text-zinc-200 font-medium text-xl text-ellipsis line-clamp-1">
        {guild.name}
      </h4>
      <strong className="text-sm text-zinc-400">
        {guild.approximate_member_count}
      </strong>
    </main>
    <a
      href={`https://discord.gg/${guild.vanity_url_code}`}
      target="_blank"
      className="bg-zinc-700 rounded px-2 py-1 text-zinc-400 font-medium border relative shadow-md shadow-zinc-900 border-zinc-600 hover:bg-orange-500 hover:border-orange-500 hover:text-zinc-100 active:top-[2px] active:shadow-sm"
    >
      Entrar
    </a>
  </li>
);
