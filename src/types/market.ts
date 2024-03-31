export enum APIs {
    Population = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
    Crypto = 'https://api.coindesk.com/v1/bpi/currentprice.json'

}


export interface IMarketItem {
    labels: string[];
    datasets: Dataset[];
}

export interface Dataset {
    color: string;
    label: string;
    data: number[];
    borderColor: string;
}


export interface ICryptoItem {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

export const _populations = {
    "data": [
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2021,
            "Year": "2021",
            "Population": 329725481,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2020,
            "Year": "2020",
            "Population": 326569308,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2019,
            "Year": "2019",
            "Population": 324697795,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2018,
            "Year": "2018",
            "Population": 322903030,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2017,
            "Year": "2017",
            "Population": 321004407,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2016,
            "Year": "2016",
            "Population": 318558162,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2015,
            "Year": "2015",
            "Population": 316515021,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2014,
            "Year": "2014",
            "Population": 314107084,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2013,
            "Year": "2013",
            "Population": 311536594,
            "Slug Nation": "united-states"
        }
    ],
    "source": [
        {
            "measures": [
                "Population"
            ],
            "annotations": {
                "source_name": "Census Bureau",
                "source_description": "The American Community Survey (ACS) is conducted by the US Census and sent to a portion of the population every year.",
                "dataset_name": "ACS 5-year Estimate",
                "dataset_link": "http://www.census.gov/programs-surveys/acs/",
                "table_id": "B01003",
                "topic": "Diversity",
                "subtopic": "Demographics"
            },
            "name": "acs_yg_total_population_5",
            "substitutions": []
        }
    ]
}