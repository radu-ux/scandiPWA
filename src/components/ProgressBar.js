import React, { Component } from 'react'

import ProgressBarLine from './ProgressBarLine'
import ProgressBarStep from './ProgressBarStep'

export default class ProgressBar extends Component {
    render() {
        const { currentStep } = this.props

        return (
            <div className="Progress-Bar">
                <ProgressBarLine lineType="Corner-Line" currentStep={currentStep}/>
                {
                    this.renderProgressBarSteps()
                }
                <ProgressBarLine lineType="Corner-Line" currentStep={currentStep}/>
            </div>
        )
    }

    renderProgressBarSteps() {
        const { steps, currentStep } = this.props;
        const totalSteps = steps.length; 
        const stepsArray = []; 

        for(let step=0; step<totalSteps; step++) {
            if(step === totalSteps - 1) { 
                stepsArray.push(<ProgressBarStep step={step+1} stepName={steps[step]} currentStep={currentStep} />)
            } else { 
                stepsArray.push(<ProgressBarStep step={step+1} stepName={steps[step]} currentStep={currentStep} />) 
                stepsArray.push(<ProgressBarLine lineType="Middle-Line" currentStep={currentStep}/>)
            }
        }

        return stepsArray;
    }
}
