import axios from "axios"

class Chart {
    charts = {
        bars: {
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                },
                responsive: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: "#ffc4c80f",
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 120,
                            padding: 20,
                            fontColor: "#cccccc",
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                        drawBorder: false,
                        color: "#ffc4c80f",
                        zeroLineColor: "transparent",
                        },
                        ticks: {
                        padding: 20,
                        fontColor: "#ffc4c8",
                        },
                    }],
                },
            }
        },
        lines: {
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                },
                responsive: true,
                scales: {
                    yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: "rgba(29,140,248,0.0)",
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 120,
                            padding: 20,
                            fontColor: "#cccccc",
                        }
                    }],
                    xAxes: [
                        {
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: "#ffc4c81a",
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 0,
                            fontColor: "#ffc4c8",
                        }
                    }]
                },
            }
        }
    };
    
    page_visits = async () => {
        let data = await axios.post('http://localhost:5000/user/data');
        data = data.data;

        return {
            data: (canvas) => {
                let ctx = canvas.getContext("2d");
            
                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
            
                gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
                gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
                gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

                return {
                    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
                    datasets: [
                        {
                            label: "Countries",
                            fill: true,
                            backgroundColor: gradientStroke,
                            hoverBackgroundColor: gradientStroke,
                            borderColor: "#ffc4c8",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            data: data.page_visits.daily,
                        },
                    ],
                };
            },
            options: this.charts.bars.options
        }
    }

    sales = async () => {
        let data = await axios.post('http://localhost:5000/user/data');
        data = data.data;

        return {
            data: (canvas) => {
                let ctx = canvas.getContext("2d");
            
                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
            
                gradientStroke.addColorStop(1, "#ffc4c81f");
                gradientStroke.addColorStop(0.4, "#ffc4c800");
                gradientStroke.addColorStop(0, "#ffc4c800"); //blue colors
            
                return {
                    labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                    datasets: [{
                            label: "Data",
                            fill: true,
                            backgroundColor: gradientStroke,
                            borderColor: "#fffef9",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            pointBackgroundColor: "#ffc4c8",
                            pointBorderColor: "rgba(255,255,255,0)",
                            pointHoverBackgroundColor: "#ffc4c8",
                            pointBorderWidth: 20,
                            pointHoverRadius: 4,
                            pointHoverBorderWidth: 15,
                            pointRadius: 4,
                            data: data.sales.monthly,
                        }],
                };
            },
            options: this.charts.lines.options
        }
    }

    daily_sales = async () => {
        this.charts.lines.options.scales.yAxes[0].ticks.suggestedMax = 10;

        let data = await axios.post('http://localhost:5000/user/data');
        data = data.data;

        return {
            data: (canvas) => {
                let ctx = canvas.getContext("2d");
            
                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
            
                gradientStroke.addColorStop(1, "#ffc4c81f");
                gradientStroke.addColorStop(0.4, "#ffc4c800");
                gradientStroke.addColorStop(0, "#ffc4c800"); //blue colors
            
                return {
                    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
                    datasets: [{
                            label: "Data",
                            fill: true,
                            backgroundColor: gradientStroke,
                            borderColor: "#fffef9",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            pointBackgroundColor: "#ffc4c8",
                            pointBorderColor: "rgba(255,255,255,0)",
                            pointHoverBackgroundColor: "#ffc4c8",
                            pointBorderWidth: 20,
                            pointHoverRadius: 4,
                            pointHoverBorderWidth: 15,
                            pointRadius: 4,
                            data: data.sales.daily,
                        }],
                };
            },
            options: this.charts.lines.options
        }
    }
}

export default new Chart();