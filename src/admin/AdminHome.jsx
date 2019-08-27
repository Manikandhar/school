import React, { Component } from 'react';
import { studentService } from '../services';
import { ChartCard } from '../components';

class AdminHome extends Component {

    constructor(props) {
        super(props);
        this.state = { attendance: {}, exams: {} };
    }

    componentWillMount() {
        let attendance = studentService.attendance();
        let exams = studentService.exams();
        this.setState({
            ...this.state,
            attendance: { id: 'attendance', title: 'Attendance summary', data: attendance, x: 'Month', y: 'Total days present' },
            exams: { id: 'exams', title: 'Exam summary', data: exams, x: 'Subject', y: 'Scored' }
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-4 pt-2 pb-4 border-bottom">
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2 py-2 border-right">
                            <span className="feather-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user feather-36"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </span>
                        </div>
                        <div className="col-lg-10 col-md-10">
                            <div className="row pt-2 pb-1 pl-4">
                                <span class="h4">Manikandhar Vutharadi</span>
                            </div>
                            <div className="row py-1 pl-4">
                                <span class="h6">10th standard</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ChartCard attendance={this.state.attendance} type="attendance" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ChartCard exams={this.state.exams} type="exams" />
                </div>
            </div>
        )
    }
}

export { AdminHome };