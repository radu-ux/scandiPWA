import React, { Component } from 'react'

export default class ProgressBarStep extends Component {
    render() {
        const { step, stepName, currentStep } = this.props;
        const currentStepClassName = stepName === currentStep ? 'Filled' : 'Empty'

        return (
            <div className="Progress-Bar-Step-Container">
                <p className={`Progres-Bar-Circle ${currentStepClassName}`}>{ step }</p>
                <p className="Progress-Bar-Step">{ this.formatStepName() }</p>
            </div> 
        )
    }

    formatStepName() { 
        const { stepName } = this.props;
        const currentStepName = stepName.split('_').filter(word => word !== 'STEP')[0]
        let formattedStepName = currentStepName[0] + currentStepName.slice(1).toLowerCase()

        if(formattedStepName === 'Billing') { 
            formattedStepName = "Review and Payments" 
        }

        return formattedStepName;
    }
}