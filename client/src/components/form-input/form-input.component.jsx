import { GroupDiv, FormInputStyled, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupDiv>
        <FormInputStyled onChange={handleChange} {...otherProps} />
        {label ?
            <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabel>
            : null
        }
    </GroupDiv>
)

export default FormInput;