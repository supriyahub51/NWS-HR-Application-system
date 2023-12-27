# NWS-HR-Application-system
Recruitment and Applicant tracking, Training management, and self-service employee support.

<template>
    <lightning-record-edit-form record-id="0038d00000jX3uJAAS" object-api-name="Contact"
            onsuccess={handleSuccess} onsubmit ={handleSubmit}>
        <lightning-messages>
        </lightning-messages>
        <lightning-output-field field-name="AccountId">
        </lightning-output-field>
        <lightning-input-field field-name="FirstName">
        </lightning-input-field>
        <lightning-input-field field-name="LastName">
        </lightning-input-field>
        <lightning-input-field field-name="Email">
        </lightning-input-field>
        <lightning-button class="slds-m-top_small" variant="brand" type="submit" name="update" label="Update">
        </lightning-button>
    </lightning-record-edit-form>
    
</template>

import { LightningElement } from 'lwc';

export default class BindingComp extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
}
