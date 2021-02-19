import React from 'react';

import { firstStepInitialValues, firstStepValidationSchema } from './Steps/FirstStep/data';
import { secondStepInitialValues, secondStepValidationSchema } from './Steps/SecondStep/data';
import { thirdStepInitialValues, thirdStepValidationSchema } from './Steps/ThirdStep/data';

import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import { FormikStepper } from '../../../shared/components/Forms/MultiStepForm';

export interface FormProps {
    handleBack: () => void;
    handleNext: () => void;
}

const Form: React.FC<FormProps> = ({ handleBack, handleNext }) => {
    return (
        <FormikStepper
            initialValues={{
                ...firstStepInitialValues,
                ...secondStepInitialValues,
                ...thirdStepInitialValues,
            }}
            onSubmit={() => {}}
            handleBack={handleBack}
            handleNext={handleNext}
        >
            <FirstStep validationSchema={firstStepValidationSchema} />
            <SecondStep validationSchema={secondStepValidationSchema} />
            <ThirdStep validationSchema={thirdStepValidationSchema} />
        </FormikStepper>
    );
};

export default Form;
