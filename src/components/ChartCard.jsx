import React, { Component } from 'react';
import { Chart } from 'chart.js';

class ChartCard extends Component {
    constructor(props) {
        super(props);
        this.state = props[props.type];
    }

    chartref = React.createRef();

    componentDidMount() {
        const context = this.chartref.current.getContext('2d');
        let result = [], border = [];
        let data = this.state.data,
            datalabels = data.map(item => {
                let randomR = Math.floor((Math.random() * 130) + 100),
                    randomG = Math.floor((Math.random() * 130) + 100),
                    randomB = Math.floor((Math.random() * 130) + 100);

                result.push(`rgba(${randomR}, ${randomG}, ${randomB}, 0.2)`);
                border.push(`rgb(${randomR}, ${randomG}, ${randomB})`);
                return item.x;
            });

        new Chart(context, {
            type: 'bar',
            data: {
                labels: datalabels,
                datasets: [
                    {
                        label: this.state.x.toUpperCase(),
                        data: data,
                        fill: false,
                        backgroundColor: result,
                        borderColor: border,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }

    render() {
        return (
            <div class="card">
                <h5 class="card-header">{this.state.title}</h5>
                <div class="card-body">
                    <canvas id={this.state.id} ref={this.chartref} />
                </div>
            </div>
        );
    }
}

export { ChartCard };