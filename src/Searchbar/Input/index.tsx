import { FiSearch } from "react-icons/fi";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export const SearchInput = ({ onChange, value }: Props) => (
  <fieldset className="w-full bg-transparent mb-6 rounded flex items-center gap-3 focus-within:outline focus-within:outline-slate-300 focus-within:outline-1">
    <FiSearch size={16} className="text-zinc-600 pointer-events-none" />
    <input
      value={value}
      onChange={onChange}
      type="text"
      role="combobox"
      autoComplete="on"
      id="search-servers"
      placeholder="Faça algo mágico.."
      className="flex-1 bg-transparent text-zinc-300 outline-none"
    />
  </fieldset>
);
