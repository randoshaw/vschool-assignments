import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useContext, useEffect, useState } from "react";

export default props => {
    const [confirmation, setConfirmation] = useState({ visible: false });
    const showConfirmation = (e) => {
        setConfirmation({visible: true})
    }
    const hideConfirmation = (e) => {
        setConfirmation({visible: false})
    }
    const handleYes = (e) => {
        props.action(props.carId)
        hideConfirmation()
    }
    return (
        <>
            <Button
                label="Reset Logs"
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger"
                onClick={showConfirmation}
            />

            <Dialog
                header="Clear All Logs?"
                footer={
                    <div>
                        <Button
                            label="Yes - Delete Now"
                            icon="pi pi-check"
                            onClick={handleYes}
                            className="p-button-danger"
                        />
                        <Button
                            label="No - Cancel"
                            icon="pi pi-times"
                            onClick={hideConfirmation}
                        />
                    </div>
                }
                visible={confirmation.visible}
                modal={true}
                onHide={hideConfirmation}
            >
                Are you sure that you want to clear all logs?
            </Dialog>
        </>
    );
};
