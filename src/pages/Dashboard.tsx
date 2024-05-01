import { Card, Col, Row, message, DatePicker } from "antd";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import dayjs, { Dayjs } from "dayjs";

import "./Dashboard.scss";
import Page from "../charts/charts";
import { getToken } from "@/config/token";
import users from "../../assets/users.svg";
import KYCusers from "../../assets/kyc-users.svg";
import buy from "../../assets/buy.svg";
import sell from "../../assets/sell.svg";
import Loader from "@/components/loader/Loader";
import { mobileApiUrl } from "@/env";

const Dashboard = () => {
  const dummyData = [
    {
      date: "2024-03-10",
      day: "10",
      value: 1,
    },
    {
      date: "2024-04-06",
      day: "06",
      value: 4,
    },
    {
      date: "2024-04-09",
      day: "09",
      value: 3,
    },
    {
      date: "2024-04-15",
      day: "15",
      value: 1,
    },
  ];
  const dateFormat = "YYYY-MM-DD";
  const url: string = `${mobileApiUrl}`;
  const { RangePicker } = DatePicker;
  const navigate = useNavigate();
  const token = getToken();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [orders, setOrders] = useState<any>([]);
  const [usersChart, setUsersChart] = useState<any>(dummyData);
  const [buyOrderChart, setBuyOrderChart] = useState<any>(dummyData);
  const [sellOrderChart, setSellOrderChart] = useState<any>(dummyData);
  const [selectedDateRange, setSelectedDateRange] = useState<[Dayjs, Dayjs]>([
    dayjs().subtract(1, "month"),
    dayjs(),
  ]);

  const getUsersNOrdersData = async () => {
    try {
      const response = await axios.get(`${url}/v1/dashboard/getAllActiveNKYCsUsers`, {
        headers: {
          Authorization: `Bearer ${token}`,
          method: "get",
        },
      });
      const ordersResponse = await axios.get(`${url}/v1/dashboard/getAllBuyNSellOrders`, {
        headers: {
          Authorization: `Bearer ${token}`,
          method: "get",
        },
      });
      if (response.data && response.data.data) {
        setData(response.data.data);
      }
      if (ordersResponse.data && ordersResponse.data.data) {
        setOrders(ordersResponse.data.data);
      }
    } catch (error: any) {
      message.error(error.response.data.message);
      navigate("/");
    }
  };
  const getUsersChartData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${url}/v1/dashboard/getUserChartData?startDate=${selectedDateRange[0]}&endDate=${selectedDateRange[1]}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            method: "get",
          },
        }
      );
      const buyOrderResponse = await axios.get(
        `${url}/v1/dashboard/getBuyOrderChartData?startDate=${selectedDateRange[0]}&endDate=${selectedDateRange[1]}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            method: "get",
          },
        }
      );
      const sellOrderResponse = await axios.get(
        `${url}/v1/dashboard/getSellOrderChartData?startDate=${selectedDateRange[0]}&endDate=${selectedDateRange[1]}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            method: "get",
          },
        }
      );
      if (response.data && response.data.data) {
        const chartData = response.data.data.map((item: any) => ({
          date: item.end_date_of_week,
          day: moment(item.end_date_of_week).format("DD"),
          value: item.new_users_count,
        }));
        setUsersChart(chartData);
      }
      if (buyOrderResponse.data && buyOrderResponse.data.data) {
        const chartData = buyOrderResponse.data.data.map((item: any) => ({
          date: item.end_date_of_week,
          day: moment(item.end_date_of_week).format("DD"),
          value: item.new_users_count,
        }));
        setBuyOrderChart(chartData);
      }
      if (sellOrderResponse.data && sellOrderResponse.data.data) {
        const chartData = sellOrderResponse.data.data.map((item: any) => ({
          date: item.end_date_of_week,
          day: moment(item.end_date_of_week).format("DD"),
          value: item.new_users_count,
        }));
        setSellOrderChart(chartData);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      message.error(error.response.data.message);
      navigate("/");
    }
  };
  useEffect(() => {
    getUsersNOrdersData();
  }, []);
  useEffect(() => {
    getUsersChartData();
  }, [selectedDateRange]);

  const handleDateRangeChange = (dates: any) => {
    const startDate = dates[0].format(dateFormat);
    const endDate = dates[1].format(dateFormat);
    const rangeArr: any = [startDate, endDate];
    setSelectedDateRange(rangeArr);
  };

  return (
    <div className="dashboard">
      {loading && <Loader type="block" />}
      <div className="counter_block">
        <Row gutter={30}>
          <Col xs={24} md={12} xl={6}>
            <Card
              className="counter_card"
              bodyStyle={{ padding: "0" }}
              style={{
                borderRadius: "12px",
                borderColor: " rgba(207, 216, 220, 0.7)",
                boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 5px 0px",
                margin: "0 0 20px",
              }}>
              <div className="top_part part">
                <div className="left_side">
                  <div className="counter_icon">
                    <img src={users} alt="Users" />
                  </div>
                </div>
                <div className="right_side">
                  <label>Total Users</label>
                  <div className="value">{data ? data.active_users_count : 0}</div>
                </div>
              </div>
              <div className="bottom_part part">
                <p>
                  <strong>
                    {data
                      ? data.users_registered_last_week_count > 0
                        ? `+${data.users_registered_last_week_count}`
                        : data.users_registered_last_week_count
                      : 0}
                  </strong>{" "}
                  than last week
                </p>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Card
              className="counter_card"
              bodyStyle={{ padding: "0" }}
              style={{
                borderRadius: "12px",
                borderColor: " rgba(207, 216, 220, 0.7)",
                boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 5px 0px",
                margin: "0 0 20px",
              }}>
              <div className="top_part part">
                <div className="left_side">
                  <div className="counter_icon">
                    <img src={KYCusers} alt="Total Verified Users" />
                  </div>
                </div>
                <div className="right_side">
                  <label>All KYC Users</label>
                  <div className="value">{data ? data.kyc_completed_users_count : 0}</div>
                </div>
              </div>
              <div className="bottom_part part">
                <p>
                  <strong>
                    {data
                      ? data.users_kyc_last_week_count > 0
                        ? `+${data.users_kyc_last_week_count}`
                        : data.users_kyc_last_week_count
                      : 0}
                  </strong>{" "}
                  than last week
                </p>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Card
              className="counter_card"
              bodyStyle={{ padding: "0" }}
              style={{
                borderRadius: "12px",
                borderColor: " rgba(207, 216, 220, 0.7)",
                boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 5px 0px",
                margin: "0 0 20px",
              }}>
              <div className="top_part part">
                <div className="left_side">
                  <div className="counter_icon">
                    <img src={buy} alt="Buy Orders" />
                  </div>
                </div>
                <div className="right_side">
                  <label>Buy Orders</label>
                  <div className="value">{orders ? orders.buy_orders_count : 0}</div>
                </div>
              </div>
              <div className="bottom_part part">
                <p>
                  <strong>
                    {orders
                      ? orders.buy_orders_last_week_count > 0
                        ? `+${orders.buy_orders_last_week_count}`
                        : orders.buy_orders_last_week_count
                      : 0}
                  </strong>{" "}
                  than last week
                </p>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Card
              className="counter_card"
              bodyStyle={{ padding: "0" }}
              style={{
                borderRadius: "12px",
                borderColor: " rgba(207, 216, 220, 0.7)",
                boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 5px 0px",
                margin: "0 0 20px",
              }}>
              <div className="top_part part">
                <div className="left_side">
                  <div className="counter_icon">
                    <img src={sell} alt="Sell Orders" />
                  </div>
                </div>
                <div className="right_side">
                  <label>Sell Orders</label>
                  <div className="value">{orders ? orders.sell_orders_count : 0}</div>
                </div>
              </div>
              <div className="bottom_part part">
                <p>
                  <strong>
                    {orders
                      ? orders.sell_orders_last_week_count > 0
                        ? `+${orders.sell_orders_last_week_count}`
                        : orders.sell_orders_last_week_count
                      : 0}
                  </strong>{" "}
                  than last week
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Row>
          <Col
            xs={24}
            md={24}
            xl={24}
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              gap: "1rem",
              padding: "0.5rem 0",
            }}>
            <label style={{ fontWeight: "bold", fontSize: "25px" }}>Date Range: </label>
            <RangePicker
              defaultValue={selectedDateRange}
              onChange={handleDateRangeChange}
              format="YYYY-MM-DD"
              allowClear={false}
            />
          </Col>
        </Row>
      </div>
      <div className="chart_block">
        <Row gutter={30}>
          <Col xs={24} md={12} xl={8}>
            <Card
              className="chart_card"
              bodyStyle={{ padding: "0" }}
              style={{
                borderRadius: "12px",
                borderColor: " rgba(207, 216, 220, 0.7)",
                boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 5px 0px",
                margin: "0 0 20px",
              }}>
              <div className="top_part part">
                <div className="main_chart">
                  <Page chartData={usersChart} />
                </div>

                <div className="chart_content">
                  <h3>All Users</h3>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <Card
              className="chart_card"
              bodyStyle={{ padding: "0" }}
              style={{
                borderRadius: "12px",
                borderColor: " rgba(207, 216, 220, 0.7)",
                boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 5px 0px",
                margin: "0 0 20px",
              }}>
              <div className="top_part part">
                <div className="main_chart">
                  <Page chartData={buyOrderChart} />
                </div>

                <div className="chart_content">
                  <h3>Buy Orders</h3>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <Card
              className="chart_card"
              bodyStyle={{ padding: "0" }}
              style={{
                borderRadius: "12px",
                borderColor: " rgba(207, 216, 220, 0.7)",
                boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 5px 0px",
                margin: "0 0 20px",
              }}>
              <div className="top_part part">
                <div className="main_chart">
                  <Page chartData={sellOrderChart} />
                </div>

                <div className="chart_content">
                  <h3>Sell Order</h3>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
