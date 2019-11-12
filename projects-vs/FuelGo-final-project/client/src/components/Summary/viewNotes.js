import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useContext, useEffect, useState } from "react";

export default props => {
    const [confirmation, setConfirmation] = useState({ visible: false });
    const [toolTip, setToolTip] = useState({ display: "none" });
    const showConfirmation = (e) => {
        setConfirmation({visible: true})
    }
    const hideConfirmation = (e) => {
        setConfirmation({visible: false})
    }

    const showToolTip = (e) => {
        setToolTip({display: ""})
    }
    const hideToolTip = (e) => {
        setToolTip({display: "none"})
    }



    return (
        <>
            <div
                label="Expand Notes"
                className="pi pi-window-maximize "
                onMouseOver={showToolTip}
                onMouseOut={hideToolTip}
                onClick={showConfirmation}
                
            ></div>
            <div style={{
                position: "absolute",
                backgroundColor: "#e9e894",
                boxShadow: "2px 2px 3px  black",
                padding: "0 6px",
                borderRadius: "4px",
                zIndex: 1,
                ...toolTip
            }}
            >Expand Notes</div>
            <Dialog
                header="Extended Notes"
                footer={
                    <div>
                        
                        <Button
                            label="Done"
                            icon="pi pi-times"
                            onClick={hideConfirmation}
                        />
                    </div>
                }
                visible={confirmation.visible}
                modal={true}
                onHide={hideConfirmation}
            >
                {props.notes}
            </Dialog>
        </>
    );
};
