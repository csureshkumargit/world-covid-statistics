import { Component, h, Prop, State, Watch } from "@stencil/core";
import axios from 'axios';

@Component({
    tag: "covid-statistics",
    styleUrl: "covid-statistics.css",
    shadow: true
})

export class Covidstatistics {
    @Prop() Parameter: string;
    @State() Statistics_keys: string[];
    @State() countries_statistics: object[];
    componentWillLoad() {
        this.parseMyObjectProp(this.Parameter);
    }

    @Watch('Parameter')
    parseMyObjectProp(newValue: string) {
        if (newValue) {
            this.Statistics_keys = JSON.parse(newValue);
        }

    }

    detectStatistics = () => {

        axios(
            {
                url: 'https://covid-193.p.rapidapi.com/statistics',
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '70dffa7a2cmsh769a063882a20bep1f10ccjsn21e8277a120d'
                }
            }
        ).then((res) => {
            this.countries_statistics = res.data.response;
        })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <h5 class="heading-frm">LIVE COVID WORLD STATISTICS BY COUNTRY </h5>
                <button onClick={this.detectStatistics} class="heading-btn">Click Here</button>
                {this.countries_statistics &&
                    <table class="tbl-statistics">
                        <thead>{this.Statistics_keys.map(element => <th>{element.toUpperCase()}</th>)}</thead>
                        {this.countries_statistics.
                            map((country) => (
                                <tr>
                                    {this.Statistics_keys.map(element =>
                                        <td>{element == "cases" || element == "deaths" || element == "tests" ?
                                            country[element]["total"] ? country[element]["total"] : "NA" :
                                            country[element] ? country[element] : "NA"}</td>)}
                                </tr>))}
                    </table>
                }
            </div>
        )
    }
}