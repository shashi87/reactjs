import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions
import { getUser } from "../redux/actions/user";

// HOC
import withTree from "../hoc/withTree";

// Components
import Tree from "../storybookcomponents/Tree";
import Dropdown from "../storybookcomponents/Dropdown";
import Icon from "../storybookcomponents/Icon";

// Data
import { pedigreeView } from "../data";

const PedigreeView = ({ user, getUser, zoom, handleZoomIn, handleZoomOut, handleResetZoom, handleSearch }) => {
    // Tree States
    const [data] = useState(pedigreeView);

    useEffect(() => {
        getUser();
        
        return () => {
            //clean up
        }
    }, [getUser]);
    
    return (
        <>
            <div className="family-filters">
                <div className="flex">
                    <div className="icon-wrapper" onClick={handleSearch}>
                        <Icon icon="search"/>
                    </div>
                    <div>
                        <Dropdown type="filter"/>
                    </div>
                </div>
            </div>

            <div className="family-zoom">
                <div className="flex-column">
                    <div className="icon-wrapper aim-icon" onClick={handleResetZoom}>
                        <Icon icon="aim"/>
                    </div>
                    <div className="two-icons-wrapper">
                        <div className="group-icon" onClick={handleZoomOut}>
                            <Icon icon="plus"/>
                        </div>
                        <div className="group-split"/>
                        <div className="group-icon" onClick={handleZoomIn}>
                            <Icon icon="minus"/>
                        </div>
                    </div>
                </div>
            </div>

            <Tree
                type="step" 
                orientation="horizontal"
                showModal={()=>console.log("showModal")}
                depthFactor={200}
                data={data}
                zoom={zoom}
                separation = {{ siblings: 1, nonSiblings: 1 }}
            />
        </>
    )
}

PedigreeView.propTypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default withTree(connect(mapStateToProps, { getUser })(PedigreeView));