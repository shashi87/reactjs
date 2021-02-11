import React from 'react';
import PropTypes from "prop-types";
import Tree from 'react-d3-tree';
import "./index.css";

// Used Components
import Card from "../Card";

const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
    showModal
}) => (
    <foreignObject {...foreignObjectProps}  onClick={() => nodeDatum.children && nodeDatum.children.length == 2 ? toggleNode() : showModal(nodeDatum)}>
        <Card
            type="medium"
            title={nodeDatum.name}
            subtitle={nodeDatum.attributes.year}
        />
    </foreignObject>
);

const MyTree = ({ type, orientation, showModal, depthFactor, data }) => {
    const nodeSize = { x: 200, y: 75 };
    const translate = { x: 300, y: 300 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -125, y: -25 };
    const zoom = 0.5;
    const separation = { siblings: 2, nonSiblings: 1 }

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