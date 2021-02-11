import React from 'react';
import PropTypes from "prop-types";
import Tree from 'react-d3-tree';
import "./index.css";

// Used Components
import Card from "../Card";

const getDimensions = (type) => {
    if(type === "large"){
        return {
            width: 240, height: 85, x: -200, y: -42.50 
        }
    }else if(type === "tiny"){
        return {
            width: 200, height: 60, x: -115, y: -12 
        }
    }else{
        return {
            width: 200, height: 60, x: -125, y: -25 
        }
    }
}

const renderForeignObjectNode = ({
    nodeDatum,
    // toggleNode,
    // foreignObjectProps,
    showModal
}) => (
    <foreignObject {...getDimensions(nodeDatum.attributes.type)} onClick={() => nodeDatum.children && nodeDatum.children.length === 2 ? null : showModal(nodeDatum)}>
        <Card
            name={`${nodeDatum.name}`} 
            type={nodeDatum.attributes.type} 
            title={nodeDatum.attributes.title}
            gender={nodeDatum.attributes.gender} 
            birth={nodeDatum.attributes.birthDateOrYear}
            birthPlace={nodeDatum.attributes.birthPlace}
            death={nodeDatum.attributes.deathDateOrYear} 
            deathPlace={nodeDatum.attributes.deathPlace}
        />
    </foreignObject>
);

const MyTree = ({ type, orientation, showModal, depthFactor, data, zoom, separation }) => {
    const nodeSize = { x: 200, y: 60 };
    const translate = { x: 600, y: 300 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -125, y: -25 };
    // const separation = { siblings: 2, nonSiblings: 1 }

    return (
        <div id="treeWrapper">
            <Tree 
                data={data} 
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
                pathFunc={type}
                orientation={orientation}
                enableLegacyTransitions={true}
                renderCustomNodeElement={(rd3tProps) => 
                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, showModal })   
                }
                nodeSize={nodeSize}
                separation={separation}
                zoom={zoom}
                zoomable={true}
                translate={translate}
                depthFactor={depthFactor}
                collapsible={true}
                scaleExtent={{ max: 2, min: 0.25 }}
            />
        </div>
    );
}

MyTree.propTypes = {
    type: PropTypes.string.isRequired,
    orientation: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
    depthFactor: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
}

MyTree.defaultProps = {
    type: "step",
    orientation: "horizontal",
    depthFactor: 0,
    data: {
        name: "A",
        children: [
            {
                name: "B"
            },
            {
                name: "C"
            }
        ]
    }
}

export default MyTree;