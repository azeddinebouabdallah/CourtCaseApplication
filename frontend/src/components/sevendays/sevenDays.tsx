import React, {Component} from 'react'

import Pagination from '../../components/Pagination';

import { Layout,FabricButton  } from "../../styled";

import DataList from "../../components/tablefilter";


type SevenDaysState = {

}

export default class SevenDays extends Component<{}, SevenDaysState>{

    componentWillMount(){

    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps: any){

    }

    render(){
        return <Layout displayFlex column>{
            
            <Pagination numberOfPages={1} currentPage={1} key={1} changeCurrentPage={(n) => console.log(n)}/>

        }</Layout>
    }
}

