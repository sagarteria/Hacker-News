import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { ResponsiveLine } from '@nivo/line';
import Paper from '@material-ui/core/Paper';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    tableHeader: {
        backgroundColor: '#ec5d24',
        color: '#ffffff'
    }
}));

function App() {
    const classes = useStyles();
    const products = [
        {'comments': 36, 'votesCount': 96, 'upVote': 10, 'newsDetails': 'Seemingly impossible SWIFT program'},
        {'comments': 28, 'votesCount': 34, 'upVote': 10, 'newsDetails': 10},
    ];
    const columns = [{
        dataField: 'comments',
        text: 'Comments'
    }, {
        dataField: 'votesCount',
        text: 'Votes Count'
    }, {
        dataField: 'upVote',
        text: 'Up Vote'
    }, {
        dataField: 'newsDetails',
        text: 'News Details'
    }];
    const votesTrend = [
        {
            "id": "comments",
            "color": "hsl(131, 70%, 50%)",
            "data": [
                {
                    "x": "36",
                    "y": 97
                },
                {
                    "x": "28",
                    "y": 299
                },
                {
                    "x": "45",
                    "y": 0
                },
                {
                    "x": "15",
                    "y": 60
                },
                {
                    "x": "74",
                    "y": 134
                },
                {
                    "x": "58",
                    "y": 260
                },
                {
                    "x": "34",
                    "y": 202
                },
                {
                    "x": "62",
                    "y": 204
                },
                {
                    "x": "78",
                    "y": 44
                },
                {
                    "x": "45",
                    "y": 115
                }
            ]
        }
    ];

    return (
        <Grid container className={classes.root, 'App'} spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Paper elevation={3}>
                <BootstrapTable
                    keyField='id'
                    data={products}
                    columns={columns}
                    bordered={false}
                    headerClasses={classes.tableHeader}
                    headerTitle={true}
                    striped
                    hover
                    condensed
                    // pagination={pagination}
                    pagination={paginationFactory()}
                />
                </Paper>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={1}> </Grid>
            <Grid item xs={10}>
                <Paper elevation={3} style={{height: '40vh',width: '100%', margin: 'auto', alignContent: 'centre'}}>

                <ResponsiveLine
                    data={votesTrend}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'ID',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Votes',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'nivo' }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
                </Paper>
            </Grid>
            <Grid item xs={1}> </Grid>
        </Grid>
    );
}

export default App;
