import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions
import { getUser } from "../redux/actions/user";

// HOC
import withTree from "../hoc/withTree";

// Components
import Tree from "../storybookcomponents/Tree";
import Modal from "../storybookcomponents/Modal";
import NodeForm from "../storybookcomponents/NodeForm";
import Dropdown from "../storybookcomponents/Dropdown";
import Icon from "../storybookcomponents/Icon";
import Skeleton from "../storybookcomponents/Skeleton";

// Data
import { startTree } from "../data";

let nodeIndex = 0;
let nodeId = new Date().toISOString();

const StartTree = ({ user, getUser, zoom, handleZoomIn, handleZoomOut, handleResetZoom, handleSearch }) => {
    // Tree States
    const [loading, setLoading] = useState(true);
    const [selectedNodeId, setselectedNode] = useState(false);
    const [data, setData] = useState(startTree);

    // Modal States
    const [visible, setVisible] = useState(false);

    // Form States
    const[checked, setChecked] = useState(true);
    const[fName, setfName] = useState("");
    const[lName, setlName] = useState("");
    const[birthDateOrYear, setbirthDateOrYear] = useState("");
    const[birthPlace, setbirthPlace] = useState("");
    const[deathDateOrYear, setdeathDateOrYear] = useState("");
    const[deathPlace, setdeathPlace] = useState("");

    useEffect(() => {
        getUser();
        setLoading(false);
        emptyForm();
        return () => {
            //clean up
        }
    }, [getUser, loading, data]);

    // Modal Functions
    const showModal = (selectedNode) => {
        setselectedNode(selectedNode.id);
        setVisible(true)
    }
    
    const handleCancel = () => {
        const node =  {
            id: selectedNodeId,
            name: `${fName} ${lName}`,
            attributes: {
                type: "medium",
                gender: "male",
                birthDateOrYear,
                birthPlace,
                deathDateOrYear,
                deathPlace,
            },
            children: [
                {
                    id: nodeId,
                    name: "",
                    attributes: {
                        type: "empty",
                        title: "Add Father",
                        gender: "",
                        birthDateOrYear: "",
                        birthPlace: "",
                        deathDateOrYear: "",
                        deathPlace: "",
                    }
                },
                {
                    id: nodeId,
                    name: "",
                    attributes: {
                        type: "empty",
                        title: "Add Mother",
                        gender: "",
                        birthDateOrYear: "",
                        birthPlace: "",
                        deathDateOrYear: "",
                        deathPlace: "",
                    }
                },
            ]
        };
        if((checked && fName && lName && birthDateOrYear && birthPlace) || (!checked && fName && lName && birthDateOrYear && birthPlace && deathDateOrYear && deathPlace)){
            insertNode(node, nodeIndex++);
        }
        setVisible(false);
    }

    const insertNode = (node, index) => {
        const result = {...data};
        node.attributes.gender = index === 0 ? "male" : "female";
        result.children[index] = node;
        setData(result);
    }

    const emptyForm = () => {
        setChecked(true);
        setfName("");
        setlName("");
        setbirthDateOrYear("");
        setbirthPlace("");
        setdeathDateOrYear("");
        setdeathPlace("");
    }

    // Form Functions
    const handleCheck = (e) => {
        setChecked(e.target.checked);
    }

    const handleChange = (e) => {
        switch(e.target.name){
            case "fName":
                setfName(e.target.value);
                break;
            
            case "lName":
                setlName(e.target.value);
                break;

            case "birthDateOrYear":
                setbirthDateOrYear(e.target.value);
                break;

            case "birthPlace":
                setbirthPlace(e.target.value);
                break;
            
            case "deathDateOrYear":
                setdeathDateOrYear(e.target.value);
                break;

            case "deathPlace":
                setdeathPlace(e.target.value);
                break;

            default:
                break;
        }
    }

    if(loading){
        return <Skeleton rows={16}/>

    }else{
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
    
                <Modal
                    title="Add Father"
                    wrapClassName="father_hierchy"
                    footer={false}
                    content={
                        <NodeForm
                            checked={checked}
                            handleCheck={handleCheck}
                            fName={fName}
                            lName={lName}
                            birthDateOrYear={birthDateOrYear}
                            birthPlace={birthPlace}
                            deathDateOrYear={deathDateOrYear}
                            deathPlace={deathPlace}
                            handleChange={handleChange}
                        />
                    }
                    visible={visible}
                    handleCancel={handleCancel}
                />
    
                <Tree
                    type="step" 
                    orientation="horizontal"
                    showModal={showModal}
                    depthFactor={200}
                    data={data}
                    zoom={zoom}
                    separation = {{ siblings: 2, nonSiblings: 1 }}
                />
            </>
        )
    }
}

StartTree.propTypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default withTree(connect(mapStateToProps, { getUser })(StartTree));