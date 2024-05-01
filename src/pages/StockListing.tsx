import { Table, Input, Button, Space, message, Tooltip } from "antd";
import { SearchOutlined, CloseCircleOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons";
import { ColumnProps } from "antd/lib/table";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStockDetail, getStockList } from "@/redux/slices/stock";
import Loader from "@/components/loader/Loader";
import { AppDispatch } from "@/redux/Store";

interface Stock {
  id: number;
  description: string;
  market_id: string;
  market_symbol: string;
  price: string;
  symbol: string;
  createdAt: any;
  market: any;
}

const StockListing: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const permissions = useSelector((stock: any) => stock.auth.myPermissions);
  const { isLoading } = useSelector((stock: any) => stock.stock);
  const stockList = useSelector((state: any) => state.stock.stockList);
  const navigate = useNavigate();
  const [data, setData] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    renderStockListing();
  }, [stockList]);

  useEffect(() => {
    stockData(searchText);
  }, [page, pageSize]);

  const renderStockListing = () => {
    if (stockList?.list && stockList?.list[`${page}`]) {
      const data = stockList?.list[`${page}`];
      const stockDataKeys = data.map((stock: any) => ({
        ...stock,
        key: stock.id,
        createdAt: stock.createdAt,
        market: stock.MarketInformation,
      }));
      setLoading(false);
      setData(stockDataKeys);
      setTotalRecords(stockList.totalCount);
    }
  };
  const stockData = async (
    searchText: string,
    currentPage: number = page,
    limit: number = pageSize
  ) => {
    const param = {
      searchText,
      limit,
      page: currentPage,
    };
    dispatch(getStockList(param));
  };

  const handleUpdate = async (record: any) => {
    if (permissions) {
      const addPermission = permissions.find((item: any) => item.moduleName === "Stock Management");
      if (addPermission.editPermission) {
        navigate(`/app/updateStock`, { state: { recordId: record?.id } });
      } else {
        message.error("You are unauthorized");
      }
    } else {
      message.error("You are unauthorized");
      navigate("/app/staffListing");
    }
  };
  const view = async (record: any) => {
    if (permissions) {
      const addPermission = permissions.find((item: any) => item.moduleName === "Stock Management");
      if (addPermission.viewPermission) {
        const stockId = record?.id || "";
        dispatch(getStockDetail(stockId, navigate, "/app/stockDetail"));
      } else {
        message.error("You are unauthorized");
      }
    } else {
      message.error("You are unauthorized");
      navigate("/app/stockList");
    }
  };
  const columns: ColumnProps<Stock>[] = [
    {
      title: "Asset Name",
      width: "28%",
      fixed: "left",
      dataIndex: "description" as const,
      key: "description",
      sorter: (a: Stock, b: Stock) => a.description.localeCompare(b.description),
      render: (text: string) => {
        return text?.replace(/\b\w/g, (match) => match.toUpperCase());
      },
    },
    {
      title: "Symbol",
      width: "14%",
      dataIndex: "symbol" as const,
      key: "symbol",
      sorter: (a: Stock, b: Stock) => a.symbol.localeCompare(b.symbol),
    },
    {
      title: "Market Symbol",
      width: "20%",
      dataIndex: "market_symbol" as const,
      key: "market_symbol",
      sorter: (a: Stock, b: Stock) => a.market_symbol.localeCompare(b.market_symbol),
    },
    {
      title: "Price",
      width: "10%",
      dataIndex: "price" as const,
      key: "price",
      sorter: (a: Stock, b: Stock) => a.price.localeCompare(b.price),
    },
    {
      title: "Created On",
      width: "14%",
      dataIndex: "createdAt" as const,
      key: "createdAt",
      sorter: (a: Stock, b: Stock) => a.createdAt.localeCompare(b.createdAt),
      render: (text: string) => {
        return moment(text).format("DD/MM/YYYY");
      },
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: "10%",
      render: (record) => (
        <Space>
          <Tooltip title="View ">
            <Button type="link" onClick={() => view(record)}>
              <EyeOutlined />
            </Button>
          </Tooltip>
          <Tooltip title="Update">
            <Button type="link" onClick={() => handleUpdate(record)}>
              <EditOutlined />
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleTableChange = (pagination: any) => {
    const { current, pageSize } = pagination;
    setPage(current);
    setPageSize(pageSize);
  };

  const handleSearch = () => {
    setPage(1);
    stockData(searchText);
  };
  const handleClearSearch = () => {
    setSearchText("");
    setPage(1);
    stockData("");
  };

  return (
    <>
      {isLoading && <Loader type="block" />}
      <div style={{ maxWidth: "100%" }}>
        <h2>Stock List</h2>
        <Space style={{ marginBottom: 16 }}>
          <Input
            placeholder="Search Stocks"
            value={searchText}
            onChange={(e) => {
              if (e.target.value === "") {
                stockData("");
              }
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchText !== "") {
                handleSearch();
              }
            }}
            style={{ width: 200 }}
            suffix={
              searchText.length > 0 ? (
                <CloseCircleOutlined
                  style={{ color: "rgba(0, 0, 0, 0.45)", cursor: "pointer" }}
                  onClick={handleClearSearch}
                />
              ) : (
                <></>
              )
            }
          />
          <Button type="primary" onClick={handleSearch} icon={<SearchOutlined />}>
            Search
          </Button>
        </Space>
        <Table
          size="small"
          dataSource={data}
          columns={columns}
          pagination={{
            total: totalRecords,
            pageSize,
            showSizeChanger: true,
            current: page,
            pageSizeOptions: ["20", "50", "100"],
          }}
          scroll={{
            y: 264,
            x: 1300,
          }}
          onChange={handleTableChange}
          loading={loading}
        />
      </div>
    </>
  );
};

export default StockListing;
