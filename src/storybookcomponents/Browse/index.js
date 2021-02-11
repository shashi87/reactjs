import LoopModule from "./LoopModule"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect, useCallback } from 'react';
import { getCountries } from "../../redux/actions/countries";
import { getStates } from "../../redux/actions/states";
import { getCities } from "../../redux/actions/cities";
import { getNewspapper } from "../../redux/actions/newspappers";

const Browse = ({
    formData, 
    setFormData,
    getCountries,
    countryLoading,
    countries,
    getStates,
    states,
    stateLoading,
    getCities,
    cities,
    cityLoading,
    getNewspapper,
    newspappers,
    newspapperLoading}) => {
   useEffect(()=>{
    getCountries();
   },[getCountries]);
   useEffect(()=>{
    if( formData.country )
        getStates(formData.country)
   },[formData.country, getStates]);
   const getCitiesData = useCallback((stateId) => {
        getCities(stateId, formData.country);
   },[getCities, formData.country]);
   useEffect(()=>{
    if( formData.state )
        getCitiesData(formData.state);
   },[formData.state, getCitiesData]);
   const getNewspapperData = useCallback((cityId) => {
        getNewspapper(cityId, formData.country, formData.state);
    },[getNewspapper, formData.country, formData.state]);
   useEffect(()=>{
    if( formData.city )
        getNewspapperData(formData.city);
   },[formData.city, getNewspapperData]);
   const moduleHtml = [<LoopModule 
        title = {"Countries"} 
        key={"0"}
        keyParam = {"country"} 
        loading = {countryLoading}
        setFormData = {setFormData}
        name = {"countryName"}
        id = {"countryId"}
        fromDataObj= {{
            country: formData.country
        }}
        data = {countries}
    />]
    if( !!formData.country ) {
        moduleHtml.push(<LoopModule 
            key={"1"}
            title = {"States"} 
            keyParam = {"state"} 
            setFormData = {setFormData}
            loading = {stateLoading}
            name = {"stateName"}
            id = {"stateId"}
            fromDataObj= {{
                country: formData.country,
                state: formData.state
            }}
            data = {states}
        />);
    }
    if( !!formData.state ) {
        moduleHtml.push(<LoopModule 
            key={"3"}
            title = {"Cities"} 
            keyParam = {"city"} 
            setFormData = {setFormData}
            loading = {cityLoading}
            name = {"cityName"}
            id = {"cityId"}
            fromDataObj= {{
                country: formData.country,
                state: formData.state,
                city: formData.city
            }}
            data = {cities}
        />);
    }
    if( !!formData.city ) {
        moduleHtml.push(<LoopModule 
            key={"4"}
            title = {"Newspapper"} 
            keyParam = {"newspapper"}
            loading = {newspapperLoading}
            setFormData = {setFormData} 
            name = {"pubTitle"}
            id = {"pubId"}
            fromDataObj= {{
                country: formData.country,
                state: formData.state,
                city: formData.city,
                newspapper: formData.newspapper
            }}
            data = {newspappers}
        />);
    }
    return (<><div className="grid grid-cols-4 gap-3 auto-rows-max p-2">
        {moduleHtml}
    </div></>);
};
Browse.propTypes = {
    countries: PropTypes.array.isRequired,
    countryLoading: PropTypes.bool.isRequired,
    states: PropTypes.array.isRequired,
    stateLoading: PropTypes.bool.isRequired,
    cities: PropTypes.array.isRequired,
    cityLoading: PropTypes.bool.isRequired,
    newspappers: PropTypes.array.isRequired,
    newspapperLoading: PropTypes.bool.isRequired,
    getCountries: PropTypes.func.isRequired,
    getStates: PropTypes.func.isRequired,
    getCities: PropTypes.func.isRequired,
    getNewspapper: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    countries: state.countries.countries,
    countryLoading: state.countries.countryLoading,
    states: state.states.states,
    stateLoading: state.states.stateLoading,
    cities: state.cities.cities,
    cityLoading: state.cities.cityLoading,
    newspappers: state.newspappers.newspappers,
    newspapperLoading: state.newspappers.newspapperLoading
});

export default connect(mapStateToProps, { 
    getCountries, getStates, getCities, getNewspapper
})(Browse);