import './Dashboard.css';
import { React, useState, useEffect } from 'react';

import {Line, Bar} from "react-chartjs-2";

import Chart from '../../helpers/Chart';

import Card from './components/cards/Card';
import axios from 'axios';

function Dashboard(props) {
  const [visitors, setVisitors] = useState('...');
  const [pageVisits, setPageVisits] = useState({});
  const [sales, setSales] = useState({});
  const [dailySales, setDailySales] = useState({});

  useEffect(() => {
    setInterval(() => {
      axios.post('http://localhost:5000/user/live')
        .then(res => {
          const data = res.data;
          setVisitors(data.views);
        }).catch(err => console.log(err));
    }, 5000);

    Chart.page_visits().then(chart => {
      setPageVisits(chart);
    });

    Chart.sales().then(chart => {
      setSales(chart);
    });

    Chart.daily_sales().then(chart => {
      setDailySales(chart);
    });
  }, []);

    return (
        <div className="dashboard-container">
            <Card className="large-two-third" title="Visitors" subtitle={visitors + ' Live'} subtitleIcon="fas fa-eye"></Card>
            <Card className="large-one-third-last" title="$163.10" subtitle="Daily Income" subtitleIcon="fas fa-eye"></Card>

            <Card title="Page Visits" subtitle="Daily">
                <Bar
                    data={pageVisits ? pageVisits.data : null}
                    options={pageVisits ? pageVisits.options: null}
                />
            </Card>

            <Card title="Sales" subtitle="Monthly">
                <Line
                    data={sales ? sales.data : null}
                    options={sales ? sales.options : null}
                />
            </Card>

            <Card title="Sales" subtitle="Daily">
                <Line
                    data={dailySales ? dailySales.data : null}
                    options={dailySales ? dailySales.options : null}
                />
            </Card>
        </div>
    );
}

export default Dashboard;