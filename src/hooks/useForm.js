import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {},formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation] = useState({});

    useEffect(() =>{
        createValidators();
    },[formState])

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }



    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators= () =>{
     const formsCheckedValues={};

     for(const formFiled of Object.keys(formValidations)){
        const [fn,errorMessage] = formValidations[formFiled];
        formsCheckedValues[`${formFiled}Valid`] = fn(formState[formFiled]) ? null:errorMessage;
     }
     setformValidation(formsCheckedValues);
     console.log(formsCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}