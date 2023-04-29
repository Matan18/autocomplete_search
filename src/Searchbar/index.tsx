import { useState } from "react";
import { SearchInput } from "./Input";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GuildItem } from "./GuildItem";

export const Searchbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setSearchText(event.target.value);

  const { data: guildList = [] } = useQuery({
    queryKey: ["discord-servers", searchText],
    queryFn: async () => {
      const params = new URLSearchParams([
        ["limit", "12"],
        ["query", searchText],
      ]);
      const { data } = await axios.get<{ hits: Guild[] }>(
        "https://discord.com/api//discovery/search",
        { params }
      );
      return data.hits;
    },
    cacheTime: 1000 * 60,
    staleTime: 1000 * 60,
  });

  return (
    <div className="max-w-xl w-full group bg-zinc-800 rounded-lg pl-6 pt-6 focus-within:py-6">
      <div className="pr-6">
        <SearchInput onChange={handleChange} value={searchText} />
      </div>
      <ul className="h-0 overflow-auto transition-all mr-3 group-focus-within:mt-3 group-focus-within:h-56 pr-4 flex flex-col gap-4 group-focus-within:pt-4 bg-inherit border-t-zinc-700 group-focus-within:border-t">
        {guildList.map((guild) => (
          <GuildItem key={guild.id} guild={guild} />
        ))}
      </ul>
    </div>
  );
};
