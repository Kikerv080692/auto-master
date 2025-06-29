import * as SC from './Modal.styled'

export default function Modal({children, closeModal}) {
    return (
        <SC.WrapperModal>
            <SC.InnerWrapper>
                <SC.Close type="button" onClick={closeModal}>X</SC.Close>
                {children}
            </SC.InnerWrapper>
        </SC.WrapperModal>
    )
}