import Image from "next/image";
import { formatCurrency } from "@/utils";
import { CoinCard, LineChart } from "@/components";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

interface Coin {
  icon: string;
  coin: string;
  price: number;
  percent: number;
  highPrice: number;
  lowPrice: number;
  graph: any;
}

// ethereum, dogecoin, litecoin, etc.
const defaultData: Coin[] = [
  {
    icon: "/icons/icon-eth.png",
    coin: "Bitcoin",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Ethereum",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Dogecoin",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Litecoin",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Cardano",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Ripple",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Polkadot",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Chainlink",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Stellar",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
  {
    icon: "/icons/icon-eth.png",
    coin: "Uniswap",
    price: 100000,
    percent: 10,
    highPrice: 900000,
    lowPrice: 80000,
    graph: "",
  },
];

const columnHelper = createColumnHelper<Coin>();

const columns = [
  columnHelper.accessor("coin", {
    header: "Coin",
    cell: (props) => (
      <div className="flex space-x-3">
        <Image src={props.row.original.icon} alt="" width={24} height={24} />
        <h2 className="font-bold">{props.getValue()}</h2>
      </div>
    ),
  }),
  columnHelper.accessor("price", {
    header: "Coin Price",
    cell: (props) => formatCurrency(props.getValue()),
  }),
  columnHelper.accessor("percent", {
    header: "Percent",
  }),
  columnHelper.accessor("highPrice", {
    header: "High Price",
    cell: (props) => formatCurrency(props.getValue()),
  }),
  columnHelper.accessor("lowPrice", {
    header: "Low Price",
    cell: (props) => formatCurrency(props.getValue()),
  }),
  columnHelper.accessor("graph", {
    header: "Chart",
    cell: (props) => <LineChart />,
    maxSize: 100,
  }),
];

export default function Home() {
  const table = useReactTable({
    columns,
    data: defaultData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main className="max-w-screen-2xl mx-auto px-6 py-16">
      <section className="bg-midnight py-12 px-10 rounded-xl mb-24">
        <h1 className="text-3xl font-bold mb-6">
          Cryptocurrency Prices by Market Cap
        </h1>
        <p className="text-stone max-w-screen-md mb-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          libero maiores aliquid vitae necessitatibus quisquam placeat nemo odit
          dolores
        </p>

        <div className="grid grid-cols-4 gap-x-6">
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </div>
      </section>

      <section className="bg-midnight py-12 px-10 rounded-xl">
        <table className="w-full">
          <thead className="border-b border-stone">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="text-stone text-left">
                {headerGroup.headers.map((column) => (
                  <th className="py-4" key={column.id} colSpan={column.colSpan}>
                    {column.isPlaceholder
                      ? null
                      : flexRender(
                          column.column.columnDef.header,
                          column.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="py-4"
                    key={cell.id}
                    style={{
                      maxWidth: "120px",
                      maxHeight: "35px",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
